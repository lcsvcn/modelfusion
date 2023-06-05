import { callOpenAIImageGenerationAPI } from "ai-utils.js";
import dotenv from "dotenv";
import fs from "node:fs";

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY ?? "";

(async () => {
  const imageResponse = await callOpenAIImageGenerationAPI({
    apiKey: OPENAI_API_KEY,
    prompt:
      "the wicked witch of the west in the style of early 19th century painting",
    size: "512x512",
    responseFormat: callOpenAIImageGenerationAPI.responseFormat.base64Json,
  });

  imageResponse.data.forEach((image, index) => {
    const path = `./openai-image-example-${index}.png`;
    fs.writeFileSync(path, Buffer.from(image.b64_json, "base64"));
    console.log(`Image saved to ${path}`);
  });
})();