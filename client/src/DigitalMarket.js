import React, { useState } from 'react'
import img1 from './images/digital-marketing.jpg'
import img2 from './images/seo-icon.png'
import img3 from './images/smo-icon.png'
import img4 from './images/ppc-icon.png'
import img5 from './images/email-marketing-icon.png'
// import img6 from './images/digital-marketing.jpg'
import img7 from './images/content-marketing-icon.png'
import './Digitalmarket.css'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
const DigitalMarket = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'You receiced a mail for Digital Marketing Services',
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
                <title>Socio Edge | Digital Marketing Services</title>
                <meta name="description" content="Socio Edge is a leading IT company in Chandigarh,
                  where we believe in data driven planning to develop strategies that are exclusively matched to your brand."></meta>
            </Helmet>
            <div className="development_bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="ineer_serv_textt">
                                <h2>Digital Marketing Services</h2>
                                <p>Our digital marketing strategy gives solid return that improve business growth. Perfect stand for brand awareness and successful business transformation that enhance website visibility, engagement and sales for startup businesses & established brands.</p>
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
                        <li><Link to="/digital-marketing-services" style={{ color: '#669940' }}>/ Digital Marketing</Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Digital Marketing <span>Solutions</span></h2>
                            <p>Our digital marketing professionals have a vast knowledge of online marketing and use highly skilled branding approaches for business products and services.</p><br />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-text">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2 className="box-header">Digital Marketing<span> Grow Your Business</span></h2>
                            <p>Being a part of <strong>digital marketing services in Chandigarh</strong>, India. Our experienced and passionate marketing specialists are well-focused on delivering business-oriented results. They use trending online marketing strategies to enhance organic search and run campaigns to improve lead conversion rate that helps all types of customers to achieve their business desires. At Socio Edge, our digital marketing experts follow three principles, i.e a successful planning, creativity, and execution of strategies through which any business can easily improve their brand awareness. So whether you are a startup, SME, or a brand, Socio Edge is a better option for digital marketing services in Chandigarh, India.</p>

                            <p>Just developing a website is not enough for the business. Marketing plays a crucial role in promoting businesses as a brand. Being a part of <strong>digital marketing services in Chandigarh</strong>, our experts analyze every business’s strengths & weaknesses. So, we can use smart tactics to provide the best output to audiences in search engine results. Socio Edge has an experienced team of marketing strategists who adopt the latest trends and techniques to make their business name in the market.
                            </p>

                            <p>Choosing the right digital marketing channel and optimization methods for client business is our specialty that will give you the best ROI.</p>
                            <Link to="price-packages.php" className="portfolio_button">Check Our Plan</Link>
                        </div>

                        <div className="col-sm-6">
                            <img src={img1} alt="mainimg" className="img-responsive" />
                        </div>
                    </div>
                </div>
            </div><br /><br />

            <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Effective Way To Promote<span> Your Business</span></h2>
                            <p>Our digital marketing strategist are innovative who help businesses to promote them as a brand. We improve their market presence with a help of broad and effective marketing skills.</p><br />
                        </div>

                    </div>

                </div>

            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-9 mobile-text">
                        <div className="row">
                            <div className="col-sm-4 text-center">
                                <div className="web_sub_Serv">
                                    <img src={img2} alt="img2" />
                                    <h4>SEO</h4>
                                    <p>Our expert uses modern SEO techniques to examine the website performance and ensure you about the brand reputation of your business.</p>
                                    <Link to="/seo-services">Read More</Link>
                                </div>
                            </div>

                            <div className="col-sm-4 text-center">
                                <div className="web_sub_Serv">
                                    <img src={img3} alt="img" />
                                    <h4>SMO</h4>
                                    <p>Our SMO experts use engageable content to promote products & services across different channels to increase traffic and sales.</p>
                                    <Link to="/smo-marketing-services">Read More</Link>
                                </div>
                            </div>

                            <div className="col-sm-4 text-center">
                                <div className="web_sub_Serv">
                                    <img src={img4} alt="img" />
                                    <h4>PPC</h4>
                                    <p>Get the PPC or Paid marketing in which an advertiser pays a publisher when the ads are clicked, spent money, and get fast results.</p>
                                    <Link to="/ppc-campaign-marketing-services">Read More</Link>
                                </div>
                            </div>

                            <div className="col-sm-4 text-center">
                                <div className="web_sub_Serv">
                                    <img src={img5} alt="img" />
                                    <h4>Email Marketing</h4>
                                    <p>The best email marketing campaign is one of the demanding services by the users. Our Email marketing services save your time & money.</p>
                                    <Link to="/email-marketing-services">Read More</Link>
                                </div>
                            </div>

                            {/* <div className="col-sm-4 text-center">
                                                        <div className="web_sub_Serv">
                                                            <img src={{img5}}>
                                                                <h4>ORM</h4>
                                                                <p>Online reputation management marketing services include a person, place, thing, site, brand, etc. improve the reputation on search engines.</p>
                                                                <Link to="orm-management-services.php">Read More</Link>
								</div> */}
                            <div className="col-sm-4 text-center">
                                <div className="web_sub_Serv">
                                    <img src={img7} alt="img" />
                                    <h4>Content Marketing</h4>
                                    <p>Our content marketing approach is to create unique and powerful content for clients' businesses that connect & engage online users.</p>
                                    <Link to="/content-marketing-services">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="services_inn_bg">
                            <h4 className="website-service-head">Enhance Your Business To New Heights</h4>
                            <p>Our <strong>digital marketing services in Chandigarh </strong>empower your business in a competitive world. We give you an assurance that our digital marketing experts enhance your website traffic and improve the conversion rate. Businesses face many challenges while marketing. And, our team of professionals resolves them with the help of digital marketing. Our experts follow every rule and regulation. We believe in:</p>
                            <ul className="mobile_list">
                                <li><i className="fa fa-hand-o-right"></i> Implement the Latest SEO Techniques</li>
                                <li><i className="fa fa-hand-o-right"></i> Implement Unique and Engaging Content</li>
                                <li><i className="fa fa-hand-o-right"></i> Enhance Brand Awareness</li>
                            </ul>
                        </div>



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

            </div>


        </>
    )
}
export default DigitalMarket;