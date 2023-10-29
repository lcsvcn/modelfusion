import { z } from "zod";

export const duplexStreamingFlowSchema = {
  input: z.object({
    prompt: z.string(),
  }),
  events: z.discriminatedUnion("type", [
    z.object({
      type: z.literal("text-chunk"),
      delta: z.string(),
    }),
    z.object({
      type: z.literal("speech-chunk"),
      base64Audio: z.string(),
    }),
  ]),
};
