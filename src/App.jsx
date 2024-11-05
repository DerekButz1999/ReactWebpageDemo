import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Region from './components/pages/Region'
import Characters from './components/pages/Characters'
import SignUp from './components/pages/SignUp'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/regions' Component={Region}/>
        <Route path='/characters' Component={Characters}/>
        <Route path='/sign-up' Component={SignUp}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
