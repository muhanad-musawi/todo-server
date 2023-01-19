import express from "express";
import todos from "./todos/routes/todoRouter";
const app = express();

app.get('/', (reg: any, res: any ) =>
  res.json({ message: "Docker is here" })
);

app.use(express.json())
app.use('/', todos);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}` ));