import { get } from "../models/songsModel.js";

export const getSongs = async (res) => {
  try {
    const songs = await get();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(songs));

    return songs;
  } catch (err) {
    console.log(err);
  }
};
