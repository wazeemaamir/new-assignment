"use strict";
//An ATM By Wazeema Aamir In Typescript
//This screenshot is complex typescript/node.js is a console-based application.When the system
//start the user is prompted with a user ID and user pin after entering a details succesfully,
//the ATM functionalities are unlocked.All the user data is generated  
Object.defineProperty(exports, "__esModule", { value: true });
//start code by import inquirer
var inquirer_1 = require("inquirer");
var user = inquirer_1.default.prompt([
    {
        type: "string",
        name: "cardholdername",
        message: "Welcome Wazeema Aamir",
    },
    {
        type: "number",
        name: "pincode",
        message: "Enter the 4 digits Pin code"
    },
    //creating listing and withdrawl method
    {
        type: "list",
        name: "account type",
        message: "Enter the account type",
        choices: ["current", "saving"]
    },
    //transition type
    {
        type: "list",
        name: "transition type",
        message: "Select your transition type",
        choices: ["cash", "withdrawl"]
    },
    //selected amount    
    {
        type: "list",
        name: "amount",
        message: "Select your amount",
        choices: ["1000", "2000", "5000", "10000"]
    },
    //  when(user) {
    //     return user.transitionType === "cash"
    //  } 
    {
        type: "list",
        name: "amount",
        message: "Select your amount",
        choices: ["1000", "2000", "5000", "10000"]
    },
    //  when(user) {
    //     return user.transitionType === "withdrawl"
    //  } 
]);
//final slip
if (user.pincode) {
    var balance = Math.floor(Math.random() * 10000 + 1);
    console.log(balance);
    var enteramount = user.account;
    if (enteramount <= balance) {
        var remaining = balance - enteramount;
        console.log('you have withdrawl rupees ${enteramount}, you have remaining ${remaining}');
    }
    ;
}
;
