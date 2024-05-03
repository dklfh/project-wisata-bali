import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about'
import Destination from './pages/destination'
import Contact from './pages/contact'
import Admin from './pages/admin'
import Datawisata from './pages/datawisata'
import Tes from './pages/Tes'



const App = () => {
    return(
      <Router>
        <Routes>
          <Route path='/' element ={<Home/>}></Route>
          <Route path='/tes' element ={<Tes/>}></Route>
          <Route path='/About' element ={<About/>}></Route>
          <Route path='/Destination' element ={<Destination/>}></Route>
          <Route path='/Contact' element ={<Contact/>}></Route>
          <Route path='/Admin' element ={<Admin/>}></Route>
          <Route path='/DataWisata' element ={<Datawisata/>}></Route>
        </Routes>
      </Router>
    )
}

export default App
