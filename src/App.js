import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about'
import Destination from './pages/destination'

const App = () => {
    return(
      <Router>
        <Routes>
          <Route path='/' element ={<Home/>}></Route>
          <Route path='/About' element ={<About/>}></Route>
          <Route path='/Destination' element ={<Destination/>}></Route>
        </Routes>
      </Router>
    )
}

export default App
