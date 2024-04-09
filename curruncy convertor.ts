//Curruncy convertor in Typescript By Wazeema Aamir

//The Typescript console app is used to convert curruncies: the user enters a 
//while developing the app, the beginners can master  variables, algggorithm

//Step 1 : curruncy conversion rates:

// import inquirer from "inquirer";

//In PKR
let conversion = {
    "PKR" : {
        "USD" : 0.0036,
        "GBP" : 0.0037,
        "PKR" : 1,
    },

//In GBP
    "GBP" : {
         "USD" : 1.21,
         "PKR" : 350,
         "GBP" : 1,
    },

//In Dollar
     "USD" : {
        "PKR" : 277.58,
        "GBP" : 0.83,
        "USD" : 1,
     },    
}

//Step 2 : Using Inquirer

const answer : {
    from : "PKR" | "USD" | "GBP",
    to : "PKR" | "USD" | "GBP"

    //DataType declared
    amount : number
// } = await inquirer.prompt([
    // {
        type : "list",
        name : "from",
        choices : ["PKR", "USD", "GBP"],
        message : "Select your curruncy....?"
    // },

    // {
        // type : "list",
        // name : "to",
        // choices : ["PKR", "USD", "GBP"],
        // message : "Select your conversion curruncy",
    // },

//Conversion amount

// {
    // type : "number",
    // name : "amount",
    // message : "Enter your conversion amount",
// }
// ])

//Step 3 : Output

// const {from, to, amount} = answer

//check input in given program

// if(from && to && amount) {
    //formula
    // let result = conversion [from][to] * amount
    // console.log('your convrsion from ${from} to ${to} is ${result}')
// }else{
    //generate error
    // console.log("invalid inputs")
// }