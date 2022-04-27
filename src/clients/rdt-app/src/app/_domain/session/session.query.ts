import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";

import { Session } from "./session.model";
import { SessionStore } from "./session.store";

@Injectable({ providedIn: "root" })
export class SessionQuery extends Query<Session> {

  token$ = this.select(state => state.token  || null);

  constructor(protected override store: SessionStore) {
    super(store);
  }
}