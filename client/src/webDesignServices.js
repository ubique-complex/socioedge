import React, { useState } from 'react'
import './webDesignServices.css'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import webImg from './images/redesign.png'
import webImg2 from './images/s2.png'
import webImg3 from './images/s3.png'
import webImg4 from './images/web-portal-icon.png'
import webImg5 from './images/s5.png'
import webImg6 from './images/static-website-icon.png'
import axios from 'axios';
// import emailjs from '@emailjs/browser';

const WebDesignServices = () => {
    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_sfyldit', 'template_ezbx798', form.current, 'wDWldNm-ELApT3Ygt')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // };


    // Old Method of mail sending

    // const baseUrl = "http://localhost:3001";

    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'You receiced a mail for Web Designing Services',
        message: ''
    });
    const [result, setResult] = useState(null);

    const sendEmail = async (event) => {
        event.preventDefault();
        axios({
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": true
            },
            url: "http://localhost:5000/send",
            data: state
        }).then((res) => {
            console.log(res);
            alert("Thanks for contacting us. We will get back to you shortly")
            setResult(res.data);
            setResult({ success: true, message: 'Thanks for contacting us. We will get back to you shortly' });
            setState({ name: '', email: '', phone: '', message: '' });
        }).catch(() => {
            setResult({ success: false, message: 'Something went wrong. try again later' });
            setState({ name: '', email: '', phone: '', message: '' });
        });


        // axios({
        //     method: "POST",
        //     url: "/send",
        //     data: state
        // }).then(res => {
        //     console.log(res.state);
        //     setResult(res.data);
        //     setResult({ success: true, message: 'Thanks for contacting us. We will get back to you shortly' });
        //     setState({ name: '', email: '', phone: '', message: '' });
        // })
        //     .catch(() => {
        //         setResult({ success: false, message: 'Something went wrong. try again later' });
        // });
    };


    const onInputChange = (event) => {

        // setState(event.target.value);

        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    };
    return (
        <>
            <Helmet>
                <title>Socio Edge | Web Design Services</title>
                <meta name="description" content="Get professional web designing services in Chandigarh, India. Our experienced website designer creates eye-catchy website, takes your Online business to the next level." />
                <meta name="keywords" content="Web Designing Services Chandigarh, Web Designing In Chandigarh, Website Design In Chandigarh, Web Design Service In Chandigarh" />
            </Helmet>
            <div className="development_bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="ineer_serv_textt">
                                <h2>Web Design Services</h2>
                                <p>Effective website design makes a good impression on online audiences. The impressive user-interface helps to increase website engagement that improves the conversion rate of a business. By having a good website can target your potential customer easily, which leads to enhance business revenue.</p>
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
                                        <input type="Phone Number" className="form-control input-lg" placeholder="Phone Number" name="phone" maxlength="10" onChange={onInputChange} value={state.phone} required />
                                        <span className="contact_phone" style={{ color: 'red', fontSize: 12 }}></span>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control input-lg" placeholder="Description" type="text" name="message" style={{ width: '100%', height: 70 }} value={state.message} onChange={onInputChange} required></textarea>
                                        <span className="contact_query" style={{ color: 'red', fontSize: 12 }}></span>
                                    </div>
                                    {result && (
                                        <p style={{ color: '#000000' }} classNameName={`${result.success ? 'success' : 'error'}`}>
                                            {result.message}
                                        </p>
                                    )}


                                    <button className="btn-info" type="submit" name="submit_button" value="Submit" >Get Free Quote</button>
                                </form>
                            </div>
                        </div>
                        {/* <script src='https://www.google.com/recaptcha/api.js'></script> */}
                    </div>
                </div>
            </div>

            <div className="bedcrumb_service">
                <div className="container-fluid">
                    <ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
                        <li><Link to="/"> <span className="fa fa-home"></span></Link></li>
                        <li><Link to="/website-design-services" style={{ textDecoration: 'none' }}>&nbsp;/ Web Solution /</Link></li>
                        <li><Link to="" style={{ textDecoration: 'none' }}>&nbsp;Design /</Link></li>
                        <li><Link style={{ color: '#121212' }}><span>Web Design Services</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>We offer a wide range of<span> website design services</span></h2>
                            <p>Socio Edge primary objective is to fulfill the client's business requirement and provide them excellent website development services which strengthen the business value.</p><br />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-9 mobile-text">
                        <div className="">
                            <h2 className="box-header">Exquisite <span>Web Design Solutions </span></h2>
                            <p>Socio Edge provides top className <strong>website design services in Chandigarh</strong>. We know website design plays an important role in the online world. Our website designers understand the importance of web designing and believe in delivering unique and quality designs.</p><br />

                            <div className="services_inn_bg">
                                <h4 className="website-service-head">Why Great Design Works? | How to Redesign your website...?</h4>
                                <p>As a part of <strong>web design services in Chandigarh</strong>, Our professional website designers create the best layout and use eye catchy color combination in a website. Before designing process our designers  clearly define the goal for the website with the clients that includes:</p>

                                <ul className="mobile_list">
                                    <li><i className="fa fa-hand-o-right"></i> What type of website required?</li>
                                    <li><i className="fa fa-hand-o-right"></i> What clients want to achieve?</li>
                                    <li><i className="fa fa-hand-o-right"></i> Who is target audience?</li>
                                </ul>
                            </div>

                            <div className="row">
                                <div className="col-sm-4 text-center">
                                    <div className="web_sub_Serv">
                                        <img src={webImg} alt="imm" />
                                        <h4>Website Re-Design Services</h4>
                                        <p>Website redesign process is important when the website does not reflect any business growth...</p>
                                        <Link to="/website-redesign-services">Read More</Link>
                                    </div>
                                </div>

                                <div className="col-sm-4 text-center">
                                    <div className="web_sub_Serv">
                                        <img src={webImg2} alt="imm" />
                                        <h4>Ecommerce Web Design</h4>
                                        <p>Ecommerce web designing services is one of the popular services among users who want to buy...</p>
                                        <Link to="/ecommerce-website-design-services">Read More</Link>
                                    </div>
                                </div>

                                <div className="col-sm-4 text-center">
                                    <div className="web_sub_Serv">
                                        <img src={webImg3} alt="imm" />
                                        <h4>CMS Website Design</h4>
                                        <p>Get CMS website design services from Socio Edge. CMS websites are easy to maintain...</p>
                                        <Link to="/cms-website-design-services">Read More</Link>
                                    </div>
                                </div>

                                <div className="col-sm-4 text-center">
                                    <div className="web_sub_Serv">
                                        <img src={webImg4} alt="imm" />
                                        <h4>Portal Websites Design</h4>
                                        <p>Website portal are high in demand as compared to previous year. Our website designer are offering...</p>
                                        <Link to="/web-portal-design-services">Read More</Link>
                                    </div>
                                </div>

                                <div className="col-sm-4 text-center">
                                    <div className="web_sub_Serv">
                                        <img src={webImg5} alt="imm" />
                                        <h4>Logo Design</h4>
                                        <p>Logo designing services is a process in which designer perceive your business concept before...</p>
                                        <Link to="/logo-design-services">Read More</Link>
                                    </div>
                                </div>

                                <div className="col-sm-4 text-center">
                                    <div className="web_sub_Serv">
                                        <img src={webImg6} alt="imm" />
                                        <h4>Static Website Design</h4>
                                        <p>Static website are cost-effective and easy to manage. Our team provides static website design...</p>
                                        <Link to="/static-website-design-services">Read More</Link>
                                    </div>
                                </div>

                                {/* <!--
							<div className="col-sm-4 text-center">
								<div className="web_sub_Serv">
									<img src="img/services/1.png">
									<h4>Static Website Design</h4>
									<p>Static website are cost-effective and easy to manage. Our team provides static website design...</p>
									<Link to="static-website-design-services.php">Read More</Link>
								</div>
							</div>
							--> */}
                            </div>
                            <br />
                            <p>After recognizing your business need, our designers implement your business idea into reality by creating innovative and effecting web designs with efficient technical knowledge. Socio Edge team care about your business and committed to delivered quality <strong>website designing services in Chandigarh</strong> that’s why our team show you the best web layout and suggest clients to choose the suitable theme for their business that can be helpful to attract customers.</p><br />

                            <div className="services_inn_bg">
                                <h4 className="website-service-head">Transform Your Virtual Idea Into Reality</h4>
                                <p>A good design empowers the business reputation in the market and assures to maximize leads and conversions. As we are into <strong>website design services in Chandigarh</strong>, our designers will not only solve your problem but also design a website that your audience wants:</p>
                                <ul className="mobile_list">
                                    <li><i className="fa fa-hand-o-right"></i> Unique, engaging and creative websites</li>
                                    <li><i className="fa fa-hand-o-right"></i> Create a great user experience.</li>
                                    <li><i className="fa fa-hand-o-right"></i> Easy navigation and user friendly design.</li>
                                </ul>
                            </div>
                            <br />
                            <p>Those website design company which provide easy navigation, clear information, standard content and comfortable layout for eyes in a website design are perfect for <strong>website design solutions in Chandigarh</strong>. Our experienced professional believes in quality work and carry out eye-catching web design with user-friendly functionality that attract users and improve online presence of customers business.</p>

                        </div>

                    </div>
                    <div className="col-sm-3">
                        <div className="right-web-services">
                            <h4>Design Services</h4>
                            <ul>
                                <li><i className="fa fa-angle-right"></i><Link to="/website-design-services">Web Design Services</Link></li>
                                <li><i className="fa fa-angle-right"></i><Link to="/website-redesign-services">Website Re-Design</Link></li>
                                <li><i className="fa fa-angle-right"></i><Link to="/ecommerce-website-design-services">Ecommerce Website Design</Link></li>
                                {/* <li><i className="fa fa-angle-right"></i><Link to="/hotel-website-design-services">Hotel Website Design</Link></li> */}
                                {/* <li><i className="fa fa-angle-right"></i><Link to="/web-portal-design-services">Web Portal Design</Link></li> */}
                                <li><i className="fa fa-angle-right"></i><Link to="/static-website-design-services">Static Website Design</Link></li>
                                {/* <li><i className="fa fa-angle-right"></i><Link to="/cms-website-design-services">CMS Website Design</Link></li> */}
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
                        </div><br />						<div className="right-web-services">
                            <h4>Graphic Services</h4>
                            <ul>
                                <li><i className="fa fa-angle-right"></i><Link to="/graphic-design-services">Graphic Design Services</Link></li>
                                <li><i className="fa fa-angle-right"></i><Link to="/logo-design-services">Logo Design</Link></li>
                                <li><i className="fa fa-angle-right"></i><Link to="/flyer-design-services">Flyer Design</Link></li>
                                <li><i className="fa fa-angle-right"></i><Link to="/brochure-design-services">Brochure Design</Link></li>
                                <li><i className="fa fa-angle-right"></i><Link to="/mailer-design-services">Mailer Design</Link></li>
                                <li><i className="fa fa-angle-right"></i><Link to="/visiting-card-design-services">Visiting card Design</Link></li>
                                <li><i className="fa fa-angle-right"></i><Link to="/psd-to-html">PSD to HTML</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <br />

        </>
    )
}
export default WebDesignServices