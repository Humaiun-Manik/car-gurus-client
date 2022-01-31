import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from './../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {

    const { allContext } = useAuth();
    const { user } = allContext;
    const { register, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <div className="Shipping">
            <h1 className="shipping-title text-sucess"> Shipping Form</h1>
            <div className="proceed-orders">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("DisplayName")} defaultValue={user.displayName} />
                    <input {...register("email")} defaultValue={user.email} />
                    <input {...register("city")} placeholder="City" />
                    <input {...register("Adress")} placeholder="Enter Your Address" />
                    <input type="number" {...register("Number")} placeholder="Enter Your Number" />
                    <input type="submit" className="btn btn-primary" />
                </form>
            </div>
        </div>
    );
};

export default Shipping;