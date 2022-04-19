import { Schema } from "mongoose";

import { Preference } from "./preference";

export interface User {
  id: string;
  preferences: Preference;
}

const preferenceSchema = new Schema<Preference>({
  language: { type: String, required: false },
  theme: { type: String, required: false }
})

export const userSchema = new Schema<User>({
  id: { type: String, required: true },
  preferences: { type: preferenceSchema, required: true }
});

