import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios';

const MogentoWeb = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'You receiced a mail for magento Web Development Services',
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
                <title>Socio Edge | magento-website-development-services</title>
            </Helmet>
            <div className="development_bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="ineer_serv_textt">
                                <h2>Magento Website Development Service Chandigarh</h2>
                                <p>Accelerate your small, mid-size and enterprise-level businesses who want to empower their business with the help of eCommerce platforms. At Socio Edge, our professionals Magento developers build a versatile eCommerce website for your business.</p>
                                <h2 style={{ color: '#ffffff' }}>Call @ 79863 78511</h2>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="technical_form">
                                <h4>Share Your Project Requirements</h4>
                                <form className="iner-formm" name="contactForm" method="post" onSubmit={sendEmail} autocomplete="off">
                                    <div className="form-group">
                                        <input type="text" className="form-control input-lg" placeholder="Full name" name="name" maxlength="30" value={state.name} onChange={onInputChange} required />
                                        <span className="contact_name" style={{ color: 'red', fontSize: '12' }}></span>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control input-lg" placeholder="Email Address" name="email" value={state.email} onChange={onInputChange} required />
                                        <span className="contact_email" style={{ color: 'red', fontSize: '12' }}></span>
                                    </div>
                                    <div className="form-group">
                                        <input type="Phone Number" className="form-control input-lg" placeholder="Phone Number" name="phone" maxlength="10" value={state.phone} onChange={onInputChange} required />
                                        <span className="contact_phone" style={{ color: 'red', fontSize: '12' }}></span>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control input-lg" placeholder="Description" type="text" name="message" style={{ width: '100%', height: '70' }} value={state.message} onChange={onInputChange} required></textarea>
                                        <span className="contact_query" style={{ color: 'red', fontSize: '12' }}></span>
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
                        <li><Link to="#">/ Web Solution /</Link></li>
                        <li><Link to="#">Development /</Link></li>
                        <li><Link style={{ color: '#121212' }}><span>Magento Development</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="mobile-text">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <h2 className="box-header">Magento <span>Website Customization</span></h2>
                            <p>Having a customized eCommerce website, It just like a dream come true for many small businesses such as retailers and small brands. But the fact is that whatever business you are doing, it does not matter if you want an e-Store website, you can hire a Magento web development service provider. Magento is a feature-rich platform for businesses to develop a dynamic eCommerce website. Hence, our aim is to develop an eStore website that can connect our clients with potential online customers and convert them into a permanent user.</p>

                            <p>At Socio Edge, our Magento developers provide bespoke <strong>Magento web development services in Chandigarh</strong> and other parts of India. They listen to your idea and craft a beautiful eStore website that will provide a phenomenal shopping experience to online users. Users will be able to access your website on any platform such as mobile devices, desktop, laptop, etc. And, we want to ensure our clients that their Magento website will generate more sales.</p><br />

                            <h4 className="new_head">Our Developers Approach For Magento Website Development:</h4>

                            <div className="services_inn_bg">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="bgfff">
                                            <h4>Module Integration</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bgfff">
                                            <h4>Theme Design & Development</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bgfff">
                                            <h4>Shopping Cart Development</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bgfff">
                                            <h4>Plugin Customization</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bgfff">
                                            <h4>Payment Gateway</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bgfff">
                                            <h4>Support & Maintenance</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />

                            <p>As we are a part of <strong>Magento website development services in Chandigarh</strong>, India, Our motive is to deliver business-oriented results at a minimal cost. Therefore, Our Magento website developers have enough experience to provide you reliable, scalable, flexible and secure eStore websites. We are here to help you with your idea so that your business can be elevated to new heights.</p>

                            <p>So, working with an experienced team who have the right knowledge in Magento website development, they always provide results-driven eStore websites for business. Mail us: <Link to="mailto:Socio Edgein@gmail.com">Socio Edgein@gmail.com</Link> or Call Now: +91 79863 78511</p>
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
export default MogentoWeb;