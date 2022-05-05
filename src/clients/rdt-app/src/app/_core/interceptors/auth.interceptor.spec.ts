import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./auth.interceptor";
import { SessionQuery } from "src/app/_domain/session/session.query";
import { of } from "rxjs";
import { SessionToken } from "src/app/_domain/session/session.model";

describe("AuthInterceptor", () => {
  let service: HttpClient;
  let httpMock: HttpTestingController;
  let sessionQueryMock: jasmine.SpyObj<SessionQuery>;

  beforeEach(() => {
    sessionQueryMock = jasmine.createSpyObj("SessionQuery", ["token$"]);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
        { provide: SessionQuery, useValue: sessionQueryMock },
      ],
    });

    service = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it("should not add an Authorization header if access_token is not present", () => {
    sessionQueryMock.token$ = of({} as SessionToken);
    service.get("http://foo.it/test").subscribe(res => {
      expect(res).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne("http://foo.it/test");

    expect(httpRequest.request.headers.has("Authorization")).toEqual(false);
  });

  it("should add an Authorization header if access_token is present", () => {
    const access_token = "12345";
    sessionQueryMock.token$ = of({
      access_token: access_token,
      refresh_token: "bar",
      expires_in: 123,
      token_type: "Bearer",
      id_token: "baz"
    } as SessionToken);

    service.get("http://foo.it/test").subscribe(res => {
      expect(res).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne("http://foo.it/test");
    expect(httpRequest.request.headers.has("Authorization")).toEqual(true);
    expect(httpRequest.request.headers.get("Authorization")).toEqual(`Bearer ${access_token}`);

  });
});