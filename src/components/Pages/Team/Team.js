import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../../../images/ourteam/p-1.png';
import img2 from '../../../images/ourteam/p-2.png';
import img3 from '../../../images/ourteam/p-3.png'; 
import img4 from '../../../images/ourteam/p-4.png';
import img5 from '../../../images/ourteam/p-5.png';
import img6 from '../../../images/ourteam/p-6.png';
import './Team.css'

const Team = () => {
   
    
return (
    <div className='section-gap'>
        <Row>
            <Col lg={12} md={12} sm={12}>
                <div className='text-center'>
                    <h2>Our Doctors</h2>
                    <p>We may consider a Doctor, the most important person in society. He 
                    treats <br /> from one or many diseases. The doctor has a profound   
                    knowledge of various illnesses.</p>
                </div>
            </Col>
        </Row>

        <Container>
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
        </Container>   
    </div>
      );
};

export default Team;

 
        
 
   