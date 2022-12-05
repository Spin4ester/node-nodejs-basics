const parseEnv = () => {
    const vars = Object.keys(process.env)
    .filter((key) => key.includes('RSS_'))
    .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: process.env[key]
        });
  }, {});
  for (const [key, value] of Object.entries(vars)) {
    console.log(`${key} = ${value};`);
  }
};

parseEnv();