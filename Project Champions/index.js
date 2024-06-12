// javascript
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://scrimba-386a9-default-rtdb.firebaseio.com/"
}


const app = initializeApp(appSettings)
const database = getDatabase(app)
const MessageInDB = ref(database, "messageList")

const inputFieldEl = document.getElementById("inputInfo")
const pushButtonEl = document.getElementById("publish-btn")
const messageListEl = document.getElementById("message-list")

pushButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    if(inputValue !== ""){
        push(messageListInDB, inputValue)
    }
    clearInputFieldEl()
})

onValue(messageListInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())

        clearMessageListEl()

        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]

            appendItemToMessageListEl(currentItem)
        }
    } else {
        messageListEl.innerHTML = "No items here... yet"
    }
})

function clearMessageListEl() {
    messageListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToMessageListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]

    let newEl = document.createElement("li")

    newEl.textContent = itemValue

    newEl.addEventListener("click", function() {

        let exactLocationOfItemInDB = ref(database, `messageList/${itemID}`)

        remove(exactLocationOfItemInDB)
    })

    messageListEl.append(newEl)
}