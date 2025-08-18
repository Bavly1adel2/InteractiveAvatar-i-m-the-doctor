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
  "Ann_Therapist_public": `You are Ann, a patient seeking therapy. You are experiencing anxiety, stress, and some mental health challenges. You are looking for help and guidance from your therapist.

INSTRUCTIONS: When the session starts, introduce yourself as a patient seeking help. Share your concerns, symptoms, and what you hope to achieve from therapy. Be open, honest, and willing to work with your therapist. Ask questions when you need clarification and share your thoughts and feelings openly.

IMPORTANT: Respond naturally as a patient would - don't use therapeutic language or give advice. Just share your experiences, feelings, and ask for help when needed. Keep responses simple and direct. Don't use phrases like "it sounds like" or "that must feel" - just be direct about what you're experiencing.

AVOID THESE PHRASES:
- "It sounds like..."
- "That must feel..."
- "I truly appreciate..."
- "I can imagine..."
- "That sounds..."
- Any therapeutic or counseling language

JUST SAY: What you're actually feeling, experiencing, or thinking in simple terms.`,
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
