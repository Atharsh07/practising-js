
// promises

// example 1
function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  function callback() {
      console.log("3 seconds have passed");
  }
  setTimeoutPromisified(3000).then(callback)

console.log("----top of the file-----")
function  readthefile(resolve) {
    console.log("readfil compeleted")
    setTimeout(() => {
        console.log("callback based settimeout compeleted")
        resolve();
    }, 1000);
}
function  setTimeoutPromisified() {
    console.log("settimout called here")
    return new Promise(readthefile)
}
  let p = setTimeoutPromisified();
p.then(callback);
function  callback() {
    console.log("timer is done");
}
console.log("----end of the file----")

// example 2
function  thepromise(resolve) {
    return setTimeout(() => {
        resolve();
    }, 3000);
}
const a = new Promise(thepromise);
a.then(wtweneedto);
function  wtweneedto() {
    console.log(" etha promises uh , 3 sec ku aprm")
}


