import { useCallback } from 'react';
import { TaskMode, TaskType } from "@heygen/streaming-avatar";
import { useStreamingAvatarContext } from './context';
import { AVATAR_SYSTEM_PROMPTS } from '@/app/lib/constants';
import { VisitScenario } from '../AvatarConfig/ScenarioSelector';

export const useSystemPrompt = () => {
  const { avatarRef } = useStreamingAvatarContext();

  const applySystemPrompt = useCallback(
    async (avatarId: string, scenario: VisitScenario) => {
      if (!avatarRef.current) return;

      const systemPrompt = AVATAR_SYSTEM_PROMPTS[avatarId as keyof typeof AVATAR_SYSTEM_PROMPTS];
      
      if (!systemPrompt) return;

      try {
        // First, make Ann introduce herself as a patient
        if (avatarId === "Ann_Therapist_public") {
          await avatarRef.current.speak({
            text: "Hi, I'm Ann. I've been feeling really anxious and stressed lately, and it's been affecting my sleep. I find myself lying awake at night with my mind racing, and during the day, I feel overwhelmed by even the smallest tasks. It's like there's this weight on my chest, and I can't seem to shake it off. I really just want to feel more at ease and find a way to manage all this anxiety. I hope that through therapy, I can learn some tools to help me cope and maybe even understand what's triggering these feelings. Can you help me with that?",
            taskType: TaskType.TALK,
            taskMode: TaskMode.SYNC,
          });
        }

        // Then apply the system prompt silently for context
        await avatarRef.current.speak({
          text: `System: ${systemPrompt}`,
          taskType: TaskType.TALK,
          taskMode: TaskMode.SYNC,
        });

        console.log(`System prompt applied for ${avatarId} with ${scenario} scenario`);
      } catch (error) {
        console.error('Error applying system prompt:', error);
      }
    },
    [avatarRef]
  );

  const getSystemPrompt = useCallback(
    (avatarId: string, scenario: VisitScenario) => {
      const basePrompt = AVATAR_SYSTEM_PROMPTS[avatarId as keyof typeof AVATAR_SYSTEM_PROMPTS];
      
      if (!basePrompt) return '';

      // Add scenario-specific context
      const scenarioContext = scenario === 'initial-consultation'
        ? '\n\nCURRENT SCENARIO: Initial Consultation - You are a new patient meeting your therapist for the first time. Share your concerns and what brings you to therapy.'
        : '\n\nCURRENT SCENARIO: Follow-up Session - You are continuing therapy with your existing therapist, reviewing progress and discussing ongoing challenges.';

      return basePrompt + scenarioContext;
    },
    []
  );

  return {
    applySystemPrompt,
    getSystemPrompt,
  };
};
