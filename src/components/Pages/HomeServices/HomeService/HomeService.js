import React from 'react';
import { Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hook/useAuth';

// import './Service.css';

const HomeService = ({ homeService }) => {
    const { id, name,  description, img } = homeService;
    const {user} = useAuth();
    return (
        <Container>
            <div className="service">
                <img  src={img} alt="" />
                <h3 className="fw-normal fs-5 text-center mt-3">{name}</h3>
                <p className="fw-lighter fw-5 text-center text-description">{description}</p>

                <div className="text-center">
                    {
                        !user?.email ?
                            <Link to="/login">
                                <button className="button align-self-center" type="submit">Booking Now</button>
                            </Link>
                            :
                            <Link to={`/details/${id}`}>
                                <button className="mb-3 button align-self-center" type="submit">Booking Now</button>
                            </Link>
                    }
                </div>

            </div>
        </Container>
    );
};

 
export default HomeService;
 