import fs from "fs";
import { stat } from "node:fs";

const rename = async () => {
  stat("./src/fs/files/properFilename.md", (err, stat) => {
    if (err) {
      fs.rename(
        "./src/fs/files/wrongFilename.txt",
        "./src/fs/files/properFilename.md",
        (err) => {
          if (err) throw new Error("FS operation failed");
        }
      );
    }
    if (stat) {
      throw new Error("FS operation failed");
    }
  });
};

await rename();
