---
sidebar_position: 6
---
## Understand Generative AI Applications
- GenAI applications are built with language models that powers the 'app logic' component of the interaction between users and GenAI.
### Understand Assistants
- GenAI often appears as chat-based assistants that are integrated into applications to help users find information and perform tasks efficiently.

:::note
Microsoft Copilot is a GenAI based assistant that is integrated into a wide range of Microsoft applications and user experiences.
:::

### Understand Agents
- GenAI that can execute tasks such as filing taxes or coordinating shipping arrangements, just as a few examples, are known as agents.
- Agents are applications that can respond to user input or assess situations autonomously, and take appropriate actions.
- These actions could help with a series of tasks.
- Agents contain three main components:
	- A language model that powers reasoning and language understanding.
	- Instructions that define the agent’s goals, behavior, and constraints.
	- Tools, or functions, that enable the agent to complete tasks.

:::note
- Today's AI solutions often contain a combination of assistant, agentic, and other AI capabilities.
- The process of coordinating and managing multiple AI components such as models, data sources, tools, and workflows to work together efficiently in a unified solution is known as orchestration.
:::

### Use a framework for understanding Generative AI applications
- GenAI applications can be categorized into the following categories.
	1. **Ready-to-use**: No work required from the user's end. User can just start asking questions.
	2. **Extendable**: Same as ready-to-use application but with the extension to use own data.
	3. **Applications you build from the foundation**: You can build your own assistants and assistants with agentic capabilities starting from a language model.
- Often, you will use services to extend or build generative AI applications.
- These services provide the infrastructure, tools, and frameworks necessary to develop, train, and deploy generative AI models.
## Understand tools to develop generative AI
- Microsoft offers a powerful ecosystem of tools and services for building GenAI solutions, designed to support developers, data scientists, and enterprises at every stage of the AI lifecycle.
- Azure AI Foundry is a PaaS that gives developers control over the customization of language models used for building applications.
- These models can be deployed in the cloud and consumed from custom-developed apps and services.
- You can use Azure AI Foundry portal, a user interface for building, customizing, and managing AI applications and agents, especially those powered by generative AI.
- Components of Azure AI Foundry include:

| Component                      | Description                                                                                                       |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Azure AI Foundry model catalog | A centralized hub for discovering, comparing, and deploying a wide range of models for generative AI development. |
| Playgrounds                    | Ready-to-use environments for quickly testing ideas, trying out models, and exploring Azure AI services.          |
| Azure AI services              | In Azure AI Foundry portal, you can build, test, see demos, and deploy Azure AI services.                         |
| Solutions                      | You can build agents and customize models in Azure AI Foundry portal.                                             |
| Observability                  | Ability to monitor usage and performance of your application's models.                                            |

:::note
Microsoft's _Copilot Studio_ is another generative AI development tool. It is designed to work well for low-code development scenarios in which technically proficient business users or developers can create conversational AI experiences.
:::

## Understand Azure AI Foundry's model catalog
- Azure AI Foundry provides a comprehensive and dynamic marketplace containing models sold directly by Microsoft and models from its partners and community.

