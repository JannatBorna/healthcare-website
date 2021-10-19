import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hook/useAuth';

import './Spinner.css';


const Spinner = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data =>
        console.log(data);
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Name" defaultValue={user.displayName} {...register("name")} />



                <input placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />

                {errors.email && <span className="error">This field is required</span>}

                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="Phone No." defaultValue="" {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Spinner;