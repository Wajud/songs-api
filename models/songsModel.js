import songs from "../data/songs.json" assert { type: "json" };

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
