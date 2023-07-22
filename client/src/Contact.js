import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './contact.css'
import axios from 'axios';
const Contact = () => {
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
            url: "/send",
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
                <title>Socio Edge | Contact Us</title>
                <meta name="description" content="Contact Socio Edge for website design and development, SEO, digital marketing services in Chandigarh, India. We are here, listen to you and help you out." />
            </Helmet>
            <div className="head portfolio imgs">
                <div className="container">
                    <h1 className="text-center">Get In Touch With <strong> Socio Edge</strong></h1>
                </div>
            </div>

            <div className="bedcrumb_service">
                <div className="container-fluid">
                    <ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
                        <li><Link to="/"> <span className="fa fa-home"></span></Link></li>
                        <li><Link style={{ color: '#121212' }}><span>/ Contact Us</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Send Us <span>Query</span></h2>
                            <p className={{ fontSize: '14' }}>Need help with web design or web development? Please complete the form below, We will help you with all your needs on web design and development. Our team of professional will answer all your question and guide you in right direction.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-7">
                        <div className="contact-form2">
                            <h2 className="box-header">Send a <span style={{ color: '#121212' }}>Message</span></h2>
                            <div className="row">
                                {result && (
                                    <p classNameName={`${result.success ? 'success' : 'error'}`}>
                                        {result.message}
                                    </p>
                                )}
                                <form name="enquiryForm" method="post" onSubmit={sendEmail} autocomplete="off">
                                    <div className="form-group">
                                        <span className="enquiry_name" style={{ color: 'red', fontSize: '14' }}></span>
                                        <div className="col-md-12">
                                            <label> Name:</label>
                                            <input type="text" className="form-control" placeholder="Full name" name="name" maxlength="30" value={state.name} onChange={onInputChange} />
                                        </div>
                                        <div className="col-md-12">
                                            <label>Email Address:</label>
                                            <input type="email" className="form-control" placeholder="Email Address" name="email" value={state.email} onChange={onInputChange} />
                                        </div>
                                        <div className="col-md-12">
                                            <label>Phone No:</label>
                                            <input type="number" className="form-control" placeholder="Mobile Number" name="phone" maxlength="10" value={state.phone} onChange={onInputChange} />
                                        </div>
                                        <div className="col-md-12">
                                            <label>Subject:</label>
                                            <input type="text" className="form-control" placeholder="Subject" name="subject" value={state.subject} maxlength="10" onChange={onInputChange} />
                                        </div>
                                        {/* <div className="col-md-12">
                                            <label>Choose Services</label>
                                            <select name="options"  onChange={onInputChange} className="form-control">
                                                <option value="fxbfb">Select a Interested Service</option>
                                                <option value="Domain Registration">Domain Registration</option>
                                                <option value="Website Hosting">Website Hosting</option>
                                                <option value="Website Designing">Website Designing</option>
                                                <option value="Website Development">Website Development</option>
                                                <option value="Website Re-Designing">Website Re-Designing</option>
                                                <option value="Website Maintenance">Website Maintenance</option>
                                                <option value="Hotel Website Design">Hotel Website Design</option>
                                                <option value="Static Website">Static Website</option>
                                                <option value="Dynamic Website">Dynamic Website</option>
                                                <option value="Travel Portal">Travel Portal</option> 
                                                <option value="E-Commerce Website Development">E-Commerce Website Development</option>
                                                <option value="Wordpress Website Development">Wordpress Website Development</option>
                                                <option value="Payment Gateway Integration">Payment Gateway Integration</option>
                                                <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                                                <option value="Social Media Optimization (SMO)">Social Media Optimization (SMO)</option>
                                                <option value="PPC Campaign (Adwords)">PPC Campaign (Adwords)</option>
                                                <option value="Email Marketing">Email Marketing</option>
                                                <option value="Logo Designing">Logo Designing</option>
                                            </select>
                                        </div> */}
                                        <div className="col-sm-12">
                                            <label>Your Requirement:</label>
                                            <textarea className="form-control" name="message" placeholder="How can i help?" type="text" style={{ width: '100%', height: '150' }} value={state.message} onChange={onInputChange}></textarea>
                                        </div>

                                    </div><br />
                                    <div className="col-md-12 col-sm-12 captcha">
                                        <input name="submit" type="submit" className="submit btn btn-danger" value="Send a Message" onclick="return checkValidationContact();" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                        <br />
                        <br />
                        <br />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13774.290863261635!2d76.3986252826192!3d30.33466935844058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391029d5cd6b5d21%3A0xe75649b3abd9167f!2sSocio Edge%3A%20Top%20Web%20designer%20And%20Developer%20%2F%20Seo%20%2F%20Digital%20Marketing%20%2F%20Graphic%20Designer!5e0!3m2!1sen!2sin!4v1626866723935!5m2!1sen!2sin" title="map" width="100%" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div><br />
        </>
    )
};
export default Contact;