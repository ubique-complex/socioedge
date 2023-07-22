import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import img1 from '../images/seo-icon.png'
import img2 from '../images/ppc-icon.png'
import img3 from '../images/smo-icon.png'

export const Sem = () => {
    return (
        <>
            <Helmet>
                <title>Pbcreations | Youtube-marketing-services</title>
            </Helmet>
            <div class="development_bg">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="ineer_serv_textt">
                                <h2>Search Engine Marketing</h2>
                                <p>Search Engine Marketing plays an important role in the online world. Our marketing specialist understand the importance of SEM marketing services and believes in delivering lead generation services.</p>
                                <h2 style={{color:'#52ff59'}}>Call @ +91 79863 78511</h2>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="technical_form">
                                <h4>Share Your Project Requirements</h4>
                                <form class="iner-formm" name="contactForm" method="post" action="" autocomplete="off">
                                    <div class="form-group">
                                        <input type="text" class="form-control input-lg" placeholder="Full name" name="name" maxlength="30" onKeyPress="return withoutspecialnumeric(event)" />
                                        <span class="contact_name" style={{color:'red', fontSize: '12'}}></span>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control input-lg" placeholder="Email Address" name="email"/>
                                            <span class="contact_email" style={{color:'red', fontSize: '12'}}></span>
			</div>
                                        <div class="form-group">
                                            <input type="Phone Number" class="form-control input-lg" placeholder="Phone Number" name="phone" maxlength="10" onKeyPress="return isNumberKey(event)" />
                                            <span class="contact_phone" style={{color:'red', fontSize: '12'}}></span>
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control input-lg" placeholder="Description" type="text" name="query" style={{width:'100%', height:'70'}}></textarea>
                                            <span class="contact_query" style={{color:'red', fontSize: '12'}}></span>
                                        </div>
                                        <div align="center">
                                            <div class="form-group" style={{width:'100%'}}>
                                                <div class="g-recaptcha" data-sitekey="6LcLka4UAAAAABRCIcXDfHAjwM3JtwTfwZf8cx6Q"></div>
                                            </div>
                                        </div>
                                        <button class="btn-info" type="submit" name="submit_button" value="Submit" onclick="return checkValidationHome();">Get Free Quote</button>
		</form>
	</div>
                            </div>
                            <script src='https://www.google.com/recaptcha/api.js'></script>
                        </div>
                    </div>
                </div>

                <div class="bedcrumb_service">
                    <div class="container-fluid">
                        <ol class="breadcrumb" vocab="" typeof="BreadcrumbList">
                            <li><Link to="/"> <span class="fa fa-home"></span></Link></li>
                            <li><Link to="#">/ Digital Marketing /</Link></li>
                            <li><Link to="#">SEM /</Link></li>
                            <li><Link style={{color:'#59c178'}}><span>SEM Services</span></Link></li>
                        </ol>
                    </div>
                </div>
                <br />

                <div class="top_text wow fadeIn animated animated bg_none" style={{visibility: 'visible'}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <h2>We offer quality <span> Search Engine Marketing Services</span></h2>
                                <p>Pbcreations’s primary objective is to fulfill the client's business requirement and provide them excellent website development services which strengthen the business value.</p><br />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-9 mobile-text">
                            <div class="">
                                <h2 class="box-header">Exquisite <span>SEM Marketing Services </span></h2>
                                <p>Search Engine Marketing (SEM) services are fully capable to enhance business revenue to the next level. As we offer <strong>SEM services in Patiala</strong>, our team improves online visibility that increases brand awareness among the users. Sometimes, clients got confused about SEM, SEO, SMO, and PPC. The search engine marketing (SEM) services is a process which enhances website visibility on search engines that includes SEO (Search Engine Optimization), PPC (Pay Per Click) and other form of marketing platform like SMO (Social Media Optimization) that gives the best opportunity to the users to promote their business.</p><br />

                                <div class="services_inn_bg">
                                    <h4 class="website-service-head">SEM Marketing Services In Patiala</h4>
                                    <p>Being a provider of <strong>SEM marketing services in Patiala</strong>, understands your business goal. Our experts plan SEM marketing strategy to provide you result-oriented results. They constantly watch out the trending SEM updates to provide you best <strong>SEM services in Patiala</strong>. Here are the SEM strategy includes main three pillars:</p>
                                    <ul class="mobile_list">
                                        <li><i class="fa fa-hand-o-right"></i> SEO Marketing Strartegy</li>
                                        <li><i class="fa fa-hand-o-right"></i> PPC Marketing Strartegy</li>
                                        <li><i class="fa fa-hand-o-right"></i> SMO Marketing Strartegy</li>
                                        {/* <!--<li><i class="fa fa-hand-o-right"></i> EMail Marketing Strartegy</li>--> */}
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-4 text-center">
                                    <div class="web_sub_Serv">
                                        <img src={img1} alt="img1"/>
                                            <h4>SEO Services</h4>
                                            <p>Pbcreations provides SEO services in India and across the world. Our objective is to deliver top-class</p>
                                            <Link to="/seo-services">Read More</Link>
								</div>
                                    </div>

                                    <div class="col-sm-4 text-center">
                                        <div class="web_sub_Serv">
                                            <img src={img2} alt="img2"/>
                                                <h4>PPC Services</h4>
                                                <p>PPC(Pay Per Click) or Paid Marketing is a fast and reliable way to generate traffic and sales for businesses. Our team of</p>
                                                <Link to="/ppc-campaign-marketing-services">Read More</Link>
								</div>
                                        </div>

                                        <div class="col-sm-4 text-center">
                                            <div class="web_sub_Serv">
                                                <img src={img3} alt="img3"/>
                                                    <h4>SMO Services</h4>
                                                    <p>With the right strategy and planning, SMO(Social Media Optimization) can turn your Website into a powerful</p>
                                                    <Link to="/smo-marketing-services">Read More</Link>
								</div>
                                            </div>
                                        </div><br />
                                        <div class="services_inn_bg">
                                            <h4 class="website-service-head">For Lead Generation</h4>
                                            <p>The above strategies are the backbone of internet marketing. It doesn't matter whether you are a small company or brand, you can choose any of the service or entire SEM services as per your business requirement. It's an easy and affordable way to increase traffic on the website, which helps users generate leads for their business. As we offers best <strong>SEM services in Patiala</strong>, support entire digital marketing strategies and recommend our client’s suitable strategy.</p>
                                        </div><br />

                                        <p>With the help of our marketing experts strategies, you can beat your competitors. Pbcreations provides effective SEM marketing strategies to the business owners, through which they can connect with potential people to get the right benefit. Our <strong>SEM services in Patiala</strong>, involves paid marketing services such as PPC to get the maximum number of clicks and traffic on the website. For create successful campaigns, our SEM marketing expert do the complete analysis to match our client's expectations.</p>

                                        <p>So, Let’s get in touch with us at <Link to="mailto:sales@pbcreations.in">sales@pbcreations.in</Link> or Call on +91 79863 78511.</p>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="right-web-services">
                                            <h4>SEO Services</h4>
                                            <ul>
                                                <li><i class="fa fa-angle-right"></i><Link to="/seo-services">SEO Services</Link></li>
                                                <li><i class="fa fa-angle-right"></i><Link to="/content-marketing-services">Content Marketing</Link></li>
                                                {/* <li><i class="fa fa-angle-right"></i><Link to="/hotel-website-seo-services">Hotel Website SEO</Link></li> */}
                                                <li><i class="fa fa-angle-right"></i><Link to="/ecommerce-website-seo-services">Ecommerce Website SEO</Link></li>
                                            </ul>
                                        </div><br />
                                        <div class="right-web-services">
                                            <h4>Lead Generation Services</h4>
                                            <ul>
                                                {/* <li><i class="fa fa-angle-right"></i><Link to="/orm-management-services">ORM Services</Link></li> */}
                                                <li><i class="fa fa-angle-right"></i><Link to="/conversion-rate-optimization-services">Conversion Rate Optimization</Link></li>
                                                <li><i class="fa fa-angle-right"></i><Link to="/email-marketing-services">Email Marketing</Link></li>
                                                {/* <li><i class="fa fa-angle-right"></i><Link to="/bulk-sms-services">Bulk SMS Services</Link></li> */}
                                            </ul>
                                        </div><br />
                                        <div class="right-web-services">
                                            <h4>SEM Services</h4>
                                            <ul>
                                                <li><i class="fa fa-angle-right"></i><Link to="/sem-marketing-services">SEM Services</Link></li>
                                                <li><i class="fa fa-angle-right"></i><Link to="/ppc-campaign-marketing-services">PPC Campaign Services</Link></li>
                                                <li><i class="fa fa-angle-right"></i><Link to="/google-adwords-management-services">Google Adwords Management</Link></li>
                                            </ul>
                                        </div><br />
                                        <div class="right-web-services">
                                            <h4>SMO Services</h4>
                                            <ul>
                                                <li><i class="fa fa-angle-right"></i><Link to="/smo-marketing-services">SMO Services</Link></li>
                                                <li><i class="fa fa-angle-right"></i><Link to="/facebook-marketing-services">Facebook Marketing</Link></li>
                                                <li><i class="fa fa-angle-right"></i><Link to="/youtube-video-marketing-services">YouTube Marketing</Link></li>
                                            </ul>
                                        </div><br />					</div>
                                </div>
                            </div>
                            <br />
        </>
                        )
}
