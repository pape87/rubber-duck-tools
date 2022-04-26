import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";

import { Session } from "./session.model";
import { SessionStore } from "./session.store";

@Injectable({ providedIn: "root" })
export class SessionQuery extends Query<Session> {

  accessToken$ = this.select(state => state.access_token || null);
  idToken$ = this.select(state => state.id_token || null);

  constructor(protected override store: SessionStore) {
    super(store);
  }
}