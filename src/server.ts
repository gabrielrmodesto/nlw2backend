import express from "express";

const app = express();

app.use(express.json());

app.get("/users", () => {
  console.log("acessou rota");
});
app.listen(3333);
