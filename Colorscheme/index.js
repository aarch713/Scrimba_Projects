
const colorInputVal = document.getElementById("color_preview")
const getBtn = document.getElementById("get-btn")
const optionValue = document.getElementById("color-option")

getBtn.addEventListener('click', () => {
    // console.log( colorInputVal.value.substr(1))
    // console.log( optionValue.selectedOptions[0].value)


    fetchData(colorInputVal.value.substr(1), optionValue.selectedOptions[0].value)
    document.getElementById("output").textContent = `Current Color: ${colorInputVal.value.substr(1)}   Mode: ${optionValue.selectedOptions[0].value}`
})


// document.querySelector(".colorView").addEventListener("click", () => {
//     let text = document.querySelector(".colorHex")
    
//     navigator.clipboard.writeText(text.textContent);

//     // Alert the copied text
//     alert("Copied the text: " + text.textContent);
    
// })



const fetchData = (colorHex, optionValue) => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${optionValue}&count=5`)
    .then(res => res.json())
    .then(data => {
        let html = ""
        for(let i = 0; i < data.colors.length; i++) {
            html += `
            <div class="colorCard">
                <div class="colorView" id ="color_${i+1}" style = "background-color: ${data.colors[i].hex.value}"><span>${data.colors[i].name.value}</span></div>
                <p class="colorHex textCenter">${data.colors[i].hex.value}</p>
            </div>
        `
        }
        document.querySelector(".color-section").innerHTML = html
        
    })
}











