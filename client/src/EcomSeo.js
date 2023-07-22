import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export const EcomSeo = () => {
	return (
		<>
			<Helmet>
				<title>Socio Edge | ecommerce-website-seo-services</title>
			</Helmet>
			<div className="head portfolio">
				<div className="container">
					<h1 className="text-center"><strong>E-commerce </strong> SEO Services </h1>
				</div>
			</div>

			<div className="bedcrumb_service">
				<div className="container-fluid">
					<ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
						<li><Link to="/"> <span className="fa fa-home"></span></Link></li>
						<li><Link to="/digital-marketing-services">/ Digital Marketing /</Link></li>
						<li><Link to="">SEO /</Link></li>
						<li><Link style={{ color: '#ffffff' }}><span>Ecommerce Website SEO</span></Link></li>
					</ol>
				</div>
			</div>
			<br />

			<div className="container">
				<div className="row">
					<div className="col-sm-9 mobile-text">
						<h2 className="box-header">SEO <span>Service for E-commerce Business</span></h2>
						<p>If you are running an eCommerce business and facing business challenges to increase online sales. These signs indicate that you need SEO service for your online store. To overcome this situation, you hire an <strong> eCommerce SEO service</strong> provider like us "Socio Edge". We understand eCommerce business requires a lot of investment. That’s why at TrendPuff, our SEO experts use the latest market strategies and technology to beat the competition.</p>

						<p>Our team has extensive experience in handling eCommerce websites and helps them to achieve the best SERPs results. Our experts help you in such a way that it will increase the overall revenue of your business. As we offer <strong>eCommerce SEO services in Chandigarh</strong> and other parts of India to Online store, it includes technical SEO audit that makes your website search engine friendly.</p>

						<p>Website optimization is necessary from a business point of view. At Socio Edge, our <strong>eCommerce SEO expert</strong> analyzes target keywords with their search volume so that maximum benefit can be provided. Here are the SEO techniques that our <strong>eCommerce SEO experts</strong> follow:</p><br />

						<div className="services_inn_bg">
							<div className="row">
								<div className="col-sm-6">
									<div className="bgfff">
										<h4>Business Website Optimization</h4>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="bgfff">
										<h4>Content Optimization</h4>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="bgfff">
										<h4>Keywords Analysis and Suggestion</h4>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="bgfff">
										<h4>Social Media Optimization (SMO)</h4>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="bgfff">
										<h4>Online Reputation Management</h4>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="bgfff">
										<h4>Link Building</h4>
									</div>
								</div>
							</div>
						</div><br />

						<p>Socio Edge’s major objective is to serve quality service to its clients. Hence, we ensure you to bring a better result for your eCommerce business. Our experts are passionate about SEO techniques, they know how to run a sales-driven eCommerce SEO campaign so that they can provide you with the desired results. So, contact Socio Edge for <strong>eCommerce SEO service in Chandigarh</strong> or other parts of the country.</p>
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
