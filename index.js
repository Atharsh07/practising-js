const fs = require('fs');

// function argumetns basiically says that :- passing a function to an another function as an argument

function sum(a, b) {
    return a + b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function divide(a, b) {
    return a / b;
  }
  function doOperation(a, b, op) {
    return op(a, b)
  }

  console.log(doOperation(1, 2, sum))

  function print(err, data) {
    if(err){
        console.log("there is no file ")
    }else{
        console.log(data);
    }
  }
  fs.readFile('test.txt', 'utf-8', print);
  fs.readFile('test1.txt', 'utf-8', print);

  console.log("hello world")
