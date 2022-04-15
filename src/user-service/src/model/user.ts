import { Preference } from "./preference";

export interface User {
    id: string;
    preferences: Preference;
}