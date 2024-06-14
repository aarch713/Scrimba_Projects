const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

console.log(posts.length)

const divEl = document.getElementById("writeCode")
const btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    divEl.innerHTML=``
    if (posts.length== 0){
        divEl.textContent = "<p>No posts available.</p>";
    
    }else{
        for(let i=0; i <posts.length;i++){
            
            divEl.innerHTML += `
                    <section class="firstSec">
                        <div class="container">
                            <a href=""><img src="${posts[i].avatar}" class="profile-img sameD"></a>
                            <div>
                                <p class="bolder">${posts[i].name}</p>
                                <p>${posts[i].location}</p>
                            </div>
                        </div>
                        <img src="${posts[i].post}" alt="paint" class="main-img">
    
                    </section>
    
    
                    <section class="secondSec">
                        <div class="icons">
                            <a href="#"><img src="images/icon-heart.png" alt="like" class="left-icon"></a>
                            <a href="#"><img src="images/icon-comment.png" alt="comment" class="mid-icon"></a>
                            <a href="#"><img src="images/icon-dm.png" alt="share" class="rig-icon"></a>
                        </div>
                        <p class="bolder">${posts[i].likes} likes</p>
                        <p class="des">${posts[i].username} ${posts[i].comment}</p>
                    </section>
                `
        }
    
    }

})

