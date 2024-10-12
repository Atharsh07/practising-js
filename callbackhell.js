// //callbackhell
setTimeout(function () {
    console.log("hi");
    setTimeout(function () {
      console.log("hello");

      setTimeout(function () {
        console.log("hello there");
      }, 5000);
    }, 3000);
  }, 1000);

// // promised verison of callbackhell

function setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  setTimeoutPromisified(1000).then(function () {
    console.log("hi");
    setTimeoutPromisified(3000).then(function () {
      console.log("hello");
      setTimeoutPromisified(5000).then(function () {
        console.log("hello there");
      });
    });
  });

  //promise chaining
function  setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

  setTimeoutPromisified(1000).then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000)
  }).then(function() {
    console.log("hello");
    return setTimeoutPromisified(5000)
  }).then(function () {
    console.log("hi there")
  })
console.log("its an promise chaining with callback hell")

