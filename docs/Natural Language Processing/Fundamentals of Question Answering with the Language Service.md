---
sidebar_position: 2
---
## Introduction
- Conversational AI describes solutions that enable a dialog between an AI agent and a human.
- Generically, conversational AI agents are known as bots.
- People can engage with bots through channels such as web chat interfaces, email, social media platforms, and more.
- Azure AI Language's question answering feature provides you with the ability to create conversational AI solutions.
## Understand question answering
- Question answering helps build bots that can talk naturally with users and answer their questions.
- These bots can give quick and accurate replies and work on websites or social media.
- Question answering provides a friendly way for users to get answers to their questions and also gives people independence to ask questions anytime.

- In the following example, a chat bot uses natural language and provides options to a customer to best handle their query.
- The user gets an answer to their question quickly, and only gets passed to a person if their query is more complicated.

![Screenshot of A chat interface showing user input and responses from a bot.](https://learn.microsoft.com/en-us/training/wwl-data-ai/build-faq-chatbot-qna-maker-azure-bot-service/media/bot.png)

## Get started with custom question answering
- Question answering solution can be created on Microsoft Azure using Azure AI Language service.
- Azure AI Language includes a custom question answering feature that enables you to create a knowledge base of question and answer pairs.
- This knowledge base can be further queried using natural language input.
### Creating a custom question answering knowledge base
- You can use Azure AI Language Studio to create, train, publish, and manage low-code question answering projects.
- To create a project, you must first provision a Language resource.
#### Define questions and answers
- After provisioning a Language resource, the Language Studio's custom question answering feature can be used to create a project that consists of question-and-answer pairs.
- These questions and answers can be:
	- Generated from an existing FAQ document or web page.
	- Entered and edited manually.
- In many cases, a project is created using a combination of all of these techniques.
- Questions in the project can be assigned alternative phrasing to help consolidate questions with the same meaning.
#### Test the project
- After creating a set of question-and-answer pairs, you must save it.
- This process analyzes your literal questions and answers and applies a built-in natural language processing model to match appropriate answers to questions, even when they are not phrased exactly as specified in your question definitions.
- Then you can use the built-in test interface in the Language Studio to test your knowledge base by submitting questions and reviewing the answers that are returned.
## Use question answering with Language Studio
- Complete the [lab](https://microsoftlearning.github.io/mslearn-ai-fundamentals/Instructions/Labs/06-text-analysis.html) to Use question answering with Language Studio.