import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export const GwordManage = () => {
    return (
        <>
            <Helmet>
                <title>Socio Edge | Google-adwords-management-services</title>
            </Helmet>
            <div className="head portfolio" >
                <div className="container">
                    <h1 className="text-center">Google Adwords Management </h1>
                </div>
            </div>

            <div className="bedcrumb_service">
                <div className="container-fluid">
                    <ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
                        <li><Link to="/"> <span className="fa fa-home"></span></Link></li>
                        <li><Link to="#">/ Digital Marketing /</Link></li>
                        <li><Link to="#">SEM /</Link></li>
                        <li><Link style={{ color: '#121212' }}><span>Google Ads</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="mobile-text">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <h2 className="box-header">Show Your <span>Ads On Google</span></h2>
                            <p>Get noticed by your audiences through Google AdWords Campaign. Here at Socio Edge, Our Google ads expert advertise your products or services on the Google search engine to generate more traffic and leads. As every business needs are different. Hence, our team does extensive research such as analyzing keywords, target locations, daily and monthly budget, etc. before executing the campaign. Being a part of <strong>Google Ads services in Chandigarh</strong>, our objective is to deliver business-oriented results to every client.</p>
                            <p>As Google AdWords campaign brings you the leads. On the other hand, our team manages your Google campaign within your budget. Our <strong>Google Ads services in Chandigarh</strong> ensures that all your ads are well optimized, through which you can grab the attention of online users. It's the simplest way to take your marketing efforts of branding, awareness, and promotion to a whole new level.</p>
                            <p>Before running an AdWords campaign, our specialists understand the customer's business needs. And, then our Google AdWords experts use a suitable platform to execute the marketing strategies. There are various platforms which are included in <strong>Google AdWords Management Services in Chandigarh</strong>.</p>

                            <h4 className="website-service-head">Google AdWords Management Services Includes:</h4><br />


                            <div className="services_inn_bg">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="bgfff">
                                            <h4>Search Network</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bgfff">
                                            <h4>Display Network</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bgfff">
                                            <h4>Shopping Advertising</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bgfff">
                                            <h4>Mobile Advertising</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bgfff">
                                            <h4>YouTube Videos Advertising</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bgfff">
                                            <h4>Remarketing</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />

                            <h4 className="website-service-head">Why Do You Need To Opt Us?</h4><br />
                            <p>At Socio Edge, our experts track the performance of every Ad and provide you detailed reports. With the help of our Google AdWords management services in Chandigarh, you can easily compete with big brands. Our experts have extensive experience in Google advertising services that can target your potential audience and give you quick results. So, if you want to get the most out of Google AdWords management services, call Socio Edge.</p>

                            <p>Get in touch with Socio Edge’s professionals at <Link to="mailto:socioedge9@gmail.com">socioedge9@gmail.com</Link> or call us +91 79863 78511 to discuss your idea. At Socio Edge, our Google ads experts have a vast knowledge of the Google AdWords campaign. Therefore, they will be a good asset for your business and deliver you the best ROI.</p>
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
            </div>
            <br />
        </>
    )
}
