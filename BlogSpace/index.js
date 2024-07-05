
let postsArray = []
const postNum = 10
const renderPost = () =>{
    let html =''
    postsArray.forEach(item => {
            html += `
            <div class ="posts">
                <p style = "display:inline;">Post id: ${item.id}</p>
                <p style = "display:inline;">User ID: ${item.userId}</p>
                <h3>${item.title}</h3>
                <p>${item.body}</p>
            </div>
        `
        });
        document.querySelector("#container").innerHTML = html
}

const cleanPost =() => {
    document.querySelector("#container").innerHTML =``
    html =``
}

document.getElementById("clean-btn").addEventListener('click', ()=>{
    cleanPost()
})

document.getElementById("get-btn").addEventListener('click', ()=>{
    fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, postNum)
        renderPost()
        // document.getElementById("get-btn").textContent = 'Refresh'
        document.querySelector("#container").style.marginBottom = '2rem'
    })
})

document.getElementById("newPost").addEventListener('submit',(e)=>{
    e.preventDefault()
    
    const title = document.getElementById("post-title").value
    const body = document.getElementById("post-body").value
    const userId = 1
    let idNum = 12
    const newPost = {
        id:idNum,
        userId:userId,
        title:title,
        body:body
    }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts" ,{
        method:"POST",
        body:JSON.stringify(
            newPost
        ),
        headers: {
            "Content-Type": "application/json"
        } 
    })
    .then(res => res.json())
    .then(data => {
        
        postsArray.unshift(newPost)
        renderPost()
        document.querySelector("#container").style.marginBottom = '2rem'
        document.getElementById("newPost").reset()
        
    })
})