import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Store from './Store/store'
import Nav from './Component/navBar'
import PointDEntrer from './Component/pointEntrer'
import Auth from './Component/Authentification'

import Poster from './Component/posterAnnonce'
import MesAnnonce from './Component/listeMesAnnonces'
import DetailMes from './Component/detailMesAnnonces'


import  DetailAnnonce from './Component/detailAnnonce'




import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Dash from './Component/Dashboard'
import Footer from './Component/footer'


class App extends Component {

  render() {
    return (
      <div className="app">
       <Router>
         <div>
           <Route  path='/' component={PointDEntrer}></Route>
           <Route path='/authentification' component={Auth}></Route>
           <Route path='/Dashboard' component={Dash}></Route>
         </div>
       </Router>
        <Footer />


      </div>
    )
  }
}
export default App;

