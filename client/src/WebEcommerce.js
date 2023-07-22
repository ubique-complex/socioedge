import React, { useState } from 'react'
import './webecommerce.css'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import axios from 'axios';

const WebEcommerce = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'You receiced a mail for ecommerce Web Designing Services',
        message: ''
    });
    const [result, setResult] = useState(null);

    const sendEmail = event => {
        event.preventDefault();
        axios({
            method: "POST",
            url: "/send",
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
                <title>Socio Edge | ecommerce-website-design-services</title>
            </Helmet>

            <div className="development_bg imag">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="ineer_serv_textt">
                                <h2>Ecommerce Website Design Services</h2>
                                <h4 style={{ color: 'white' }}>Let First Impression Make Differences!</h4>
                                <p>A Simply and beautifully designed website grab the attention of online audiences. For that you need to hire a experienced Ecommerce website designer in Chandigarh is very important. Experienced Designer creativity, art and useful skills can give attractive and unique look to your website with user-friendly shopping cart solutions to grow your business as brand.</p>
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
                                        <textarea className="form-control input-lg desc" placeholder="Description" type="text" name="message" value={state.message} onChange={onInputChange} required></textarea>
                                        <span className="contact_query" style={{ color: 'red', fontSize: 12 }}></span>
                                    </div>
                                    {result && (
                                        <p style={{ color: '#000000' }} className={`${result.success ? 'success' : 'error'}`}>
                                            {result.message}
                                        </p>
                                    )}
                                    <button className="btn-info" type="submit" name="submit_button" value="Submit" >Get Free Quote</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bedcrumb_service">
                <div className="container-fluid">
                    <ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
                        <li><Link to="/"><span className="fa fa-home"></span></Link></li>
                        <li><Link to="/web-design-services" style={{ textDecoration: 'none' }}>&nbsp; /Web Solution /</Link></li>
                        <li><Link to="/web-design-services" style={{ textDecoration: 'none' }}>Design /</Link></li>
                        <li><Link to="/ecommerce-website-design-services" style={{ color: '#121212' }}><span>Ecommerce Website Design</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-sm-9 mobile-text">
                        <h2 className="box-header">Ecommerce <span>Website Design Services</span></h2>
                        <p><strong>Ecommerce website design services in Chandigarh </strong>is one of the popular services among users who want to buy and sell almost anything over Internet. However, to develop your business on internet requires a professional handling to get the benefit of online presence. The <strong>eCommerce website designer Chandigarh</strong>, India can make you earn a lot from your e-commerce idea of providing services or selling your products online.</p>

                        <p>Currently, almost all kind of business has an online set up to exploit the opportunities which internet has to offer. An ecommerce website is your online presence hence you require to establish your reputation, impression among the visitors by using the best possible tools of web design and development. However, before going with the idea of E-commerce website there are certain things which shall be considered and first will be the  <strong>eCommerce website designer Chandigarh.</strong></p><br />

                        <div className="services_inn_bg">
                            <h4 className="website-service-head">Benefits of Hiring Ecommerce Website designer Chandigarh, India:</h4>
                            <p><strong>Economically Best:</strong> Cost effective solution to the e-commerce website is what you would be looking for your B2B website.</p>
                            <p><strong>Deliverance:</strong> Another benefit of hiring Socio Edge, promises you with the timely deliverance of the final product Ecommerce website.</p>
                            <p><strong>Technical Advancement:</strong> Socio Edge has a team of professional designer and development experts to provide you with a worthier Ecommerce website solution.</p>
                        </div><br />

                        <h4 className="website-service-head">Best Bet To Hire Socio Edge Professionals</h4>
                        <p>Socio Edge will provide the feasibility to your business idea. With expert and professional acumen Socio Edge has the best people to measure the earning power of the concept. Our <Link to="ecommerce-website-development-services.php">eCommerce website developer Chandigarh</Link> would be the best bet to hire for the process of ecommerce web design & development.</p>

                        <p>Our team has in-depth knowledge and experience in creating ecommerce website that integrate well with mobile transactions. So whether you want to create an ecommerce store with mobile enabled payments or want to create your own e-wallet, we have the right solutions for you.</p>
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
                        </div><br />					</div>
                </div>
            </div><br />


        </>
    )
}
export default WebEcommerce;