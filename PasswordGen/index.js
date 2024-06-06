const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const basicSymbols =["~","`","!","@","#","$","%","^","&","*"]
const advancedSymbols = ["(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let totalArray = []




let passOne= document.querySelector("#psd-1")
let passTwo= document.querySelector("#psd-2")

let ranNum1= []
let ranNum2= []

function submit(){
    let box1 = document.querySelector("#numbers");
    let box2 = document.querySelector("#basicSym");
    let box3 = document.querySelector("#advSym");
    let finalCharacterSet=[]
    if (box1.checked){
        finalCharacterSet= finalCharacterSet.concat(characters,numbers)//1,2
    }
    else if(box1.checked && box2.checked ){
        finalCharacterSet= finalCharacterSet.concat(characters,numbers,basicSymbols)//1,2,3
    }
    else if(box1.checked && box2.checked && box3.checked){
        finalCharacterSet= finalCharacterSet.concat(characters,numbers,basicSymbols,advancedSymbols)//1,2,3,4
    }
    else if(box1.checked && box3.checked){
        finalCharacterSet= finalCharacterSet.concat(characters,numbers,advancedSymbols)//1,2,4
    }
    else if(box2.checked && box3.checked){
        finalCharacterSet= finalCharacterSet.concat(characters,basicSymbols,advancedSymbols)//1,3,4
    }
    else if(box2.checked){
        finalCharacterSet= finalCharacterSet.concat(characters,basicSymbols)//1,3
    }
    else if(box1.checked ===false && box2.checked ===false &&box3.checked ===false ){
        finalCharacterSet= finalCharacterSet.concat(characters)//1
    }
    else{
        finalCharacterSet= finalCharacterSet.concat(characters,advancedSymbols)//1,4
    }
    return finalCharacterSet
}

function randomDriver(){
    totalArray = submit()
    ranNum1 = []
    ranNum2 = []
    for(let i = 0; i<15; i++){
        ranNum1.push(totalArray[Math.floor(Math.random()*totalArray.length)])
    }

    for(let i = 0; i<15; i++){
        ranNum2.push(totalArray[Math.floor(Math.random()*totalArray.length)])
    }

    passOne.textContent = ranNum1.toString().replaceAll(",", "")
    passTwo.textContent = ranNum2.toString().replaceAll(",", "")

}



