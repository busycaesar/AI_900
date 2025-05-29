---
sidebar_position: 4
---

## Introduction

- Using AI speech capabilities we can manage home and auto systems with voice instructions, get answers from computers for spoken questions and much more.
- To get this type of interaction, the AI system should be able to support the following two types of capabilities:

  1.  Speech Recognition: The ability to detect and interpret the speech.
  2.  Speech Synthesis: The ability to generate speech.

- Azure AI Speech provides speech to text, text to speech, and speech translation capabilities through speech recognition and synthesis.
- You can use prebuilt and custom Speech service models for a variety of tasks, from transcribing audio to text with high accuracy, to identifying speakers in conversations, creating custom voices, and more.

## Understand speech recognition and synthesis

### Speech Recognition

- Speech Recognition takes spoken word as input and converts it into data that can be processed.
- This is often by transcribing it into text.
- The spoken words can be in the form of a recorded voice in an audio file or live audio from a microphone.
- From the audio, speech patterns are analyzed to determine patterns.
- These patterns are further mapped into words.
- To accomplish this, the software typically uses multiple models, including:

  - Acoustic model that converts the audio signal into phonemes, that is, representations of specific sounds.
  - Language model that maps phonemes into words, usually using a statistical algorithm that predicts the most probable sequence of words based the phonemes.

- The recognized words are typically converted into text, which can be used for various purposes, such as:
  - Captions for live or recorded videos.
  - Transcript for a phone call or meeting.
  - Automated note detection.

### Speech Synthesis

- Speech Synthesis basically converts text to speech.
- It typically requires the following information:

  - The text to be spoken.
  - The voice to be used to vocalize the speech.

- To accomplish the task, the system typically breaks down the text into tokens such as individual words and assign phonetic sounds to each token.
- The phonetic transcription is further break down into prosodic units (such as phrases, clauses or sentences) to create phonemes.
- These phonemes are then synthesized as audio and can be assigned to a particular voice, speaking rate, pitch and volume.

- The speech output can be used for many purposes including:
  - Spoken responses for user input.
  - Voice menus for phone systems.
  - Reading emails or text messages
  - Broadcasting announcements

## Get started with speech on Azure

- Azure offers speech recognition and synthesis capabilities through Azure AI Speech service.
- It supports many capabilities including Speech to Text and Text to Speech.

### Speech to Text

- The Azure AI Speech to Text API can be used to perform real time or batch transcription of audio.
- The audio source can be an audio file or real time audio streaming from microphone.

- The model that is used by the speech to text API is based on the universal language model trained by Microsoft.
- The data for the model is owned by Microsoft and is deployed to Microsoft Azure.
- The model is optimized for two scenarios, conversation and dictation.
- If the prebuilt models does not satisfy the requirements, you can also create and train own custom models including acoustics, language and pronunciation.

#### Real-Time Transcription

- Real-time transcription can be used to generate text for audio during presentations, demos etc.
- For real-time transcription, the application needs incoming audio from some input source.
- The application further streams the audio to the services and receives the transcribed text.

#### Batch Transcription

- If the audio file is stored in some file share or a remote server, the audio files with a Shared Access Signature (SAS) URI can be used to receive transcription results asynchronously.
- Batch transcription should run in asynchronous manner because batch jobs are scheduled on a best-effort basis.
- Best-effort basis means while the system intends to start the job within minutes, there is no guarantee on the exact timings. Jobs are queued and executed ass soon as the resource becomes available.

### Text to Speech

- The Text to Speech API helps to convert the text input into speech which can either be played directly through a speaker or written into an audio file.

#### Speech Synthesis Voices

- While using TTS API, it is possible to specify the voice to be used.
- This capability offers the flexibility to personalize the speech and give it a specific character.
- The service includes predefined voices that supports multiple languages and regional pronunciation.
- It also includes neural voices, resulting in more natural sounding voice.
- It is also possible to develop custom voices and use them.

### Supported Languages

- Both the speech to text and text to speech APIs support a variety of languages.

## Use Azure AI Speech
