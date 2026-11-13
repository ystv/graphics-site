import { z } from "zod";

const read = {
  input: z.object({
    event_id: z.string().cuid(),
    path: z.string(),
  }),
};

const update = {
  input: z.object({
    event_id: z.string(),
    path: z.string(),
    value: z.string().nullish(),
  }),
};

export const textFieldsSchema = {
  read,
  update,
};
