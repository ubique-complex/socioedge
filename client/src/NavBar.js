import React from 'react'
import { Link } from 'react-router-dom';
import logo from './images/Socio-edge-logo-2.svg';
import sideImg1 from './images/11.png';
import sideImg2 from './images/22.png';
import sideImg3 from './images/33.png';
import sideImg4 from './images/55.png';
import sideImg5 from './images/66.png';
// import img5 from './images/Google_Partners_logo.jpg'
import './NavBar.css';


export const NavBar = () => {
    // const logoStyle = {
    //     width: 228,
    //     height: 50,
    //     marginLeft: 25
    // }
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light" style={{ backgroundColor: '#ffffff' }} >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="Socio Edge" className='logostyle' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/who-we-are">Who We Are</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/work">Work</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link " to="/website-design-services">
                                    Web Solution
                                </Link>
                                {/* dropdown-toggle */}
                                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="container">
                                        <div className="row align-items-start">
                                            <div className="col-sm-5 .col-md-6">
                                                <ul>
                                                    <li className="dropdown-header">Design</li>
                                                    <li><Link to="/website-design-services">Web Design Services</Link></li>
                                                    <li><Link to="/website-redesign-services">Website Re-Design</Link></li>
                                                    <li><Link to="/ecommerce-website-design-services">Ecommerce Website Design</Link></li>
                                                    <li><Link to="hotel-website-design-services.php">Hotel Website Design</Link></li>
                                                    <li><Link to="/cms-website-design-services">CMS Website Design</Link></li>
                                                    <li><Link to="/web-portal-design-services">Web Portal Design</Link></li>
                                                    <li><Link to="/static-website-design-services">Static Website Design</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-5 .col-md-6">
                                                <ul>
                                                    <li className="dropdown-header">Development</li>
                                                    <li><Link to="/web-development-services">Web Development Services</Link></li>
                                                    <li><Link to="/php-website-development-services">PHP Development</Link></li>
                                                    <li><Link to="/wordpress-website-development-services">WordPress Development</Link></li>
                                                    <li><Link to="/ecommerce-website-development-services">E-Commerce Development</Link></li>
                                                    <li><Link to="opencart-website-development-services.php">Opencart Development</Link></li>
                                                    <li><Link to="/magento-website-development-services">Magento Development</Link></li>
                                                    <li><Link to="drupal-website-development-services.php">Drupal Development</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-5 .col-md-6">
                                                <ul>
                                                    <li className="dropdown-header">Graphic</li>
                                                    <li><Link to="/graphic-design-services">Graphic Design Services</Link></li>
                                                    <li><Link to="/logo-design-services">Logo Design</Link></li>
                                                    <li><Link to="/flyer-design-services">Flyer Design</Link></li>
                                                    <li><Link to="/brochure-design-services">Brochure Design</Link></li>
                                                    <li><Link to="/mailer-design-services">Mailer Design</Link></li>
                                                    <li><Link to="/visiting-card-design-services">Visiting card Design</Link></li>
                                                    <li><Link to="/psd-to-html">PSD to HTML</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </ul> */}
                            </li>
                            <li className="nav-item dropdown">
                                {/* <Link className="nav-link " to="/mobile-application-development-services" >
                                    App Solution
                                </Link> */}
                                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/mobile-application-development-services">Mobile App Development</Link></li>
                                    <li><Link to="/android-application-development-services">Android App Development</Link></li>
                                    <li><Link to="/ios-application-development-services">iOS App Development</Link></li>
                                    <li><Link to="/ipad-application-development-services">iPad App Development</Link></li>
                                    <li><Link to="/mobile-website-development-services">Mobile Website Development</Link></li>
                                    <li><Link to="/web-application-development-services">Web Application Development</Link></li>
                                    <li><Link to="/custom-software-development-services">Custom Software Development</Link></li>
                                </ul> */}
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link " to="/digital-marketing-services">
                                    Digital Marketing
                                </Link>
                                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="container">
                                        <div className="row align-items-start">
                                            <div className="col-sm-5 .col-md-6">
                                                <ul>
                                                    <li className="dropdown-header">SEO</li>
                                                    <li><Link to="/seo-services">SEO Services</Link></li>
                                                    <li><Link to="/content-marketing-services">Content Marketing</Link></li>
                                                    <li><Link to="/hotel-website-seo-services">Hotel Website SEO</Link></li>
                                                    <li><Link to="/ecommerce-website-seo-services">Ecommerce Website SEO</Link></li>
                                                    <li className="divider"></li>
                                                    <li className="dropdown-header">SMO</li>
                                                    <li><Link to="/smo-marketing-services">SMO Services</Link></li>
                                                    <li><Link to="/facebook-marketing-services">Facebook Marketing</Link></li>
                                                    <li><Link to="/youtube-video-marketing-services">YouTube Marketing</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-5 .col-md-6">
                                                <ul>
                                                    <li className="dropdown-header">Lead</li>
                                                    <li><Link to="/orm-management-services">ORM Services</Link></li>
                                                    <li><Link to="/conversion-rate-optimization-services">Conversion Rate Optimization</Link></li>
                                                    <li><Link to="/email-marketing-services">Email Marketing</Link></li>
                                                    <li><Link to="/bulk-sms-services">Bulk SMS Services</Link></li>
                                                    <li className="divider"></li>
                                                    <img src={img5} className="img-responsive" alt="" />
                                                </ul>
                                            </div>
                                            <div className="col-sm-5 .col-md-6">
                                                <ul>
                                                    <ul>
                                                        <li className="dropdown-header">SEM</li>
                                                        <li><Link to="/sem-marketing-services">SEM Services</Link></li>
                                                        <li><Link to="/ppc-campaign-marketing-services">PPC Campaign Services</Link></li>
                                                        <li><Link to="/google-adwords-management-services">Google Adwords Management</Link></li>
                                                    </ul>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </ul> */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/price-packages">Packages</Link>
                            </li>
                        </ul>
                        <button className="btn btn-success mt-2 bbt"><Link to="/contact" className="query">Send a Query</Link></button>
                    </div>
                </div>
            </nav>

            <div className="site_nav">
                <nav className="navbar navbar-default nav-style">
                    <div className="navbar-header pull-left wow fadeInLeft animated animated" style={{ visibility: 'visible' }}></div>
                    <span className="menu-icon-bar"></span>
                    {/* menu */}
                    <div className="nav-menu hidden-xs hidden-sm wow fadeInRight animated animated" style={{ visibility: 'visible' }}>
                        <ul className="nav navbar-nav">
                            <li><Link to="/website-design-services"><span className="icon"><i><img src={sideImg4} alt="sideimg" /></i><br /><em style={{ marginLeft: 10 }}>Website<br />Designing<br /></em></span></Link></li>
                            <li className="dropdown"><Link to="/web-development-services"><span className="icon"><i><img src={sideImg1} alt="sideimg" /></i><br /><em style={{ marginLeft: 2 }}>Website<br />Development<br /></em></span></Link></li>
                            <li><Link to="/digital-marketing-services"><span className="icon"><i><img src={sideImg2} alt="sideimg" /></i><br /><em style={{ marginLeft: 15 }}>Digital<br />Maketing<br /></em></span></Link></li>
                            <li><Link to="/seo-services"><span className="icon"><i><img src={sideImg3} alt="sideimg" /></i><br /><em style={{ marginLeft: 5 }}>SEO<br />Optimization<br /></em></span></Link></li>
                            <li style={{ backgroundColor: '#121212' }}><Link to=""><span className="icon"><i><img src={sideImg5} alt="sideimg" /></i><br /><em style={{ color: '#fff', marginLeft: 10 }}>Reach Us<br /></em></span></Link></li>
                        </ul>
                    </div>
                </nav>

            </div>
        </>
    )
}
