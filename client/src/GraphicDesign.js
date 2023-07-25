import React, { useState } from 'react'
import img1 from './images/in1.png'
import img2 from './images/in2.png'
import img3 from './images/in3.png'
import './graphic.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios';
const GraphicDesign = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'You receiced a mail for Graphic Design Services',
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
                <title>Socio Edge | magento-website-development-services</title>
                <meta name="description" content="Hire graphic designers in Chandigarh, India. Our graphic designing service includes awesome creatives like website design, logo design, ads designs, etc." />
                <meta name="keywords" content="Graphic Designing In Chandigarh, Graphic Designer Chandigarh, Graphic Designing Service In Chandigarh, Graphic Designer In Chandigarh" />
            </Helmet>
            <div className="development_bg imges">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="ineer_serv_textt">
                                <h2>Graphic Design Means Everything, Especially When It Comes To Your Business</h2>
                                <p>A range of graphic design services to create an impressive business image, highly effective marketing material and to make your business website engaging along with being attractive.</p>
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

                        {/* <script src="https://www.google.com/recaptcha/api.js"></script> */}
                    </div>
                </div>
            </div>

            <div className="bedcrumb_service">
                <div className="container-fluid">
                    <ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
                        <li><Link to="/"> <span className="fa fa-home"></span></Link></li>
                        <li><Link to="#">/ Web Solution /</Link></li>
                        <li><Link to="#">Graphic /</Link></li>
                        <li><Link style={{ color: '#121212' }}><span>Graphic Design Services</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Highly Appealing<span> Graphic Designs</span></h2>
                            <p>Our graphic designers use their imagination, creativity to understand the brands and target audiences while designing to meet desirable visual content as per clients expectations.</p><br />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-text">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <h2 className="box-header">We Create <span>Designs You Remember</span></h2>
                            <p>Graphic designing are extremely crucial for any businesses. Every business requires high-quality content for both Offline and Online marketing promotion. Socio Edge providing best <strong>graphic designing services in Chandigarh</strong> to startups or a well established brand. We have a top-className <strong>graphic designer in Chandigarh</strong>, who are expert in designing awesome creatives such as websites, logo, business cards, brochures, images, etc. to impress the client's customer. Our graphic designers know the importance of color combination, image selection, text style and layout in the particular design.</p>

                            <p>First of all, our graphic designers understand the objective of the client's business to provide them impressive <strong>graphic designing services in Chandigarh</strong>. Our designer's design graphics in an artistic way that creatively communicate through images and layouts directly to the audiences without any problem. Our designer uses advanced tools for designing such as Adobe Illustrator, Adobe Photoshop, CorelDraw, Adobe InDesign, etc. Having a world className team of <strong>graphic designer in Chandigarh</strong>, we helps our clients by delivering an effective and influential graphic design that draw customers attention towards their brand.</p><br />

                            <div className="services_inn_bg">
                                <h4 className="website-service-head">Why Graphic Designing Services is Important to any business?</h4>
                                <ul className="mobile_list">
                                    <li><i className="fa fa-hand-o-right"></i> Graphic design have persuasion power that persuade your customers.</li>
                                    <li><i className="fa fa-hand-o-right"></i> Attractive & effective design can impress your clients, show your organization’s professionalism.</li>
                                    <li><i className="fa fa-hand-o-right"></i> Empower your business reputation and improve brand presence in the market.</li>
                                    <li><i className="fa fa-hand-o-right"></i> Enhance sales and goodwill of the organization.</li>
                                </ul>
                            </div><br />
                            <p>So, hiring a professional team of graphic designer crucial. In addition to designing, our <strong>graphic designer in Chandigarh</strong> advise clients on how to promote the brand and reach customers. To stay alive in the market and wants to finish work on time then you must hire a <strong>graphic designing services in Chandigarh</strong> to beat the competition.</p>
                        </div>
                        <div className="col-sm-3">
                            <div className="right-web-services">
                                <h4>Graphic Services</h4>
                                <ul>
                                    <li><i className="fa fa-angle-right"></i><Link to="/graphic-design-services">Graphic Design Services</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/logo-design-services">Logo Design</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/flyer-design-services">Flyer Design</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/brochure-design-services">Brochure Design</Link></li>
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="mailer-design-services.php">Mailer Design</Link></li> */}
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="visiting-card-design-services.php">Visiting card Design</Link></li> */}
                                    <li><i className="fa fa-angle-right"></i><Link to="/psd-to-html">PSD to HTML</Link></li>
                                </ul>
                            </div>						</div>
                    </div>
                </div>
            </div><br />
            <section className="mobile-text newwgraphic">
                <div className="container">
                    <div className="suffe_head">
                        <h2>What Can You<span> Expect From Us?</span></h2>
                    </div>
                    <div className="sff_headig">
                        <p className="text-center">While working with us, Our graphic designers in Chandigarh assure you that you have given your work in the right hands.</p>
                    </div><br />
                    <div className="border_in"></div>
                    <div className="inner_incl">
                        <div className="row">
                            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 width100">
                                <div className="per_cust">
                                    <figure><img src={img1} alt="img1" /></figure>
                                    <figcaption><h3>Outstanding Graphics</h3></figcaption>
                                    <p>Our designers specialize in product illustrations, logos, website designs, and know which color, picture, text, style or layout useful to convey your brand message to the audiences.</p>
                                    <div className="border_incl"></div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 width100">
                                <div className="per_cust">
                                    <figure><img src={img2} alt="img2" /></figure>
                                    <figcaption><h3>Quick Turnaround</h3></figcaption>
                                    <p>Socio Edge believes in building long term relationship with our clients that why we deliver top-notch graphics without any delay. Time is equally important for us as it is for you.</p>
                                    <div className="border_incl"></div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 width100">
                                <div className="per_cust">
                                    <figure><img src={img3} alt="img3" /></figure>
                                    <figcaption><h3>24 Hour Availability</h3></figcaption>
                                    <p>As we believe in providing top rated graphic designing services in Chandigarh, but if still, you need any guidance or support, you can contact our Graphic designers in Chandigarh to support you anytime.</p>
                                    <div className="border_incl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br />
        </>
    )
}
export default GraphicDesign;