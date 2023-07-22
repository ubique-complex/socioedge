import React, { useState } from 'react'
import img1 from './images/fbMarket.png'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'

const FbMarket = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'You receiced a mail for Facebook Marketing Services',
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
                <title>Socio Edge | Facebook-marketing-services</title>
            </Helmet>
            <div className="development_bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="ineer_serv_textt">
                                <h2>Facebook Marketing Services</h2>
                                <p>In brand awareness, Facebook (FB) marketing services play a crucial role. Our FB marketing expert in Chandigarh enhance engagement on your brand and convert them into the leads for satisfactory result.</p>
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
                        <li><Link to="/digital-marketing-services">/ Digital Marketing /</Link></li>
                        <li><Link to="#">SMO /</Link></li>
                        <li><Link style={{ color: '#669940' }}><span>Facebook Marketing</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Business Needs <span>Facebook Marketing</span></h2>
                            <p>Facebook is a great platform to sell products and services to potential customers, which increases traffic for a business website. Our <strong>FB marketing expert in Chandigarh,</strong> also helps you in brand building.</p><br />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-9 mobile-text">
                        <div className="">
                            <h2 className="box-header">Facebook <span> Marketing Services</span></h2>
                            <p>Today there are various social media websites which help users to connect with each other where they share pics, videos, information etc. but facebook is most popular website. Facebook is seen as a website for connecting people but many small or brand companies used facebook marketing services to increase sales. That’s why Socio Edge started providing <strong>Facebook marketing services in Chandigarh.</strong></p><br />

                            <div className="services_inn_bg">
                                <h4 className="website-service-head">Fact of Facebook</h4>
                                <p>In an Online world, there are various types of social media websites available for marketing. Facebook has 2.32 billion monthly active users. If you want to beat your competitors, and attracts more customer engagement on your website then facebook is the best platform for you. With the help of <strong>FB marketing Expert in Chandigarh</strong>, you can grow your business worldwide.</p>
                            </div>
                        </div><br />

                        <div align="center"><img src={img1} className="img-responsive" alt="facebook-marketing-services-Chandigarh" /></div><br />

                        <p>As we provides <strong>Facebook marketing services Chandigarh</strong>, our experts listen your customer carefully and provide you the feedback. Your audience will tell you exactly what does and doesn't work about your product/service. But in order to start that open conversation, your customers need to feel that you're genuinely devoted to listening to their feedback and that you'll use the feedback to improve your product and service for them.</p>

                        <p>We offer excellent <strong>FB marketing services in Chandigarh</strong> for your business. Socio Edge uses interesting images, quality content, engaging videos to enhance post visibility. Apart from the regular post, we are into a Facebook marketing campaign to sell out our clients product and services that have a viral impact which increases customer visibility. And we’re not just interested in doing marketing for your company but we want to work with you every step of the way in building a buzzing community around it. Count on us to deliver top of the line customer service with our website development and <strong>facebook marketing services in Chandigarh</strong> to increase brand exposure for the acquisition of customers and clients as well as increase brand loyalty to your customers.</p>
                    </div>
                    <div className="col-sm-3">
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
                                {/* <li><i className="fa fa-angle-right"></i><Link to="/email-marketing-services">Email Marketing</Link></li> */}
                                <li><i className="fa fa-angle-right"></i><Link to="/bulk-sms-services">Bulk SMS Services</Link></li>
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
                        </div><br />					</div>
                </div>
            </div><br />
        </>
    )
}
export default FbMarket;