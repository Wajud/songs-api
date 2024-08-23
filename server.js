import { createServer } from "http";
import {
  getSongs,
  getSongById,
  createSong,
} from "./controllers/songsController.js";

const server = createServer((req, res) => {
  if (req.url === "/api/songs" && req.method === "GET") {
    getSongs(res);
  } else if (req.url.match(/\/api\/songs\/(.)+/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    getSongById(res, id);
  } else if (req.url === "/api/songs" && req.method === "POST") {
    createSong(req, res);
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
