import React from 'react'
import { Link } from 'react-router-dom'
import './Webredign.css'
import img from './images/redesign.jpg'
import { Helmet } from 'react-helmet'

export const WebRedesign = () => {
    return (

        <div>
            <Helmet>
                <title>Socio Edge | Website Redesign Services</title>
            </Helmet>
            <div className="head portfolio">
                <div className="container">
                    <h1 className="text-center"><strong>Website</strong> Redesign Services</h1>
                    <p style={{ fontSize: 14 }}>If your conversion rate is continuously getting down, which means it's time to redesign the website to  beat competitors and increase business revenue.</p>
                </div>
            </div>

            <div className="bedcrumb_service">
                <div className="container-fluid">
                    <ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
                        <li><Link to="/"> <span className="fa fa-home"></span></Link></li>
                        <li><Link to="" style={{ textDecoration: 'none' }}>&nbsp;/Web Solution /</Link></li>
                        <li><Link to="" style={{ textDecoration: 'none' }}>Design /</Link></li>
                        <li><Link style={{ color: '#121212' }}><span>&nbsp;Website Re-Design</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="mobile-text">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <h2 className="box-header">Website Redesign <span>- Is it necessary?</span></h2>
                            <h4 className="new_head">Is your business dying? Give new life to a business. <span> Redesign your website now!</span></h4>
                            <p>Website redesign services is important when the website does not reflect any business growth. Continuous changes in Online market and technology influence website visibility in major search engines and lead conversion rates. If the website is not impressive, visitors never spent more than 8 seconds on the website. So before hiring a <strong>website redesign services in Chandigarh</strong>, you need to ask a few things to yourself about your website.</p>

                            <p>Just developing a website is not enough for the business, marketing plays an important role in promoting business as a brand. As we <Link to="/digital-marketing-services">digital marketing services in Chandigarh</Link>, our experts analyze business strengths &amp; weaknesses. So, we can use smart tactics in order to provide the best output to audiences in search engine result.</p>

                            <ul className="mobile_list">
                                <li><i className="fa fa-hand-o-right"></i> Is your current website reflect your business goals and vision?</li>
                                <li><i className="fa fa-hand-o-right"></i> Does your website comply to current web standards?</li>
                                <li><i className="fa fa-hand-o-right"></i> Is your website users are happy?</li>
                                <li><i className="fa fa-hand-o-right"></i> Is the website user-friendly and easily navigable?</li>
                                <li><i className="fa fa-hand-o-right"></i> Is business competition is high?</li>
                            </ul>

                            <h4 className="website-service-head">For Example:</h4>
                            <p>“Great brands like Adidas and Levi’s constantly update their website design with a new design to maintain the market reputation and increase sale.”</p>

                            <p>Your deep understanding of your business behavior and website traffic can give a clear picture to the website redesign expert so that the designer can help you better. Visually appealing design attracts Online users which increase audiences engagement on a website and enhance leads for your business. Revising the old website with a new design strengthens your online and offline reputation in the market and has a good effect on business.</p>

                            <div align="center"><img src={img} className="img-responsive" alt="redesignimg" /></div>
                            <div className="services_inn_bg">
                                <h4 className="website-service-head">Why should I Choose Socio Edge for Website Redesign Services In Chandigarh?</h4>
                                <p>Our website designers are professionals, have experienced and provides top-notch <strong>website redesign services in Chandigarh</strong>. Our designers believe that eye-catching layouts, theme combinations of colors, user-friendly navigation structure and smartphone responsive design have a great impact on viewers. Apart from designing, Our designers make your website more SEO friendly so you can beat your Online competitors. Our designers uplift the website design to improve:</p>
                                <ul className="mobile_list">
                                    <li><i className="fa fa-hand-o-right"></i>Brand Value : Redesign gives fresh look to your website which enhance brand value.</li>
                                    <li><i className="fa fa-hand-o-right"></i>User Experience : Simple navigation experience increase website usability.</li>
                                    <li><i className="fa fa-hand-o-right"></i>SEO Performance : SEO strategy make sure website content, keywords, links etc. perform better.</li>
                                    <li><i className="fa fa-hand-o-right"></i>Leads Quality : Better SEO means increase in leads conversion.</li>
                                </ul>
                            </div>
                            <br />
                            <p>After completion of website redesign process our team test each and every page of website to ensure your website perform better after suitable changes. So, get your <strong>website redesigning services in Chandigarh</strong> with latest technology. Hire Now!! </p>
                        </div>
                        <div className="col-sm-3">
                            <div className="right-web-services">
                                <h4>Design Services</h4>
                                <ul>
                                    <li><i className="fa fa-angle-right"></i><Link to="/website-design-services">Web Design Services</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/website-redesign-services">Website Re-Design</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/ecommerce-website-design-services">Ecommerce Website Design</Link></li>
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/hotel-website-design-services">Hotel Website Design</Link></li> */}
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/cms-website-design-services">CMS Website Design</Link></li> */}
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/web-portal-design-services">Web Portal Design</Link></li> */}
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
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/magento-website-development-services">Magento Development</Link></li> */}
                                    {/* <li><i className="fa fa-angle-right"></i><Link to="/drupal-website-development-services">Drupal Development</Link></li> */}
                                </ul>
                            </div><br />						</div>
                    </div>
                </div>
            </div>

        </div >
    )
}
