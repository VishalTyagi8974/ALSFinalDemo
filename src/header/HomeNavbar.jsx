import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HomeNavbar.css'; // Import custom CSS file for faster animations


export default function HomeNavbar() {
    const location = useLocation(); // Get current location for dynamic active class
    const scrollToTopAndCollapse = () => {
        window.scrollTo(0, 0);  // Scroll to top
    };

    useEffect(() => {
        // Get the close button and Offcanvas element
        const closeButton = document.querySelector('[data-bs-dismiss="offcanvas"]');

        if (closeButton) {
            // Programmatically trigger the click event on the close button
            closeButton.click();
        }
        scrollToTopAndCollapse()
    }, [location]); // Trigger on route change

    return (
        <div>
            <div
                className="offcanvas offcanvas-start "
                tabIndex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel"><Link to="/" className="navbar-brand ">
                        <img src="/logos/ALSlogowhite.png" alt="Bootstrap" width="105" height="40" />
                    </Link></h5>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        fill="white"
                    ></button>
                </div>
                <div className="offcanvas-body pt-2  ">
                    <ul className='list-unstyled'>
                        <li className="nav-item nav-link mt-1">
                            <Link
                                to="/"
                                className={`nav-link sideBarLi `}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="d-inline d-lg-none text-start ">
                            <div className="dropdown ">
                                <a className=" dropdown-toggle nav-link nav-item secondMainColor sideBarLi my-3" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                >
                                    Tax & Compilance<i style={{ fontSize: "0.8rem" }} className="bi bi-chevron-double-down"></i>
                                </a>
                                <ul className="dropdown-menu p-3 animate__animated animate__fadeIn animate__faster w-100   my-3">
                                    <span className=' equalSizing'> INCOME TAX</span>

                                    <li><Link className="dropdown-item" to="/services/taxAndCompilance/ITR-Filing"><i className="bi-file-earmark-text-fill thirdMainColor dropDownIcons"></i> Income Tax Return (ITR) Filing</Link></li>
                                    <li><Link className="dropdown-item" to="/services/taxAndCompilance/ITR-Notice-Appeal"><i className="bi-exclamation-circle-fill thirdMainColor dropDownIcons"></i> ITR Notice/Appeal</Link></li>
                                    <li><Link className="dropdown-item" to="/services/taxAndCompilance/Tax-Planning"><i className="bi-lightbulb-fill thirdMainColor dropDownIcons"></i> Tax Planning</Link></li>

                                    <span className=' equalSizing'> GST</span>

                                    <li><Link className="dropdown-item" to="/services/taxAndCompilance/GST-Registration"><i className="bi bi-pen-fill thirdMainColor dropDownIcons"></i> GST Registration</Link></li>
                                    <li><Link className="dropdown-item" to="/services/taxAndCompilance/GST-Return-Filing"><i className="bi bi-file-earmark-check-fill thirdMainColor dropDownIcons"></i> GST Return Filing</Link></li>

                                </ul>
                            </div>
                        </li>
                        <li className="d-inline d-lg-none  text-start ">
                            <div className="dropdown my-3">
                                <a className=" dropdown-toggle nav-link nav-item sideBarLi" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    TradeMark <i style={{ fontSize: "0.8rem" }} className="bi bi-chevron-double-down"></i>
                                </a>
                                <ul className="dropdown-menu p-3 animate__animated animate__fadeIn animate__faster  my-3 w-100 ">
                                    <span className=' equalSizing'>TRADEMARK</span>
                                    <li><Link className="dropdown-item" to="/services/trademark/Trademark-Registration"><i className="bi bi-pen-fill thirdMainColor dropDownIcons"></i> Trademark Registration</Link></li>
                                    <li><Link className="dropdown-item" to="/services/trademark/Trademark-Renewal"><i className="bi bi-disc-fill thirdMainColor dropDownIcons"></i> Trademark Renewal</Link></li>

                                    <span className=' equalSizing'>COPYRIGHT</span>

                                    <li><Link className="dropdown-item" to="/services/trademark/Copyright-Registration"><i className="bi-file-earmark-text-fill thirdMainColor dropDownIcons"></i> Copyright Registration</Link></li>

                                </ul>
                            </div>
                        </li>
                        <li className=" text-start nav-item nav-link my-3">
                            <div className="dropdown ">
                                <a className=" dropdown-toggle nav-link nav-item  sideBarLi" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Licenses <i style={{ fontSize: "0.8rem" }} className="bi bi-chevron-double-down"></i>
                                </a>
                                <ul className="dropdown-menu p-3 animate__animated animate__fadeIn animate__faster  my-3 w-100">
                                    <span className='equalSizing'>LICENSES</span>
                                    <li><Link className="dropdown-item" to="/services/licenses/FSSAI-Registration"><i className="bi-file-earmark-text-fill dropDownIcons thirdMainColor"></i> FSSAI Registration</Link></li>
                                    <li><Link className="dropdown-item" to="/services/licenses/FSSAI-Renewal"><i className="bi bi-disc-fill dropDownIcons thirdMainColor"></i> FSSAI Renewal</Link></li>

                                </ul>
                            </div>
                        </li>
                        <li className="nav-item nav-link my-3">
                            <Link
                                to="/services/others/ISO-Certification"
                                className={`nav-link sideBarLi `}
                            >
                                ISO
                            </Link>
                        </li>

                        <li className="nav-item nav-link my-3">
                            <Link
                                to="/about"
                                className={`nav-link sideBarLi`}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item d-block d-lg-none my-3 ">
                            <Link
                                to="/contact"
                                className={`nav-link  sideBarLi`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <nav className=" text-white navbar navbar-expand-lg z-10 relative p-2 px-2 px-md-3 px-xl-5 ">

                <div className="container-fluid d-flex justify-content-between" style={{ maxWidth: "1350px" }}>

                    <Link to="/" className="navbar-brand  ">
                        <img src="/logos/ALSlogowhite.png" alt="Bootstrap" width="105" height="40" />
                    </Link>

                    {/* Toggle button for collapsing the navbar */}
                    <button
                        className="navbar-toggler rounded-5  text-white border-1"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample"
                        style={{ backgroundC0lor: "#ffffff44" }}
                    >

                        <i className="bi bi-list  "></i>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center text-start " id="navbarNav">

                        <div className=''>
                            <ul className="navbar-nav ms-auto text-start d-block d-lg-flex align-items-center"> {/* Left-align items in collapsed navbar */}
                                <li className="nav-item">
                                    <Link
                                        to="/"
                                        className={`nav-link `}
                                    >
                                        Home
                                    </Link>
                                </li>

                                {/* Products Dropdown with faster animation */}
                                <li className="nav-item dropdown-start d-none d-lg-inline"  >

                                    <Link

                                        to="#"
                                        className="nav-link dropdown-toggle nav-item "
                                        id="navbarDropdownProducts"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Tax & Compilance <i style={{ fontSize: "0.8rem" }} className="bi bi-chevron-double-down"></i>
                                    </Link>
                                    <ul
                                        className="dropdown-menu  animate__animated animate__fadeIn animate__faster " id='navbarDropDownSpace'
                                        aria-labelledby="navbarDropdownProducts"



                                    >
                                        <div className="d-flex ">
                                            <div className='p-3'>
                                                <span className=' equalSizing'> INCOME TAX</span>

                                                <li><Link className="dropdown-item" to="/services/taxAndCompilance/ITR-Filing"><i className="bi-file-earmark-text-fill thirdMainColor dropDownIcons"></i> Income Tax Return (ITR) Filing</Link></li>
                                                <li><Link className="dropdown-item" to="/services/taxAndCompilance/ITR-Notice-Appeal"><i className="bi-exclamation-circle-fill thirdMainColor dropDownIcons"></i> ITR Notice/Appeal</Link></li>
                                                <li><Link className="dropdown-item" to="/services/taxAndCompilance/Tax-Planning"><i className="bi-lightbulb-fill thirdMainColor dropDownIcons"></i> Tax Planning</Link></li>
                                            </div>
                                            <div className='p-3'>
                                                <span className=' equalSizing'> GST</span>

                                                <li><Link className="dropdown-item" to="/services/taxAndCompilance/GST-Registration"><i className="bi bi-pen-fill thirdMainColor dropDownIcons"></i> GST Registration</Link></li>
                                                <li><Link className="dropdown-item" to="/services/taxAndCompilance/GST-Return-Filing"><i className="bi bi-file-earmark-check-fill thirdMainColor dropDownIcons"></i> GST Return Filing</Link></li>
                                            </div>
                                        </div>
                                    </ul>
                                </li>



                                <li className="nav-item dropdown-start d-none d-lg-inline"  >

                                    <Link

                                        to="#"
                                        className="dropdown-toggle nav-link  nav-item "
                                        id="navbarDropdownProducts"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        TradeMark <i style={{ fontSize: "0.8rem" }} className="bi bi-chevron-double-down"></i>
                                    </Link>
                                    <ul
                                        className="dropdown-menu  animate__animated animate__fadeIn animate__faster " id='navbarDropDownSpace'
                                        aria-labelledby="navbarDropdownProducts"



                                    >
                                        <div className="d-flex ">
                                            <div className='p-3'>
                                                <span className=' equalSizing'>TRADEMARK</span>

                                                <li><Link className="dropdown-item" to="/services/trademark/Trademark-Registration"><i className="bi bi-pen-fill thirdMainColor dropDownIcons"></i> Trademark Registration</Link></li>
                                                <li><Link className="dropdown-item" to="/services/trademark/Trademark-Renewal"><i className="bi bi-disc-fill thirdMainColor dropDownIcons"></i> Trademark Renewal</Link></li>
                                            </div>
                                            <div className='p-3'>
                                                <span className=' equalSizing'>COPYRIGHT</span>

                                                <li><Link className="dropdown-item" to="/services/trademark/Copyright-Registration"><i className="bi-file-earmark-text-fill thirdMainColor dropDownIcons"></i> Copyright Registration</Link></li>
                                            </div>
                                        </div>
                                    </ul>
                                </li>



                                <li className=" text-start nav-item">
                                    <div className="dropdown ">
                                        <a className=" dropdown-toggle nav-link nav-item " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Licenses <i style={{ fontSize: "0.8rem" }} className="bi bi-chevron-double-down"></i>
                                        </a>
                                        <ul className="dropdown-menu p-3 animate__animated animate__fadeIn animate__faster mb-3">
                                            <span className='equalSizing'>LICENSES</span>
                                            <li><Link className="dropdown-item" to="/services/licenses/FSSAI-Registration"><i className="bi-file-earmark-text-fill dropDownIcons thirdMainColor"></i> FSSAI Registration</Link></li>
                                            <li><Link className="dropdown-item" to="/services/licenses/FSSAI-Renewal"><i className="bi bi-disc-fill dropDownIcons thirdMainColor"></i> FSSAI Renewal</Link></li>

                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/services/others/ISO-Certification"
                                        className={`nav-link `}
                                    >
                                        ISO
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        to="/about"
                                        className={`nav-link`}
                                    >
                                        About
                                    </Link>
                                </li>



                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-light mainColor  rounded-pill d-none d-lg-block p-1 px-2 me-lg-4 contactButton' style={{ width: "130px", fontSize: "0.9rem" }} to="/contact">Contact Us <i className="bi bi-chevron-right" style={{ fontSize: "0.8rem" }}></i></Link>
                </div >


            </nav >
        </div >
    );
}
