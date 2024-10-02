import fs from "fs";
import { stat } from "node:fs";

const copy = async () => {
  stat("./src/fs/files_copy", (err, stats) => {
    if (err) {
      fs.cp(
        "./src/fs/files",
        "./src/fs/files_copy",
        { recursive: true },
        (err) => {
          if (err) throw err;
        }
      );
    }
    if (stats) {
      throw new Error("FS operation failed");
    }
  });
};

await copy();
