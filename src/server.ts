import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.get("/users", () => {
  console.log("acessou rota");
});
app.listen(3333);
