import React, { Component } from 'react'
import axios from 'axios'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

export default class test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: "",
            list1: '',
            pictures: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/getAll")
            .then(resp => {
                this.setState({
                    list: resp.data,
                    list1: resp.data
                })
                console.log("props", this.state.list);
            }).catch(err => {
                console.log(err);
            })

    }
    render() {
        return (
            <div className="container">
                <form>
                    <center><h3>Filtre​ </h3></center>
                    <div className="row">


                        <div class="form-group" className="col-md-6">

                            <select className="form-control" id="exampleFormControlSelect1" value={this.state.genre} onChange={this.select}>

                                <option value="none">Vente</option>
                                <option value="none">Location</option>
                            </select>
                        </div>
                        <div class="form-group" className="col-md-6">

                            <select className="form-control" id="exampleFormControlSelect2" name="gender" value={this.state.gender} onChange={this.select2}>
                                <option value="none" style={{ color: "blue" }}>Immobilier d'habitation</option>
                                <option value="none">Maison</option>
                                <option value="none">Appartement</option>
                                <option value="none">Terrain</option>
                                <option value="none">Garage/Parking</option>
                                <option value="none">Immeuble</option>
                                <option value="none" >Chalet/mobil-home</option>
                                <option value="none">Multipropriété</option>
                                <option value="none">Résidence avec service</option>
                                <option value="none" style={{ color: "blue" }}>Immobilier d'entreprise</option>
                                <option value="none">Bureau et locaux proffessionnel</option>
                                <option value="none">Fonds de commerce</option>
                                <option value="none">Local d'activité</option>
                                <option value="none">Résidence avec service</option>
                                <option value="none" style={{ color: "blue" }}>Divers</option>
                                <option value="none">Parkings</option>
                                <option value="none">Terrain</option>
                                <option value="none">Surface divers</option>

                            </select>
                        </div>



                    </div>
                    <div className="row">



                        <div className="col-md-2">

                            <input id="exampleFormControlSelect1" placeholder="prix min" type="number" />
                        </div>
                        <div className="col-md-2">

                            <input id="exampleFormControlSelect1" placeholder="prix max" type="number" />
                        </div>





                        <div class="form-group" className="col-md-2">

                            <select className="form-control" id="exampleFormControlSelect1" value={this.state.genre} onChange={this.select}>

                                <option value="none" desabled>Chambres</option>
                                <option value="none">1 Chambre</option>
                                <option value="none">2 Chambres</option>
                                <option value="none">3 Chambres</option>
                                <option value="none">4 Chambres</option>
                                <option value="none">5 Chambres</option>
                                <option value="none">6 Chambres</option>

                            </select>
                        </div>

                        <div class="form-group" className="col-md-2">

                            <select className="form-control" id="exampleFormControlSelect1" value={this.state.genre} onChange={this.select}>
                                <option value="none">type</option>
                                <option value="none">Vente</option>
                                <option value="none">Location</option>
                            </select>
                        </div>





                        <div class="form-group" className="col-md-2">

                            <select className="form-control" id="exampleFormControlSelect2" name="gender" value={this.state.gender} onChange={this.select2}>
                                <option value="none">Lieux</option>
                                <option value="man">man</option>
                                <option value="woman">woman</option>

                            </select>
                        </div>
                    </div>

                    <input type="submit" className="btn btn-primary" value="search" style={{ marginTop: "10px" }} />
                </form>
                <MDBCard className="my-5 px-5 pb-5">
                    <MDBCardBody>
                        <h2 className="h1-responsive font-weight-bold text-center my-5">
                            Recent posts
                        </h2>
                        <p className="text-center w-responsive mx-auto mb-5">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                        {this.state.list.length > 0 ? this.state.list.map((ate, index) => {
                            let a="http://localhost:8080/image/"+ate.image
                            let h=new Date(ate.date)
                            let r=h.getDate()+"/"+(h.getMonth()+1)+"/"+h.getFullYear()
                           return<div>
                               {index %2==0?
                               <div>
                                   <hr className="my-5" />
                                   <MDBRow>
                             <MDBCol lg="5">
                                 <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                     <img
                                         className="img-fluid"
                                         src={a}
                                         alt=""
                                     />
                                     <a href="#!">
                                         <MDBMask overlay="white-slight" />
                                     </a>
                                 </MDBView>
                             </MDBCol>
                             <MDBCol lg="7">
                                
                                 <h4 className="font-weight-bold mb-3 p-0">
                                     <strong>{ate.typeV}  {ate.type}  {ate.pays} {ate.commune} </strong>
                                 </h4>
                                 <h5 className="font-weight-bold mb-3 p-0">
                                     {ate.nbPiece} pièces/ {ate.nbChambre} chambres/ {ate.surfaceTerrain} m2 
                                 </h5>
                                 <h2 className="font-weight-bold mb-3 p-0">
                                     <strong>{ate.prix} Ar </strong>
                                 </h2>
                                 <p>
                                 {ate.description.length>200?ate.description.slice(0,200)+'...':ate.description}
                                 </p>
                                 <p>
                                 {r}
                                 </p>
                                 <MDBBtn color="success" size="md" className="waves-light " onClick={
                                   ()=>  this.props.history.push('/detailAnnonce/'+ate._id)
                                 }>
                                 En savoir plus
                                 </MDBBtn>
                             </MDBCol>
                         </MDBRow>
                                   </div>
                            :   <div><hr className="my-5" />
                         <MDBRow>
                            <MDBCol lg="7">
                            <h4 className="font-weight-bold mb-3 p-0">
                                <strong>{ate.typeV}  {ate.type}  {ate.pays} {ate.commune} </strong>
                            </h4>
                            <h5 className="font-weight-bold mb-3 p-0">
                                    {ate.nbPiece} pièces/ {ate.nbChambre} chambres/ {ate.surfaceTerrain} m2 
                            </h5>
                            <h2 className="font-weight-bold mb-3 p-0">
                                <strong>{ate.prix} Ar </strong>
                            </h2>
                            <p>
                                {ate.description}
                            </p>
                                
                                <p>
                                   
                                {r}
                                </p>
                                <MDBBtn
                                    color="pink"
                                    size="md"
                                    className="mb-lg-0 mb-4 waves-light"
                                    onClick={
                                        ()=>  this.props.history.push('/detailAnnonce/'+ate._id)
                                      }
                                >
                                    En savoir plus
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol lg="5">
                                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    <img
                                        className="img-fluid"
                                        src={a}
                                        alt=""
                                    />
                                    <a href="#!">
                                        <MDBMask overlay="white-slight" />
                                    </a>
                                </MDBView>
                            </MDBCol>
                        </MDBRow>
                             </div>
                        }
                            
                      
                           </div> 
                        }):""}
                        
                    </MDBCardBody>
                </MDBCard>
            </div>
        )
    }
}
