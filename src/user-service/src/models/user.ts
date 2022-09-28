import { Schema } from "mongoose";

import { Preference } from "./preference";

export interface User {
  id: string;
  userInfo: UserInfo;
  preferences: Preference;
}

export interface UserInfo {
  name: string;
  surname: string;
}

const userInfoSchema = new Schema<UserInfo>({
  name: { type: String, required: false },
  surname: { type: String, required: false }
})

const preferenceSchema = new Schema<Preference>({
  language: { type: String, required: false },
  theme: { type: String, required: false }
})


export const userSchema = new Schema<User>({
  id: { type: String, required: true },
  userInfo: { type: userInfoSchema, required: true },
  preferences: { type: preferenceSchema, required: true }
});

