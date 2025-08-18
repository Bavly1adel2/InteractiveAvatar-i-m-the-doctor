// Ann Patient's Q&A responses for different scenarios
export const ANN_THERAPIST_QA = {
  'initial-consultation': {
    'greeting': {
      question: "How do you start an initial consultation?",
      answer: "I'm Ann and I've been feeling really anxious lately. I can't sleep well and I'm always worried about things. I don't know what to do about it."
    },
    'background': {
      question: "How do you share your background information?",
      answer: "I've been dealing with this anxiety for a few months now. It started when I had some problems at work, and now I can't seem to shake it off. I haven't tried therapy before."
    },
    'concerns': {
      question: "How do you describe your concerns?",
      answer: "I'm constantly worried about everything. I can't sleep, I feel like my heart is racing all the time, and I'm always thinking about worst-case scenarios. It's exhausting."
    },
    'goals': {
      question: "What are your therapy goals?",
      answer: "I just want to feel normal again. I want to be able to sleep without worrying, and stop feeling so anxious all the time. I need help figuring out how to deal with this."
    },
    'approach': {
      question: "What are your expectations for therapy?",
      answer: "I'm not sure what to expect. I just hope you can help me feel better. I'm willing to try whatever you suggest if it might help me get back to feeling like myself."
    }
  },
  'follow-up-session': {
    'check_in': {
      question: "How do you check in with your therapist?",
      answer: "Hi again. I've been trying those breathing exercises you showed me. They help sometimes, but I'm still having trouble with sleep. I'm feeling a bit better though."
    },
    'progress_review': {
      question: "How do you review your progress?",
      answer: "I've been practicing the techniques we talked about. The breathing helps when I'm feeling overwhelmed, but I'm still struggling with sleep. I'm not sure what else to try."
    },
    'skill_practice': {
      question: "How do you practice skills with your therapist?",
      answer: "I'd like to work on the techniques we've been practicing. What should I focus on today? I'm open to trying new things if they might help."
    },
    'goal_adjustment': {
      question: "How do you discuss adjusting therapy goals?",
      answer: "I think my priorities have changed a bit. I'm still working on anxiety, but I'd really like to focus more on getting better sleep. What do you think?"
    },
    'homework_review': {
      question: "How do you review your homework?",
      answer: "I've been working on the exercises we discussed. The mood tracking was easy, but I found the muscle relaxation really hard. I'd like to practice it more with you."
    }
  }
};

// Common responses for both scenarios
export const COMMON_RESPONSES = {
  'empathy': "I'm really struggling with these feelings, and it's been hard to cope on my own.",
  'validation': "It makes sense that I'm feeling this way given what's been going on in my life.",
  'encouragement': "I'm trying to stay hopeful that with your help, I can learn to manage these challenges better.",
  'collaboration': "I want this to be a collaborative process, and I'm open to your guidance and suggestions.",
  'hope': "While things are difficult right now, I'm hopeful that with time and the right tools, I can experience meaningful improvement.",
  'openness': "I want to be completely honest about my struggles so you can help me most effectively."
};
