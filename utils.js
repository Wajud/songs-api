import fs from "fs";
import { resolve } from "path";

export const writeSongsToFile = (filePath, content) => {
  fs.writeFile(filePath, JSON.stringify(content), (err) => {
    if (err) throw err;
  });
};

export const getDataBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", () => {
      const { title, artiste, year, likes } = JSON.parse(body);
      const postBody = { title, artiste, year, likes };
      resolve(postBody);
    });
  });
};
