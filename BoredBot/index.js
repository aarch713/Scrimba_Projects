const btn = document.querySelector(".btn")
btn.addEventListener('click', function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
.then(response => response.json())
.then(data => {
    console.log(data)
    document.getElementById("activity-name").innerHTML = `<p class="fade">${data.activity}</p>
                    <p class="marginBottom fade">What do yo want to do next?</p>`
})
})