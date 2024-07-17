// import { useState } from 'react'
import React from 'react'
import Box from './Box'
import boxes from './boxes.js'
export default function App() {
  const [squares, setSquares] = React.useState(boxes)
  console.log('Im in App')
  function toggle(id) {
    setSquares(prevSquares => {
        return prevSquares.map((square) => {
            return square.id === id ? {...square, on: !square.on} : square
        })
    })
}


    
const squareElements = squares.map(square => (
  <Box 
      key={square.id} 
      on={square.on} 
      toggle={() => toggle(square.id)}
  />
))


  return (
    <main>
      {/* {squareElements} */}
    </main>
  )
}
