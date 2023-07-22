import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'
const Content = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'You receiced a mail for Content Marketing Services',
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
                <title>Socio Edge | content-marketing-services</title>
            </Helmet>
            <div className="development_bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="ineer_serv_textt">
                                <h2>Content Marketing Services</h2>
                                <p>Content marketing improve your brand reputation in a positive way that engage Online users and enhance trust flow that influence conversions rate.</p>
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
                        <li><Link to="/"><span className="fa fa-home"></span></Link></li>
                        <li><Link to="#">/ Digital Markeitng /</Link></li>
                        <li><Link to="#">SEO /</Link></li>
                        <li><Link style={{ color: '#121212' }}><span>Content Marketing</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Great content build<span> business reputation</span></h2>
                            <p style={{ fontSize: '14' }}>Socio Edge’s primary objective is to create high-quality content for client's business requirement. Our motive is to attract online users through content <br />marketing and convert them into leads.</p><br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 mobile-text">
                        <div className="">
                            <h2 className="box-header">Best <span>Content Marketing Services</span></h2>

                            <p>As we provide <strong>content marketing services in Chandigarh</strong>,  our experts know that your online business depends on high-quality content that showcases your brand’s expertise over search engine. Content Quality has enough power to engage online audiences and convert them into the leads. Our team not only provides blogs and articles content but also provides content of video, advertisements, editorial, etc. to fulfill our client's requirement. Using the right word at the right place at the right time is a process of content planning and implementation.</p>
                            <div className="services_inn_bg">
                                <h4 className="website-service-head">Socio Edge content marketing services involves strategic approach:</h4>
                                <p><b>Content Marketing Research Strategy:</b> Before, we start creating content. We find out what type of audiences our client’s want to target and also find out the best possible way to bring potential customers to the website.</p>
                                <p><b>Content Marketing Plan:</b> Once we know what client’s Online audiences likes to search and what they want to read. Our content team creates exactly the same content that suits their business needs, whether you're product-based or providing some services.</p>
                                <p><b>Content Creation and Implementation:</b> After proper planning, Our content team thoughtfully & artfully create quality content as per trending practise and implement targeted keywords while writing the blogs or on websites. Our core focus is to create content which is easy to read that increase engagement, entertain online users, and finally convert them into lead.</p>
                                <p><b>Content Editing and Sharing:</b> In editing phase, our experts remove grammatical errors such as Spelling mistakes, Sentence fragments, Wordiness, Comma splicing etc. After completion editing phase our goal is to share the content on social media channels and promote your content in a effective and efficient way to improve conversion rate.</p>
                                <p><b>Content Performance Optimization:</b> Content performance optimization is also essential because with the help of performance tracking we can determine how much traffic is coming to websites or blogs. So that we can plan our strategy. Here at Socio Edge, our specialist track down the monthly traffic report and analyze the sales progress before making any new strategy.</p>
                            </div>
                        </div><br />
                        <h4 className="website-service-head">Content Marketing Role In SEO</h4>
                        <p>Content plays a vital role in search engine optimization(SEO). Without content, you can’t express your business ideology in front of your online users. Creating high-quality content is a requirement of every online business but it's a time taking process. That’s why content marketing is never easy but TrendPuff’s writers are passionate about their work and know the importance of crafting quality content.</p>
                        <p>So, without worries you can hire Socio Edge for exceptional <strong>content marketing services in Chandigarh</strong>..!!</p>
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
                        </div><br />					</div>
                </div>
            </div><br />

        </>
    )
}
export default Content