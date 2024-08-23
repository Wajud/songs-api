import songs from "../data/songs.json" assert { type: "json" };
import { v4 as uuidv4 } from "uuid";
import { writeSongsToFile } from "../utils.js";

export const get = () => {
  return new Promise((resolve, reject) => {
    resolve(songs);
  });
};

export const getById = (id) => {
  return new Promise((resolve, reject) => {
    const song = songs.find((song) => song.id === id);
    if (!song) {
      reject("Song requested not found");
    }
    resolve(song);
  });
};

export const create = async (songData) => {
  return new Promise((resolve, reject) => {
    if (
      !songData.title ||
      !songData.artiste ||
      !songData.year ||
      !songData.likes
    ) {
      reject("Song Entry must have title, artiste, year and likes!");
    } else {
      const newSong = { id: uuidv4(), ...songData };
      songs.push(newSong);
      writeSongsToFile("./data/songs.json", songs);
      resolve(newSong);
    }
  });
};
