const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/routes.backend");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.path);
  next();
});

app.use("/A&A/api/", router);

mongoose
  .connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT, () => {
      console.log(
        `db coonected && server listening at port http://localhost:${process.env.PORT}/A&A/api/`
      );
    })
  )
  .catch((err) => console.log({ loc: "at db connection", err }));
