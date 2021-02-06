import { sum } from "./sum";

console.log("Hello World");
console.log(sum(2, 3));

let headng = document.querySelector("#demo"),
    sumValue = sum(10, 5);

headng.innerHTML = `10 + 5 = ${sumValue}`;
