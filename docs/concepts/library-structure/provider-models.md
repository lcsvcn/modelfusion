---
sidebar_position: 1
---

# Provider Models

Provider models map provider-specific API calls to library functions such as text generation and embedding. They are implemented as classes and are immutable. Models include additional functionalities:

- **Additional information:** They provide more information about the underlying API capabilities, such as token limits.
- **Defaults:** They set default values for specific parameters (e.g., the value to extract from the response).
- **Configurable settings:** They allow you to customize the API calls according to your needs.

The models enable the separation of configuration parameters from the actual call. This separation is necessary to integrate the models into the library functions while letting you configure the parameters for the underlying API calls.

### Example Usage

The OpenAI text completion API can be used as a model as shown in the following example:

```ts
const textGenerationModel = new OpenAITextGenerationModel({
  apiKey: OPENAI_API_KEY,
  model: "text-davinci-003",
  settings: { temperature: 0.7 }, // define settings
});

// Later in the code:
const response = await textGenerationModel
  .withSettings({ maxTokens: 500 }) // refine or override settings
  .generate("Write a short story about a robot learning to love:\n\n");

const text = await textGenerationModel.extractOutput(response);

console.log(text);
```

In this example, the createOpenAITextModel function is used to create a text generation model with specific settings. The withSettings function is then used to refine these settings, and the generate function is used to produce a text completion. Finally, the output is extracted using the extractOutput function.

## Provider Models (List)

### OpenAI

- [Chat Generation Model](/api/classes/provider_openai.OpenAIChatModel)
- [Text Generation Model](/api/classes/provider_openai.OpenAITextGenerationModel)
- [Text Embedding Model](/api/classes/provider_openai.OpenAITextEmbeddingModel)

### Cohere

- [Text Generation Model](/api/classes/provider_cohere.CohereTextGenerationModel)
- [Text Embedding Model](/api/classes/provider_cohere.CohereTextEmbeddingModel)

### Hugging Face

- [Text Generation Model](/api/classes/provider_huggingface.HuggingFaceTextGenerationModel)