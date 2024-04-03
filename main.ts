import inquirer from "inquirer";

let players = await inquirer.prompt([
    {
        name: "player1Name",
        type: "input",
        message: "Player 1, Enter your name?"
    },
    {
        name: "player2Name",
        type: "input",
        message: "Player 2, Enter your name?"
    }
]);

let game = await inquirer.prompt([
    {
        name: "Player1",
        type: "list",
        message: `${players.player1Name}, Choose one!`,
        choices: ["Rock", "Paper", "Scissors"]
    },
    {
        name: "Player2",
        type: "list",
        message: `${players.player2Name}, Choose one!`,
        choices: ["Rock", "Paper", "Scissors"]
    }
]);

if (game.Player1 === game.Player2) {
    console.log("It's a Tie!!!");
} else if ((game.Player1 === "Rock" && game.Player2 === "Scissors") ||
           (game.Player1 === "Paper" && game.Player2 === "Rock") ||
           (game.Player1 === "Scissors" && game.Player2 === "Paper")) {
    console.log(`${players.player1Name}, Wins!!`);
} else {
    console.log(`${players.player2Name}, Wins`);
}
