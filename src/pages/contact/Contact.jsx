import React from 'react'
import "./Contact.css";
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <div className='w-100 d-flex justify-content-center   flex-wrap  '>
            <div className='HeroContactSection' ></div>

            <section className="position-relative   contactCol mb-0"    >

                <div className=" text-start   mx-auto  z-1 row  mainContainer  "    >
                    <div className=' col-lg-5 px-0 '>
                        <h1 className="text-white display-2 fw-semibold mb-3 mb-lg-4 money ">
                            Contact Us
                        </h1>
                        <h2 className='text-white display-7 fw-semibold mb-4 mb-lg-5 money '>We're Here to Help You
                        </h2>
                        <p className="text-white fw-semibold mt-3  mb-4" style={{ fontSize: "1rem" }}>Have a legal question or need advice? At Apka Legal Salahkar, we're here to help.
                            <br /><br />
                            Contact us for fast, reliable, and confidential support. Whether it’s a simple query or a complex issue, our team is just a message away—and we’re committed to responding promptly.</p>
                    </div>


                    <div className=' col-lg-7 px-0 mb-5'>
                        <ContactForm />
                    </div>
                </div >
            </section >
        </div >
    )
}

export default Contact