import inquirer from 'inquirer';

console.log("WELCOME TO MY QUIZ GAME!");
console.log("You are required to gain a minimum of 4 points to win the game.");

let points = 0;

async function askQuestions() {
    try {
        let question1 = await inquirer.prompt([
            {
                name: "one",
                message: "TypeScript is a superset of?",
                type: "list",
                choices: ["Python", "JavaScript", "C++", "HTML"]
            }
        ]);
        console.log("Answer 1 received: ", question1.one);
        if (question1.one === "JavaScript") {
            console.log("Your answer is correct!");
            points++;
        } else {
            console.log("Incorrect answer");
        }

        let question2 = await inquirer.prompt([
            {
                name: "two",
                message: "Who is the founder of Microsoft?",
                type: "list",
                choices: ["Jabir-bin-Hayan", "Newton", "Bill Gates", "Mark"]
            }
        ]);
        console.log("Answer 2 received: ", question2.two);
        if (question2.two === "Bill Gates") {
            console.log("Your answer is correct!");
            points++;
        } else {
            console.log("Incorrect answer");
        }

        let question3 = await inquirer.prompt([
            {
                name: "three",
                message: "Which one is a string?",
                type: "list",
                choices: ["Python", "0", "1", "5"]
            }
        ]);
        console.log("Answer 3 received: ", question3.three);
        if (question3.three === "Python") {
            console.log("Your answer is correct!");
            points++;
        } else {
            console.log("Incorrect answer");
        }

        let question4 = await inquirer.prompt([
            {
                name: "four",
                message: "Which one is a number?",
                type: "list",
                choices: ["1", "9", "two", "7"]
            }
        ]);
        console.log("Answer 4 received: ", question4.four);
        if (question4.four === "9") {
            console.log("Your answer is correct!");
            points++;
        } else {
            console.log("Incorrect answer");
        }

        let question5 = await inquirer.prompt([
            {
                name: "five",
                message: "This course is for?",
                type: "list",
                choices: ["Boys", "Girls", "Adults", "All of the above"]
            }
        ]);
        console.log("Answer 5 received: ", question5.five);
        if (question5.five === "All of the above") {
            console.log("Your answer is correct!");
            points++;
        } else {
            console.log("Incorrect answer");
        }

        if (points >= 4) {
            console.log("CONGRATULATIONS!");
            console.log(`Your points: ${points}`);
        } else {
            console.log("YOU LOSE! TRY NEXT TIME.");
            console.log(`Your points: ${points}`);
        }
    } catch (error) {
        console.error("Error occurred: ", error);
    }
}

askQuestions();
