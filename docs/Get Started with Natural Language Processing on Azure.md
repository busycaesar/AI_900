---
sidebar_position: 8
---

## Introduction
- NLP is the field of AI focused on enabling machines to understand, interpret and respond to human languages.
- Some of the NLP applications include:
	- Customer Feedback Analysis: Organizations need to analyze large volumes of customer reviews, support tickets, or survey responses.
	- Healthcare Text Analysis: In the healthcare sector, clinical information from unstructured medical documents helps identify symptoms, medications, and diagnoses, supporting faster and more accurate decision-making.
	- Conversational AI with Virtual Agents: Virtual assistants that can interpret user intent, translate conversations, extract relevant entities, and respond appropriately.
## Understand natural language processing on Azure
- Core NLP tasks include: language detection, sentiment analysis, named entity recognition, text classification, translation, and summarization.
- These tasks are supported by Azure AI services including:

| **Service**                                                                                                                                                                                 | **Description**                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![Screenshot of Azure AI Language icon.](https://learn.microsoft.com/en-us/training/wwl-data-ai/get-started-language-azure/media/azure-ai-language.png)**Azure AI Language service**        | A cloud-based service that includes features for understanding and analyzing text. It includes various features that support sentiment analysis, key phrase identification, text summarization, and conversational language understanding. |
| ![Screenshot of Azure AI Translator icon.](https://learn.microsoft.com/en-us/training/wwl-data-ai/get-started-language-azure/media/azure-ai-translator.png) **Azure AI Translator service** | A cloud-based service that uses Neural Machine Translation (NMT) for translation, which analyzes the semantic context of the text and renders a more accurate and complete translation as a result.                                        |
## Understand Azure AI Language's text analysis capabilities
- Azure AI language is a part of Azure AI services offerings.
- It can perform NLP of unstructured text and its features include:
	- **Named entity recognition** identifies people, places, events, and more.
	- **Entity linking** identifies known entities together with a link to Wikipedia.
	- **Personal identifying information (PII)** detection identifies personally sensitive information, including personal health information (PHI).
	- **Language detection** identifies the language of the text and returns a language code such as "en" for English.
	- **Sentiment analysis and opinion mining** identifies whether text is positive or negative.
	- **Summarization** summarizes text by identifying the most important information.
	- **Key phrase extraction** lists the main concepts from unstructured text.
### Entity recognition and linking
- Azure AI Language can get unstructured text and return a list of entities from the text that is can recognize.

| Type                  | SubType    | Example                         |
| --------------------- | ---------- | ------------------------------- |
| Person                |            | "Bill Gates", "John"            |
| Location              |            | "Paris", "New York"             |
| Organization          |            | "Microsoft"                     |
| Quantity              | Number     | "6" or "six"                    |
| Quantity              | Percentage | "25%" or "fifty percent"        |
| DateTime              |            | "6:30PM February 4, 2012"       |
| DateTime              | Date       | "May 2nd, 2017" or "05/02/2017" |
| DateTime              | Time       | "8am" or "8:00"                 |
| URL                   |            | "`https://www.bing.com`"        |
| Email                 |            | "`support@microsoft.com`"       |
| US-based Phone Number |            | "(312) 555-0176"                |
| IP Address            |            | "10.0.1.125"                    |
- Azure AI Language also supports entity linking, that is, it links entities to a specific reference, for example a relevant Wikipedia article.
### Language detection
- Azure AI Language has language detection capability.
- It returns the language name, ISO language code and a confidence score.
- If the text is in mixed languages, it returns the predominant language in the text.
- It uses an algorithm to determine the predominant language such as the length of phrases or total amount of text for the language compared to other language.
- The confidence score might be less than 1 as a result of the mixed language text.
- In case of ambiguous text or the text that has mixed language content, like `":-)"`, it returns a value of unknown for the language name and a confidence score of `NaN`.
### Sentiment analysis and opinion mining
- Azure AI Language can evaluate text and return sentiment scores and labels.
- It can be used to determine positive or negative sentiment.
- It uses a prebuild ML classification model to evaluate the text.
- It returns the sentiment score in three categories: Positive, Negative or Neutral.
- In each of these categories a score of 0 to 1 is provided, which indicates how likely the text is a particular sentiment.
### Key phrase extraction
- It identifies the main points from the text.
- For example, from the following text,
	- "We had dinner here for a birthday celebration and had a fantastic experience. We were greeted by a friendly hostess and taken to our table right away. The ambiance was relaxed, the food was amazing, and service was terrific. If you like great food and attentive service, you should try this place."
- It can identify,
	- birthday celebration
	- fantastic experience
	- friendly hostess
	- great food
	- attentive service
	- dinner
	- table
	- ambiance
	- place
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
- Early attempts at machine translation applied literal translation.
- A literal translation means translating each word to the corresponding word in the target language.
- But it has issues like not having an equivalent word in the target language, change in meaning of the phrase or not get the correct context.
- Hence, AI should also understand the semantic context in which a word is used.
- Moreover, the grammar rules, formal vs informal and colloquialisms needs to be considered.
- Azure AI Translator supports translation between more than 130 languages.
- It can be used to translation text from one language to multiple languages simultaneously.
### Using Azure AI Translator
- Azure AI Translator includes the following capabilities:
	- Text Translation
	- Document Translation
	- Custom translation - used to enable enterprises, app developers, and language service providers to build customized neural machine translation (NMT) systems.
## Get started in Azure AI Foundry
- To use Azure AI Language or Azure AI Translator either a single-service resource or a multi-service resource can be created.
### Language Resource
- if you only plan to use Azure AI Language services.
- If you want to manage access and billing for the resource separately from other services.
### Translator resource
- If you want to manage access and billing for each service individually.
### Azure AI services resource
- If you plan to use Azure AI Language in combination with other Azure AI services.
- If you want to manage access and billing for these services together.
## Get started in Azure AI Foundry portal

![Screenshot of Azure AI Language page in Azure AI Foundry portal.](https://learn.microsoft.com/en-us/training/wwl-data-ai/get-started-language-azure/media/ai-foundry-language-1.png)

- Azure AI Foundry provides a unified platform for enterprise AI operations, model builders, and application development.
- Azure AI Foundry portal provides a user interface based around hubs and projects.
- To use any of the Azure AI services, including Azure AI Language or Azure AI Translator, you create a project in Azure AI Foundry, which will also create an Azure AI services resource for you.

- Projects in Azure AI Foundry help you organize your work and resources effectively. Projects act as containers for datasets, models, and other resources, making it easier to manage and collaborate on AI solutions.

- Within Azure AI Foundry portal, you have the ability to try out service features in a playground setting.
- Azure AI Foundry portal provides a language playground and a translator playground.

![Screenshot of Azure AI Language playground in Azure AI Foundry portal with an example of sentiment analaysis.](https://learn.microsoft.com/en-us/training/wwl-data-ai/get-started-language-azure/media/ai-foundry-language-sentiment.png)

![Screenshot of Azure AI Translator playground in Azure AI Foundry portal with an example of text translation.](https://learn.microsoft.com/en-us/training/wwl-data-ai/get-started-language-azure/media/ai-foundry-translator-playground.png)
## Analyze text in Azure AI Foundry portal

- Complete the [lab](https://microsoftlearning.github.io/mslearn-ai-fundamentals/Instructions/Labs/06-text-analysis.html) to Analyze text in Azure AI Foundry portal.
