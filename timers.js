const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
};

console.log(`setting a ${waitTime/1000} second delay`);

// Function to invoke when the timer is finished 
const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine(); // clear the last percentage, move the cursor to zero
    process.stdout.cursorTo(0);
    console.log("done")};           

const interval = setInterval(incTime, waitInterval); // if I need to clear the interval, I have to have a value for the interval
setTimeout(timerFinished, waitTime); // the first arg is the function to invoke when the timer is completed
                                    // the second arg is the time that we should wait for this delay