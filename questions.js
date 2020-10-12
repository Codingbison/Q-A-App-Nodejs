// process.stdout.write("Hello ") ; // This implements write() method
// process.stdout.write("Nibras \n\n\n");

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `); // To prompt the user for an answer
}

ask();

const answers = []; // An array
process.stdin.on('data', data => {  // This is async app
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {

    const [name, activity, lang] = answers;
    console.log(`
    

Thank you for your answers.

Go ${activity} ${name} you can write ${lang} code later!
    
    `);
})