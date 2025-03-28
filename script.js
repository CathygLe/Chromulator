const inputValue = document.getElementById("userinput");

const calculate = document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        let lastValue = inputValue.innerText.substring(inputValue.innerText.length, inputValue.innerText.length - 1);

        if (!isNaN(lastValue) && e.target.innerHTML === "=") {
            inputValue.innerText = eval(inputValue.innerText);

        } else if (e.target.innerHTML === "AC") {
            inputValue.innerText = "0";

        } else if (e.target.innerHTML === "DEL") {
            inputValue.innerText = inputValue.innerText.substring(0,inputValue.innerText.length - 1);
            if (inputValue.innerText.length == "0") {
                inputValue.innerText = "0";}

        } else {
            if (!isNaN(lastValue)) {
                inputValue.innerText += e.target.innerHTML;}}
    });
  });

const number = document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
      if (inputValue.innerText === "NaN") {
        inputValue.innerText = "";
      }
      if (inputValue.innerText === "0") {
        inputValue.innerText = "";
      }
      inputValue.innerText += e.target.innerHTML.trim();
    });
  });


  // Adding the functionality to update colors
const backgroundColorInput = document.getElementById("background-color");
const buttonColorInput = document.getElementById("button-color");
const keyColorInput = document.getElementById("key-color");


// Change button color when the user picks a color
buttonColorInput.addEventListener("input", function() {
  const buttons = document.querySelectorAll(".numbers");
  buttons.forEach(function(button) {
    button.style.backgroundColor = buttonColorInput.value;
  });
});

// Change key color when the user picks a color
keyColorInput.addEventListener("input", function() {
  const keys = document.querySelectorAll(".key-operate, .key-others");
  keys.forEach(function(key) {
    key.style.backgroundColor = keyColorInput.value;
  });
});

// Change background color when the user picks a color
backgroundColorInput.addEventListener("input", function () {
  const newColor = backgroundColorInput.value; // Get the new color from the input
  document.body.style.backgroundImage = `linear-gradient(135deg, ${newColor} 0%, #9599e2 100%)`;
});
