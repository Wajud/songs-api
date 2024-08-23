import { get, getById, create, update } from "../models/songsModel.js";
import { getDataBody } from "../utils.js";

export const getSongs = async (res) => {
  try {
    const songs = await get();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(songs));
  } catch (err) {
    console.log(err);
  }
};

export const getSongById = async (res, id) => {
  try {
    const song = await getById(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(song));
  } catch (err) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err }));
  }
};

export const createSong = async (req, res) => {
  // try {
  //   let body = "";
  //   req.on("data", (chunk) => (body += chunk.toString()));
  //   req.on("end", async () => {
  //     const { title, artiste, year, likes } = JSON.parse(body);
  //     const postBody = { title, artiste, year, likes };

  //     const newSongs = await create(postBody);
  //     res.writeHead(201, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify(newSongs));
  //   });
  // } catch (err) {
  //   res.writeHead(400, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify({ message: err }));
  // }

  try {
    const postBody = await getDataBody(req);
    const newSongs = await create(postBody);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(newSongs));
  } catch (err) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err }));
  }
};

export const updateSong = async (req, res, id) => {
  try {
    const postBody = await getDataBody(req);
    const updatedSong = await update(postBody, id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(updatedSong));
  } catch (err) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err }));
  }
};
