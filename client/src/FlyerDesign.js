import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export const FlyerDesign = () => {
    return (
        <>
            <Helmet>
                <title>Socio Edge | Flyer-design-services</title>
            </Helmet>
            <div className="head portfolio">
                <div className="container">
                    <h1 className="text-center"><strong>Flyer</strong> Design Services</h1>
                </div>
            </div>

            <div className="bedcrumb_service">
                <div className="container-fluid">
                    <ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
                        <li><Link to="/"> <span className="fa fa-home"></span></Link></li>
                        <li><Link to="#">/ Web Solution /</Link></li>
                        <li><Link to="#">Graphic / </Link></li>
                        <li><Link style={{ color: '#121212' }}><span>Flyer Design</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-sm-9 mobile-text">
                        <div className="">
                            <h2 className="box-header">Flyer design <span>requires a lot of attention and creativity </span></h2>
                            <p>Flyers are the most effective and impressive way for businesses to promote their events, products, and services. Eye-catching pictures and engaging words are an essential part of flyer designing that has the power to attract online users. As we offers <strong>flyer design services in Chandigarh</strong>, we know it requires a lot of attention and creativity from designers and that's what our designers do.</p><br />

                            <div className="services_inn_bg">
                                <h4 className="website-service-head">Socio Edge helps your business by flyer designing services in Chandigarh:</h4>
                                <ul className="mobile_list">
                                    <li><i className="fa fa-hand-o-right"></i> Eye-catching design with relevant text and images</li>
                                    <li><i className="fa fa-hand-o-right"></i> Our colours concept that enhance your message</li>
                                    <li><i className="fa fa-hand-o-right"></i> Design that promotes your business itself</li>
                                    <li><i className="fa fa-hand-o-right"></i> Single and double sided design features</li>
                                    <li><i className="fa fa-hand-o-right"></i> Delivery on time and at your doorstep</li>
                                </ul>
                            </div>
                            <h4 className="website-service-head">Customize Your Own Flyer Designs</h4>
                            <p>Our <strong>Flyer designer in Chandigarh</strong> believes in providing customized flyer designs. We listen to our client's ideas and suggestions before flyer designing process so that we can deliver them business oriented-results. Our professional <strong>flyer designer in Chandigarh</strong> crafts your flyer that promotes your brand to reach the right audience. Our designers are experienced and enough capable to figure out your flyer requirement and create pleasant designs.</p>

                            <p>We have team of designers who helps clients to expand their business through <strong>flyer design services in Chandigarh</strong>. Our affordable fees give you what you need and hope that Socio Edge will prove to be a helpful resource for your brand.</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="right-web-services">
                            <h4>Graphic Services</h4>
                            <ul>
                                <li><i className="fa fa-angle-right"></i><Link to="/graphic-design-services">Graphic Design Services</Link></li>
                                <li><i className="fa fa-angle-right"></i><Link to="/logo-design-services">Logo Design</Link></li>
                                <li><i className="fa fa-angle-right"></i><Link to="/flyer-design-services">Flyer Design</Link></li>
                                <li><i className="fa fa-angle-right"></i><Link to="/brochure-design-services">Brochure Design</Link></li>
                                {/* <li><i className="fa fa-angle-right"></i><Link to="/mailer-design-services">Mailer Design</Link></li> */}
                                {/* <li><i className="fa fa-angle-right"></i><Link to="/visiting-card-design-services">Visiting card Design</Link></li> */}
                                <li><i className="fa fa-angle-right"></i><Link to="/psd-to-html">PSD to HTML</Link></li>
                            </ul>
                        </div>					</div>
                </div>
            </div>
            <br />

        </>
    )
}
