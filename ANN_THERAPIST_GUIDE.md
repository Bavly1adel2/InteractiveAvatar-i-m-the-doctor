# Ann Patient Avatar System Guide

## Overview
Ann is now a patient seeking therapy, and you are the therapist providing care. She can interact with you in two different scenarios:
1. **Initial Consultation** - First meeting with a new patient
2. **Follow-up Session** - Continuing work with an existing patient

## Features

### Avatar Selection
- Ann appears as "Ann Patient" in the avatar selection
- Uses a professional headshot representing a patient seeking help
- Automatically shows scenario selector when selected

### Scenario Selection
- **Initial Consultation**: You meet Ann as a new patient for the first time
- **Follow-up Session**: You continue work with Ann as an existing patient
- Scenario selector appears below avatar selection
- System prompt automatically updates based on selected scenario

### System Prompt Integration
- Comprehensive patient background and presenting concerns
- Patient's therapeutic goals and challenges
- Scenario-specific responses and patient needs
- Automatic application when session starts

## How to Use

### 1. Select Ann Patient Avatar
- Choose "Ann Patient" from the avatar list
- The scenario selector will automatically appear

### 2. Choose Session Type
- **Initial Consultation**: For first-time patient meetings
- **Follow-up Session**: For ongoing therapeutic work
- The system prompt will update to reflect your choice

### 3. Start Session
- Click "Start" to begin the avatar session
- Ann will automatically receive her system prompt as a patient
- She will introduce herself and share her concerns

### 4. Provide Therapy
- You are now the therapist providing care to Ann
- Ask questions, provide guidance, and offer therapeutic interventions
- Maintain professional boundaries while being supportive

## Character Details

### Patient Background
- **Presenting Concerns**: Anxiety, stress, sleep difficulties, feeling overwhelmed
- **Goals**: Seeking help and guidance for mental health challenges
- **Approach**: Open, honest, willing to work with therapist
- **Setting**: Therapy office

### Patient Style
- Open and honest about struggles
- Willing to share thoughts and feelings
- Asks questions when needing clarification
- Collaborative and engaged in therapy

### Session Types

#### Initial Consultation
- Ann introduces herself and shares concerns
- You gather background information
- You identify presenting concerns
- You set therapeutic goals
- You explain your therapeutic approach

#### Follow-up Session
- You check in on Ann's progress
- You review and practice skills together
- You adjust goals as needed
- You provide ongoing support
- You review homework assignments

## Technical Implementation

### Files Modified
- `app/lib/constants.ts` - Updated Ann Patient system prompts
- `components/AvatarConfig/ScenarioSelector.tsx` - Updated for patient scenarios
- `components/AvatarConfig/index.tsx` - Integrated patient role display
- `components/logic/useSystemPrompt.ts` - Patient system prompt management
- `components/InteractiveAvatar.tsx` - Integrated patient system prompt application
- `app/lib/ann-therapist-qa.ts` - Q&A responses for patient scenarios

### System Prompt Structure
- Patient background and presenting concerns
- Scenario-specific instructions
- Patient's therapeutic goals and challenges
- Response examples and patient needs

### Automatic Application
- System prompt is applied when session starts
- Waits 1 second for session establishment
- Sends patient introduction message
- Logs successful application

## Testing

### Initial Consultation Scenario
- Ann will introduce herself as a new patient
- She'll share her concerns and what brings her to therapy
- Tone: Open, honest, seeking help

### Follow-up Session Scenario
- Ann will discuss her ongoing progress
- She'll focus on current challenges and goals
- Tone: Engaged, collaborative, focused on growth

## Troubleshooting

### System Prompt Not Applied
- Check console for error messages
- Ensure Ann Patient avatar is selected
- Verify scenario is selected before starting session

### Avatar Not Responding Appropriately
- Check that system prompt was applied successfully
- Verify correct scenario is selected
- Restart session if needed

## Future Enhancements

### Potential Additions
- More specific patient concerns and symptoms
- Different patient populations and diagnoses
- Crisis intervention responses
- Family therapy scenarios
- Group therapy sessions

### Integration Opportunities
- Mental health assessment tools
- Treatment planning systems
- Progress tracking
- Patient education materials
- Referral systems

## Support

For technical issues or questions about the Ann Patient avatar system, please refer to the main project documentation or contact the development team.
