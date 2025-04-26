import { env, stdout } from'node:process';


const parseEnv = () => {
   const _RSS = Object.assign({},env)
    for ( const [key, value] of Object.entries(_RSS)) {
        if(key.startsWith('RSS_')){
            console.log(`${key} = ${value}`)
        }
    }
};

parseEnv();