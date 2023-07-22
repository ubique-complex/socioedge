import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './services.css';
import './css/responsive.css';

class Services extends Component {
    state = {}
    render() {
        return (
            <>
                <div>
                    <Helmet>
                        <title>Socio Edge | seo-services</title>
                        <meta name="description" content="Our  SEO agency provides you the best SEO services in Chandigarh, India with 100% results. Our SEO experts are suitable for all types of businesses such as Startups to brands." />
                        <meta name="keywords" content="SEO Agency In Chandigarh, SEO Service In Chandigarh, SEO Expert In Chandigarh, Best SEO Experts In Chandigarh, Chandigarh SEO Agency" />
                    </Helmet>
                    <div className="head portfolio">
                        <div className="container">
                            <h1 className="text-center"><strong>Our</strong> Services</h1>
                        </div>
                    </div>

                    <div className="bedcrumb_service">
                        <div className="container-fluid">
                            <ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
                                <li><Link to="/"> <span className="fa fa-home"></span></Link></li>
                                <li><Link style={{ color: '#121212' }}><span>/Our Service</span></Link></li>
                            </ol>
                        </div>
                    </div>
                    <br />

                    <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h2>Lets Us Know <span>What Service You Need...?</span></h2>
                                    <p>Get the one of leading website designing, development, marketing services from the experienced and professionals who know each and every thing about Online business.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="web-theme">
                        <div className="container">
                            <div className="row">
                                <div className="industry-expand-list js-ind-slide" style={{ display: 'block' }}>
                                    <ul className="mobile_list">
                                        <li><Link to="/web-development-services" onclick="fn()">Website Development Services</Link></li>
                                        <li><Link to="/website-design-services" onclick="fn()">Website Design Services</Link></li>
                                        <li><Link to="/website-redesign-services" onclick="fn()">Website Re-design</Link></li>
                                        <li><Link to="/ecommerce-website-design-services" onclick="fn()">Ecommerce Website Design Services</Link></li>
                                        <li><Link to="/hotel-website-design-services" onclick="fn()">Hotel Website Design Services</Link></li>
                                        <li><Link to="/php-website-development-services" onclick="fn()">PHP Website Development Services</Link></li>
                                        <li><Link to="/wordpress-website-development-services" onclick="fn()">Wordpress Web Development Services</Link></li>
                                        <li><Link to="/drupal-website-development-services" onclick="fn()">Drupal Website Development Services</Link></li>
                                        <li><Link to="/graphic-design-services" onclick="fn()">Graphic Designing Services</Link></li>
                                        <li><Link to="/logo-design-services" onclick="fn()">Logo Designing Services</Link></li>
                                        <li><Link to="/mobile-application-development-services" onclick="fn()">Mobile App Development</Link></li>
                                        <li><Link to="/android-application-development-services" onclick="fn()">Android Apps Development</Link></li>
                                        <li><Link to="/ios-application-development-services" onclick="fn()">iOS/iPhone Apps Development</Link></li>
                                        <li><Link to="/custom-software-development-services" onclick="fn()">Custom Software Development</Link></li>
                                        <li><Link to="/digital-marketing-services" onclick="fn()">Digital Marketing Services</Link></li>
                                        <li><Link to="/seo-services" onclick="fn()">SEO Services</Link></li>
                                        <li><Link to="/sem-marketing-services" onclick="fn()">SEM Services</Link></li>
                                        <li><Link to="/ppc-campaign-marketing-services" onclick="fn()">PPC Services</Link></li>
                                        <li><Link to="/smo-marketing-services" onclick="fn()">SMO Services</Link></li>
                                        <li><Link to="/content-marketing-services" onclick="fn()">Content Marketing Services</Link></li>
                                        <li><Link to="/email-marketing-services" onclick="fn()">Email Marketing Services</Link></li>
                                        <li><Link to="/facebook-marketing-services" onclick="fn()">Facebook Marketing Services</Link></li>
                                        <li><Link to="/hotel-website-seo-services" onclick="fn()">Hotel Website SEO</Link></li>
                                        <li><Link to="/ecommerce-website-seo-services" onclick="fn()">Ecommerce Website SEO</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h2>HIRE <span>DEVELOPERS</span></h2>
                                    <p>Hire a team of experienced and full-time resource from Socio Edge. Our developers finish their work on time without compromising with the quality. Keep away your concerns by hiring us!</p>
                                    <div align="center"><a href="contact-us.php" className="portfolio_button">Enquiry Now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </>
        );
    }
}

export default Services;
