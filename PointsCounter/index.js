
let countHome = 0
let countGuest= 0

let homeNum = document.getElementById("home")
let guestNum = document.getElementById("guest")
function addOne(){
    countHome+=1
    homeNum.innerHTML = countHome

}

function addTwo(){
    countHome+=2
    homeNum.innerHTML = countHome

}

function addThree(){
    countHome+=3
    homeNum.innerHTML = countHome
}
function addOne1(){
    countGuest+=1
    guestNum.innerHTML = countGuest

}

function addTwo2(){
    countGuest+=2
    guestNum.innerHTML = countGuest

}

function addThree3(){
    countGuest+=3
    guestNum.innerHTML = countGuest
}

function reset(){
    countHome = 0
    countGuest = 0
    homeNum.innerHTML = countHome
    guestNum.innerHTML = countGuest
}
