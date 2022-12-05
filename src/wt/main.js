import { Worker } from 'worker_threads';

const performCalculations = async () => {
    

    let num = 10;

    const worker = new Worker('./src/wt/worker.js', {workerData: {num: num}});

    worker.once("message", result => {
        console.log(`${num}th Fibonacci Number: ${result}`);
    });

    worker.on("error", error => {
        console.log(error);
    });

    worker.on("exit", exitCode => {
        console.log(exitCode);
    })

    console.log("Executed in the parent thread");
};

await performCalculations();