import fs from "fs";
import { stat } from "node:fs";

const remove = async () => {
  stat("./src/fs/files/fileToRemove.txt", (err, stat) => {
    if (err) throw new Error("FS operation failed");
    if (stat) {
      fs.unlink("./src/fs/files/fileToRemove.txt", (err) => {
        if (err) throw err;
      });
    }
  });
};

await remove();
