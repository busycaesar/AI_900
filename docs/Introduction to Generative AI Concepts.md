---
sidebar_position: 5
---
## What is generative AI?
- AI copies how humans act by learning from data and doing tasks on its own without being told what to do step by step.
- Generative AI describes a category of capabilities within AI to create original content.
- These capabilities including taking in natural language input and returning response in various formats such as natural language, image, code and more.
## How do language models work?
- Over last decades, developments in the field of NLP have resulted in achieving LLMs.
- The development of language models has led to new ways to interact with applications and systems, such as through generative AI assistants and agents.
- Developments of language models include:
	- **Tokenization**: enabling machines to read.
	- **Word embeddings**: enabling machines to capture the relationship between words.
	- **Architectural developments**: (changes in the design of language models) enabling them to capture word context.
### Tokenization
- Since machines cannot understand text but numbers, we need to convert the text into numbers.
- One way of doing it is tokenization.
- Tokens are string which a mearning, usually representing a word.
- Tokenization, as the name suggest, means converting words into tokens, which are then converted into numbers.

![A screenshot showing the pipeline of tokenization of a sentence.](https://learn.microsoft.com/en-us/training/wwl-data-ai/fundamentals-generative-ai/media/tokenization-pipeline.png)

1. Text to be tokenized.
2. Split the text into chunks based on a rule. For example, it can be split into words.
3. Next is 'Stop Work Removal'. Remove noisy words that does not add much meaning in the text such as `the` and `a`. A list of such works is provided to remove them from text.
4. Assign a number to each unique token.

- Tokenization allowed for text to be labeled.
- As a result, statistical techniques could be used to let computers find patterns in the data instead of applying rule-based models.
### Word Embeddings
- One of the key concepts introduced by applying deep learning techniques to NLP is word embeddings.
- It addresses the problem of not being able to define the semantic relationship between words.

- Word embeddings are created during deep learning model training process.
- During training, the model analyzes the co-occurrence patterns of words in sentences and learns to represent them as vectors.
- A vector represents a path through a point in n-dimensional space, in other words, a line.
- Semantic relationships are defined by how similar the angles of the lines are.
- Since word embeddings represent words in a vector space, the relationship between words can be easily described and calculated.

- To help the computer understand the meaning of words, we turn each word into a vector (embedding).
- Each word’s vector is a list of numbers, like \[10, 3, 1\].
- These numbers represent different features or meanings of the word, but we don’t define the features ourselves.
- The model learns what these numbers mean during training by looking at how words are used in real sentences.

- Vectors represent lines in multidimensional space, describing direction and distance along multiple axes.
- A technique called cosine similarity is used to determine if two vectors have similar directions, regardless of distance.
### Architectural developments
- The architecture of ML model decides how it handles data from input to training to prediction.
- One of the first breakthroughs in language model architecture was Recurrent Neural Networks (RNN).
- Understand text does not only mean understand individual word in isolation; but to understand the words around it to get the context in which the word is used.
#### Recurrent Neural Networks (RNN)
- In RNN, each step takes an input, a hidden state, and also produces an output.
- The hidden state serves as a memory of network.
- It stores the output of the previous step and passes it as input to the next step.

- Consider a following sentence, `"Vincent was a painter known for [MASK]"`.
- `[Mask]` represents the mission word that the model needs to predict.
- The RNN processes the sentence word by word:
	- Step 1: Processes "Vincent"
	- Step 2: Processes "was"
	- Step 3: Processes "a"
	- Step 4: Processes "painter"
	- Step 5: Processes "known"
	- Step 6: Processes "for"
- At each step, the RNN updates its internal memory (hidden state) to capture the context up to that word.
- Upon reaching `[MASK]`, the RNN utilizes its current hidden state, which encapsulates the context from all previous words, to predict the most probable word that fits.
- In this case, it might predict `"Vincent was a painter known for Starry Night"`.

![Diagram showing a recurrent network with multiple steps. Each step takes an input and hidden state as input and produces an output.](https://learn.microsoft.com/en-us/training/wwl-data-ai/fundamentals-generative-ai/media/recurrent-network.gif)

#### Challenges with RNNs
- RNNs allow the context to be included when predicting the next word in relation to complete sentence.
- However, since the hidden state of RNN is updated with each token, the actual relevant information, may be lost.
- Since the hidden state has a limited size, the relevant information maybe deleted to make room for new and more recent information.
- As a human, when we read the sentence, we know that only certain words are essential to predict the last word.
## Understand how transformers advance language models
- Model GenAI applications are made possible by utilizing Transformer Architecture.
- It introduced concepts that drastically improved a model's ability to understand and generate text.
- Different models have been trained using adaptations of the Transformer architecture to optimize for specific NLP tasks.
### Understand Transformer architecture
- There are two main parts of a transformer:
	1. The encoder: Responsible to process the input sequence and create a representation that captures the context of each token. In simple words, converting the input sequence into a numeric representation.
	2. The decoder: Responsible to generate the output sequence by attending to the encoder's representation and predict the next token in the sequence.
- The most important innovations in Transformer architecture were positional encoding and multi-head attention.

![A diagram of the Transformer architcture with the encoding and decoding layers.](https://learn.microsoft.com/en-us/training/wwl-data-ai/fundamentals-generative-ai/media/simplified-transformer-architecture.png)

- In encoding layer, the input sequence is encoded with positional encoding.
- After this,  multi-head attention is used to create a numeric representation.
- In the decoder layer, an incomplete output sequence is encoded in a similar way, that is by first passing it through the positional encoding and then multi-head attention.
- Further, the multi-head attention is used a second time to combine the output of the encoder and the output from the Decoder's multi-head attention.
- As a result, the output is generated.