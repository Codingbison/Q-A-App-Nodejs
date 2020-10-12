// console.log(process.pid); // collect info from the terminal when we load the application
// console.log(process.versions.node); // get environment info, read environment variables ...etc

// console.log(process.argv); // process argv is an array

// const [, ,firstName, lastName] = process.argv;

// console.log(`Your name is ${firstName} ${lastName}`);

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);