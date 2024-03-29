#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //$
let pinNumber = 14765;
let pinAnswer = await inquirer.prompt([
    {
        message: "Enter your pin Number",
        type: "number",
        name: "userNumber",
    },
]);
if (pinAnswer.userNumber === pinNumber) {
    console.log(`Correct Pin Code..!
    Your current balance is ${myBalance}`);
    let operationChoices = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "What do you want to do?",
            choices: ["Balance Inquiry", "Withdraw Cash", "Fast Cash"],
        },
    ]);
    if (operationChoices.operation === "Balance Inquiry") {
        console.log(`Your current balance is ${myBalance}`);
    }
    else if (operationChoices.operation === "Withdraw Cash") {
        let amount = await inquirer.prompt([
            {
                message: "How much money do you want to withdraw?",
                type: "number",
                name: "AmountAns",
            },
        ]);
        if (amount.AmountAns <= myBalance) {
            myBalance -= amount.AmountAns;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        else {
            console.log("Sorry! Insufficient Balance.");
        }
    }
    else if (operationChoices.operation === "Fast Cash") {
        let cashOp = await inquirer.prompt([
            {
                message: "How much money do you want to withdraw?",
                type: "list",
                name: "fastoptions",
                choices: [1000, 5000, 10000, 15000],
            }
        ]);
        if (cashOp.fastoptions <= myBalance) {
            myBalance -= cashOp.fastoptions;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        else {
            console.log("Sorry! Insufficient Balance.");
        }
    }
    else {
        console.log("Sorry incorrect pin code. Please try again..!");
    }
}
