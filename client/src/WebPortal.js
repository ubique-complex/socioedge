import React from 'react'
import './webportal.css'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
export const WebPortal = () => {
    return (
        <>
            <Helmet>
                <title>Socio Edge | web-portal-design-services</title>
            </Helmet>
            <div className="head portfolio">
                <div className="container">
                    <h1 className="text-center"><strong>Web </strong> Portal Design Services</h1>
                </div>
            </div>

            <div className="bedcrumb_service">
                <div className="container-fluid">
                    <ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
                        <li><Link to="/"> <span className="fa fa-home"></span></Link></li>
                        <li><Link to="/website-design-services">/ Web Solution /</Link></li>
                        <li><Link to="/website-design-services">Design /</Link></li>
                        <li><Link style={{ color: '#121212' }}><span>Web Portal Design</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="mobile-text">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <h2 className="box-header">Web <span>Portal Design </span></h2>
                            <p>Socio Edge offers customized <strong>web portal design services in Chandigarh</strong>. Our designed web portals include UX/UI features. We know that an ideal web portal must have advanced and latest features that create a long-lasting customer experience and generate quality traffic for the portal. Our experienced professionals have sufficient knowledge of designing and development to create any kind of web portal such as social media portal, e-commerce web portal, job portal, travel portal, news portal and so on.</p><br />

                            <div className="servi/ces_inn_bg">
                                <h4 className="website-service-head">Web portal development services need proper planning and execution strategy:</h4>

                                <p>As we are into <strong>web portal design services in Chandigarh</strong>, our experts provides you result-oriented services. At Socio Edge, our professionals do proper research and plan their strategy to deliver you error free product. Here are some essential points, which are important to know for any business :</p>

                                <ul className="mobile_list">
                                    <li><i className="fa fa-hand-o-right"></i> Objective: What do you want to serve through a web portal? The answer must be clear otherwise it create a lot of complications in starting.</li>
                                    <li><i className="fa fa-hand-o-right"></i> Target: Your target must be making money and share information with online users, but it's important to know which audience you want to target?</li>
                                    <li><i className="fa fa-hand-o-right"></i> Research and Market Analysis: Determining the current marketing trends and research on future scope of web portal ideas is very important. Product launching strategy and marketing strategy should be a part of the initial phase plan.</li>
                                    <li><i className="fa fa-hand-o-right"></i> Benefits: Providing all relevant information on the basis of portal concept ensures that online users will stay busy. Attractive design or simple navigation increase traffic and turn them into leads.</li>
                                </ul>
                            </div>
                            <br />


                            {/* <!--<br/><div align="center"><img src="img/web-portal-design-services-Chandigarh.png" className="img-responsive" alt="web-portal-design-services-in-Chandigarh"></div>--> */}

                            <p>Our excellent <strong>web portal design services in Chandigarh</strong> provide you an innovative web portal that allows you to manage large databases and sell your products or services globally. Socio Edge’s motive is to design and develop one of the best web portal that fulfill our clients business requirement.</p>
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
                        <div className="ready-for-next">
                            <div className="text">Ready to discuss your <strong>Project</strong>?</div>
                            <div className="tel"><Link to="tel:+917986378511"> <i className="icon-phone-3"></i> <strong className="font-26">+91-79863 78511</strong> </Link></div>
                            <div className="free-quote"><Link to="contact-us.php" className="popup"> Free Quote </Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </>
    )
}
