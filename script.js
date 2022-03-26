const arrayOutput = document.querySelector("#result-area-array");
const objectOutput = document.querySelector("#result-area-object");
const randomOutput = document.querySelector("#result-area-random");

function generate(id) {
  switch (id) {
    case "generate-button-array":
      generateArray();
      break;
    case "generate-button-object":
      generateObject();
      break;
    case "generate-button-random":
      generateRandom();
      break;
    default:
      break;
  }
}

const numbers = /^[0-9]+$/;

function generateArray() {
  const arrayInput = document.querySelector("#input-area-array");

  if (arrayInput.value <= 0 && !arrayInput.value.match(numbers))
    arrayOutput.innerHTML = "Please choose a number above 0";
  else {
    arrayOutput.innerHTML = "";
    let array = Array.from({ length: arrayInput.value }, () =>
      Math.floor(Math.random() * 99)
    );

    arrayOutput.innerHTML = "[" + array + "]";
  }
}

function generateObject() {
  const objectInput = document.querySelector("#input-area-object");

  if (objectInput.value <= 0 && !objectInput.value.match(numbers)) {
    objectOutput.innerHTML = "Please choose a number above 0";
  } else {
    objectOutput.innerHTML = "";
    let randomObject = {};
    let count = objectInput.value;

    for (let i = 0; i < count; i++) {
      let randomKey = Math.random().toString(36).substring(2, 7);
      let randomProperty = Math.random().toString(36).substring(2, 7);

      randomObject[randomKey] = randomProperty;
    }

    objectOutput.innerHTML = JSON.stringify(randomObject);
  }
}

function generateRandom() {
  const randomInput = document.querySelector("#input-area-random");

  if (randomInput.value <= 0 && !randomInput.value.match(numbers)) {
    randomOutput.innerHTML = "Please choose a number above 0";
  } else {
    randomOutput.innerHTML = "Oops not working yet...";
  }
}

function copyToClipboard(type) {
  let data;
  let tooltip;
  switch (type) {
    case "array":
      data = arrayOutput;
      tooltip = document.querySelector("#copy1");
      break;
    case "object":
      data = objectOutput;
      tooltip = document.querySelector("#copy2");
      break;
    case "random":
      data = randomOutput;
      tooltip = document.querySelector("#copy3");
      break;
    default:
      break;
  }

  //   data.setSelectionRange(0, 999999);

  navigator.clipboard.writeText(data.value);
  tooltip.style.display = "block";
  setTimeout(() => {
    tooltip.style.display = "none";
  }, 2000);
}
