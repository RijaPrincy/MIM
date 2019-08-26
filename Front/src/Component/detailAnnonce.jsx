import React, { Component } from 'react'
import axios from 'axios'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact"


export default class detailAnnonce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            annonce: "",

        }
    }


    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get("http://localhost:8080/getOne/" + this.props.match.params.id)
            .then(resp => {
                this.setState({
                    annonce: resp.data
                })
                console.log(resp.data);
            }).catch(err => {
                console.log(err);
            })

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9" >
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
                        <div className="container" style={{marginTop:"20px",marginBottom:"29px"}}>{this.state.annonce.description}</div>
                        {/* <div class="w3-content" style={{maxWidth:"1200px"}}>
                            <img class="mySlides" src="http://localhost:8080/image/ghj" style={{width:"100%"}}/>
                            <img class="mySlides" src="http://localhost:8080/image/ghj" style={{width:"100%"}}/>
                            <img class="mySlides" src="http://localhost:8080/image/ghj" style={{width:"100%"}}/>

                            <div class="w3-row-padding w3-section">
                                <div class="w3-col s4">
                                <img class="demo w3-opacity" src="http://localhost:8080/image/ghj"
                                style={{width:"100%"}} onclick="currentDiv(1)"/>
                                </div>
                                <div class="w3-col s4">
                                <img class="demo w3-opacity" src="http://localhost:8080/image/ghj"
                                style={{width:"100%",display:"none"}} onclick="currentDiv(2)"/>
                                </div>
                                <div class="w3-col s4">
                                <img class="demo w3-opacity" src="http://localhost:8080/image/ghj"
                                 style={{width:"100%",display:"none"}} onclick="currentDiv(3)"/>
                                </div>
                            </div>
                            </div> */}
                        <MDBContainer>
                            <MDBCarousel
                                activeItem={1}
                                length={6}
                                showControls={true}
                                showIndicators={true}
                                className="z-depth-1"
                            >
                                <MDBCarouselInner>
                                    <MDBCarouselItem itemId="1">
                                        <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src="http://localhost:8080/image/ghj"
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
                                                src="http://localhost:8080/image/ghj"
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
                                                src="http://localhost:8080/image/ghj"
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
                                                src="http://localhost:8080/image/ghj"
                                                alt="Third slide"
                                            />
                                            <MDBMask overlay="black-light" />
                                        </MDBView>
                                        <MDBCarouselCaption>
                                            <h3 className="h3-responsive">Slight Mast</h3>
                                            <p>Third text</p>
                                        </MDBCarouselCaption>
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="5">
                                        <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src="http://localhost:8080/image/ghj"
                                                alt="Third slide"
                                            />
                                            <MDBMask overlay="black-light" />
                                        </MDBView>
                                        <MDBCarouselCaption>
                                            <h3 className="h3-responsive">Slight Mast</h3>
                                            <p>Third text</p>
                                        </MDBCarouselCaption>
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="6">
                                        <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src="http://localhost:8080/image/ghj"
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







                    <div className="col-md-3">

                        <form id="login-form" class="form" action="" method="post">
                            <h3 class="text-center text-info">Nous contacter</h3>
                            <div class="form-group">
                                <label for="username" >Nom:</label><br />
                                <input type="text" name="titre" value={this.state.titre} onChange={this.change} id="titre" class="form-control" required/>
                            </div>


                            <div class="form-group">
                                <label for="password" >Prénom:</label><br />
                                <input type="text" name="text" value={this.state.date} onChange={this.change} id="date" class="form-control" />
                            </div>



                            <div class="form-group">
                                <label for="password" >email:</label><br />
                                <input type="email" name="heureDebut" value={this.state.heureDebut} onChange={this.change} id="heureDebut" class="form-control" required/>
                            </div>


                            <div class="form-group">
                                <label for="password" >telephone:</label><br />
                                <input type="text" name="duree" value={this.state.duree} onChange={this.change} id="duree" class="form-control" required/>
                            </div>



                            <div class="form-group">
                                <label for="password" >Votre message:</label><br />
                                <textarea type="text" name="description" value={this.state.description} onChange={this.change} id="Description" class="form-control" />
                            </div>


                            <div class="form-group">

                                <input type="submit" name="submit" class="btn btn-info btn-md" value="Envoyer" />


                            </div>
                            <div id="reussi" style={{ color: "#f3671f", fontSize: "2em" }}></div>
                            <div id="non" style={{ color: "#f3671f", fontSize: "2em" }}></div>

                        </form>
                    </div>
                </div>

            </div>
        )
    }
}
