import React, { Component } from 'react'
import './Dashboard.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Post from './posterAnnonce'
import MesAnnonces from './listeMesAnnonces'
import Detail from './detailMesAnnonces'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Router>
                    <body>
                        <div class="sidenav">
                            
                            <Link to="#services">Services</Link>
                            <Link to="/poster_annonce">Poter une annonce</Link>
                            <Link to="/MesAnnonces">Mes annonces</Link>
                            <Link to="#about">Se deconnecter</Link>
                           
                        </div>

                        <div class="main">
                        <Route path="/poster_annonce" exact component={Post} />
                        <Route path="/Dashboard" exact component={MesAnnonces} />
                        <Route path="/MesAnnonces"  component={MesAnnonces} />
                        <Route path="/DetailMesAnnonces/:id" exact component={Detail} />
                           </div>
                    </body>
                </Router>
               

            </div>
        )
    }
}
