import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import img1 from './images/mobile app development.png'
import axios from 'axios';
const MobileApp = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'You receiced a mail for Mobile App Development Services',
        message: ''
    });
    const [result, setResult] = useState(null);

    const sendEmail = event => {
        event.preventDefault();
        axios({
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": true
            },
            url: "http://localhost:5000/send",
            data: state
        }).then(res => {
            console.log(res.state);
            setResult(res.data);
            setResult({ success: true, message: 'Thanks for contacting us. We will get back to you shortly' });
            setState({ name: '', email: '', phone: '', message: '' });
        })
            .catch(() => {
                setResult({ success: false, message: 'Something went wrong. try again later' });
            });
    };


    const onInputChange = event => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    };
    return (
        <>
            <Helmet>
                <title>Socio Edge | mobile-application-development-services</title>
                <meta name="keywords" content="Apps Design Service Chandigarh, Mobile Apps Designer In Chandigarh, Mobile Apps Design Services Chandigarh, App Development Service In Chandigarh, App Development In Chandigarh" />
                <meta name="description" content="Get the best mobile application development services in Chandigarh. Our apps designer develop a high-quality mobile app that fulfills all norms of UI/UX designs." />
            </Helmet>
            <div className="development_bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="ineer_serv_textt">
                                <h2>App Design & Development Services</h2>
                                <p>We believes in designing and developing featured rich mobile apps for clients. Our motive is that their designed apps get noticed by Online users and win the marketplace.</p>
                                <h2 style={{ color: '#ffffff' }}>Call @ +91 79863 78511</h2>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="technical_form">
                                <h4>Share Your Project Requirements</h4>
                                <form className="iner-formm" name="contactForm" method="post" onSubmit={sendEmail} autocomplete="off">
                                    <div className="form-group">
                                        <input type="text" className="form-control input-lg" placeholder="Full name" name="name" maxlength="30" value={state.name} onChange={onInputChange} required />
                                        <span className="contact_name" style={{ color: 'red', fontSize: 12 }}></span>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control input-lg" placeholder="Email Address" name="email" value={state.email} onChange={onInputChange} required />
                                        <span className="contact_email" style={{ color: 'red', fontSize: 12 }}></span>
                                    </div>
                                    <div className="form-group">
                                        <input type="Phone Number" className="form-control input-lg" placeholder="Phone Number" name="phone" maxlength="10" value={state.phone} onChange={onInputChange} required />
                                        <span className="contact_phone" style={{ color: 'red', fontSize: 12 }}></span>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control input-lg" placeholder="Description" type="text" name="message" style={{ width: '100%', height: '70' }} value={state.message} onChange={onInputChange} required></textarea>
                                        <span className="contact_query" style={{ color: 'red', fontSize: 12 }}></span>
                                    </div>
                                    {result && (
                                        <p style={{ color: '#000000' }} className={`${result.success ? 'success' : 'error'}`}>
                                            {result.message}
                                        </p>
                                    )}
                                    <button className="btn-info" type="submit" name="submit_button" value="Submit" onclick="return checkValidationHome();">Get Free Quote</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bedcrumb_service">
                <div className="container-fluid">
                    <ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
                        <li><Link to="/"> <span className="fa fa-home"></span></Link></li>
                        <li><Link to="#">/ App Solution /</Link></li>
                        <li><Link style={{ color: '#121212' }}><span>Mobile App Development</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Mobile App Design & <span>Development Solutions</span></h2>
                            <p>Our core focus is to develop UX/UI designs for multiple platforms, user-friendly navigation that includes an easy & effective way to improve audience experience that enhances business profit.</p><br />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-text">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2 className="box-header"> Way To <span>Mobile App Expertise</span></h2>
                            <p>As we are into <strong>mobile app development Services in Chandigarh</strong>, our priority is to deliver user friendly app that support all major platform with high level of app security for employees, customers and partners. Mobile Application helps clients to boost the organization’s sales & productivity. Socio Edge work with all types of industries such as startups and brand enterprises, provide them customized app solution in Chandigarh and around the world. Our experienced <strong>mobile apps designer in Chandigarh</strong>, always eager to learn new technology that helps them to pick modern ideas into consideration and create the most complex applications with ease.</p>

                            <p>Most interesting fact about mobile app development is that they are efficient to generate more business as compared to a web application. Socio Edge’s <strong>mobile apps designers in Chandigarh</strong>, understands appealing UI/UX designs with best quality standards is most favourable as business point of view. Our designing and development team crafts attractive apps with easy and quick app navigation that fulfill all norms of UI/UX designs. We are expanding ourselves to serve more business in Chandigarh and across the globe. Socio Edge also offered numbers of customized mobile application, native application and cross-platform <strong>mobile apps development services in Chandigarh</strong> that may help your business.</p>
                        </div>

                        <div className="col-sm-6">
                            <img src={img1} className="img-responsive" alt=" img1" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Approach Towards<span> Mobile App Development</span></h2>
                            <p>Our approach involves proper consideration and planning before developing mobile applications to provide benefits to users, to increase the success ratio for a unique business strategy.</p><br />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-text">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="mobile-text-box">
                                <div className="right-web-services">
                                    <h2 className="box-header">Socio Edge Offers Below Services</h2>
                                    <ul>
                                        <li><i className="fa fa-angle-right"></i> <Link to="/android-application-development-services">Android App Development</Link></li>
                                        <li><i className="fa fa-angle-right"></i> <Link to="/ios-application-development-services">iOS App Development</Link></li>
                                        {/* <li><i className="fa fa-angle-right"></i> <Link to="ipad-application-development-services.php">iPad App Development</Link></li> */}
                                        <li><i className="fa fa-angle-right"></i> <Link to="/mobile-website-development-services">Mobile Website Development</Link></li>
                                        {/* <li><i className="fa fa-angle-right"></i> <Link to="web-application-development-services.php">Web Application Development</Link></li> */}
                                        {/* <li style={{ marginBottom: '12' }}><i className="fa fa-angle-right"></i> <Link to="custom-software-development-services.php">Custom Software Development</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="mobile-text-box">
                                <h2 className="box-header">Socio Edge  Approach:</h2>
                                <p>Being a part of <strong>mobile app development services in Chandigarh</strong>, we know that app development process has lot of complexities hence require proper discipline from the professional developers with proven abilities is necessary. Developing an app is not enough, but testing and improving its functionality is our high-priority.</p>
                                <p>Our approach towards clients app development is to provide them best idea & suggestion that maximize the chances of better outcome. Because of continuous demand of app development, Our <strong>mobile apps designers in Chandigarh</strong>, provides app support so that all types of issues can be resolved on time. It help us to construct strong relationship with our clients.</p>
                            </div>
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
                            <div align="center"><Link to="/contact" className="portfolio_button">Enquiry Now</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><div>

            </div>
        </>
    )
}
export default MobileApp;