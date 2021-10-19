import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hook/useAuth';

import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { id, name,  description, img } = service;
    const {user} = useAuth();
    return (
        <Container>
            <div className="service pb-3 mx-5 my-3">
                <img className="w-100 mx-auto my-2 rounded-circle"  src={img} alt="" />
                <h3 className="fw-normal fs-5 text-center">{name}</h3>
                <p className="fw-lighter fw-5 text-center text-description">{description}</p>

                <div className="text-center">
                    {
                        !user?.email ?
                            <Link to="/login">
                                <Button className="mb-3 details-btn align-self-center more-btn " type="submit" >See More <i class="fas fa-arrow-right"></i></Button>
                            </Link>
                            :
                            <Link to={`/details/${id}`}>
                                <Button className="mb-3 details-btn align-self-center" type="submit" >See More <i class="fas fa-arrow-right"></i></Button>
                            </Link>
                    }
                </div>

            </div>
        </Container>
    );
};

 
        export default Service;
 
 
 
 //<div className="my-5">
//             <Container>
                
//                 <Row lg={3} md={2} xs={1}>
                    

//                                 <Card className="shadow service my-3">
//                                     <Card.Img className="w-100 mx-auto my-2 rounded-circle" variant="top" src={img} />
//                                     <Card.Body>
//                                         <Card.Title className="fw-normal fs-5">{name}</Card.Title>
//                                         <Card.Text className="fw-lighter fw-5">
//                                             {description}
//                                         </Card.Text>

//                                     </Card.Body>

//                                    {
//                                         !user?.email ? <Link to="/login">
//                                             <Button className="my-2 details-btn align-self-center" type="submit" >See More <i class="fas fa-arrow-right"></i></Button>
//                                         </Link>


//                                             :
//                                             <Link to={`/details/${img}`}>
//                                                 <Button  className="my-2 details-btn align-self-center" type="submit" >See More <i class="fas fa-arrow-right"></i></Button>
//                                             </Link>
//                                     }





//                                 </Card>
                           
//                 </Row>
//             </Container>

//         </div>
//     );
// };