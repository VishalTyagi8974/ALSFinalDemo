import React from 'react';
import WhyAbout from './WhyAbout';
import "./About.css"
import WhatWeDo from './WhatWeDo';
const whatWeDo = [
    {
        heading: "ITR & Tax Planning",
        paragraph: "We help individuals and businesses with accurate income tax filing and smart tax-saving strategies."
    },
    {
        heading: "GST Services",
        paragraph: "From GST registration to timely filing, we keep your business tax-compliant and hassle-free."
    },
    {
        heading: "Trademark & Copyright",
        paragraph: "Protect your brand and creative work with expert registration and legal support."
    },
    {
        heading: "FSSAI & ISO Licensing",
        paragraph: "Get your business certified with FSSAI, ISO, and other essential licenses easily."
    }
];




const About = () => {
    return (
        <div className='w-100 d-flex justify-content-center flex-wrap  text-white py-5 ' style={{ background: 'no-repeat center/cover url("aboutPage/bg.svg")' }}>
            <div className='HeroAboutSection' ></div>

            <section className="position-relative mb-0 mt-2 mt-md-5 mainContainer 100vh"    >

                <h1 className="display-4 fw-bold mb-4 text-center" >About Apka Legal Salahkar</h1>
                <p className="lead mb-4 text-center">
                    At <strong>Apka Legal Salahkar</strong>, we believe that legal and financial services should be <strong>accessible, trustworthy, and affordable</strong> for everyone.
                    Our goal is to simplify these services and empower individuals, families, and businesses with the guidance they need.
                </p>

                <p className="mb-4">
                    Whether you need help with tax filing, financial planning, or legal consultation, our expert team ensures tailored solutions with a client-first approach.
                    Your rights are protected, your finances are optimized, and your questions are answered — clearly and professionally.  </p></section>
            <section className="position-relative mb-0 mt-2 mt-md-5 mainContainer"    >
                <div className='mb-5'>

                    <h3 className="fw-semibold display-5 text-center mb-5 mt-5">What We Do</h3>
                    <div className='d-flex flex-wrap justify-content-center'>
                        {whatWeDo.map((item, index) => (
                            <div key={index}><WhatWeDo heading={item.heading} paragraph={item.paragraph} /></div>
                        ))}
                    </div>
                </div>


                <WhyAbout />


            </section >

        </div >

    );
};

export default About;
