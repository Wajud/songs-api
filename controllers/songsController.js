import { get, getById } from "../models/songsModel.js";

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
