const btn = document.querySelector("button");

let number = 1;
let activeNumber = 1;

const addElement = function () {
  const div = document.createElement("div");
  div.textContent = number;
  // 1 sposób
  // if (number % 5 == 0) {
  //   div.classList.add("circle");
  // }

  // 2 sposób
  if (activeNumber == 5) {
    activeNumber = 0;
    div.classList.add("circle");
  }

  document.body.appendChild(div);
  number++;
  activeNumber++;
  console.log(number);
};

btn.addEventListener("click", addElement);
