const parseArgs = () => {
  const env = process.env.npm_lifecycle_script;
  console.log(env.split("--"));
  env.split("--").forEach((item, index) => {
    const part = item.split(" ");
    if (index) {
      console.log(`${part[0]} is ${part[1]}`);
    }
  });
};

parseArgs();
