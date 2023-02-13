import React from 'react';
import { useParams } from 'react-router';
import images from '../../../images/others/detail-1.png'
import { Card, Button } from 'react-bootstrap';
//import './Details.css'


const Details = () => {
    const { serviceId } = useParams();
  


    return (
        <div className="details">

            <h2 className="text-center fw-3 my-5">....He<span className="text-color">LL</span>o {serviceId} .....</h2>
            <Card className="w-100">
                <Card.Img className="w-25" variant="top" src={images}/>
                <Card.Body>
                    <Card.Title className="fw-bold">Services</Card.Title>
                    <Card.Text className="text-center w-25">
                        Medical services means medical and health care services provided to a Person, including, but not limited to, medical and health care services provided to a Person which are covered by a policy of insurance, and includes, without limitation, physician services, nurse and therapist services, dental services, hospital.
                    </Card.Text>
                    <Button variant="primary" className="align-self-center">Thank You</Button>
                </Card.Body>
            </Card>
            
            
        </div>



    );
};






export default Details;