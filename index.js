#! /user/bin/env node
//import inquirer from "inquirer";
var todos = [];
var condition = true;
while (condition) {
    //l//et addingtodos = await inquirer.prompt([
    // {
    //     name: "todo",
    //     type: "input",
    //     message: "what do you want to add in your todos",
    // },
    {
        //     name: "addMoreTodos",
        //     type: "confirm",
        //     message: "Are you sure you add more todos",
        //     default: "false",
        // },
        // ]);
        // todos.push(addingtodos.todo);
        // condition = addingtodos.addMoreTodos;
        console.log(todos);
    }
    // let removeTodos = await inquirer.prompt([
    //     {
    //         name: "removeTodo",
    //         type: "confirm",
    //         message: "Do you want to remove a todo",
    //         default: "false",
    //     },
    // ]);
    // if(removeTodos.removeTodo){
    todos.pop();
}
console.log("Your todos:");
for (var i = 0; i < todos.length; i++) {
    console.log(todos[i]);
}
"Use strict";
console.log("hello world");
//core types
// 1. string
// 2. Numbers
// 3. bollean  true / false
var name1;
name1 = "bilal";
console.log(name1);
// const
// let
// var
