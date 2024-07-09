let deckId
let valueary = []
let countComputer = 0
let countPlayer = 0
async function handleClick() {
    const res = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    const data = await res.json()
        console.log(data)
        deckId = data.deck_id
        document.getElementById('remainCards').textContent =`Remaining cards: ${data.remaining}`
        document.getElementById("draw-cards").disabled = false
}

document.getElementById("new-deck").addEventListener("click", handleClick)

document.getElementById("draw-cards").addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            
            document.getElementById("cards").innerHTML = `
                <img src=${data.cards[0].image} title="${data.cards[0].value}" />
                <img src=${data.cards[1].image} title="${data.cards[1].value}" class="secondCard"/>
            `
            cardVal1= data.cards[0].value
            cardVal2= data.cards[1].value
            if (cardVal1 === 'ACE') {cardVal1 = 14}
            if (cardVal1 === 'JACK') {cardVal1 = 11}
            if (cardVal1 === 'QUEEN') {cardVal1 = 12}
            if (cardVal1 === 'KING') {cardVal1 = 13}
            if (cardVal2 === 'ACE') {cardVal2 = 14}
            if (cardVal2 === 'JACK') {cardVal2 = 11}
            if (cardVal2 === 'QUEEN') {cardVal2 = 12}
            if (cardVal2 === 'KING') {cardVal2 = 13}
            cardVal1 = parseInt(cardVal1)
            cardVal2 = parseInt(cardVal2)
            valueary.push(cardVal1)
            valueary.push(cardVal2)
            if(valueary[0] > valueary[1]){
                countComputer++
                document.getElementById('computer').textContent =`Computer: ${countComputer}`
                document.getElementById('title').textContent =`Computer Win!`
            }
            else if(valueary[0] < valueary[1]){
                countPlayer++
                document.getElementById('player').textContent =`Me: ${countPlayer}`
                document.getElementById('title').textContent =`You Win!`
            }
            else{
                document.getElementById('title').textContent =`Draw!`
            }
            valueary = []
            document.getElementById('remainCards').textContent =`Remaining cards: ${data.remaining}`

            if(data.remaining === 0){
                document.getElementById("draw-cards").disabled = true;
                if(countComputer > countPlayer){
                    document.getElementById('title').textContent = 'Computer win the game!'
                }
                else if(countComputer < countPlayer){
                    document.getElementById('title').textContent = 'You win the game!'
                }
                else{
                    document.getElementById('title').textContent = 'It"s a draw game!'
                }
                
            }

        })
})







/**
 * Challenge:
 * 
 * Start making this look lots nicer :)
 * 
 * 1. Add a card table background with the img/table.png image provided.
 * 2. Move the draw button to the very bottom of the page, full width
 * 3. Add some button styles. You can use the photo on the slides
 * for one option.
 */