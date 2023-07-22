import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './seo.css'
import img5 from './images/cwww.gif'
import img4 from './images/backlink.jpg'
import img3 from './images/on-page.jpg'
import img2 from './images/local.jpg'
import img1 from './images/seo-services.jpg'
import img from './images/seo.jpg'
import axios from 'axios'

const Seo = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'You receiced a mail for SEO Services',
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
            <div>
                <Helmet>
                    <title>Socio Edge | seo-services</title>
                    <meta name="description" content="Our  SEO agency provides you the best SEO services in Chandigarh, India with 100% results. Our SEO experts are suitable for all types of businesses such as Startups to brands." />
                    <meta name="keywords" content="SEO Agency In Chandigarh, SEO Service In Chandigarh, SEO Expert In Chandigarh, Best SEO Experts In Chandigarh, Chandigarh SEO Agency" />
                </Helmet>
                <div className="development_bg imgs">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="ineer_serv_textt">
                                    <h2>SEO Services</h2>
                                    <p>As a SEO agency, we deliver the best SEO services in Chandigarh and other parts of the country. It’s the best way to enhance brand reputation over the Internet. You need to hire an experienced SEO team like Socio Edge.</p>
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
                            <li><Link to="#">SEO /</Link></li>
                            <li><Link style={{ color: '#121212' }}><span>SEO Services</span></Link></li>
                        </ol>
                    </div>
                </div>
                <br />

                <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>SEO Services <span> For Better Result</span></h2>
                                <p>Our SEO team's effort helps you to achieve high rankings in top search engine results, which enhances visitors on the website to improve conversion and sales rates.</p><br />
                                <img src={img} alt="img" className="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mobile-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="box-header">Why Opt Socio Edge For<span> SEO Services In Chandigarh...?</span></h2>
                                <p>Socio Edge provides SEO services in Chandigarh and across the world with an objective to deliver top className SEO solutions to clients. As a <strong>SEO agency</strong>, Our experts make SEO strategy for clients website in a such way that their business get noticed by the relevant audiences in search engine result. Our team actively work according to the search engine algorithms and the latest marketing trends to provide a satisfactory result. Through result-oriented search engine optimization, we provide the most effective Online marketing services to established brands and startups. We offer one of the <strong>best SEO services in Chandigarh</strong> at a reasonable price. </p>

                                <p>At Socio Edge, we have a team of talented professionals who believes in to deliver fantastic result with proven <strong>SEO services in Chandigarh</strong>. Our marketing professionals have in-depth expertise in SEO techniques which means high traffic, leads, and sales for clients business. As SEO is an ongoing process, our <strong>SEO expert</strong> makes continuous tweaks to maintain website visibility in top searches of search engines that help them to generate more traffic for a website. Our team knows how to index a new website and get it into top searches. So, are you ready to improve the Online presence of your website?</p><br />
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ background: '#f9f9f9' }}>
                    <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h2>Effective SEO Strategy For <span>Successful Website</span></h2>
                                    <p>Do you want to improve online visibility of your brand and drive more relevant traffic to your website?</p><br />
                                    <img src={img1} alt="img1" className="img-responsive seo-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>Essential Factor That <span>Enhance Organic Traffic</span></h2>
                                <p>Most important factors are Local business listing, on-page changes as per search engine algorithm and backlinks which our SEO specialist <br />create in off-page activity.</p><br />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="wow box" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInRight' }}>
                            <div className="col-sm-4 col-md-4 col-xs-6 box">
                                <div className="web_development_services details">
                                    <img src={img2} alt="img2" />
                                    <p>We list your business on Google business page and other local business websites to improve local searches.</p>
                                    <h6>Local Optimization</h6>
                                </div>
                            </div>
                        </div>
                        <div className="wow box" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'bounceInDown' }}>
                            <div className="col-sm-4 col-md-4 col-xs-6 box">
                                <div className="web_development_services details">
                                    <img src={img3} alt="img3" />
                                    <p>Our SEO expert makes technical changes in websites as per latest marketing updates to maintain branding over Internet.</p>
                                    <h6>On Page Optimization</h6>
                                </div>
                            </div>
                        </div>
                        <div className="wow box" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInRight' }}>
                            <div className="col-sm-4 col-md-4 col-xs-6 box">
                                <div className="web_development_services details">
                                    <img src={img4} alt="img4" />
                                    <p>Our team create high-quality backlinks on high authority websites through Off-page activity like blogs, articles, infographics etc. posting.</p>
                                    <h6>Back Link Building</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>In Digital Marketing World, <span>SEO is a King</span></h2>
                                <p>SEO is an essential part of digital marketing. It's a trustworthy method to enhance organic site traffic and ensures your site gets <br />visible at a higher position in major search engines.</p><br />
                            </div>
                        </div>
                        <div className="se0_img" align="center"><img src={img5} alt="img5" width="850" className='img-responsive' /></div>
                    </div>
                </div>
                <br />

            </div>
        </>
    )
}
export default Seo;