
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import MainSection from './components/MainSection/MainSection'
import NavBar from './components/NavBar/NavBar'
import { ToastContainer } from 'react-toastify';

function App() {

  const [count, setCount] = useState([]);
  const [resolve, setResolve] = useState([])

 

  return (
    <>
      <div className= 'px-20'>
        <NavBar></NavBar>
        <Banner resolve={resolve} count={count} ></Banner>
        <MainSection resolve={resolve} setResolve={setResolve} count={count} setCount={setCount}></MainSection>
        <Footer></Footer>
         <ToastContainer />
      </div>
      
    </>
  )
}

export default App
