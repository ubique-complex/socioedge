import React, { useState } from 'react'
import img2 from './images/main.jpg'
import img1 from './images/1.jpg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios';
import './brochure.css'

const BrochureDesign = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'You receiced a mail for Brochure Design Services',
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
                <title>Socio Edge | brochure-design-services</title>
            </Helmet>
            <div className="development_bg imgse">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="ineer_serv_textt">
                                <h2>Brochure Design Services</h2>
                                <p>The reason for brochures being so popular is that brochures inspire both readers online and offline. It reflects your company's professionalism and enhances brand reputation.</p>
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
                        <li><Link to="#">/ Web Solution /</Link></li>
                        <li><Link to="#">Graphic /</Link></li>
                        <li><Link style={{ color: '#121212' }}><span>Brochure Design</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Brochure Describes <span>What Business You Do..?</span></h2>
                            <p style={{ fontSize: '14' }}>Brochures are very useful tool for marketing for both small and established brand. It gives you  complete information about company profile, product information, case studies, support information and contact details of the organization.</p><br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 mobile-text">
                        <div className="">
                            <h2 className="box-header">Brochures: <span>Perfect way to summarize your business</span></h2>

                            <p>Brochures are the perfect tool for marketing, which tell customers deeply about the services and products of the business. It makes your business more valuable and demonstrates the professionalism of your brand. As we offer <strong>brochure design services in Chandigarh</strong>, provides wide range of design services which require creativity and innovative ideas from experienced designers.</p><br />
                            <div className="services_inn_bg">
                                <h4 className="website-service-head">Why Choose Socio Edge For Professional Brochure Design Services In Chandigarh</h4>
                                <ul className="mobile_list">
                                    <li><i className="fa fa-hand-o-right"></i> Believe In client satisfaction</li>
                                    <li><i className="fa fa-hand-o-right"></i> Design customized brochure with unique idea</li>
                                    <li><i className="fa fa-hand-o-right"></i> Use latest technology to produce top-className brochure design</li>
                                    <li><i className="fa fa-hand-o-right"></i> Promote business through cost effective design</li>
                                    <li><i className="fa fa-hand-o-right"></i> Delivered on time</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="right-web-services">
                            <h4>Graphic Services</h4>
                            <ul>
                                <li><i className="fa fa-angle-right"></i><Link to="/graphic-design-services">Graphic Design Services</Link></li>
                                <li><i className="fa fa-angle-right"></i><Link to="/logo-design-services">Logo Design</Link></li>
                                <li><i className="fa fa-angle-right"></i><Link to="/flyer-design-services">Flyer Design</Link></li>
                                <li><i className="fa fa-angle-right"></i><Link to="/brochure-design-services">Brochure Design</Link></li>
                                {/* <li><i className="fa fa-angle-right"></i><Link to="/mailer-design-services">Mailer Design</Link></li> */}
                                {/* <li><i className="fa fa-angle-right"></i><Link to="/visiting-card-design-services">Visiting card Design</Link></li> */}
                                <li><i className="fa fa-angle-right"></i><Link to="/psd-to-html">PSD to HTML</Link></li>
                            </ul>
                        </div>					</div>
                </div>
            </div><br />

            <div className="newwgraphic">
                <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>We design all <span>types of Brochures:</span></h2>
                                <p>Our flyer designers in Chandigarh, plan & implement their concept into brochure designing to fulfill the business needs, which leads rich in features & carry forward your brand value.</p>
                            </div>
                        </div>
                    </div>
                </div><br />
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 width100">
                            <div className="per_cust">
                                <figure><img src={img1} alt="brochure" className="img-responsive" /></figure>
                                <figcaption><h3 style={{ margin: '10 0' }}>Bifold Brochure</h3></figcaption>
                                <div className="border_incl"></div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 width100">
                            <div className="per_cust">
                                <figure><img src={img1} alt="brochure" className="img-responsive" /></figure>
                                <figcaption><h3 style={{ margin: '10 0' }}>Bifold 8 page Brochure</h3></figcaption>
                                <div className="border_incl"></div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 width100">
                            <div className="per_cust">
                                <figure><img src={img1} alt="brochure" className="img-responsive" /></figure>
                                <figcaption><h3 style={{ margin: '10 0' }}>Three Fold Brochure</h3></figcaption>
                                <div className="border_incl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br />
            <div className="mobile-text">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2 className="box-header">Get Brochures<span> Design Services</span></h2>
                            <p>As per brochure designers requirement, the client must provide all essential details of products or services in a visually appealing manner. At Socio Edge, Our graphic designers believe in designing unique brochure designs to make a desirable impact on Offline and Online users. We know that brochures contain product and service details with the high-quality images and texts. The brochures we create are sufficiently powerful to enhance website traffic.</p>
                            <p>Socio Edge professional <strong>brochure designers in Chandigarh</strong>, believes in creating effective brochures to serve all industries. Our specialists ensure that your brochures meet all the needs of your business and effectively convey your message to your users. So hire us for brochure design need...!</p>
                            <Link to="contact-us.php" className="portfolio_button">Send Us Query</Link>
                        </div>
                        <div className="col-sm-6">
                            <img src={img2} alt="brochure" className="img-responsive hidden-xs" />
                        </div>
                    </div>
                </div>
            </div><br />
        </>
    )
}
export default BrochureDesign;