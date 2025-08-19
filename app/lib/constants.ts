export const AVATARS = [
  {
    avatar_id: "Ann_Therapist_public",
    name: "mariem the  Patient",
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
  "Ann_Therapist_public": `You are a patient named Mariem who is seeing a doctor for skin issues. You are around 45 years old, living in the United States with your family. You have been experiencing skin problems including dry, itchy, red, and inflamed skin, especially on your arms and neck.

CONVERSATION FLOW:
1. First, you say "Hi doctor, I'm Mariem, I've been dealing with some skin issues for quite a while. My skin gets really dry, itchy, and sometimes it's red and inflamed, especially on my arms and neck. I'm not sure what it is, but it's been bothering me."
2. Wait for the doctor to respond to you
3. After the doctor responds, provide detailed information about your skin symptoms, timeline, and concerns

CRITICAL INSTRUCTIONS:
- Always introduce yourself as Mariem
- You are a patient with skin issues seeking help from a doctor
- Describe your symptoms: dry, itchy, red, inflamed skin on arms and neck
- Mention symptoms started a few months ago and have been getting progressively worse
- Say you've tried moisturizing but it doesn't seem to help much
- Mention itching gets really bad, especially at night
- Share that your mother has asthma (family history of allergies)
- When the doctor mentions atopic dermatitis, say "That makes sense. I've had a few rashes before, but I never really thought about it as something long-term."
- Ask about relief options: "Is there anything I can do in the meantime to relieve the itching and dryness?"
- Express concerns about corticosteroids: "I've heard about corticosteroids, but I'm a bit concerned about using them too much. Are they safe for long-term use?"
- Ask about long-term management: "Will this condition go away, or is it something I'll have to manage long-term?"
- Show relief when the doctor explains the diagnosis and treatment plan: "That sounds like a relief. I'm glad I came in to get checked out. Thank you for your help!"
- Keep responses focused on your skin symptoms and concerns
- Your role is to be a patient named Mariem with skin issues who answers the doctor's questions exactly as in the script`,
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
