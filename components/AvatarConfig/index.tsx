import React, { useMemo, useState } from "react";
import {
  StartAvatarRequest,
} from "@heygen/streaming-avatar";

import { Input } from "../Input";

import { Field } from "./Field";
import { ScenarioSelector, VisitScenario } from "./ScenarioSelector";

import { AVATARS, AVATAR_SYSTEM_PROMPTS } from "@/app/lib/constants";

interface AvatarConfigProps {
  onConfigChange: (config: StartAvatarRequest) => void;
  config: StartAvatarRequest;
  selectedScenario?: VisitScenario;
  onScenarioChange?: (scenario: VisitScenario) => void;
}

// Avatar card component with dark theme
const AvatarCard: React.FC<{
  avatar: { avatar_id: string; name: string };
  isSelected: boolean;
  onClick: () => void;
}> = ({ avatar, isSelected, onClick }) => {
  // Generate avatar image based on avatar_id
  const getAvatarImage = (avatarId: string) => {
    const avatarImages: { [key: string]: string } = {
      "Ann_Therapist_public": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
      "Mariam_Patient_public": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
      // Other avatar images commented out since they're no longer available
      // "Shawn_Therapist_public": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      // "Bryan_FitnessCoach_public": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
      // "Dexter_Doctor_Standing2_public": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
      // "Elenora_IT_Sitting_public": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
    };
    
    return avatarImages[avatarId] || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face";
  };

  return (
    <div
      className={`relative cursor-pointer transition-all duration-300 ${
        isSelected 
          ? 'ring-4 ring-gray-400 ring-opacity-90 shadow-2xl' 
          : 'hover:shadow-2xl hover:ring-2 hover:ring-gray-500/60'
      }`}
      onClick={onClick}
    >
      <div className={`relative overflow-hidden rounded-xl p-6 sm:p-8 transition-all duration-300 ${
        isSelected 
          ? 'bg-gradient-to-br from-gray-600/80 via-gray-700/90 to-gray-800/80 border border-gray-400/50 shadow-lg' 
          : 'bg-gradient-to-br from-gray-800/80 via-gray-700/90 to-gray-800/80 border border-gray-600/50 hover:border-gray-400/50 hover:bg-gradient-to-br hover:from-gray-700/90 hover:via-gray-600/90 hover:to-gray-700/90'
      }`}>
        {/* Background glow effect for selected */}
        {isSelected && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 via-transparent to-gray-600/10 rounded-xl" />
        )}
        
        <div className="relative flex flex-col items-center space-y-4 sm:space-y-6">
          {/* Avatar Image Container - Dark theme */}
          <div className="relative group">
            <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 transition-all duration-300 ${
              isSelected 
                ? 'bg-gradient-to-br from-gray-500 to-gray-600 shadow-lg' 
                : 'bg-gradient-to-br from-gray-600 to-gray-700 group-hover:from-gray-500/30 group-hover:to-gray-600/30'
            }`}>
              <img
                src={getAvatarImage(avatar.avatar_id)}
                alt={avatar.name}
                className="w-full h-full rounded-full object-cover border-2 border-gray-800 shadow-inner"
              />
            </div>
            
            {/* Selection indicator */}
            {isSelected && (
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-500/20 to-gray-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Text Content */}
          <div className="text-center space-y-1">
            <h3 className={`font-semibold text-xs sm:text-sm transition-colors duration-300 ${
              isSelected ? 'text-white' : 'text-gray-100'
            }`}>
              {avatar.name}
            </h3>
            <p className={`text-xs transition-colors duration-300 ${
              isSelected ? 'text-gray-200/80' : 'text-gray-400'
            }`}>
              {avatar.avatar_id}
            </p>
          </div>
          
          {/* Bottom accent line */}
          <div className={`w-6 sm:w-8 h-0.5 rounded-full transition-all duration-300 ${
            isSelected 
              ? 'bg-gradient-to-r from-gray-400 to-gray-500' 
              : 'bg-gradient-to-r from-gray-600 to-gray-500 group-hover:from-gray-400/50 group-hover:to-gray-500/50'
          }`} />
        </div>
      </div>
    </div>
  );
};

export const AvatarConfig: React.FC<AvatarConfigProps> = ({
  onConfigChange,
  config,
  selectedScenario = 'initial-consultation',
  onScenarioChange,
}) => {
  const onChange = <T extends keyof StartAvatarRequest>(
    key: T,
    value: StartAvatarRequest[T],
  ) => {
    onConfigChange({ ...config, [key]: value });
  };
  const [showCustomAvatar, setShowCustomAvatar] = useState<boolean>(false);

  const selectedAvatar = useMemo(() => {
    const avatar = AVATARS.find(
      (avatar) => avatar.avatar_id === config.avatarName,
    );

    if (!avatar) {
      return {
        isCustom: true,
        name: "Custom Avatar ID",
        avatarId: null,
      };
    }

    return {
      isCustom: false,
      name: avatar.name,
      avatarId: avatar.avatar_id,
    };
  }, [config.avatarName]);

  // Check if Ann Patient is selected to show scenario selector
  const isAnnSelected = config.avatarName === "Ann_Therapist_public";

  return (
    <div className="w-full h-full content-flow p-3 sm:p-4 lg:p-6 overflow-y-auto bg-gradient-to-br from-gray-900/50 via-black/60 to-gray-800/50">
      {/* Avatar Selection - Dark theme heading */}
      <div className="flex-shrink-0">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-4 sm:p-6 text-white">
          🎭 welcome to interactive avatar! 🎭
        </h3>
        
        {/* Avatar Grid - Dark theme - Centered for single avatar */}
        <div className="flex justify-center items-center mb-6 sm:mb-8 min-h-[300px]">
          <div className="w-full max-w-xs sm:max-w-sm transform hover:scale-105 transition-all duration-300 animate-pulse">
            {AVATARS.map((avatar) => (
              <AvatarCard
                key={avatar.avatar_id}
                avatar={avatar}
                isSelected={avatar.avatar_id === config.avatarName}
                onClick={() => onChange("avatarName", avatar.avatar_id)}
              />
            ))}
          </div>
        </div>

        {/* Scenario Selector for Ann Patient */}
        {isAnnSelected && onScenarioChange && (
          <ScenarioSelector
            selectedScenario={selectedScenario}
            onScenarioChange={onScenarioChange}
            isVisible={true}
          />
        )}

        {/* System Prompt Display */}
        {isAnnSelected && (
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-700/30 to-blue-800/30 rounded-2xl border-2 border-blue-600/50">
            <h4 className="text-lg font-semibold text-blue-100 mb-3 text-center">
              📋 Current System Prompt
            </h4>
            <div className="text-sm text-blue-200 bg-blue-900/30 p-3 rounded-lg border border-blue-500/30 max-h-40 overflow-y-auto">
              <p className="mb-2"><strong>Session Type:</strong> {selectedScenario === 'initial-consultation' ? 'Initial Consultation' : 'Follow-up Session'}</p>
              <p className="mb-2 text-yellow-300"><strong>Role:</strong> You are the therapist, Ann is your patient</p>
              <p className="text-xs leading-relaxed">
                {AVATAR_SYSTEM_PROMPTS["Ann_Therapist_public"]}
              </p>
            </div>
          </div>
        )}

        {/* Custom Avatar Input - Dark theme */}
        {/* <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 sm:mb-8 p-4 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-2xl border-2 border-gray-600/50 hover:border-gray-500/50 transition-all duration-300">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="customAvatar"
              checked={showCustomAvatar}
              onChange={(e) => setShowCustomAvatar(e.target.checked)}
              className="w-5 h-5 rounded border-2 border-gray-400 bg-gray-500 text-white focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 transform hover:scale-110"
            />
            <label htmlFor="customAvatar" className="text-sm text-gray-200 font-bold cursor-pointer hover:text-white transition-colors duration-200">
              🎨 Use Custom Avatar ID
            </label>
          </div>
        </div> */}

        {showCustomAvatar && (
          <div className="mb-6 sm:mb-8 p-4 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-2xl border-2 border-gray-600/50">
            <Field label="🎭 Custom Avatar ID">
              <Input
                placeholder="Enter custom avatar ID"
                value={config.avatarName}
                onChange={(value) => onChange("avatarName", value)}
              />
            </Field>
          </div>
        )}
      </div>

      {/* Configuration Section - Dark theme - COMMENTED OUT */}
      {/* 
      The entire Configuration Settings section has been commented out to simplify the interface.
      This includes:
      - Language selection
      - Avatar quality settings
      - Voice chat transport
      - Knowledge base ID
      - Advanced voice settings
      - STT settings
      
      To restore, uncomment the section below.
      */}
    </div>
  );
};
