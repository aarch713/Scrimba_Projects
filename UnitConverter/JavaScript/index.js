// Get value from input



let inputNum = document.getElementById("input")
const btnEl = document.getElementById("btn")
const outputLength = document.getElementById("lengthOutput")
const outputVolume = document.getElementById("volumeOutput")
const outputMass = document.getElementById("massOutput")
btnEl.addEventListener('click',writeValue)
function writeValue () {
    let num = Number(inputNum.value)

    alert(typeof num)
    let calvalLen1 = num * 3.281
    let calvalLen2 = num / 3.281
    let calvalVol1 = num * 0.264
    let calvalVol2 = num / 0.264
    let calvalMas1 = num * 2.204
    let calvalMas2 = num / 2.204
    if((typeof inputNum.value) === "number"){
        outputLength.textContent = "AInvalid input, please enter number only.";
    }
    // else if(inputNum.value === String){
    //     outputLength.textContent = "SInvalid input, please enter number only.";
    // }
    else{
        outputLength.textContent =calvalLen1;
        outputVolume.textContent = calvalVol1;
        outputMass.textContent = calvalMas1;
    }


    //outputLength.textContent = inputNum.value
}

inputNum.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn").click();
    }
});

