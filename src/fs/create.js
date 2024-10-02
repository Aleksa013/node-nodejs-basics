import { stat } from "node:fs";
import fs from "fs";

const create = async () => {
  stat("./src/fs/files/fresh.txt", (err, stats) => {
    if (stats) {
      throw new Error("FS operation failed");
    }
    if (err) {
      fs.writeFile(
        "./src/fs/files/fresh.txt",
        "I am fresh and young",
        (err) => {
          if (err) throw err;
        }
      );
    }
  });
};

await create();
