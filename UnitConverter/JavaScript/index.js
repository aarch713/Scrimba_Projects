// Get value from input
let inputNum = document.getElementById("input")
const btnEl = document.getElementById("btn")
const outputLength = document.getElementById("lengthOutput")
const outputVolume = document.getElementById("volumeOutput")
const outputMass = document.getElementById("massOutput")
btnEl.addEventListener('click',writeValue)
function writeValue () {
    let num = Number(inputNum.value)
    // Calculation
    let calvalLen1 = parseFloat((num * 3.281).toFixed(3))
    let calvalLen2 = parseFloat((num / 3.281).toFixed(3))
    let calvalVol1 = parseFloat((num * 0.264).toFixed(3))
    let calvalVol2 = parseFloat((num / 0.264).toFixed(3))
    let calvalMas1 = parseFloat((num * 2.204).toFixed(3))
    let calvalMas2 = parseFloat((num / 2.204).toFixed(3))
    //output the results
    outputMass.textContent = `${num} kilos = ${calvalMas1} pounds | ${num} pounds = ${calvalMas2} kilos`
    outputLength.textContent =`${num} meters = ${calvalLen1} feet | ${num} feet = ${calvalLen2} meters`
    outputVolume.textContent = `${num} liters = ${calvalVol1} gallons | ${num} gallons = ${calvalVol2} liters`
}
//Enable enter key to convert the value
inputNum.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn").click();
    }
});
//Set the min and max value for input area
function enforceMinMax(el) {
    if (el.value != "") {
        if (parseInt(el.value) < parseInt(el.min)) {
            el.value = el.min;
        }
        if (parseInt(el.value) > parseInt(el.max)) {
            el.value = el.max;
        }
    }
}

