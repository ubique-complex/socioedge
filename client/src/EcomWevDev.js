import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
export const EcomWevDev = () => {
    return (
        <>
            <Helmet>
                <title>Socio Edge | ecommerce-website-development-services</title>
            </Helmet>
            <div className="head portfolio">
                <div className="container">
                    <h1 className="text-center"><strong>Ecommerce Web Development</strong> Services Chandigarh</h1>
                </div>
            </div>

            <div className="bedcrumb_service">
                <div className="container-fluid">
                    <ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
                        <li><Link to="/"> <span className="fa fa-home"></span></Link></li>
                        <li><Link to="#">/ Web Solution /</Link></li>
                        <li><Link to="#">Development /</Link></li>
                        <li><Link style={{ color: '#ffffff' }}><span>E-Commerce Development</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-sm-9 mobile-text">
                        <h2 className="box-header">E-Commerce <span>Website Development</span></h2>
                        <p>Apart from <Link to="ecommerce-website-design-services.php">ecommerce website design</Link> and functionality, all you need to have website wallet. You can use it to make payments over the counter, make online purchases or simply lending money to your friend. It's super convenient and that's why it's catching up fast. If you have a desire to start an Online store or want eCommerce website, you have reached at right place. We have a team of experienced<strong> Ecommerce website developers in Chandigarh</strong> who make your eCommerce business successful.</p>

                        <p>Smartphones are increasingly being used for accessing the Internet for various purposes. Ecommerce is one of the services that are increasingly becoming popular among users. After <strong>Ecommerce website development services</strong> you can buy and sell almost anything. You can also use eCommerce technology to transfer goods and services. Any industry whether banking industry, services, retails, information technology services and telecommunications have all started building eCommerce websites to reach to more people.</p><br />

                        <div className="services_inn_bg">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="bgfff">
                                        <h4>User-Friendly Interfaces</h4>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="bgfff">
                                        <h4>Secured Payment Gateways</h4>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="bgfff">
                                        <h4>Cross-browser Compatibility</h4>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="bgfff">
                                        <h4>Unhindered Support Setup</h4>
                                    </div>
                                </div>
                            </div>
                        </div><br />

                        <p>Ecommerce website can be very flexible, personalized and offers great marketing opportunities for businesses. If you are into the business of buying and selling over the Internet, now you can reach more people and niche customers with Ecommerce solutions. Thus there are definite reasons why the industry stalwarts are predicting ecommerce to be really successful in the coming days.</p>

                        <p>Being part of <strong>Ecommerce web development in Chandigarh</strong> industry for quite some time, we are well aware of the things that the market requires. Picking up our experience from web development, we can give quality Ecommerce solutions to our clients. When it comes to offering out-of-the-box ideas, TrendyPuff is the name you should trust upon. From strategic planning to content management to designing user-friendly interfaces, we will get the job done in every possible way.</p>

                        <p>Get in touch with our <strong>Ecommerce website developers Chandigarh</strong> at <Link to="mailto:Socio Edgein@gmail.com">Socio Edgein@gmail.com</Link> and start sharing your plans and see how our expertise and insight knowledge of the industry helps you get the best e-commerce application that suitably substantiates your brand.</p>
                    </div>
                    <div className="col-sm-3">
                        <div className="right-web-services">
                            <h4>Design Services</h4>
                            <ul>
                                <li><i className="fa fa-angle-right"></i><Link to="/website-design-services">Web Design Services</Link></li>
                                <li><i className="fa fa-angle-right"></i><Link to="/website-redesign-services">Website Re-Design</Link></li>
                                <li><i className="fa fa-angle-right"></i><Link to="/ecommerce-website-design-services">Ecommerce Website Design</Link></li>
                                {/* <li><i className="fa fa-angle-right"></i><Link to="/hotel-website-design-services">Hotel Website Design</Link></li> */}
                                <li><i className="fa fa-angle-right"></i><Link to="/cms-website-design-services">CMS Website Design</Link></li>
                                <li><i className="fa fa-angle-right"></i><Link to="/web-portal-design-services">Web Portal Design</Link></li>
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
                                <li><i className="fa fa-angle-right"></i><Link to="/magento-website-development-services">Magento Development</Link></li>
                                {/* <li><i className="fa fa-angle-right"></i><Link to="/drupal-website-development-services">Drupal Development</Link></li> */}
                            </ul>
                        </div><br />					</div>
                </div>
            </div><br />
        </>
    )
}
