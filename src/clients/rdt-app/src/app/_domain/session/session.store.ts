import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";

import { Session } from "./session.model";

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "session", resettable: true })
export class SessionStore extends Store<Session> {
  constructor() { super({}); }
}