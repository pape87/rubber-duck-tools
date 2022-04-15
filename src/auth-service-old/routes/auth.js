var express = require("express");
var { default: fetch } = require("node-fetch");
var router = express.Router();

router.get("/getToken", (req, res, next) => {
  console.log("fooooooo", req.query.code);

  const client_id = "2rf24huet112134fk74kroif9s";
  const client_secret = "tr261uf9l2lc0gin22imjujp0o1ksnpp4ddrf1su3619oql4pvl";
  const code = req.query.code;
  fetch(
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
    .then((response) => {
      response
        .json()
        .then((data) => {
          console.log("bar", data);
          res.send(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
