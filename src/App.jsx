
import './App.css'
import Banner from './components/Banner/Banner'
import MainSection from './components/MainSection/MainSection'
import NavBar from './components/NavBar/NavBar'

function App() {


  return (
    <>
      <div className= 'px-20'>
        <NavBar></NavBar>
        <Banner></Banner>
        <MainSection></MainSection>
      </div>
      
    </>
  )
}

export default App
