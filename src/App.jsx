
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import MainSection from './components/MainSection/MainSection'
import NavBar from './components/NavBar/NavBar'

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <div className= 'px-20'>
        <NavBar></NavBar>
        <Banner count={count} ></Banner>
        <MainSection count={count} setCount={setCount}></MainSection>
        <Footer></Footer>
      </div>
      
    </>
  )
}

export default App
