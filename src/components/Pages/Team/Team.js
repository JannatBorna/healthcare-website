import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import img1 from '../../../images/ourteam/p-1.png';
import img2 from '../../../images/ourteam/p-2.png';
import img3 from '../../../images/ourteam/p-3.png'; 
import img4 from '../../../images/ourteam/p-4.png';
import img5 from '../../../images/ourteam/p-5.png';
import img6 from '../../../images/ourteam/p-6.png';
import './Team.css'

const Team = () => {
   
    
        
    return (
       
        <Container>
            <h1 className="text-center fw-3">Our Doctor Tea<span className="text-color">M</span></h1>
            <Row lg={1} md={1} xs={1} className="g-4">
             <div className="card-align my-5">  
                <div className="card w-100 border-0 shadow" >
                    <div className="inner">
                        <img src={img1} className="card-img-top" alt="..." />
                    </div>
                    <div class="card-body">
                        <div className="card-title text-center">
                            <h4>Dr.Anderson</h4><p className="doctor">-Anesthesiologist-</p>
                        </div>
                    </div>
                </div>

                <div className="card w-100 border-0 shadow" >
                    <div className="inner">
                        <img src={img2} className="card-img-top" alt="..." />
                    </div>
                    <div class="card-body">
                        <div className="card-title text-center">
                            <h4>Dr.Aaron</h4><p className="doctor">-Allergist/Immunologist-</p>
                        </div>
                    </div>
                </div>
                <div className="card w-100 border-0 shadow" >
                    <div className="inner">
                        <img src={img3} className="card-img-top" alt="..." />
                    </div>
                    <div class="card-body">
                        <div className="card-title text-center">
                            <h4>Dr.Reese</h4><p className="doctor">-Psychiatrist-</p>
                        </div>
                    </div>
                </div>
                <div className="card w-100 border-0 shadow" >
                    <div className="inner">
                        <img src={img4} className="card-img-top" alt="..." />
                    </div>
                    <div class="card-body">
                        <div className="card-title text-center">
                            <h4>Dr.Naresh</h4><p className="doctor">-Emergency Physician-</p>
                        </div>
                    </div>
                </div>

                <div className="card w-100 border-0 shadow" >
                    <div className="inner">
                        <img src={img5} className="card-img-top" alt="..." />
                    </div>
                    <div class="card-body">
                        <div className="card-title text-center">
                            <h4>Dr.Myles</h4><p className="doctor">-Ophthalmologist-</p>
                        </div>
                    </div>
                </div>

                <div className="card w-100 border-0 shadow" >
                    <div className="inner">
                        <img src={img6} className="card-img-top" alt="..." />
                    </div>
                    <div class="card-body">
                        <div className="card-title text-center">
                            <h4>Dr.Khalid</h4><p className="doctor">-Neurologist-</p>
                        </div>
                    </div>
                </div>
               
            </div>

            </Row>
        </Container>   
      
        
 
    );
};

export default Team;

{/* <div className="container-fluid my-5 card">
                <h1 className="text-center fw-bold mb-5">Owl <span className="text-danger">Carousel</span></h1>
                <div className="row">
                    <div className="col-12 m-auto ">
                        <div>
                            <div className="item mb-4">
                                <div className="card border-0 shadow w-25">
                                    <img src={img1} alt="" className="card-img-top w-25" />
                                    <div className="card-body">
                                        <div className="card-title text-center">
                                            <h4>Owl Carousel</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item ">
                                <div className="card border-0 shadow w-25">
                                    <img src={img2} alt="" className="card-img-top w-25" />
                                    <div className="card-body">
                                        <div className="card-title text-center">
                                            <h4>Owl Carousel</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="card border-0 shadow w-25">
                                    <img src={img3} alt="" className="card-img-top w-25" />
                                    <div className="card-body">
                                        <div className="card-title text-center">
                                            <h4>Owl Carousel</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="card border-0 shadow w-25">
                                    <img src={img4} alt="" className="card-img-top w-25" />
                                    <div className="card-body">
                                        <div className="card-title text-center">
                                            <h4>Owl Carousel</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="card border-0 shadow w-25">
                                    <img src={img5} alt="" className="card-img-top w-25" />
                                    <div className="card-body">
                                        <div className="card-title text-center">
                                            <h4>Owl Carousel</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="card border-0 shadow w-25">
                                    <img src={img6} alt="" className="card-img-top w-25" />
                                    <div className="card-body">
                                        <div className="card-title text-center">
                                            <h4>Owl Carousel</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div> */}
    