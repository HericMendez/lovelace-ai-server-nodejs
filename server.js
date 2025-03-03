// server.js
import express from "express";
import cors from "cors";

import bodyParser from "body-parser";
import chatRoutes from "./src/routes/chatRoutes.js";
import { PORT } from "./src/config/config.js";

const app = express();
const port = PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", chatRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em:  http://localhost:${port}
Ping test(GET):       http://localhost:3000/api/ping`);
});

export { app };