import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Test from './listeAnnonce'
import DetailAnnonce from './detailAnnonce'
import Footer from './footer'
import Authent from './Authentification'
import Dashboard from './Dashboard'

class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <Router>
                <div >
                    <MDBNavbar color="default-color" dark expand="md" style={{position:"fixed", width:"100%", zIndex:"99"}}>
                        <MDBNavbarBrand>
                            <strong className="white-text">Navbar</strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse} />
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem active>
                                    <MDBNavLink to="#!">Home</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/test">Features</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#!">Pricing</MDBNavLink>
                                </MDBNavItem>

                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBNavLink className="waves-effect waves-light" to="#!">
                                        <MDBIcon fab icon="twitter" />
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink className="waves-effect waves-light" to="#!">
                                        <MDBIcon fab icon="google-plus-g" />
                                    </MDBNavLink>
                                </MDBNavItem>

                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                    <Route path='/test' component={Test}/>
                    <Route path='/detailAnnonce/:id' component={DetailAnnonce}/>
                    <Route path='/authentification' component={Authent}/>
                    <Route path='/Dashboard' component={Dashboard}/>
                    <Footer/>
                </div>
                
            </Router>
        );
    }
}

export default NavbarPage;