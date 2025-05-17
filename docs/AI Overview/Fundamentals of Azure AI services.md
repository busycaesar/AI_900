---
sidebar_position: 3
---
## Introduction
- Azure AI services are a portfolio of AI capabilities that unlock automation for workloads in language, vision, intelligent search, content generation, and much more. 
- They are straightforward to implement and don’t require specialist AI knowledge.

- Organizations are using Azure AI services in innovative ways, such as within robots to provide life-like companionship to older people by expressing happiness, concern, and even laughter. 
- In other use cases, scientists are using AI to protect endangered species by identifying hard-to-find animals in images. 
- This was previously time-consuming and error-prone work, which the Azure AI Vision service can complete quickly and with a high degree of accuracy, freeing scientists to do other work.
## AI services on the Azure platform 
- Azure AI Services provide AI capabilities that can be easily integrated into web or mobile applications. These include:
	- Generative AI
	- Image recognition
	- NLP
	- Speech services
	- AI-powered search
- These services can be used separately or together to add AI power to applications.
	- **Azure OpenAI service** provides access to powerful, cutting-edge, generative AI models for application development.
	- **Azure AI Content Safety service** can be used to detect harmful content within text or images, and report on its severity. 
	- **Azure AI Language service** can be used to summarize text, classify information, or extract key phrases. 
	- **Azure AI Speech service** provides powerful speech to text and text to speech capabilities, allowing speech to be accurately transcribed into text, or text to natural sounding voice audio.
- These services are based on three principles that dramatically improve speed-to-market:
	- Prebuilt and ready to use
	- Accessed through APIs
	- Available and secure on Azure
### Azure AI services are prebuilt and ready to use
- AI is hard for companies to adapt, except the large technology companies because of the limitation in large amount of data required to train models, computing power and budget to hire specialist programmers.
- Azure AI services remove these barriers by offering pre-trained ML models and AI as a service, making AI accessible to businesses of all sizes.
- They leverage high-performance Azure computing to deploy advanced models built on decades of research.
- These services are suitable for diverse use cases across industries.

- For example, in education, Immersive Reader is being used to support students by adapting to their requirements. 
- Learners can have varying needs, such as wanting to read more slowly, get words or text translated into another language, or see pictures to aid their understanding.

- Some AI services can be customized to better fit specific requirements. 
- Customization capabilities in Azure AI Vision, Azure AI Speech, and Azure OpenAI all allow you to add data to existing models.

- For example, in sport, athletes, and coaches are customizing Azure AI Vision to improve performance and reduce injury. 
- One application allows surfers to upload a video and receive AI-generated insights and analysis. 
- These insights can then be used by coaches, medics, judges, and event broadcasters.
### Azure AI services are accessed through APIs
- Azure AI services are designed to be used in different development environments.
- Developers can access AI services through REST APIs, client libraries, or integrate them with tools such as Logic Apps and Power Automate.
### Azure AI services are available and secure on Azure
- Azure AI services are cloud-based and accessed through Azure resources.
- They are managed like other Azure services (e.g., PaaS, IaaS, managed databases).
- The Azure platform and Resource Manager provide a consistent framework for all services, from creating or deleting resources, to availability and billing.

- Trust is at the core of all of Microsoft's offerings, and security is at the center of Azure AI services.
- Azure AI services provides enterprise-grade security.
## Create Azure AI service resources
- Azure AI services are cloud-based, and like all Azure services you need to create a resource to use them. 
- There are two types of AI service resources: multi-service or single-service.
- The types of resources you need will be determined based on your development requirements and how you want costs to be billed.
### Multi-service resource
- A resource created in the Azure portal that provides access to multiple Azure AI services with a single key and endpoint.
- Ideal for using or exploring several AI services together.
- All AI services are billed together.
### Single-service resources
- A resource created in the Azure portal that provides access to a single Azure AI service
- Each Azure AI service has a unique key and endpoint.
- Useful when you only need one service or want separate billing and usage tracking.
### How to use the Azure portal to create an Azure AI services resource?
- To create an Azure AI services resource, sign in to the [Azure portal](https://portal.azure.com/) and select Create a resource. 

- To create a multi-services resource search for Azure AI services in the marketplace.

![Screenshot of Azure AI services in the Azure portal marketplace.](https://learn.microsoft.com/en-us/training/wwl-data-ai/fundamentals-azure-ai-services/media/azure-ai-services-marketplace.png)

- To create a single-service resource, search for the specific Azure AI service.
- Most AI services have a free price tier to allow you to explore their capabilities.
- After clicking Create for the resource you require, you will be prompted to complete details of your subscription, the resource group to contain the resource, the region, a unique name, and the price tier.
## Use Azure AI services
- Once you create an Azure AI service resource, you can build applications using the REST API, SDKs, or visual studio interfaces.
### Using service studio interfaces
- Studio interfaces provide a friendly user interface to explore Azure AI services.
- There are different studios for different Azure AI services, such as Vision Studio, Language Studio, Speech Studio, and the Content Safety Studio.
- You can test out Azure AI services using the samples provided, or experiment with your own content.
- A studio-based approach allows you to explore, demo, and evaluate Azure AI services regardless of your experience with AI or coding.
### Associate the AI service resource
- Before you can use an AI service resource, you must associate it with the studio you want to use on the Settings page.
- Select the resource, and then select Use Resource.
- You are then ready to explore the Azure AI service within the studio.

- As an example, let's look at the Azure AI Content Safety service, which identifies harmful text or images.
- To explore what the Content Safety service does, let's use the Content Safety Studio.
- First create either a multi-service Azure AI services resource, or a single-service Content Safety resource.
- Then, on the Content Safety Studio Settings page, select the resource, and select Use Resource.
- The AI service you created is now associated with the Content Safety Studio, and ready to be used.

![Screenshot of the Content Safety Studio's resource page in settings.](https://learn.microsoft.com/en-us/training/wwl-data-ai/fundamentals-azure-ai-services/media/content-safety-resource-example.png)

## Understand authentication for Azure AI services
- Most Azure AI services are accessed through a RESTful API, although there are other ways.
- Part of what an API does is to handle authentication.
- Whenever a request is made to use an AI services resource, that request must be authenticated.
- For example, your subscription and AI service resource is verified to ensure you have sufficient permissions to access it.
- This authentication process uses an endpoint and a resource key.
- The resource key protects the privacy of your resource.
- To ensure this is always secure, the key can be changed periodically.
- You can view the endpoint and key in the Azure portal under Resource Management and Keys and Endpoint.

![Screenshot of Azure portal's left-hand pane with Keys and Endpoints selected under Resource Management.](https://learn.microsoft.com/en-us/training/wwl-data-ai/fundamentals-azure-ai-services/media/azure-portal-keys-endpoints.png)

- When you write code to access the AI service, the keys and endpoint must be included in the authentication header.

- When you use a studio interface with Azure AI services, your credentials are authenticated when you sign in, and a similar process is happening in the background.