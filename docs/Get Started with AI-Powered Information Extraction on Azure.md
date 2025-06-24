---
sidebar_position: 13
---
## Introduction
- AI-powered information extraction and analysis enables organizations to gain actionable insights from data that might otherwise be locked up in documents, images, audio files, or other assets.
### Summarized Information Extraction Scenarios:
- Extracting expense details from scanned receipts for claim processing.
- Analyzing support call recordings to identify common issues and solutions.
- Digitizing and extracting data from historical census documents.
- Analyzing images and videos at tourist sites for visitor volume estimation.
- Automating invoice routing in accounts-payable processes.
- Extracting and indexing data from images/documents for searchable marketing content.
## Azure AI services for information extraction
- Azure AI provides a wide range of cloud-based services for various AI tasks, including the extraction and analysis of information from digital content.
- Core services used in information extraction scenarios includes following.
### Azure AI Vision Image Analysis

![Azure AI Vision icon.](https://learn.microsoft.com/en-us/training/wwl-data-ai/ai-information-extraction/media/azure-ai-vision.png)

- Azure AI Vision Image Analysis enables you to extract insights from images, including the detection and identification of common objects in images, the generation of relevant captions and tags for images, and the extraction of text in images.
### Azure AI Content Understanding

![Azure AI Content Understanding icon.](https://learn.microsoft.com/en-us/training/wwl-data-ai/ai-information-extraction/media/content-understanding.png)

- Azure AI Content Understanding is a generative AI-based multimodal analysis service that can extract insights from structured documents, images, audio, and video.
### Azure AI Document Intelligence

![Azure AI Document Intelligence icon.](https://learn.microsoft.com/en-us/training/wwl-data-ai/ai-information-extraction/media/document-intelligence.png)

- Azure AI Document Intelligence is designed to extract fields and values from digital (or digitized) forms, such as invoices, receipts, purchase orders, and others.
### Azure AI Search

![Azure AI Search icon.](https://learn.microsoft.com/en-us/training/wwl-data-ai/ai-information-extraction/media/ai-search.png)

- Azure AI Search performs AI-assisted indexing in which a pipeline of AI skills are used to systematically extract and index information from structured and unstructured content.

- These services can be used separately, or combining them to build comprehensive solutions for:
	- Extracting data (e.g., contact info) from images like business cards.
	- Triggering workflows by reading data from forms (e.g., routing invoices).
	- Analyzing and summarizing meetings (e.g., automated notes and action items).
	- Auto-tagging and indexing media for easy search (e.g., stock photo libraries).
	- Extracting insights from structured/unstructured data (e.g., building databases from scanned records).
## Extract information with Azure AI Vision
### Automated caption and tag generation
You can use Azure AI Vision Image Analysis to generate descriptive text associated with an image. The service can analyze an image and generate:
- A caption that describes the image.
- A set of suggested dense captions for the key objects in the image.
- A collection of tags that help categorize the image.
For example, suppose you want to capture the key details related to this image:

![Photograph of a man walking a dog in a busy street.](https://learn.microsoft.com/en-us/training/wwl-data-ai/ai-information-extraction/media/street.png)

The AI Vision Image Analysis service generates the following descriptive text values.
- Caption: A man walking a dog on a leash
- Dense captions:
    - A man walking a dog on a leash
    - A man walking on the street
    - A yellow car on the street
    - A yellow car on the street
    - A green telephone booth with a green sign
- Tags:
    - outdoor
    - land vehicle
    - vehicle
    - building
    - road
    - street
    - wheel
    - taxi
    - person
    - clothing
    - car
    - dog
    - yellow
    - walking
    - city
### Object detection
- Azure AI Vision Image Analysis can also detect common objects and people in an image.
- For example, consider the following image:

![Photograph of an apple, a banana, and an orange.](https://learn.microsoft.com/en-us/training/wwl-data-ai/ai-information-extraction/media/produce.png)

- Azure AI Vision Image Analysis detects the types and locations of objects in this image, as shown here:

![Photograph of fruit with the the locations of an apple, a banana, and an orange highlighted.](https://learn.microsoft.com/en-us/training/wwl-data-ai/ai-information-extraction/media/object-detection.png)

### Optical character recognition (OCR)
- When an image contains printed or handwritten text, Azure AI Vision Image Analysis can use a technique called optical character recognition (OCR) to determine the location and contents of each line of text, and each individual word.
- The OCR capabilities of Azure AI Vision Image Analysis are useful when you need to read text in an image for further processing, for example to translate a menu using a cellphone application.
- Azure AI Vision Image Analysis can also be useful to extract small volumes of free-form text from simple documents; for example, to extract contact details from a business card.
- Consider the following scanned business card:

![Photograph of a business card.](https://learn.microsoft.com/en-us/training/wwl-data-ai/ai-information-extraction/media/business-card.png)

- You could use Azure AI Vision Image Analysis to locate and extract the text from this card, with the following results:

![Photograph of a business card with text highlighted.](https://learn.microsoft.com/en-us/training/wwl-data-ai/ai-information-extraction/media/extracted-text.png)

```txt
Adventure Works Cycles
Roberto Tamburello
Engineering Manager
roberto@adventure-works.com
555-123-4567
```

## Extract multimodal information with Azure AI Content Understanding
- Azure AI Content Understanding uses state-of-the-art AI models to analyze content in multiple formats, including Text-based forms and documents, Audio, Images, Video.
### Analyzing forms and documents
- Azure AI Content Understanding's document analysis capabilities go beyond simple OCR-based text extraction to include schema-based extraction of fields and their values.
### Analyzing audio
- In addition to text-based documents, Azure AI Content Understanding is capable of analyzing audio files to provide transcriptions, summaries, and other key insights.
- Suppose you want to have AI summarize your voice mail.
- You might define a schema of key insights to extract from each recorded call, like this:
	- Caller
	- Message summary
	- Requested actions
	- Callback number
	- Alternative contact details
### Analyzing images and video
- Suppose you defined the following schema for an image taken by a collaborative messaging system that combines in-room attendees and remote attendees on a conference call system:
	- Location
	- In-person attendees
	- Remote attendees
	- Total attendees

- If instead of analyzing the still image, you were to create an analyzer for recorded video of the call; the schema could include attendance counts at various time intervals, details of who spoke during the call and what they said, a summary of the discussion, and a list of assigned actions from the meeting.
## Extract information from forms with Azure AI Document Intelligence
- Azure AI Document Intelligence is designed to support complex document and form processing scenarios.
- While you can also use Azure AI Content Understanding to extract fields from forms and documents, Azure AI Document Intelligence offers a large library of prebuilt models, from simple receipts to complex tax forms.
- You can also create sophisticated custom models of your own.
### Using prebuilt models
- Let's explore an example of using Azure AI Document Intelligence to extract data from a form.
- Suppose a financial loan company needs to hundreds of mortgage applications each day.
- Here's an example of just the first page of a standard 11-page mortgage application form:

![Photograph of a loan application form.](https://learn.microsoft.com/en-us/training/wwl-data-ai/ai-information-extraction/media/loan-application.png)

- Azure AI Document Intelligence includes a prebuilt model for this type of form, making it easy to build a solution that can locate and extract fields, such as:
	- Borrower Name
	- Address
	- Telephone number
	- Social security number
	- Date of birth
	- Marital status
	- Employment status
	- Employer name
	- Employer address
	- Income
	- Citizenship
	- and more
### Creating custom models
- With Azure AI Document Intelligence, you can train custom models by using labeled examples of the documents you want to analyze.
- Labeling your documents involves using OCR to define the layout of your document and identifying the discrete fields in your documents that you want to extract.
## Create a knowledge mining solution with Azure AI Search
- Fundamentally, Azure AI Search is a cloud service for indexing and searching data.
- However, its use of AI skills to extract insights from multiple formats of data and the ability to integrate it with other AI services, including Azure AI Vision and Azure AI Document Intelligence make it a powerful platform for building digital asset management and knowledge mining solutions.
### Indexers, indexes, and skills
- At the heart of an Azure AI Search solution is an indexer, which defines a repeatable process to:
	1. Ingest data from a source, such as an Azure Storage container of documents or a database.
	2. Crack documents to extract their contents.
	3. Apply a sequence of tasks to retrieve information from the data and generate a hierarchy of fields for the index. Some fields are core attributes of the source data (for example document file names and last saved dates), while others are generated by using AI skills. For example:
	    - Using Azure AI Vision services to generate tags and captions for images.
	    - Using Azure AI Language services to derive fields for sentiment or named entities.
	    - Using Azure AI Document Intelligence to extract field values from forms.
	4. Persisting the extracted fields as an index.
    
    ![Diagram of an indexer using AI skills to extract fields from source documents and create an index.](https://learn.microsoft.com/en-us/training/wwl-data-ai/ai-information-extraction/media/indexer.png)

- The resulting index can be used to enable users to search for information in the extracted fields based on keywords and filtering criteria.
### Persisting extracted data to a knowledge store
- As well as creating a searchable index, Azure AI Search can persist the extracted data assets to a _knowledge store_ in Azure Storage.
- The indexer can save the following kinds of asset in a knowledge store:
	- Tables of field values.
	- Images extracted from documents.
	- JSON documents representing data structures; which can be complex hierarchies of fields and values.
    
    ![Diagram of an indexer storing tables, image,s and documents in a knowldge store.](https://learn.microsoft.com/en-us/training/wwl-data-ai/ai-information-extraction/media/knowledge-store.png)
## Extract information
- Complete the [lab](https://microsoftlearning.github.io/mslearn-ai-fundamentals/Instructions/Exercises/06-content-understanding.html) to Extract information.