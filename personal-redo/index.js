
let authorName = ''
const getBackgroundImage = async () => {
    try{
    const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    const data = await res.json()
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    authorName = data.user.name
    document.querySelector('.author').textContent=`Photo by: ${authorName}`
    }
    catch(err){
        console.error(err);
    }
    
}

const getQuoteInfo = async ()=>{
    try{
        const url = 'https://api.quotable.io/random'
        const res = await fetch(url)
        const data = await res.json()
        const HTML =`
        <h2>${data.content}</h2>
        <p>--- ${data.author}</p>
        `
        document.querySelector('.quote').innerHTML = HTML
    }catch(err){
        console.error(err)
    }
}

navigator.geolocation.getCurrentPosition(async position => {
    try{
        const res = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
    if (!res.ok) {
        throw Error("Weather data not available")
    }
    const data = await res.json()
 
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    document.querySelector(".weather").innerHTML = `
        <img src=${iconUrl} />
        <p class="weather-temp">${Math.round(data.main.temp)}º</p>
        <p class="weather-city">${data.name}</p>
    `
}
    catch(err ){
        console.error(err)
    }
});

function getTime(){
    const date = new Date();
    document.querySelector(".time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "long"})
}


























// ----------------------------------------------------------------------------------------------------
// function call
getQuoteInfo()
getBackgroundImage()
setInterval(getTime,1000)
setInterval(getBackgroundImage,7200000)
setInterval(getQuoteInfo,600000)
