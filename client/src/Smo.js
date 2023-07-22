import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'

const Smo = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'You receiced a mail for SMO Services',
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
                <title>Socio Edge | smo-marketing-services</title>
            </Helmet>
            <div className="development_bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="ineer_serv_textt">
                                <h2>SMO (Social Media Optimization) Services</h2>
                                <p>Today, SMO marketing service is the world's least expensive and most effective marketing tool that is why so many businesses have embraced it.</p>
                                <h2 style={{ color: '#ffffff' }}>Call @ +91-79863 78511</h2>
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
                        <li><Link to="#">/ Digital Marketing /</Link></li>
                        <li><Link to="#">SMO /</Link></li>
                        <li><Link style={{ color: '#121212' }}><span>SMO Services</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Established Your<span> Social Media Presence</span></h2>
                            <p>Our experts use the top strategies that help your business to reach your potential audiences. They share unique and attractive content so that social media users can connect with them.</p><br />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-9 mobile-text">
                        <div className="">
                            <h2 className="box-header">Social Media<span> Marketing Services</span></h2>
                            <p>As Socio Edge provides <strong>SMO marketing services in Chandigarh</strong>, our experts know the fundamental principles of marketing still apply to social media marketing. Our experienced SMO experts creates effective social media marketing strategy to grow your business, maintain traffic on your social profiles and enhance engagement with the audience. Our experts offers <strong>SMM marketing services in Chandigarh</strong> as per your business requirement.</p>

                            <p>Socio Edge offers the expertise you need to reach out to consumers or a defined audience, and drive traffic to your Website. With the right strategy and planning, our <strong>SMO services in Chandigarh</strong> can turn your social media posts  into a powerful lead generation tool.</p>

                            <p>With the help of  social media websites, Our SMO experts improve online brand visibility. Identifies the key parameters of Social media audience behavior and suggest better solution to client. Socio Edge provides both positive and negative feedback to customers, how well their business is performing. Through <strong>SMO marketing services in Chandigarh</strong>, we promote services and products for maximum visibility on popular social media platform.</p><br />

                            <div className="services_inn_bg">
                                <h4 className="website-service-head">SMO marketing services based on the following factors:</h4>
                                <p><b>Graphic Design Factor:</b> Quality images are powerful way to attract audiences.</p>
                                <p><b>Content Factor:</b> To increase engagement content quality play a vital role.</p>
                                <p><b>Videos Factor:</b> Video is a more robust way to target online viewers.</p>
                            </div>
                            <br />

                            <div className="services_inn_bg">
                                <h4 className="website-service-head">Why Socio Edge is a Perfect Choice for SMO marketing Services In Chandigarh...?</h4>
                                <ul className="mobile_list">
                                    <li><i className="fa fa-hand-o-right"></i>Dynamic team of social media experts.</li>
                                    <li><i className="fa fa-hand-o-right"></i>We assure the exposure of your brand on a global platform.</li>
                                    <li><i className="fa fa-hand-o-right"></i>Within a minimum time, we will make your reach maximum.</li>
                                    <li><i className="fa fa-hand-o-right"></i>With us, you never put your money or personal information under risk.</li>
                                    <li><i className="fa fa-hand-o-right"></i>Client satisfaction is one of our primary targets.</li>
                                    <li><i className="fa fa-hand-o-right"></i>We adapt the changes as per current trend and work accordingly.</li>
                                </ul>
                            </div>
                            <br />

                            <p>If you want to target Online audiences, <strong>SMO services in Chandigarh</strong> can be a very cost effective way. Crafting awesome posts with engaging content for social media websites like Facebook, LinkedIn, Twitter, Pinterest, Instagram etc. requires creative bend of mind and a deep understanding of online user behavior. We, at Socio Edge, assist you to ‘how to’ showcase your brand on various platforms to get maximum exposure globally while engaging with the Online users.</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="right-web-services">
                            <div className="right-web-services">
                                <h4>SEO Services</h4>
                                <ul>
                                    <li><i className="fa fa-angle-right"></i><Link to="/seo-services">SEO Services</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/content-marketing-services">Content Marketing</Link></li>
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/hotel-website-seo-services">Hotel Website SEO</Link></li> */}
                                    <li><i className="fa fa-angle-right"></i><Link to="/ecommerce-website-seo-services">Ecommerce Website SEO</Link></li>
                                </ul>
                            </div><br />
                            <div className="right-web-services">
                                <h4>Lead Generation Services</h4>
                                <ul>
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/orm-management-services">ORM Services</Link></li> */}
                                    <li><i className="fa fa-angle-right"></i><Link to="/conversion-rate-optimization-services">Conversion Rate Optimization</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/email-marketing-services">Email Marketing</Link></li>
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/bulk-sms-services">Bulk SMS Services</Link></li> */}
                                </ul>
                            </div><br />
                            <div className="right-web-services">
                                <h4>SEM Services</h4>
                                <ul>
                                    <li><i className="fa fa-angle-right"></i><Link to="/sem-marketing-services">SEM Services</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/ppc-campaign-marketing-services">PPC Campaign Services</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/google-adwords-management-services">Google Adwords Management</Link></li>
                                </ul>
                            </div><br />
                            <div className="right-web-services">
                                <h4>SMO Services</h4>
                                <ul>
                                    <li><i className="fa fa-angle-right"></i><Link to="/smo-marketing-services">SMO Services</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/facebook-marketing-services">Facebook Marketing</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/youtube-video-marketing-services">YouTube Marketing</Link></li>
                                </ul>
                            </div><br />						</div>
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}
export default Smo;