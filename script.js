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

function generateArray() {
  const arrayInput = document.querySelector("#input-area-array");
  const arrayOutput = document.querySelector("#result-area-array");
  console.log(arrayInput.value);
  let array = Array.from({ length: arrayInput.value }, () =>
    Math.floor(Math.random() * arrayInput.value)
  );

  arrayOutput.innerHTML = "[" + array + "]";
}

function generateObject() {
  const objectInput = document.querySelector("#input-area-object");
  const objectOutput = document.querySelector("#result-area-object");

  let randomObject = {};
  let count = objectInput.value;

  for (let i = 0; i < count; i++) {
    let randomKey = Math.random().toString(36).substring(2, 7);
    let randomProperty = Math.random().toString(36).substring(2, 7);

    randomObject[randomKey] = randomProperty;
  }

  objectOutput.innerHTML = JSON.stringify(randomObject);
}

function generateRandom() {
  const randomInput = document.querySelector("#input-area-random");
}
