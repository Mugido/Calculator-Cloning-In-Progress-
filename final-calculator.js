function loadCalculation() {
  return localStorage.getItem("calculation") || "";
}

let calculation = loadCalculation();

document.getElementById("result").innerText = "Calculation: " + calculation;

function saveCalculation() {
  localStorage.setItem("calculation", calculation);
}

function appendToCalculation(value) {
  calculation += value;
  document.getElementById("result").innerText = "Calculation: " + calculation;
  saveCalculation();
  console.log(calculation);
}

function calculateResult() {
  try {
    calculation = eval(calculation);
    document.getElementById("result").innerText = "Result: " + calculation;
    console.log(calculation);
    saveCalculation();
  } catch (error) {
    console.error("Invalid calculation:", calculation);
    document.getElementById("result").innerText = "Error";
  }
}

function clearCalculation() {
  calculation = "";
  document.getElementById("result").innerText = "";
  saveCalculation();
  console.log("Calculation cleared");
}