![Screenshot of Azure AI Foundry's model catalog.](https://learn.microsoft.com/en-us/training/wwl-data-ai/get-started-generative-ai-azure/media/foundry-model-catalog.png)

- Azure OpenAI in Foundry models make up Microsoft's first-party model family and are considered foundation models.
- Foundation models are pretrained on large texts and can be fine-tuned for specific tasks with a relatively small dataset.
- You can deploy the models from Azure AI Foundry model catalog to an endpoint without any extra training.
- If you want the model to be specialized in a task, or perform better on domain-specific knowledge, you can also choose to customize a foundation model.
- To choose the model that best fits your needs, you can test out different models in a playground setting and utilize model leaderboards (preview).
- Model leaderboards provide a way to see what models are performing best in different criteria such as quality, cost, and throughput.
- You can also see graphical comparisons of models based on specific metrics.

![Screenshot of comparison of models in Azure AI Foundry portal.](https://learn.microsoft.com/en-us/training/wwl-data-ai/get-started-generative-ai-azure/media/model-benchmarks-comparision.png)

## Understand Azure AI Foundry capabilities
- Azure AI Foundry portal provides a user interface based around hubs and projects.
- In general, creating a hub provides more comprehensive access to Azure AI and Azure Machine Learning.
- Within a hub, you can create projects.
- Projects provide more specific access to models and agent development.
- You can manage your projects from Azure AI Foundry portal's overview page.

![Screenshot of Azure AI Foundry overview page](https://learn.microsoft.com/en-us/training/wwl-data-ai/get-started-generative-ai-azure/media/foundry-overview-page.png)

- When you create an Azure AI Hub, several other resources are created simultaniously, including an Azure AI services resource.
- In Azure AI Foundry portal, you can test all kinds of Azure AI services, including Azure AI Speech, Azure AI Language, Azure AI Vision, and Azure AI Foundry Content Safety.

![Screenshot of Azure AI services on Azure AI Foundry portal.](https://learn.microsoft.com/en-us/training/wwl-data-ai/get-started-generative-ai-azure/media/foundry-ai-services-home-page.png)

- In addition to demos, Azure AI Foundry portal provides playgrounds to test Azure AI services and other models from the model catalog.

![Screenshot of playgrounds on Azure AI Foundry portal](https://learn.microsoft.com/en-us/training/wwl-data-ai/get-started-generative-ai-azure/media/foundry-playgrounds-page.png)

![Screenshot of the chat playground on Azure AI Foundry portal.](https://learn.microsoft.com/en-us/training/wwl-data-ai/get-started-generative-ai-azure/media/foundry-chat-playground.png)

### Customizing models
- There are many ways to customize the models in GenAI applications.
- The purpose of customizing the model is to improve its performance, including quality and safety of the responses.
- Following are four main ways to customize models in Azure AI Foundry:
#### Using grounding data
- It refers the process to ensure that the systems output are aligned with reliable data source.
- It can be done in various ways such as linking the model to a database, search engine or providing domain-specific knowledge bases.
#### Implementing Retrieval-Augmented Generation (RAG)
- RAG augments the language model by connecting it to an organization's proprietary database.
- This technique involves retrieving relevant information and using it to generate contextually accurate responses.
#### Fine-tuning
- It involves taking a pretrained model and further training it on a smaller, task-specific dataset to make it more suitable for a particular application.
- Fine-tuning is useful for adapting models to domain-specific requirements, improving accuracy, and reducing the likelihood of generating irrelevant or inaccurate responses.
#### Managing security and governance controls
- Security and governance controls are needed to manage access, authentication, and data usage.
- These controls help prevent the publication of incorrect or unauthorized information.
## Understand observability
- Although there are many ways to measure GenAI quality; in general, there can be three dimensions for evaluating and monitoring GenAI.
	- Performance and quality evaluators: assess the accuracy, groundedness, and relevance of generated content.
	- Risk and safety evaluators: assess potential risks associated with AI-generated content to safeguard against content risks. This includes evaluating an AI system's predisposition towards generating harmful or inappropriate content.
	- Custom evaluators: industry-specific metrics to meet specific needs and goals.
- Azure AI Foundry supports observability features that improve the performance and trustworthiness of GenAI responses.
- Evaluators are specialized tools in Azure AI Foundry that measure the quality, safety, and reliability of AI responses.
- Some evaluators include:
	- Groundedness: measures how consistent the response is with respect to the retrieved context.
	- Relevance: measures how relevant the response is with respect to the query.
	- Fluency: measures natural language quality and readability.
	- Coherence: measures logical consistency and flow of responses.
	- Content safety: comprehensive assessment of various safety concerns.
## Explore generative AI in Azure AI Foundry portal
- Complete the [lab](https://microsoftlearning.github.io/mslearn-ai-fundamentals/Instructions/Exercises/02-generative-ai.html) to Explore generative AI in Azure AI Foundry portal.