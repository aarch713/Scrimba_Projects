
// async function get_search() {
//     const res = await fetch("http://www.omdbapi.com/?apikey=aff05929&s=batman")
//     const data = await res.json()
//     console.log(data)
// }
const searchVal = document.getElementById("movieSearch").value

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    
    const res = await fetch(`http://www.omdbapi.com/?apikey=aff05929&s=${searchVal}&Rating`)
    const data = await res.json();
    // console.log(data.Search[0].imdbID)
    
    // console.log(imdbRating)
    for(let i = 0; i <data.Search.length; i++){
        const res1 = await fetch(`http://www.omdbapi.com/?apikey=aff05929&i=${data.Search[i].imdbID}`)
        const data1 = await res1.json();
        console.log(data1.imdbRating)
        
    }


    


});

// const render = (data) =>{
//     html =``
//     for(item of data){
//         html +=
//         `
//         <div class="filmtitle padding2rem" id="filmname">
//             <h1 >Blade Runner</h1>
//             <p>8.1</p>
//         </div>

//         <div class="filmdetail padding2rem">
//             <p>164 min</p>
//             <p>Drama, Mystery, Sci-fi</p>
//             <button type="button"><i class="fa-solid fa-circle-plus"></i>Watchlist</button>
//         </div>

//         <p class="description padding2rem">A blade runner must pursue and terminate four
//             replicants who stole a ship in space, and have
//             returned to Earth to find their creator.
//         </p>
                            
//         `
//     }
    
// }
