---
sidebar_position: 2
---

## Introduction

- Face detection and analysis is an area of artificial intelligence (AI)
- It uses algorithms to locate and analyze human faces in images or video content.

- There are many practical applications for face detection, analysis, and recognition. For example,
  - **Security** - Building security applications, and increasingly used in smart phones operating systems for unlocking devices.
  - **Social media** - Automatically tag known friends in photographs.
  - **Intelligent monitoring** - for example, an automobile might include a system that monitors the driver's face to determine if the driver is looking at the road, looking at a mobile device, or shows signs of tiredness.
  - **Advertising** - analyzing faces in an image can help direct advertisements to an appropriate demographic audience.
  - **Missing persons** - using public cameras systems, facial recognition can be used to identify if a missing person is in the image frame.
  - **Identity validation** - useful at ports of entry kiosks where a person holds a special entry permit.

## Understand facial analysis

- Face detection involves identifying regions of an image that contain a human face.

![An image with two faces highlighted in rectangles](https://learn.microsoft.com/en-us/training/wwl-data-ai/detect-analyze-faces/media/face-detection.png)

- With Face analysis, facial features can be used to train machine learning models to return other information, such as facial features such as nose, eyes, eyebrows, lips, and others.

![facial landmarks image showing data around face characteristics](https://learn.microsoft.com/en-us/training/wwl-data-ai/detect-analyze-faces/media/landmarks-1.png)

### Facial recognition

- A further application of facial analysis is to train a machine learning model to identify known individuals from their facial features.
- This is known as facial recognition, and uses multiple images of an individual to train the model.

![A person identified as "Wendell"](https://learn.microsoft.com/en-us/training/wwl-data-ai/detect-analyze-faces/media/facial-recognition.png)

- When used responsibly, facial recognition is an important and useful technology that can improve efficiency, security, and customer experiences.

## Get started with facial analysis on Azure

- Microsoft Azure provides multiple Azure AI services that you can use to detect and analyze faces, including:
  - **Azure AI Vision**, which offers face detection and some basic face analysis, such as returning the bounding box coordinates around an image.
  - **Azure AI Video Indexer**, which you can use to detect and identify faces in a video.
  - **Azure AI Face**, which offers pre-built algorithms that can detect, recognize, and analyze faces.

### Azure AI Face service

- The Azure AI Face service can return the rectangle coordinates for any human faces that are found in an image, as well as a series of related attributes:
  - **Blur**, **Head pose**, **Mask**
  - **Accessories**: Attribute returns possible accessories, with confidence score between zero and one for each accessory.
  - **Glasses**: whether or not the person is wearing glasses.
  - **Exposure**: such as whether the image is underexposed or over exposed. This applies to the face in the image and not the overall image exposure.
  - **Noise**: refers to visual noise in the image. If you have taken a photo with a high ISO setting for darker settings, you would notice this noise in the image. The image looks grainy or full of tiny dots that make the image less clear.
  - **Occlusion**: determines if there might be objects blocking the face in the image.
  - **Quality For Recognition**: a rating of high, medium, or low that reflects if the image is of sufficient quality to attempt face recognition on.

### Responsible AI use

- Anyone can use the Face service to:
  - Detect the location of faces in an image.
  - Determine if a person is wearing glasses.
  - Determine if there's occlusion, blur, noise, or over/under exposure for any of the faces.
  - Return the head pose coordinates for each face in an image.
- The Limited Access policy requires customers to [submit an intake form](https://aka.ms/facerecognition) to access additional Azure AI Face service capabilities including:
  - **Face verification**: the ability to compare faces for similarity.
  - **Face identification**: the ability to identify named individuals in an image.
  - **Liveness detection**: the ability to detect and mitigate instances of recurring content and/or behaviors that indicate a violation of policies (eg. such as if the input video stream is real or fake).

### Azure resources for Face

- To use the Face service, you must create one of the following types of resource:

#### Face

- Use this specific resource type if you don't intend to use any other Azure AI services, or if you want to track utilization and costs for Face separately.

#### Azure AI services

- A general resource that includes Azure AI Face along with many other Azure AI services.
- Use this resource type if you plan to use multiple Azure AI services and want to simplify administration and development.

### Tips for more accurate results

- There are some considerations that can help improve the accuracy of the detection in the images:
  - Image format - supported images are JPEG, PNG, GIF, and BMP.
  - File size - 6 MB or smaller.
  - Face size range - from 36 x 36 pixels up to 4096 x 4096 pixels. Smaller or larger faces will not be detected.
  - Other issues - face detection can be impaired by extreme face angles, extreme lighting, and occlusion (objects blocking the face such as a hand).
