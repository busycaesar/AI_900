---
sidebar_position: 8
---

## Introduction

## Understand natural language processing on Azure

## Understand Azure AI Language's text analysis capabilities

## Azure AI Language's conversational AI capabilities

### Understand question answering

- Question answering helps build bots that can talk naturally with users and answer their questions.
- These bots can give quick and accurate replies and work on websites or social media.
- Question answering provides a friendly way for users to get answers to their questions and also gives people independence to ask questions anytime.

- In the following example, a chat bot uses natural language and provides options to a customer to best handle their query.
- The user gets an answer to their question quickly, and only gets passed to a person if their query is more complicated.

![Screenshot of A chat interface showing user input and responses from a bot.](https://learn.microsoft.com/en-us/training/wwl-data-ai/build-faq-chatbot-qna-maker-azure-bot-service/media/bot.png)

### Conversational language understanding

- Conversational language understanding describes a set of features that can be used to build an end-to-end conversational application.
- In particular, the features enable you to customize natural language understanding models to predict the overall intention of an incoming phrase and extract important information from it.
- To work with conversational language understanding (CLU), you need to take into account three core concepts: *utterances*, *entities*, and *intents*.

#### Utterances

- An utterance is an example of something a user might say, and which your application must interpret. For example:
  - "Switch the fan on."
  - "Turn on the light."

#### Entities

- An entity is an item to which an utterance refers. For example, fan and light in the following utterances:
  - "Switch the fan on."
  - "Turn on the light."

#### Intents

- An intent represents the purpose, or goal, expressed in a user's utterance.
- For example, for both of the previously considered utterances, the intent is to turn a device on.
- So the CLU application, you might define a `TurnOn` intent that is related to these utterances.

- A CLU application defines a model consisting of intents and entities.
- Utterances are used to train the model to identify the most likely intent and the entities to which it should be applied.
- The home assistant application might include multiple intents, like the following examples:

| Intent       | Related Utterances                                   | Entities                                |
| ------------ | ---------------------------------------------------- | --------------------------------------- |
| Greeting     | "Hello"                                              |                                         |
|              | "Hi"                                                 |                                         |
|              | "Hey"                                                |                                         |
|              | "Good morning"                                       |                                         |
| TurnOn       | "Switch the fan on"                                  | fan (device)                            |
|              | "Turn the light on"                                  | light (device)                          |
|              | "Turn on the light"                                  | light (device)                          |
| TurnOff      | "Switch the fan off"                                 | fan (device)                            |
|              | "Turn the light off"                                 | light (device)                          |
|              | "Turn off the light"                                 | light (device)                          |
| CheckWeather | "What is the weather for today?"                     | today (datetime)                        |
|              | "Give me the weather forecast"                       |                                         |
|              | "What is the forecast for Paris?"                    | Paris (location)                        |
|              | "What will the weather be like in Seattle tomorrow?" | Seattle (location), tomorrow (datetime) |
| None         | "What is the meaning of life?"                       |                                         |
|              | "Is this thing on?"                                  |                                         |

- In the table there are numerous utterances used for each of the intents.
- `None` intent is of a special interest.
- Always consider using the None intent to help handle utterances that do not map any of the utterances.
- The None intent is considered a fallback, and is typically used to provide a generic response to users when their requests don't match any other intent.

## Azure AI Translator capabilities

## Get started in Azure AI Foundry

## Analyze text in Azure AI Foundry portal

- Complete the [lab](https://microsoftlearning.github.io/mslearn-ai-fundamentals/Instructions/Labs/06-text-analysis.html) to Analyze text in Azure AI Foundry portal.
