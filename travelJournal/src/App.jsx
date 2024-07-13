import React from 'react'
import data from '../data.js'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Locationcard from "../components/Locationcard"
export default function App() {
  const dataCard = data.map(item =>{
    return (
      <Locationcard
        key = {item.location}
        {...item}
        />
    )
  })
  return (
    <>
      <Header/>
      <main>
        {dataCard}
      </main>
      
      <Footer/>
    </>
  )
}