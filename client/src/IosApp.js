import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios';
const IosApp = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'You receiced a mail for IOS App Development Services',
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
                <title>Growth Licious | ios-application-development-services</title>
            </Helmet>
            <div className="development_bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="ineer_serv_textt">
                                <h2>iOS Apps Development Services</h2>
                                <p>We are proud to have some of the experienced and professional iOS app developers in our team. Our result-oriented services makes us different. So Hire Now...!!</p>
                                <h2 style={{ color: '#ffffff' }}>Call @ +91 79863 78511</h2>
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
                        <li><Link style={{ color: '#121212' }}><span> iOS App Development</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-sm-9 mobile-text">
                        <div className="">
                            <h2 className="box-header">iOS App Development<span> Enhance Your Business Value </span></h2>
                            <p>As we provide the best <strong>iOS app development services in Chandigarh</strong> that allow a competitive edge to our client’s businesses. Our highly skilled team of <strong>iOS apps developers in Chandigarh</strong> provides business-centric and advance app development. By leveraging distinct iPhone features, our adept team of professionals are adept in turning your ideas into reality by creating apps that are user-centric and graphic-rich. With apparent methodologies and transparent processes, we work with our clients to create app that offer new business opportunities.</p><br />

                            <div className="services_inn_bg">
                                <h4 className="website-service-head">Why our app developers are popular...?</h4>
                                <p>Our developers are experts and take your idea right from the inception to successful launch. Being a part of top <strong>iOS apps development services in Chandigarh</strong>, our methodologies are process-oriented and technologically advanced that help us to deliver efficient and best-in-className products and services but before moving forward it is necessary to know below points:</p>
                                <ul className="mobile_list">
                                    <li><i className="fa fa-hand-o-right"></i> What type of app required?</li>
                                    <li><i className="fa fa-hand-o-right"></i> What clients want to achieve?</li>
                                    <li><i className="fa fa-hand-o-right"></i> Who is target audience?</li>
                                </ul>
                            </div><br />

                            <p>Growth Licious most valuable asset is their team members and we are proud to have some of the most efficient and adept <strong>iOS app developers in Chandigarh</strong>. Adept in newest and ground-breaking tools and techniques, we are known to create unique and useful iOS applications. Our team excels in developing best-in-className user interfaces which are unique, engaging and user-friendly.</p>

                            <p>Bestowed with years of knowledge and expertise in IT industry, we are proficient in delivering robust, scalable, cost-effective services. And, that makes our team best <strong>iOs apps developers in Chandigarh</strong>. Our creative team of designers and highly skilled developers breathe life into our client’s unique idea. Till date, we have developed a lot many applications for the iPad, iPod and iPhones to serve clients across the world. By making use of updated tools and technologies, we have a proven record in delivering solutions that are cost-effective and increase our client’s business value.</p><br />

                            <div className="services_inn_bg" style={{ display: 'inline-block', width: '100%' }}>
                                <h4 className="website-service-head">Tools and Technologies:</h4>
                                <ul className="mobile_list" style={{ width: '50%', float: 'left' }}>
                                    <li><i className="fa fa-hand-o-right"></i>Titanium (Cross Platform for iOS and Android)</li>
                                    <li><i className="fa fa-hand-o-right"></i>Phone Gap (Cross Platform)</li>
                                    <li><i className="fa fa-hand-o-right"></i>Sencha (Cross Platform)</li>
                                    <li><i className="fa fa-hand-o-right"></i>JSON / XML</li>
                                    <li><i className="fa fa-hand-o-right"></i>Xcode</li>
                                </ul>
                                <ul className="mobile_list" style={{ width: '50%', float: 'right' }}>
                                    <li><i className="fa fa-hand-o-right"></i> iPhone SDK, Cocoa Touch</li>
                                    <li><i className="fa fa-hand-o-right"></i> Objective-C</li>
                                    <li><i className="fa fa-hand-o-right"></i> SOAP/REST API</li>
                                    <li><i className="fa fa-hand-o-right"></i> UI Kit</li>
                                    <li><i className="fa fa-hand-o-right"></i> Store Kit</li>
                                </ul>
                            </div>
                            <p><br /></p>
                            <div className="services_inn_bg">
                                <h4 className="website-service-head">Why Choose Growth Licious As iOS App Developers In Chandigarh...?</h4>
                                <ul className="mobile_list">
                                    <li><i className="fa fa-hand-o-right"></i> We have a great diversity in team that gives us access to expert in each area. Our iOS app developers are proficient in all the new technologies and tools along with the latest trends in the development area. Our UX design team is apt in creating cutting-edge designs that perform well across multiple mobile devices.</li><br />
                                    <li><i className="fa fa-hand-o-right"></i> We stand behind our work. After the application has been delivered, if you experience any issue with your app, we will fix it at no extra cost.</li><br />
                                    <li><i className="fa fa-hand-o-right"></i> Our client extranet and other communication channels are seamless and our clients can always be in touch with us. This ensures that the confusions and complexities are ironed out with minimum effort at both ends.</li><br />
                                    <li><i className="fa fa-hand-o-right"></i> We have a competitive pricing model that suits most of our customers. On top of that we have multiple and flexible engagement models to ensure you get into most comfortable partnerships.</li><br />
                                    <li><i className="fa fa-hand-o-right"></i> Our testing infrastructure ensures that your app is tested on varied devices, orientation and OS version.</li>
                                </ul>
                            </div>
                            <p><br />Our experienced designers and developers have extensive knowledge about end-to-end life cycle of iOS application development. This ranges from user profiling, rapid and clear prototyping, creating engaging User Interfaces, coupled with robust backend programming and finally, supported with varied device testing. We ensure to engage with our customers right at the outset to clearly define the objectives and never hold back if we feel we have something to contribute to the idea based on our experience and expertise in the subject matter. For us, a great app is the one that is liked by our client’s target audiences, not only the client.</p><br />
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
                            </div>  						</div><br />
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
export default IosApp;