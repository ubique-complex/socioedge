import React from 'react'
import img1 from './images/flex.png'
import img2 from './images/open-source-icon.png'
import img3 from './images/SEO-Friendliness-icon.png'
import img4 from './images/thems-plugin-icon.png'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './wordpress.css'

export const WordPressWeb = () => {
    return (
        <>
            <Helmet>
                <title>Socio Edge | wordpress-website-development-services</title>
            </Helmet>
            <div className="head portfolio">
                <div className="container">
                    <h1 className="text-center"><strong>WordPress </strong>Website Development Services</h1>
                </div>
            </div>

            <div className="bedcrumb_service">
                <div className="container-fluid">
                    <ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
                        <li><Link to="https://www.Socio Edge.in/"> <span className="fa fa-home"></span></Link></li>
                        <li><Link to="#">/ Web Solution /</Link></li>
                        <li><Link to="#">Development /</Link></li>
                        <li><Link style={{ color: '#121212' }}><span>WordPress Development</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="mobile-text">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <h2 className="box-header">We Build Rich, Robust And Scalable <span> WordPress Websites</span></h2>
                            <p>Needless to say, WordPress is still the most popular CMS for website development. With a sizeable number of plugins available, numerous complex and useful features can be added to a WordPress website. <strong>Wordpress website developers in Chandigarh</strong> are experts and professionals when it comes to customization. We have been playing around with WordPress for enough time to create a customized, robust, secure Wordpress website. Socio Edge aim is to deliver top <strong>Wordpress website development services in Chandigarh</strong> and across the country.</p>

                            <h4 className="website-service-head">Here are Some Features Of WordPress:</h4>
                            <p>Wordpress CMS is a simple platform to build a website. Our <strong>Wordpress website developers in Chandigarh</strong> customized your website from blogs, to portfolio sites, to e-commerce. In below section we have mentioned few features:</p><br />

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="wordpress-box">
                                        <div className="iconDiv">
                                            <img src={img1} alt="Flexibility" />
                                        </div>
                                        <div className="content_features">
                                            <h4>Flexibility</h4>
                                            <p>Create any type of website you want- a business site, a personal blog, an e-commerce store, a portal, and much more</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="wordpress-box">
                                        <div className="iconDiv">
                                            <img src={img4} alt="Flexibility" />
                                        </div>
                                        <div className="content_features">
                                            <h4>Themes And Plugins</h4>
                                            <p>Explore the power of customization with multiple themes and plugins you can use to enhance the site's look and functionality</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="wordpress-box">
                                        <div className="iconDiv">
                                            <img src={img3} alt="Flexibility" />
                                        </div>
                                        <div className="content_features">
                                            <h4>SEO-Friendliness</h4>
                                            <p>Take your WordPress website to the top by using the powerful and reliable SEO plugins that the platform offers</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="wordpress-box">
                                        <div className="iconDiv">
                                            <img src={img2} alt="Flexibility" />
                                        </div>
                                        <div className="content_features">
                                            <h4>Open-Source</h4>
                                            <p>Experience the ease and utility of an open-source platform, with a community of expert developers to support you all the way</p>
                                        </div>
                                    </div>
                                </div>
                            </div><br />

                            <h4 className="website-service-head">Why Socio Edge..?</h4>
                            <p>WordPress not just requires a website to be set up by installing the CMS on your server. If you wish to build a full-fledged professional website, a lot goes into it. From PSD to WordPress conversion to configuration of the website using custom themes and plugins, a WordPress website needs substantial efforts and expertise. We do not just rely on the ready-made themes and plugins available in the market but build them according to your specific requirements. So for a professional website you need a <strong>wordpress website development services in Chandigarh</strong> that can provide you below services:</p><br />

                            <div className="services_inn_bg">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="bgfff">
                                            <h4>Impressive Design & Usability</h4>
                                            <p>We design WordPress website to be attractive as well as high on usability.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bgfff">
                                            <h4>Technical Support</h4>
                                            <p>We are a client-oriented team and thus offer complete technical support.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bgfff">
                                            <h4>Customized Solutions</h4>
                                            <p>We offer custom WordPress solutions that are tailored to your requirements.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bgfff">
                                            <h4>No Hidden Charges</h4>
                                            <p>Socio Edge's team believes in honesty and don't charge any hidden cost from the clients.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />

                            <p>Socio Edge has seen WordPress evolving from a blogging CMS to a platform that has the potential to help you create fully-functional websites. Our excellent team of deft developers are well-versed with WordPress, PHP, JS, HTML and other technologies that are required to accomplish unmatched WordPress development.</p>
                        </div>
                        <div className="col-sm-3">
                            <div className="right-web-services">
                                <h4>Design Services</h4>
                                <ul>
                                    <li><i className="fa fa-angle-right"></i><Link to="/website-design-services">Web Design Services</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/website-redesign-services">Website Re-Design</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/ecommerce-website-design-services">Ecommerce Website Design</Link></li>
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/hotel-website-design-services">Hotel Website Design</Link></li> */}
                                    <li><i className="fa fa-angle-right"></i><Link to="/cms-website-design-services">CMS Website Design</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/web-portal-design-services">Web Portal Design</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/static-website-design-services">Static Website Design</Link></li>
                                </ul>
                            </div><br />
                            <div className="right-web-services">
                                <h4>Development Services</h4>
                                <ul>
                                    <li><i className="fa fa-angle-right"></i><Link to="/web-development-services">Web Development Services</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/php-website-development-services">PHP Development</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/wordpress-website-development-services">WordPress Development</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/ecommerce-website-development-services">E-Commerce Development</Link></li>
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/opencart-website-development-services">Opencart Development</Link></li> */}
                                    <li><i className="fa fa-angle-right"></i><Link to="/magento-website-development-services">Magento Development</Link></li>
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/drupal-website-development-services">Drupal Development</Link></li> */}
                                </ul>
                            </div><br />						</div>
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}
