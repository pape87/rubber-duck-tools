import { Controller, Get, Query } from "@nestjs/common";
import { default as fetch } from "node-fetch";

@Controller("auth")
export class AuthController {

  @Get("/getToken")
  async getToken(@Query("code") code) {
    const client_id = "2rf24huet112134fk74kroif9s";
    const client_secret = "tr261uf9l2lc0gin22imjujp0o1ksnpp4ddrf1su3619oql4pvl";

    const result = await fetch(
      "https://rdt-auth.auth.eu-central-1.amazoncognito.com/oauth2/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(`${client_id}:${client_secret}`).toString("base64"),
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          client_id: client_id,
          code: code,
          redirect_uri: "http://localhost:8080/v1/login",
        }),
      }
    )

    return await result.json();
  }
}
