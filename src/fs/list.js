import fs from "fs";
import { stat } from "node:fs";

const list = async () => {
  stat("./src/fs/files", (err, stats) => {
    if (err) throw new Error("FS operation failed");
    if (stats.isDirectory()) {
      fs.readdir("./src/fs/files", { recursive: true }, (err, dir) => {
        if (err) throw new Error("FS operation failed");
        if (dir) console.log(dir);
      });
    }
  });
};

await list();
