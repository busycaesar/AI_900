---
sidebar_position: 3
---

## Introduction

- If a dialog is natural enough, you might not know whether you are conversing with a human or a computer.
- As artificial intelligence (AI) grows, this kind of conversation is becoming more and more common.
- In specific scenarios, it can result in human-like interactions with AI agents.
- Common scenarios for this kind of solution include customer support applications, reservation systems, and home automation, among others.

- For being able to imitate human like conversation, computers need not only be able to accept the language as input (either in text or audio format), but also it should be able to interpret the semantic meaning of the input.

- Azure AI Language service supports conversational language understanding (CLU).
- CLU can be used to build language models that interpret the meaning of phrases in a conversation.
- An example of a CLU application is the ability to turn devices on and off based on speech.
- The application is able to take in audio input such as, "Turn the light off", and understand an action it needs to take.
- Many types of tasks involving command and control, end-to-end conversation, and enterprise support can be completed with Azure AI Language's CLU feature.

## Describe conversational language understanding

- Conversational language understanding describes a set of features that can be used to build an end-to-end conversational application.
- In particular, the features enable you to customize natural language understanding models to predict the overall intention of an incoming phrase and extract important information from it.
- To work with conversational language understanding (CLU), you need to take into account three core concepts: *utterances*, *entities*, and *intents*.

### Utterances

- An utterance is an example of something a user might say, and which your application must interpret. For example:
  - "Switch the fan on."
  - "Turn on the light."

### Entities

- An entity is an item to which an utterance refers. For example, fan and light in the following utterances:
  - "Switch the fan on."
  - "Turn on the light."

### Intents

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

## Get started with conversational language understanding in Azure

- Azure AI Language's conversational language understanding (CLU) feature enables you to author a language model and use it for predictions.
- Authoring a model involves defining entities, intents, and utterances.
- Generating predictions involves publishing a model so that client applications can take user input and return responses.

### Azure resources for conversational language understanding

- To use CLU capabilities in Azure, you can use the following types of resource:

#### Azure AI Language

- A resource that enables you to build apps with natural language understanding capabilities without machine learning expertise.
- You can use a language resource for authoring and prediction.

#### Azure AI services

- A general resource that includes CLU along with many other Azure AI services.
- You can only use this type of resource for prediction.

- The separation of resources is useful when you want to track resource utilization for Azure AI Language use separately from client applications using all Azure AI services applications.

### Authoring

- After creating an authoring resource, it can be used to train a CLU model.
- To train a model, start by defining the entities and intents that your application will predict as well as utterances for each intent that can be used to train the predictive model.

- CLU provides a comprehensive collection of prebuilt domains that include pre-defined intents and entities for common scenarios; which you can use as a starting point for your model. You can also create your own entities and intents.

- Entities and intents can be created in any order.
- You can create an intent, and select words in the sample utterances, for it to create entities for them; or you can create the entities ahead of time and then map them to words in utterances as you are creating the intents.

#### Training the model

- After you have defined the intents and entities in your model, and included a suitable set of sample utterances; the next step is to train the model.
- Training is the process of using your sample utterances to teach your model to match natural language expressions that a user might say to probable intents and entities.

- After training the model, you can test it by submitting text and reviewing the predicted intents.
- Training and testing is an iterative process.
- After you train your model, you test it with sample utterances to see if the intents and entities are recognized correctly.

### Predicting

- When you are satisfied with the results from the training and testing, you can publish your Conversational Language Understanding application to a prediction resource for consumption.
- Client applications can use the model by connecting to the endpoint for the prediction resource, specifying the appropriate authentication key; and submit user input to get predicted intents and entities.

## Use Conversational Language Understanding with Language Studio

- Complete [Lab](https://microsoftlearning.github.io/mslearn-ai-fundamentals/Instructions/Labs/08-conversational-language-understanding.html) to Use Conversational Language Understanding with Language Studio.
