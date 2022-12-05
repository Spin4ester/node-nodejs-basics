const parseArgs = () => {
    const orig = process.argv
    const args = process.argv.filter((el) => el.includes('--'))
    for (let i = 0; i <= orig.length; i++) {
        if (orig.includes(args[i])) {
            console.log(`${args[i]} is ${orig[orig.indexOf(args[i])+1]}`);
        }
    }
};

parseArgs();