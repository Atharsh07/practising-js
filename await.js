// async await syntax

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function solve() {
      await setTimeoutPromisified(1000);
      console.log("hi");
      await setTimeoutPromisified(3000);
      console.log("hello");
      await setTimeoutPromisified(5000);
      console.log("hi there");
  }

  solve();

// catch the error

const fs = require('fs')

function  readfil() {
    return new Promise(function(resolve, reject) {
        fs.readFile("test.txt", "utf-8", function(err, data) {
            if(err){
                reject("file doesnt exit");
            }else{
                resolve(data);
            }
        })
    })
}

readfil().then(function(x) {
    console.log("file has been read");
}).catch(function(e) {
    console.log(e);
})
