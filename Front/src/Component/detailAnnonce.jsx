import React, { Component } from 'react'
import axios from 'axios'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact"
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';



export default class detailAnnonce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            annonce: "",
            url: "",
            url1: "",
            url2: "",
            url3: "",
            nom: "",
            prenom: "",
            email: "",
            telephone: "",
            message: "",
            reussi: "",
            non: ""

        }
        this.change = this.change.bind(this)
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get("http://localhost:8080/getOne/" + this.props.match.params.id)
            .then(resp => {
                this.setState({
                    annonce: resp.data,
                    url: "http://localhost:8080/image/" + resp.data.image,
                    url1: "http://localhost:8080/image/" + resp.data.image1,
                    url2: "http://localhost:8080/image/" + resp.data.image2,
                    url3: "http://localhost:8080/image/" + resp.data.image3,
                })
                console.log(resp.data);
            }).catch(err => {
                console.log(err);
            })

    }
    contact(e) {
        axios.post("http://localhost:8080/contact", e)
            .then(res => {
                console.log(res);
                if(res.data=="not ok"){
                    this.setState({
                        non: "non reussi",
                        reussi: ""
                    })
                }else{
                    this.setState({
                        non: "",
                        reussi: "reussi",
    
                    })
                }
                

            }).catch(er => {
                console.log(er);
                this.setState({
                    non: "non reussi",
                    reussi: ""
                })

            })

    }






    state={
        modal6: false,
        modal7: false
      }
      
      toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }
      
    render() {
        return (
            <div className="container">


                <div className="row" >
                    <div className="col-md-9" style={{ marginTop: "100px" }}>
                        <h2 className="font-weight-bold mb-3 p-0">
                            <strong>{this.state.annonce.typeV}  {this.state.annonce.type}  {this.state.annonce.pays} {this.state.annonce.commune} </strong>
                        </h2>
                        <h6 className="font-weight-bold mb-3 p-0">
                            {this.state.annonce.address}
                        </h6>
                        <h5 className="font-weight-bold mb-3 p-0">
                            {this.state.annonce.nbPiece} pièces/ {this.state.annonce.nbChambre} chambres/ {this.state.annonce.surfaceTerrain} m2
                                 </h5>
                        <h2 className="font-weight-bold mb-3 p-0">
                            <strong>{this.state.annonce.prix} Ar </strong>
                        </h2>
                        <h5 className="font-weight-bold mb-3 p-0">
                            <strong>Les caractéristiques : {this.state.annonce.caracteristique} </strong>
                        </h5>
                        <div className="container" style={{ marginTop: "20px", marginBottom: "29px" }}>{this.state.annonce.description}</div>

                        <MDBContainer>
                            <MDBCarousel
                                activeItem={1}
                                length={4}
                                showControls={true}
                                showIndicators={true}
                                className="z-depth-1"
                            >
                                <MDBCarouselInner>
                                    <MDBCarouselItem itemId="1">
                                        <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src={this.state.url}
                                                alt="First slide"
                                            />
                                            <MDBMask overlay="black-light" />
                                        </MDBView>
                                        <MDBCarouselCaption>
                                            <h3 className="h3-responsive">Light mask</h3>
                                            <p>First text</p>
                                        </MDBCarouselCaption>
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="2">
                                        <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src={this.state.url1}
                                                alt="Second slide"
                                            />
                                            <MDBMask overlay="black-light" />
                                        </MDBView>
                                        <MDBCarouselCaption>
                                            <h3 className="h3-responsive">Strong mask</h3>
                                            <p>Second text</p>
                                        </MDBCarouselCaption>
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="3">
                                        <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src={this.state.url2}
                                                alt="Third slide"
                                            />
                                            <MDBMask overlay="black-light" />
                                        </MDBView>
                                        <MDBCarouselCaption>
                                            <h3 className="h3-responsive">Slight Mast</h3>
                                            <p>Third text</p>
                                        </MDBCarouselCaption>
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="4">
                                        <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src={this.state.url3}
                                                alt="Third slide"
                                            />
                                            <MDBMask overlay="black-light" />
                                        </MDBView>
                                        <MDBCarouselCaption>
                                            <h3 className="h3-responsive">Slight Mast</h3>
                                            <p>Third text</p>
                                        </MDBCarouselCaption>
                                    </MDBCarouselItem>

                                </MDBCarouselInner>
                            </MDBCarousel>
                        </MDBContainer>


                    </div>







                    <div className="col-md-3" style={{ marginTop: "100px" }}>

                        <form id="login-form" class="form" action="" method="post">
                            <h3 class="text-center text-info">Nous contacter</h3>
                            <div class="form-group">
                                <label for="username" >Nom:</label><br />
                                <input type="text" name="nom" value={this.state.nom} onChange={this.change} id="titre" class="form-control" required />
                            </div>


                            <div class="form-group">
                                <label for="password" >Prénom:</label><br />
                                <input type="text" name="prenom" value={this.state.prenom} onChange={this.change} id="date" class="form-control" />
                            </div>



                            <div class="form-group">
                                <label for="password" >email:</label><br />
                                <input type="email" name="email" value={this.state.email} onChange={this.change} id="heureDebut" class="form-control" required />
                            </div>


                            <div class="form-group">
                                <label for="password" >telephone:</label><br />
                                <input type="text" name="telephone" value={this.state.telephone} onChange={this.change} id="duree" class="form-control" required />
                            </div>



                            <div class="form-group">
                                <label for="password" >Votre message:</label><br />
                                <textarea type="text" name="message" value={this.state.message} onChange={this.change} id="Description" class="form-control" />
                            </div>


                            <div class="form-group">

                                <input type="submit" onClick={(e) => {
                                    e.preventDefault()
                                    this.contact({
                                        nom: this.state.nom,
                                        prenom: this.state.prenom,
                                        telephone: this.state.telephone,
                                        email: this.state.email,
                                        message: this.state.message,
                                        idAnnonce: this.props.match.params.id

                                    })
                                }} name="submit" class="btn btn-info btn-md" value="Envoyer" />


                            </div>
                            <div id="reussi" style={{ color: "#f3671f", fontSize: "2em" }}>{this.state.reussi}</div>
                            <div id="non" style={{ color: "#f3671f", fontSize: "2em" }}>{this.state.non}</div>

                        </form>
                    </div>
                </div>




               

            </div>
        )
    }
}
