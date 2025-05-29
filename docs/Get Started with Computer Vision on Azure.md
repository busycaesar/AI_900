---
sidebar_position: 11
---

## Introduction

## Understand Azure AI services for computer vision

## Understand Azure AI Vision Image Analysis capabilities

### Describing an image with captions

- Azure AI Vision has the ability to analyze an image, evaluate the objects that are detected, and generate a human-readable phrase or sentence that can describe what was detected in the image.
- For example, consider the following image:

![Diagram of a man on a skateboard.](https://learn.microsoft.com/en-us/training/wwl-data-ai/analyze-images-computer-vision/media/skateboard.png)

- Azure AI Vision returns the following caption for this image: `A man jumping on a skateboard.`

### Detecting common objects in an image

- Azure AI Vision can identify thousands of common objects in images.
- For example, when used to detect objects in the skateboarder image discussed previously, Azure AI Vision returns the following predictions:
  - Skateboard (90.40%)
  - Person (95.5%)
- The predictions include a confidence score that indicates the probability the model has calculated for the predicted objects.
- In addition to the detected object labels and their probabilities, Azure AI Vision returns bounding box coordinates that indicate the top, left, width, and height of the object detected.
- You can use these coordinates to determine where in the image each object was detected, like this:

![Diagram of a skateboarder with bounding boxes around detected objects.](https://learn.microsoft.com/en-us/training/wwl-data-ai/analyze-images-computer-vision/media/bounding-boxes.png)

### Tagging visual features

- Azure AI Vision can suggest tags for an image based on its contents.
- These tags can be associated with the image as metadata that summarizes attributes of the image and can be useful if you want to index an image along with a set of key terms that might be used to search for images with specific attributes or contents.
- For example, the tags returned for the skateboarder image (with associated confidence scores) include:
  - sport (99.60%)
  - person (99.56%)
  - footwear (98.05%)
  - skating (96.27%)
  - boardsport (95.58%)
  - skateboarding equipment (94.43%)
  - clothing (94.02%)
  - wall (93.81%)
  - skateboarding (93.78%)
  - skateboarder (93.25%)
  - individual sports (92.80%)
  - street stunts (90.81%)
  - balance (90.81%)
  - jumping (89.87%)
  - sports equipment (88.61%)
  - extreme sport (88.35%)
  - kickflip (88.18%)
  - stunt (87.27%)
  - skateboard (86.87%)
  - stunt performer (85.83%)
  - knee (85.30%)
  - sports (85.24%)
  - longboard (84.61%)
  - longboarding (84.45%)
  - riding (73.37%)
  - skate (67.27%)
  - air (64.83%)
  - young (63.29%)
  - outdoor (61.39%)

### Optical character recognition

- Azure AI Vision service can use optical character recognition (OCR) capabilities to detect text in images.
- For example, consider the following image of a nutrition label on a product in a grocery store:

![Diagram of a nutrition label.](https://learn.microsoft.com/en-us/training/wwl-data-ai/analyze-images-computer-vision/media/nutrition-label.png)

- The Azure AI Vision service can analyze this image and extract the following text:

```txt
Nutrition Facts Amount Per Serving
Serving size:1 bar (40g)
Serving Per Package: 4
Total Fat 13g
Saturated Fat 1.5g
Amount Per Serving
Trans Fat 0g
calories 190
Cholesterol 0mg
ories from Fat 110
Sodium 20mg
ntDaily Values are based on
Vitamin A 50
calorie diet
```

### Training custom models

- You can train a custom model for image classification or object detection.
- Azure AI Vision builds custom models on the pre-trained foundation model, meaning that you can train sophisticated models by using relatively few training images.

#### Image classification

- An image classification model is used to predict the category, or *class* of an image.
- For example, you could train a model to determine which type of fruit is shown in an image, like this:

| Apple                                                                                                                          | Banana                                                                                                                          | Orange                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| ![Diagram of an apple.](https://learn.microsoft.com/en-us/training/wwl-data-ai/analyze-images-computer-vision/media/apple.png) | ![Diagram of a banana.](https://learn.microsoft.com/en-us/training/wwl-data-ai/analyze-images-computer-vision/media/banana.png) | ![Diagram of an orange.](https://learn.microsoft.com/en-us/training/wwl-data-ai/analyze-images-computer-vision/media/orange.png) |

#### Object detection

- Object detection models detect and classify objects in an image, returning bounding box coordinates to locate each object.
- In addition to the built-in object detection capabilities in Azure AI Vision, you can train a custom object detection model with your own images.
- For example, you could use photographs of fruit to train a model that detects multiple fruits in an image, like this:

![Diagram of multiple detected fruits in an image.](https://learn.microsoft.com/en-us/training/wwl-data-ai/analyze-images-computer-vision/media/object-detection.png)

## Understand Azure AI Vision's Face service capabilities

### Facial detection

- Face detection involves identifying regions of an image that contain a human face.

![An image with two faces highlighted in rectangles](https://learn.microsoft.com/en-us/training/wwl-data-ai/detect-analyze-faces/media/face-detection.png)

- With Face analysis, facial features can be used to train machine learning models to return other information, such as facial features such as nose, eyes, eyebrows, lips, and others.

![facial landmarks image showing data around face characteristics](https://learn.microsoft.com/en-us/training/wwl-data-ai/detect-analyze-faces/media/landmarks-1.png)

### Facial recognition

- A further application of facial analysis is to train a machine learning model to identify known individuals from their facial features.
- This is known as facial recognition, and uses multiple images of an individual to train the model.

![A person identified as "Wendell"](https://learn.microsoft.com/en-us/training/wwl-data-ai/detect-analyze-faces/media/facial-recognition.png)

- When used responsibly, facial recognition is an important and useful technology that can improve efficiency, security, and customer experiences.

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

## Get started in Azure AI Foundry portal

### Azure resources for Azure AI Vision service

- To use Azure AI Vision, you need to create a resource.
- You can use either of the following resource types:

#### Azure AI Vision

- A specific resource for the Azure AI Vision service.
- Use this resource type if you don't intend to use any other Azure AI services, or if you want to track utilization and costs for your Azure AI Vision resource separately.

#### Azure AI services

- A general resource that includes Azure AI Vision along with many other Azure AI services; such as Azure AI Language, Azure AI Custom Vision, Azure AI Translator, and others.
- Use this resource type if you plan to use multiple AI services and want to simplify administration and development.

### Get started in Azure AI Foundry portal

## Analyze images in Azure AI Foundry portal

- Complete the [lab](https://microsoftlearning.github.io/mslearn-ai-fundamentals/Instructions/Labs/03-image-analysis.html) to Analyze images in Azure AI Foundry portal.