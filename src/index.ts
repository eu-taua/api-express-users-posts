import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.routes";
import postsRoutes from "./routes/posts.routes";

const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || "http://localhost";

const app = express();

app.use(cors());

app.use(usersRoutes);
app.use(postsRoutes);

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
  res.status(404);
});
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});
