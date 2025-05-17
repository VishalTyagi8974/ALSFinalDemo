import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import transparent from "../../animations/transparent.json"
import Lottie from "lottie-react";
import Socials from './Socials';
const scriptContactURL = import.meta.env.VITE_GOOGLE_SCRIPT_CONTACT_URL;


export default function ContactForm() {
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();



    const closeModal = () => {
        setSubmitSuccess(false);
        reset(); // Reset form on close
    };
    const onSubmit = async (formData) => {

        const fd = new FormData();
        fd.append("name", formData.name);
        fd.append("email", formData.email);


        try {
            await axios.post(
                scriptContactURL,
                fd,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                }

            );
            setSubmitSuccess(true)
        } catch (err) {
            console.error("Form submission error:", err);
        }
    };



    return (
        <>
            <div className='card shadow border-1 rounded-4 mx-auto ms-lg-4 contactForm mt-3 ' style={{ maxWidth: "550px" }}>
                <h5 className='card-title fw-semibold fs-4 mb-2'>Let's get you to the right place</h5>
                <p className='para fw-semibold'>We just need a few quick details.</p>
                <div>

                    <form onSubmit={handleSubmit(onSubmit)} className='mt-3' noValidate style={{ fontSize: "0.9rem" }}>
                        {/* Name */}
                        <div className="mb-3 d-flex " >
                            <label htmlFor="name" className="form-label para fw-semibold mt-2  " style={{ width: "110px" }} >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                style={{ fontSize: "0.9rem" }}
                                className="form-control fw-semibold "
                                placeholder='Enter your name'
                                {...register('name', { required: 'Full name is required' })}
                            />
                            {errors.name && <p className="text-danger ms-3">{errors.name.message}</p>}
                        </div>

                        {/* Email */}
                        <div className="mb-2 mt-2  d-flex">
                            <label htmlFor="email" className="form-label mt-2 para fw-semibold " style={{ width: "110px" }}>
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-control fw-semibold"
                                placeholder='abcd@xyz.com'
                                style={{ fontSize: "0.9rem" }}
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Invalid email address',
                                    },
                                })}
                            />
                            {errors.email && <p className="text-danger ms-3">{errors.email.message}</p>}
                        </div>





                        {/* Submit Button */}
                        <div className='mt-4 d-flex justify-content-between flex-wrap'>

                            <button type="submit" className="btn btn-secondary  rounded-pill genericButtons px-5 mt-3  mt-md-3 me-5" style={{ height: "2.5rem" }} disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                            <div className='mt-4 mt-sm-3'>
                                <Socials />
                            </div>
                        </div>

                    </form>
                </div >


            </div >
            <div className='px-4 px-md-5   mb-4 mt-1 py-0'>
                {submitSuccess && (

                    <div
                        className="modal fade show custom-modal"
                        id="contactModal"
                        tabIndex="-1"
                        aria-labelledby="contactModalLabel"
                        aria-hidden="true"
                        style={{ display: 'block' }}
                    >
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content rounded-4 shadow">
                                <div className="modal-header  border-0 bg-white text-white">

                                    <button
                                        type="button"
                                        className="btn-close mt-1 me-1"
                                        onClick={closeModal}
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body px-4 px-md-5   mb-4 mt-0 py-0">

                                    <Lottie animationData={transparent} autoPlay={true} loop={true} className='mb-3' style={{ height: "100px" }} />

                                    <h6 className='secondMainColor text-center fs-4 fw-bold  mb-2' >You Reached Us! </h6>
                                    <p className="secondMainColor text-center fs-5 "> We’ll get back to you shortly. <br /> Thanks! </p>


                                </div>
                            </div>
                        </div>
                    </div >

                )}

            </div>
        </>
    );
}
