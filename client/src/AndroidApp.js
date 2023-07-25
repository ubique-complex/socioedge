import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios';
const AndroidApp = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'You receiced a mail for Android App Development Services',
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
                <title>Socio Edge | android-application-development-services</title>
            </Helmet>
            <div className="development_bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="ineer_serv_textt">
                                <h2>Android Apps Development Services</h2>
                                <p>Apps plays an vital role in order to generate more business. Our android developers in Chandigarh, understands the importance of UI/UX designing and believe in delivering unique and quality app design services.</p>
                                <h2 style={{ color: '#121212' }}>Call @ +91-79863 78511</h2>
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
                                        <textarea className="form-control input-lg" placeholder="Description" type="text" name="message" style={{ width: '100%', height: '70' }} value={state.message} onChange={onInputChange} required ></textarea>
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
                        <li><Link to="#">/ App Solution /</Link></li>
                        <li><Link style={{ color: '#121212' }}><span>Android App Development</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Android App Development <span>Specialization</span></h2>
                            <p style={{ fontSize: '14' }}>Socio Edge develop android apps that fits on every mobile platform, which gives best UI/UX. Our experts use best security features in app to avoid<br /> threats which make your app more efficient and effective.</p><br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 mobile-text">
                        <div className="">
                            <h2 className="box-header">Cutting Edge Tools and Technologies in <span>Android Development</span></h2>

                            <p>Socio Edge offers qualitative and comprehensive <strong>android app development services in Chandigarh</strong> and serve clients across the globe. Our diverse, experienced and multidisciplinary <strong>android apps developer in Chandigarh</strong> is steeped in delivering top-notch android apps. They are committed to share our innovation and experience to accelerate innovation, subside transformation and bring competitive edge to our clients’ businesses. We have a robust team of skilled programmers to cater to any application requirements. Our expert and experienced <strong>android apps developer in Chandigarh </strong>have worked on projects ranging from a small restaurant menu app to games development to enterprise className applications interfacing with low-level app for video conferencing solutions.</p>

                            <p>Our project management, designing, testing and software development team has extensive experience in building new and unique app solutions by imbibing ground-breaking tools & technology, process-oriented strategies and methodologies from start to finish. But that’s not the only reason why our deliverables are best-in-className. The key reason why we are one of the leading service provider in mobile space is that we interact with you as a technical partner and give suggestions about the best tools, processes, models and strategies needed for your app idea. And, for that our UX developers and designers get into your customers shoes to chalk out their business goals. Whatever may be the requirement, be sure that we’ll understand it well and provide you with a cutting-edge solution that is liked by your end customer.</p><br />

                            <div className="services_inn_bg">
                                <h4 className="website-service-head" style={{ fontWeight: '600' }}>Challenges to look for in Android App Development</h4>

                                <p>Since Android is an open source platform, it is used by multiple vendors like Samsung, Redmi, Sony, LG, Acer to name a few. All these providers have come up with their own set of devices with varied screen sizes, resolutions, aspect ratios and underlying hardware. They also customize the Android Operating System to give their own look and feel to it. E.g. if you want to use some advanced functionality in your app that is available only in the 4.1 version of Android, that will impact the User Experience of the rest of the users. And it’s an informed decision that you need to take beforehand.</p>

                                <p>Also, once you have gotten the app done and checked it on your device, how do you know if it is working correctly on rest of the combinations of hardware and software. For that, our dedicated Mobile Testing team comes up with a proven track record and enviable infrastructure to test on a diverse variety of devices and platforms. And, this ensures consistent user experience across different devices.</p>
                            </div><br />

                            <p>Being a part of <strong>android app development services in Chandigarh</strong>, till date, we have created highly refined apps for startups and enterprise clients. Our <strong>android apps developer in Chandigarh</strong> are proficient in kink-free coding and come up with deep industry expertise and experience to deliver incredible mobile experiences to every screen across various domains including healthcare, wearable technology, enterprise, retail and social networking etc. We develop apps that are not only robust, scalable and customized but are also cost-effective, unique and meet our clients’ expectations and business goals.</p><br />

                            <div className="services_inn_bg" style={{ display: 'inline-block', width: '100%' }}>
                                <h4 className="website-service-head" style={{ fontWeight: '600' }}>Few APIs and Technologies we’ve worked with:</h4>
                                <ul className="mobile_list" style={{ width: '50%', float: 'left' }}>
                                    <li><i className="fa fa-hand-o-right"></i> Google Maps</li>
                                    <li><i className="fa fa-hand-o-right"></i> Phone API</li>
                                    <li><i className="fa fa-hand-o-right"></i> Address Book</li>
                                    <li><i className="fa fa-hand-o-right"></i> Calendar</li>
                                    <li><i className="fa fa-hand-o-right"></i> Alarm API</li>
                                    <li><i className="fa fa-hand-o-right"></i> Push Notifications</li>
                                    <li><i className="fa fa-hand-o-right"></i> SOAP integration with external APIs</li>
                                    <li><i className="fa fa-hand-o-right"></i> Android Software Development Kit (SDK)</li>
                                    <li><i className="fa fa-hand-o-right"></i> Android Media APIs</li>
                                    <li><i className="fa fa-hand-o-right"></i> OpenGL</li>
                                    <li><i className="fa fa-hand-o-right"></i> Mataio AR</li>
                                </ul>
                                <ul className="mobile_list" style={{ width: '50%', float: 'right' }}>
                                    <li><i className="fa fa-hand-o-right"></i> Location-based Service APIs</li>
                                    <li><i className="fa fa-hand-o-right"></i> Data Encryption and Data Hiding</li>
                                    <li><i className="fa fa-hand-o-right"></i> Augmented Reality</li>
                                    <li><i className="fa fa-hand-o-right"></i> Android NDK</li>
                                    <li><i className="fa fa-hand-o-right"></i> GPS</li>
                                    <li><i className="fa fa-hand-o-right"></i> Video Camera</li>
                                    <li><i className="fa fa-hand-o-right"></i> Video Calling</li>
                                    <li><i className="fa fa-hand-o-right"></i> Soft switch integration</li>
                                    <li><i className="fa fa-hand-o-right"></i> VOIP application development</li>
                                    <li><i className="fa fa-hand-o-right"></i> Wi-Fi APIs</li>
                                    <li><i className="fa fa-hand-o-right"></i> Android Security Architecture</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="right-web-services">
                            <div className="right-web-services">
                                <h4>App Services</h4>
                                <ul>
                                    <li><i className="fa fa-angle-right"></i><Link to="/mobile-application-development-services">Mobile App Development</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/android-application-development-services">Android App Development</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/ios-application-development-services">iOS App Development</Link></li>
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/ipad-application-development-services">iPad App Development</Link></li> */}
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/mobile-website-development-services">Mobile Website Development</Link></li> */}
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/web-application-development-services">Web Application Development</Link></li> */}
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/custom-software-development-services">Custom Software Development</Link></li> */}
                                </ul>
                            </div>  						</div>
                        <div className="right-web-services">
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
            </div><br />

        </>
    )
}
export default AndroidApp;