import React from 'react'
import './staticweb.css'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const StaticWeb = () => {
	return (
		<>
			<Helmet>
				<title>Socio Edge | static-website-design-services</title>
			</Helmet>
			<div className="head portfolio">
				<div className="container">
					<h1 className="text-center"><strong>Static Website</strong> Designer In Chandigarh</h1>
				</div>
			</div>

			<div className="bedcrumb_service">
				<div className="container-fluid">
					<ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
						<li><Link to="/"> <span className="fa fa-home"></span></Link></li>
						<li><Link to="#">/ Web Solution /</Link></li>
						<li><Link to="/website-design-services">Design /</Link></li>
						<li><Link style={{ color: '#121212' }}><span>Static Website Design</span></Link></li>
					</ol>
				</div>
			</div>
			<br />

			<div className="mobile-text">
				<div className="container">
					<div className="row">
						<div className="col-sm-9">
							<h2 className="box-header">Must Choose<span> Static Website Design</span></h2>
							<p>From a business point of view, static websites are the best and easiest platform to handle a website. They can show their products or services and promote them on the Internet. If users don’t want to update products or services on a frequent basis then <strong>static website design services in Chandigarh</strong> will be a very useful tool for them. It’s the best option for small and medium enterprises to display business information.</p>

							<h4 className="website-service-head">Benefits of Hiring Static Website Designer In Chandigarh:</h4>
							<p>It’s the simplest and easiest platform to design and develop a website for SMEs. Our <strong>Static website designer in Chandigarh</strong> customized websites as per client's business requirement. In below section we have mentioned some benefits:</p><br />

							<div className="services_inn_bg">
								<div className="row">
									<div className="col-sm-6">
										<div className="bgfff">
											<h4>Ideal for SMEs</h4>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="bgfff">
											<h4>Quickly Develop</h4>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="bgfff">
											<h4>Less Expensive</h4>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="bgfff">
											<h4>Faster on Slow Connection</h4>
										</div>
									</div>
								</div>
							</div>
							<br />

							<p><strong>Static website design service in Chandigarh</strong> is an ideal platform for small website. At Socio Edge, Our developers implement the necessary code to make your website secure, navigation friendly and mobile responsive. Socio Edge take less time and less money in design and development process of static websites. These kinds of websites are faster while loading and browsing on slow connection.</p>

							<p>Get in touch with Socio Edge’s professionals at <Link to="mailto:Socio Edgein@gmail.com">Socio Edgein@gmail.com</Link> or call us +91 79863 78511 to discuss your idea so we can implement customized solution and enhance your business growth.</p>
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
			<br /><br />
		</>
	)
}
