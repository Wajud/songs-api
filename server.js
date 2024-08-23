import { createServer } from "http";
import { getSongs } from "./controllers/songsController.js";

const server = createServer((req, res) => {
  if (req.url === "/api/songs" && req.method === "GET") {
    getSongs(res);
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
