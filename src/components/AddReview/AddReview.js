import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './AddReview.css';

const AddReview = () => {

    const { allContext } = useAuth();
    const { user } = allContext;
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('https://glacial-ridge-81046.herokuapp.com/addreview', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Reviews Added Successfully');
                    reset();
                };
            });
    };

    return (
        <div className="review">
            <h1 className="review-title text-sucess"> Reviews Form</h1>
            <div className="proceed-review">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("DisplayName")} defaultValue={user.displayName} />
                    <input type=" Number "{...register("review")} placeholder="give review as number (0-5) " />
                    <textarea {...register("description")} placeholder="Enter Reviews" />
                    <input type="submit" className="review_btn" />
                </form>
            </div>
        </div>
    );
};
export default AddReview;