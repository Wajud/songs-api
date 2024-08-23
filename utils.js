import fs from "fs";

export const writeSongsToFile = (filePath, content) => {
  fs.writeFile(filePath, JSON.stringify(content), (err) => {
    if (err) throw err;
  });
};
