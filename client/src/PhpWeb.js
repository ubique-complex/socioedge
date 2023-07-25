import React, { useState } from 'react'
import img1 from './images/php-developement.png'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios';
const PhpWeb = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'You receiced a mail for php Web Development Services',
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
                <title>Socio Edge | php-website-development-services</title>
            </Helmet>
            <div className="development_bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="ineer_serv_textt">
                                <h2>PHP Website Development</h2>
                                <p>Every business demands a well-organized and user-friendly website. However, At Socio Edge, Our PHP website developers build an extremely innovative and multifunctional website that will empower your business.</p>
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
                        <li><Link to="/"> <span className="fa fa-home"></span></Link></li>
                        <li><Link to="#">/ Web Solution /</Link></li>
                        <li><Link to="/web-development-services">Development /</Link></li>
                        <li><Link style={{ color: '#121212' }}><span>PHP Development</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="mobile-text">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <h2 className="box-header">PHP <span>Development Service</span></h2>
                            <h4 className="new_head">PHP is widely used for developing <span> dynamic web pages</span></h4>
                            <p>PHP is the most famous and open source technology that revolutionized the coding language for website development. It’s extensively used by our developers to build hotels or resorts websites, eCommerce website, portal websites, social media website and so on. Socio Edge offers one of the top <strong>PHP website development services in Chandigarh</strong>, India with a business-driven approach that ensures client satisfaction.</p>

                            <p>At Socio Edge, Our <strong>PHP website developers in Chandigarh </strong> edit or create web pages for static and dynamic websites. Our PHP specialists are enough capable to execute the complex function during the website development process to meet high-end navigation experience for users.  Our <strong>PHP web developers Chandigarh </strong>are passionate about to write clean code for the better structure that runs website successfully.</p><br />

                            <div align="center"><img src={img1} alt="topimg" className="img-responsive" /></div><br />
                            <div className="services_inn_bg">
                                <h4 className="website-service-head">Important factor of PHP Website Development Services Chandigarh, India:</h4>
                                <ul className="mobile_list">
                                    <li><i className="fa fa-hand-o-right"></i> <strong>Lower Load Time : </strong>&nbsp;It uses its memory to reduce loading & high processing speed benefits the developers.</li>
                                    <li><i className="fa fa-hand-o-right"></i> <strong>Highly Scalability : </strong>&nbsp;PHP website has scalability feature to handle high traffic on websites.</li>
                                    <li><i className="fa fa-hand-o-right"></i> <strong>Cost Effective : </strong>&nbsp;Because it’s an open source technology, so its expenses are automatically reduced.</li>
                                    <li><i className="fa fa-hand-o-right"></i> <strong>Customized Website : </strong>&nbsp;Most favourable for developers to build an appealing, highly-functional website.</li>
                                    <li><i className="fa fa-hand-o-right"></i> <strong>Security : </strong>&nbsp;Users suspect that PHP is not secure platform, but it depends on the developer's expertise.</li>
                                </ul>
                            </div><br />

                            <h4 className="new_head">Why should <span>I Hire Socio Edge for my PHP website?</span></h4>
                            <p>Our team uses PHP framework such as Moodle, Joomla, Drupal, etc. that carries high functionality and resolve security concern of the websites which gives appropriate results to the clients. Outstanding customization from Socio Edge’s developers, enhance PHP websites performance which helps our clients to retain their customers. Whether we talk about static websites or dynamic websites, our <strong>PHP website developers Chandigarh</strong> update them quickly and provide maintenance assistance.</p>

                            <p>So The Bottom Line Is: Hire our developers which provides the complete range of custom <strong>PHP website development services Chandigarh</strong>, India to empower your business. Socio Edge assures you to deliver perfect PHP website solutions that are highly functional, robust, scalable and cost-effective.</p>
                        </div>
                        <div className="col-sm-3">
                            <div className="right-web-services">
                                <h4>Design Services</h4>
                                <ul>
                                    <li><i className="fa fa-angle-right"></i><Link to="/website-design-services">Web Design Services</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/website-redesign-services">Website Re-Design</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/ecommerce-website-design-services">Ecommerce Website Design</Link></li>
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/hotel-website-design-services">Hotel Website Design</Link></li> */}
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/cms-website-design-services">CMS Website Design</Link></li> */}
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/web-portal-design-services">Web Portal Design</Link></li> */}
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
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/magento-website-development-services">Magento Development</Link></li> */}
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
export default PhpWeb;