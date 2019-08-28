import React, { Component } from 'react'
import './Dashboard.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Post from './posterAnnonce'
import MesAnnonces from './listeMesAnnonces'
import Detail from './detailMesAnnonces'
import Nav from './navBar'

export default class Dashboard extends Component {
    componentDidMount(){
        console.log('DASHBOARD');  
    }
    render() {
        return (
            <div style={{fontSize:"20px"}}>
                <Nav/>
                <Router>
                    <body>
                        <div class="sidenav">
                            
                             <Link to="/poster_annonce">Poter une annonce</Link>
                            <Link to="/poster_annonce">Poster une annonce</Link>
                            <Link to="/MesAnnonces">Mes annonces</Link>
                            <a href='/' onClick={()=>{
                                localStorage.removeItem('token')
                                localStorage.removeItem('id')
                            }}>Se deconnecter</a>
                           
                        </div>

                        <div class="main">
                        <Route path="/poster_annonce" exact component={Post} />
                        <Route path="/Dashboard" exact component={MesAnnonces} />
                        <Route path="/" exact component={MesAnnonces} />
                        <Route path="/MesAnnonces" exact component={MesAnnonces} />
                        <Route path="/DetailMesAnnonces/:id" exact component={Detail} />
                           </div>
                    </body>
                </Router>
               

            </div>
        )
    }
}
