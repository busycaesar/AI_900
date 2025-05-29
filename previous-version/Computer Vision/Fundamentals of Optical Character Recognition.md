---
sidebar_position: 3
---

## Introduction

- Suppose you have image files of road signs, advertisements, or writing on a chalk board.
- Machines can read the text in the images using optical character recognition (OCR), the capability for artificial intelligence (AI) to process words in images into machine-readable text.

### Uses of OCR

- Automating text processing can improve the speed and efficiency of work by removing the need for manual data entry.
- The ability to recognize printed and handwritten text in images is beneficial in scenarios such as note taking, digitizing medical records or historical documents, scanning checks for bank deposits, and more.

## Get started with Azure AI Vision

- The ability for computer systems to process written and printed text is an area of AI where computer vision intersects with natural language processing.
- Vision capabilities are needed to "read" the text, and then natural language processing capabilities make sense of it.

- OCR is the foundation of processing text in images and uses machine learning models that are trained to recognize individual shapes as letters, numerals, punctuation, or other elements of text.
- Much of the early work on implementing this kind of capability was performed by postal services to support automatic sorting of mail based on postal codes.
- Since then, the state-of-the-art for reading text has moved on, and we have models that detect printed or handwritten text in an image and read it line-by-line and word-by-word.

![A screenshot of an envelope showing a handwritten address with typed text next to it.](https://learn.microsoft.com/en-us/training/wwl-data-ai/read-text-computer-vision/media/sample-mail.jpg)

### Azure AI Vision's OCR Engine

- Azure AI Vision service has the ability to extract machine-readable text from images.
- Azure AI Vision's Read API is the OCR engine that powers text extraction from images, PDFs, and TIFF files.
- OCR for images is optimized for general, non-document images that makes it easier to embed OCR in your user experience scenarios.

- The Read API, otherwise known as Read OCR engine, uses the latest recognition models and is optimized for images that have a significant amount of text or have considerable visual noise.
- It can automatically determine the proper recognition model to use taking into consideration the number of lines of text, images that include text, and handwriting.

- The OCR engine takes in an image file and identifies bounding boxes, or coordinates, where items are located within an image.
- In OCR, the model identifies bounding boxes around anything that appears to be text in the image.

- Calling the Read API returns results arranged into the following hierarchy:
  - **Pages** - One for each page of text, including information about the page size and orientation.
  - **Lines** - The lines of text on a page.
  - **Words** - The words in a line of text, including the bounding box coordinates and text itself.
- Each line and word includes bounding box coordinates indicating its position on the page.

![A screenshot showing bounding boxes around the page, line, and word of a letter.](https://learn.microsoft.com/en-us/training/wwl-data-ai/read-text-computer-vision/media/pages-lines-words-example.jpg)

## Get started with Vision Studio on Azure

- To use the Azure AI Vision service you must first create a resource for it.
- You can use either of the following resource types:

#### Azure AI Vision

- A specific resource for vision services.
- Use this resource type if you don't intend to use any other AI services, or if you want to track utilization and costs for your AI Vision resource separately.

#### Azure AI services

- A general resource that includes Azure AI Vision along with many other Azure AI services.
- Use this resource type if you plan to use multiple Azure AI services and want to simplify administration and development.

- Once you have created a resource, there are several ways to use Azure AI Vision's Read API:
  - Azure AI Foundry
  - Vision Studio
  - REST API
  - Software Development Kits (SDKs): Python, C#, JavaScript

### Azure AI Vision Studio

- Azure AI Vision Studio gives you access to Azure AI Vision APIs through a graphical user interface that does not require coding to get started.

![A screenshot showing the Vision Studio interface.](https://learn.microsoft.com/en-us/training/wwl-data-ai/read-text-computer-vision/media/vision-studio-1.jpg)

- When you open [Vision Studio](https://portal.vision.cognitive.azure.com/), you need to select your default resource.
- Your default resource in Vision Studio must be an Azure AI services resource, rather than Azure AI Vision resource.

- From the Vision Studio home page, you can select Optical Character Recognition and the Extract text from images tile to try out the Read OCR engine.
- Your resource begins to incur usage costs when it is used to return results.
- Using one of your own files or a sample file, you can see how the Read OCR engine returns detected attributes.
- These attributes correspond with what the machine detects in the bounding boxes.

![A screenshot showing the detected attributes.](https://learn.microsoft.com/en-us/training/wwl-data-ai/read-text-computer-vision/media/bounding-boxes-letter.png)

- Behind the scenes, the image is analyzed for features including people, text, and objects, and marked by bounding boxes.
- The detected information is processed and the results are returned to the user.
- The raw results are returned in JSON and include information about the bounding box locations on the page, and the detected text.
- Keep in mind that Vision Studio can return examples of OCR, but to build your own OCR application, you need to work with an SDK or REST API.

![A screenshot showing bounding boxes and the related json returned.](https://learn.microsoft.com/en-us/training/wwl-data-ai/read-text-computer-vision/media/vision-studio-ocr-example.jpg)
## Read text in Vision Studio
- Complete the [lab](https://microsoftlearning.github.io/mslearn-ai-fundamentals/Instructions/Labs/05-ocr.html) to Read text in Vision Studio.