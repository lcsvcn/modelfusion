import dotenv from "dotenv";
import { OpenAITextGenerationModel, generateText } from "modelfusion";
import { customObserver } from "./custom-observer";

dotenv.config();

(async () => {
  // Set the observer on the function call:
  const text = await generateText(
    new OpenAITextGenerationModel({
      model: "text-davinci-003",
      maxCompletionTokens: 50,
      apiKey: "invalid-api-key",
    }),
    "Write a short story about a robot named Nox:\n\n",
    { observers: [customObserver] }
  );
})();
