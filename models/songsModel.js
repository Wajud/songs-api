import songs from "../data/songs.json" assert { type: "json" };

export const get = () => {
  return new Promise((resolve, reject) => {
    resolve(songs);
  });
};
