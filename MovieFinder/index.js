
// async function get_search() {
//     const res = await fetch("http://www.omdbapi.com/?apikey=aff05929&s=batman")
//     const data = await res.json()
//     console.log(data)
// }

let watchListSection ={}
const searchBtn = document.getElementById("searchBtn");
const addwatchListBtn =''
searchBtn.addEventListener('click', async (es) => {
    es.preventDefault();

    let searchVal = document.getElementById("movieSearch").value
    const res = await fetch(`http://www.omdbapi.com/?apikey=aff05929&s=${searchVal}`)
    const data = await res.json();
    document.getElementById("movieSearch").value =''
    
    
    // console.log(data.Search[0].imdbID)
    
    let html =``
    document.getElementById('blank').classList.add("hidden")
    document.querySelector("#errorPage").style.display ="none";
    document.querySelector("#blankError").style.display ="none";
    // console.log(imdbRating)
    try{
    for(let i = 0; i <data.Search.length; i++){
        const res1 = await fetch(`http://www.omdbapi.com/?apikey=aff05929&i=${data.Search[i].imdbID}`)
        const data1 = await res1.json();
        watchListSection={
            Poster:data1.Poster,
            Title:data1.Title,
            imdbRating:data1.imdbRating,
            Runtime:data1.Runtime,
            Genre:data1.Genre,
            Plot:data1.Plot,
            imdbID:data1.imdbID
        }
        console.log(watchListSection)
    
        html +=
        `
        <div class="subContainer">
            <div class="filmcard" >
                        <img src="${watchListSection.Poster}" alt="film poster" class="posterHolder">
                        <div class="filminfo">
                            <div class="filmtitle padding2rem" id="filmname">
                                <h1 >${watchListSection.Title}</h1>
                                <p>⭐ ${watchListSection.imdbRating}</p>
                            </div>

                            <div class="filmdetail padding2rem">
                                <p>${watchListSection.Runtime} &nbsp&nbsp</p>
                                <p> ${watchListSection.Genre}</p>
                                <button type="button" value="${watchListSection.imdbID}" id ="addWatchList"><i class="fa-solid fa-circle-plus"></i>Watchlist</button>
                            </div>

                            <p class="description padding2rem">${watchListSection.Plot}</p>
                            

                        </div>
                    
            </div>
            <hr>
        </div>
        
        `
        
        
    }
    
    
    document.querySelector(".result").classList.remove("hidden")
    document.querySelector(".result").innerHTML = html
    const watchListVal = document.getElementById("addWatchList").value
    console.log(watchListVal)
    const addwatchListBtn = document.getElementById("addWatchList")


    

}catch (error){
    
    console.log(error)
    
    if(error.value === undefined && searchVal ==='' ){
        document.querySelector("#errorPage").style.display ="none";
        document.querySelector(".result").classList.add("hidden")
        document.querySelector("#blankError").style.display ="flex";
    }else{
        document.querySelector("#blankError").style.display ="none";
        document.querySelector(".result").classList.add("hidden")
        document.querySelector("#errorPage").style.display ="flex";
    }
}
})