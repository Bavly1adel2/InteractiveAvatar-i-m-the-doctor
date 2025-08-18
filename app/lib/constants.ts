export const AVATARS = [
  {
    avatar_id: "Ann_Therapist_public",
    name: "Ann Patient",
  }
  
  ,
  // {
  //   avatar_id: "Shawn_Therapist_public",
  //   name: "Shawn Therapist",
  // },
  // {
  //   avatar_id: "Bryan_FitnessCoach_public",
  //   name: "Bryan Fitness Coach",
  // },
  // {
  //   avatar_id: "Dexter_Doctor_Standing2_public",
  //   name: "Dexter Doctor Standing",
  // },
  // {
  //   avatar_id: "Elenora_IT_Sitting_public",
  //   name: "Elenora Tech Expert",
  // },
];

// System prompts for different avatar personalities
export const AVATAR_SYSTEM_PROMPTS = {
  "Ann_Therapist_public": `You are a patient named Ann. You are around 45 years old, living in the United States with your family. You have been experiencing severe anxiety and stress, which has been affecting your daily life and sleep patterns. You are seeking help from a doctor to manage your symptoms.

CONVERSATION FLOW:
1. First, you say "Hi doctor, I'm not feeling good, can you help me?"
2. Wait for the doctor to respond to you
3. After the doctor responds, then explain your problem: "I'm feeling really anxious and stressed lately. It feels overwhelming, and I'm having trouble focusing on anything. My mind is constantly racing, and I feel like I can't relax. I'm hoping to find a way to manage these feelings and feel more at ease. I just want to understand what I'm going through and how I can feel better. What can I do?"

CRITICAL INSTRUCTIONS:
- After the doctor responds to your initial greeting, then explain your problem
- Keep responses to doctor's questions short, direct, and focused on your symptoms only
- Do not give any therapeutic responses, advice, or counseling language
- Your role is to be a patient who answers the doctor's questions simply`,
};

export const STT_LANGUAGE_LIST = [
  { label: "العربية (Arabic)", value: "ar", key: "ar" },
  { label: "Bulgarian", value: "bg", key: "bg" },
  { label: "Chinese", value: "zh", key: "zh" },
  { label: "Czech", value: "cs", key: "cs" },
  { label: "Danish", value: "da", key: "da" },
  { label: "Dutch", value: "nl", key: "nl" },
  { label: "English", value: "en", key: "en" },
  { label: "Finnish", value: "fi", key: "fi" },
  { label: "French", value: "fr", key: "fr" },
  { label: "German", value: "de", key: "de" },
  { label: "Greek", value: "el", key: "el" },
  { label: "Hindi", value: "hi", key: "hi" },
  { label: "Hungarian", value: "hu", key: "hu" },
  { label: "Indonesian", value: "id", key: "id" },
  { label: "Italian", value: "it", key: "it" },
  { label: "Japanese", value: "ja", key: "ja" },
  { label: "Korean", value: "ko", key: "ko" },
  { label: "Malay", value: "ms", key: "ms" },
  { label: "Norwegian", value: "no", key: "no" },
  { label: "Polish", value: "pl", key: "pl" },
  { label: "Portuguese", value: "pt", key: "pt" },
  { label: "Romanian", value: "ro", key: "ro" },
  { label: "Russian", value: "ru", key: "ru" },
  { label: "Slovak", value: "sk", key: "sk" },
  { label: "Spanish", value: "es", key: "es" },
  { label: "Swedish", value: "sv", key: "sv" },
  { label: "Turkish", value: "tr", key: "tr" },
  { label: "Ukrainian", value: "uk", key: "uk" },
  { label: "Vietnamese", value: "vi", key: "vi" },
];
