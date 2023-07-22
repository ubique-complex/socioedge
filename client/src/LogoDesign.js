import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export const LogoDesign = () => {
    return (
        <>
            <Helmet>
                <title>Growth Licious | logo-design-services</title>
            </Helmet>
            <div className="head portfolio">
                <div className="container">
                    <h1 className="text-center"><strong>Logo</strong> Design Services </h1>
                </div>
            </div>

            <div className="bedcrumb_service">
                <div className="container-fluid">
                    <ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
                        <li><Link to="/"> <span className="fa fa-home"></span></Link></li>
                        <li><Link to="#">/ Web Solution /</Link></li>
                        <li><Link to="#">Graphic /</Link></li>
                        <li><Link style={{ color: '#121212' }}><span>Logo Design</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="mobile-text">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 mobile-text">
                            <div className="">
                                <h2 className="box-header">Perfect Logo <span>That Speaks About Your Business</span></h2>
                                <p>We help our clients from <strong>logo designing services in Chandigarh</strong> to achieve the business objectives. Logo Designing is a process in which designer perceive your business concept before designing. Our <strong>Logo designers in Chandigarh</strong> are most creative and experienced who believes in designing the perfect logo. The perfect logo design should be simple, easy to remember, build professionalism and trust.</p>
                                <p>Growth Licious knows what you want to achieve from logo designing that’s why our <strong>logo designer in Chandigarh</strong> design the logo in such a way that it reflects the purpose of your business that helps you build your business as a brand. If a fully designed logo is attractive, it attracts the attention of online users, which increase traffic on the website.</p><br />

                                <div className="services_inn_bg">
                                    <h4 className="website-service-head">Why Opt Growth Licious For Logo Designing Services In Chandigarh...?</h4>
                                    <ul className="mobile_list">
                                        <li><i className="fa fa-hand-o-right"></i> Understand business idea.</li>
                                        <li><i className="fa fa-hand-o-right"></i> Do research on focused industry and make clear picture of the concept.</li>
                                        <li><i className="fa fa-hand-o-right"></i> Start designing using icon, text with appropriate colors.</li>
                                        <li><i className="fa fa-hand-o-right"></i> Deliver the maximum 3-4 Logo for selection.</li>
                                        <li><i className="fa fa-hand-o-right"></i> Make changes as per clients requirement if required.</li>
                                        <li><i className="fa fa-hand-o-right"></i>  Final delivery of Logo.</li>
                                    </ul>
                                </div><br />

                                <p>As we provide <strong>logo designing services in Chandigarh</strong>, Our dedicated team pick the right combination of colors for logo designing services in  that make sure your logo will be attractive and unique. The team of designer offers you complete support and make unlimited amount of changes in logo as per client requirement with no cost that helps us to provide you deserving result.</p>

                                <p>Then, What are you waiting for..?? Hire a <strong>best logo designer in Chandigarh</strong> like Growth Licious’s team to get the job done on time and get the eye-catchy logo design for your business.</p>
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
                            </div>						</div>
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}
