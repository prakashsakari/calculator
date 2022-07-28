let selectButton = document.querySelector(".btn-container");
let input = document.querySelector(".input");
let result = document.querySelector(".result");
let showDate = document.querySelector(".date");
let value = "";
let alphaRegex = /^[a-z]+$/i;

let date = new Date();

showDate.innerText = date.getHours() + ":" + date.getMinutes();

input.addEventListener("keyup", () => {
  value = input.value;
  console.log(value);
});

selectButton.addEventListener("click", (event) => {
  if (!alphaRegex.test(value)) {
    if (event.target.innerText === "del") {
      value = value.slice(0, -1);
      input.value = value;
    } else if (event.target.innerText === "C") {
      result.innerText = "";
      input.value = value = "";
    } else if (event.target.innerText === "=") {
      let reversedExpr = value.split("").reverse().join("");
      if ("+-*/".includes(reversedExpr[0])) {
        console.log("Add a number after the operator");
      } else {
        let total = eval(value).toString();
        if (total.length > 10) {
          result.style.fontSize = "20px";
        } else {
          result.style.fontSize = "32px";
        }
        result.innerHTML = total;
        console.log(eval(value));
      }
    } else {
      value += event.target.innerText;
      input.value = value;
    }
  } else {
    console.log("Invalid Input");
  }
});
