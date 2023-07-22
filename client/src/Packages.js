import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './Packages.css'


export const Packages = () => {
    return (
        <>
            <Helmet>
                <title>Socio Edge | Pricing & Packages</title>
                <meta name="description" content="Choose your affordable packages for website design services, web development services, SEO services, SMO marketing services and more." />
                <meta name="keywords" content="Cheap Packages For Web Design, Cheap Packages For Website Development, Cheap Packages For SEO, PPC, SMO" />
            </Helmet>
            <div className="head portfolio imgg">
                <div className="container">
                    <h1 className="text-center"><strong> Pricing & </strong>Packages </h1>
                </div>
            </div>

            <div className="bedcrumb_service">
                <div className="container-fluid">
                    <ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
                        <li><Link to="/"> <span className="fa fa-home"></span></Link></li>
                        <li><Link style={{ color: '#121212', textDecoration: 'none' }}><span>&nbsp; / Packages</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="container">
                {/* <div className="price-list">
                    <h2 className="no-margin light-gray"><i className="icon-coffee"></i> <strong>Starter Web Design & Development</strong> <span className="hidden-xs">Prices</span></h2>
                    <h5 className="font-16"><strong>EVERY <span className="hidden-xs">STARTER</span> PACKAGE YOU SEE BELOW INCLUDES:</strong></h5>
                    <p>*100% Custom Design, *Website Development, *Logo Design, *UI/UX Feature</p>
                    <div className="ele">
                        <div>
                            <div className="head">
                                <h3>BASIC PACKAGES</h3>
                                for <em>Static Website</em>
                            </div>
                            <div className="body">
                                <div className="price"><i className="fa fa-inr"></i> 4999<br /><p style={{
                                    color: '#bdbdbd',
                                    margin: '0'
                                }}>+ GST</p></div>
                                <div className="row">
                                    <div className="col-xs-9">Total  pages</div>
                                    <div className="col-xs-3 text-center" style={{ width: '65px', marginLeft: '85px' }}>3 to 5</div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">Mobile Responsive </div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green" ></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">1 year Domain & Hosting</div>
                                    <div className="col-xs-3 text-center mark"><i className="fa fa-check green"></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">Email Id's </div>
                                    <div className="col-xs-3 text-center" style={{ width: '65px', marginLeft: '97px' }}>1</div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">Enquiry Form on mail id</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green" ></i></div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-9">SEO Friendly</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green" ></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">6 Month Maintenance Support</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green" ></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">Blog Configure</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-times red"></i></div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-9">Image Gallery</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-times red"></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 text-center"><a href="contact-us.php" className="portfolio_button">More Information</a></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="head">
                                <h3>SILVER PACKAGES</h3>
                                for <em>Static + Dynamic Website</em></div>
                            <div className="body">
                                <div className="price"><i className="fa fa-inr"></i> 9999<br /><p style={{
                                    color: '#bdbdbd',
                                    margin: '0'
                                }}>+ GST</p></div>
                                <div className="row">
                                    <div className="col-xs-8">Total  pages</div>
                                    <div className="col-xs-4 text-center" style={{ width: '65px', marginLeft: '85px' }}>5 to 8</div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">Mobile Responsive </div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green" ></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">1 year Domain & Hosting</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green"></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">Email Id's </div>
                                    <div className="col-xs-3 text-center" style={{ width: '65px', marginLeft: '97px' }}>2</div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">Enquiry Form  + Admin </div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green" ></i></div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-9">SEO Friendly</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green" ></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">6 Month Maintenance Support</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green" ></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">Blog Configure</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-times red"></i></div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-9">Dynamic Image Gallery</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green"></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 text-center"><a href="contact-us.php" className="portfolio_button">More Information</a></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="head">
                                <div className="plan-ribbon-wrapper">
                                </div>
                                <h3>GOLD PACKAGES</h3>
                                for <em> Dynamic Website</em></div>
                            <div className="body">
                                <div className="price"><i className="fa fa-inr"></i> 14999<br /><p style={{
                                    color: '#bdbdbd',
                                    margin: '0'
                                }}>+ GST</p></div>
                                <div className="row">
                                    <div className="col-xs-8">Total  pages</div>
                                    <div className="col-xs-4 text-center" style={{ width: '65px', marginLeft: '85px' }}>5 to 8</div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">Mobile Responsive </div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green" ></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">1 year Domain & Hosting</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green"></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">Email Id's </div>
                                    <div className="col-xs-3 text-center" style={{ width: '65px', marginLeft: '97px' }}>3</div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">Enquiry Form  + Admin </div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green" ></i></div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-9">SEO Friendly</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green" ></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">1 Year Maintenance Support</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green" ></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">Blog Configure</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green"></i></div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-9"> Dynamic Image Gallery</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green"></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 text-center"><a href="contact-us.php" className="portfolio_button">More Information</a></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="head">
                                <h3>PLATINUM PACKAGES</h3>
                                for <em>Dynamic Website</em></div>
                            <div className="body">
                                <div className="price"><i className="fa fa-inr"></i> 19999<br /><p style={{
                                    color: '#bdbdbd',
                                    margin: '0'
                                }}>+ GST</p></div>
                                <div className="row">
                                    <div className="col-xs-8">Total  pages</div>
                                    <div className="col-xs-4 text-center" style={{ width: '73px', marginLeft: '80px' }}>8 to 15</div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">Mobile Responsive </div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green" ></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">1 year Domain & Hosting</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green"></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">Email Id's </div>
                                    <div className="col-xs-3 text-center" style={{ width: '65px', marginLeft: '97px' }}>4</div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">Enquiry Form  + Admin </div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green" ></i></div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-9">SEO Friendly</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green" ></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">1 Year Maintenance Support</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green" ></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-9">Blog Configure</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green"></i></div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-9">Dynamic Pages</div>
                                    <div className="col-xs-3 text-center"><i className="fa fa-check green"></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 text-center"><a href="contact-us.php" className="portfolio_button">More Information</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="business"></span></div>
            </div> */}







                <div id="inner_page_content">
                    <h1>Pricing Models</h1>
                    <p>We understand that every outsourced project has its own scope. That is why; we have prepared our pricing models keeping flexibility in mind. Depending on your business needs and financial directions, you can choose the pricing model that suits perfectly for your Project.</p>

                    <h2>Fixed Price Plan (lump-sum project cost)</h2>
                    <p>We offer fixed price quote for a project, if scope of project is well defined with clear specifications. Under this model, we discuss delivery schedule and timelines with clients to determine a mutually agreed fixed price.</p>

                    <h2>Time &amp; Material Plan (hourly cost)</h2>
                    <p>An hourly pricing is very popular if scope of work is not clear at beginning of a project, for example, for small fixes/updates for any project. This model best suits complex projects inclined to specification and design changes.</p>

                    <h2>Dedicated Team Plan (full-time staff working exclusively to your project)</h2>
                    <p>For large / on-going projects, there is better option to recruit staff on monthly basis. If there seem to be enough work to keep staff busy for full time, then this model works out best. Also, a Dedicated Team operates as an extension of Customer's Office.</p>

                </div>
            </div>
        </>
    )
}
