const square = document.querySelector(".color-square");
const generateColorBtn = document.querySelector("[data-generate-btn]");
const Btns = document.getElementsByClassName("button");

generateColorBtn.addEventListener("click", () => {
  const wrongGuess = document.querySelector(".wrong-answer");

  if (wrongGuess) {
    wrongGuess.remove();
  }

  if ([...Btns].length > 0) {
    [...Btns].forEach((btn) => btn.remove());
  }

  let generatedColor = generateRandomHex();
  let choiceArray = [
    `#${generatedColor}`,
    `#${generateRandomHex()}`,
    `#${generateRandomHex()}`,
  ].sort(() => 0.5 - Math.random());

  square.style.backgroundColor = `#${generatedColor}`;

  container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  render(generatedColor, choiceArray);
});

function generateRandomHex() {
  const newColor = [];
  const arrayOfSymbols = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  for (let i = 0; i < 6; i++) {
    newColor.push(
      arrayOfSymbols[Math.floor(Math.random() * arrayOfSymbols.length)]
    );
  }

  return newColor.join("");
}

function render(generatedColor, choiceArray) {
  choiceArray.map((choice) => {
    const button = document.createElement("button");

    button.innerText = choice;
    button.classList.add("button");
    container.appendChild(button);

    button.addEventListener("click", () => {
      if (button.innerText === `#${generatedColor}`) {
        const text = document.createElement("div");
        text.innerText = "Guessed Right";
        container.appendChild(text);

        setTimeout(() => {
          container.innerHTML = "";
        }, 700);
      } else {
        const text = document.createElement("div");
        text.innerText = `Guessed Wrong! Right Answer: #${generatedColor}`;
        text.classList.add("wrong-answer");
        container.appendChild(text);
      }
    });
  });
}
