
import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const transform = async () => {
   const ts = new Transform({
    transform(chunk, encoding, callback){         
        const str = chunk.toString().split('').reverse().join('');
        this.push(`${str}\n`)
        callback()
    }
   })
   await pipeline(stdin, ts, stdout)
};

await transform();