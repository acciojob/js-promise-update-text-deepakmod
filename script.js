//your JS code here. If required.
function sayHello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}


const outputElement = document.getElementById("output");
sayHello().then((message) => {
  outputElement.textContent = message;
});