import { Controller, Get, Query } from "@nestjs/common";
import { default as fetch } from "node-fetch";

@Controller("auth")
export class AuthController {

  @Get("/getToken")
  async getToken(@Query("code") code) {
    const client_id = process.env.CLIENT_ID;
    const client_secret = process.env.CLIENT_SECRET;

    const result = await fetch(
      process.env.TOKEN_URL,
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
          redirect_uri: process.env.REDIRECT_URL,
        }),
      }
    )

    return await result.json();
  }
}
