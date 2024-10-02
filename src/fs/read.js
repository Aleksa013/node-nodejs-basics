import fs from "fs";

const read = async () => {
  fs.readFile("./src/fs/files/fileToRead.txt", "utf8", (err, data) => {
    if (err) throw new Error("FS operation failed");
    if (data) {
      const text = data.toString();
      console.log(text);
    }
  });
};

await read();
