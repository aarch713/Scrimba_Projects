
// async function get_search() {
//     const res = await fetch("http://www.omdbapi.com/?apikey=aff05929&s=batman")
//     const data = await res.json()
//     console.log(data)
// }


const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const searchVal = document.getElementById("movieSearch").value
    console.log(searchVal)
    const res = await fetch(`http://www.omdbapi.com/?apikey=aff05929&s=${searchVal}`)
    const data = await res.json();
    // console.log(data.Search[0].imdbID)
    document.getElementById('movieSearch').value='';
    let html =``
    // console.log(imdbRating)
    for(let i = 0; i <data.Search.length; i++){
        const res1 = await fetch(`http://www.omdbapi.com/?apikey=aff05929&i=${data.Search[i].imdbID}`)
        const data1 = await res1.json();
        console.log(data1)
        
    
        html +=
        `
        <div class="subContainer">
            <div class="filmcard">
                        <img src="${data1.Poster}" alt="film poster">
                        <div class="filminfo">
                            <div class="filmtitle padding2rem" id="filmname">
                                <h1 >${data1.Title}</h1>
                                <p>${data1.imdbRating}</p>
                            </div>

                            <div class="filmdetail padding2rem">
                                <p>${data1.Runtime} min</p>
                                <p>${data1.Genre}</p>
                                <button type="button"><i class="fa-solid fa-circle-plus"></i>Watchlist</button>
                            </div>

                            <p class="description padding2rem">${data1.Plot}</p>
                            

                        </div>
                    
            </div>
            <hr>
        </div>
        
        `
    }

    document.querySelector(".result").innerHTML = html
    
    


})

const render = (data) =>{
    
}
