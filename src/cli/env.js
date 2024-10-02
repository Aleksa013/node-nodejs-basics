const parseEnv = () => {
  const env = process.env;
  for (const [key, value] of Object.entries(env)) {
    if (key.slice(0, 4) === "RSS_") {
      console.log(`${key}=${value}`);
    }
  }
};

parseEnv();
