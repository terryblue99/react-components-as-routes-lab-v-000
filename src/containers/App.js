import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Movies from '../components/Movies'
import Actors from '../components/Actors'
import Directors from '../components/Directors'

const App = (props) => {
  return (
    <Router>
      <React.Fragment>
      	<NavBar />
      	<Route exact path='/' component={Home} />
      	<Route exact path='/movies' component={Movies} />
      	<Route exact path='/actors' component={Actors} />
      	<Route exact path='/directors' component={Directors} />
      </React.Fragment>
    </Router>
  )
}

export default App
