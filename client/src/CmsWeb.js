import React from 'react'
import img from './images/cms.jpg'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const CmsWeb = () => {
	return (
		<>
			<Helmet>
				<title>Socio Edge | cms-website-design-services</title>
			</Helmet>
			<div className="head portfolio" >
				<div className="container">
					<h1 className="text-center"><strong>CMS </strong>Website Design Services</h1>
				</div>
			</div>

			<div className="bedcrumb_service">
				<div className="container-fluid">
					<ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
						<li><Link to="https://www.Socio Edge.in/"> <span className="fa fa-home"></span></Link></li>
						<li><Link to="/" style={{ textDecoration: 'none' }}>&nbsp;/Web Solution /</Link></li>
						<li><Link to="/website-design-services" style={{ textDecoration: 'none' }}>Design /</Link></li>
						<li><Link style={{ color: '#121212' }}><span>CMS Website Design</span></Link></li>
					</ol>
				</div>
			</div>
			<br />

			<div className="container">
				<div className="row">
					<div className="col-sm-9 mobile-text">
						<h2 className="box-header">CMS <span>Website Design</span></h2>
						<p>Socio Edge offers scalable solutions with the help of <strong>CMS website development services in Chandigarh</strong>. CMS based websites are very popular among users, it helps users manage their site content easily without any technical knowledge. With the help of CMS, users can edit the site images, videos, content and update other essential features to maintain the quality of the website. It’s a time saving and cost effective tool that meet all the business expectations.</p>

						<p>At Socio Edge, our experts wide range of high quality customized <strong>CMS web design services in Chandigarh</strong>. Our team follows the concept of the software development life cycle from the beginning of any site. Our designers design the layout according to the client's requirement, developers implement the code and at the end, our team provide assistance to the client if necessary.</p><br />

						<div align="center"><img src={img} className="img-responsive" alt="CMS-website-design-services-in-Chandigarh" /></div>
						<div className="services_inn_bg">
							<h4 className="website-service-head">We Offers Best Platforms For <span>CMS Website Development Services In Chandigarh:</span></h4>
							<ul className="mobile_list">
								<li><i className="fa fa-hand-o-right"></i> PHP Web portals</li>
								<li><i className="fa fa-hand-o-right"></i> WordPress CMS</li>
								<li><i className="fa fa-hand-o-right"></i> Magento CMS</li>
								<li><i className="fa fa-hand-o-right"></i> Drupal CMS</li>
								<li><i className="fa fa-hand-o-right"></i> Joomla CMS</li>
							</ul>
						</div>
						<br />
						<h4 className="website-service-head">Best CMS Web Design services in Chandigarh that make your site more impressive:</h4>
						<p>We work on CMS basic functionality that gives you full control over your content and you can customize the site content as per your requirements. Our experts also implement the SEO feature in CMS through which you can customize your website according to the search engine algorithm to influence online users.</p>
						<p>If you need a CMS based website for business, then it means you have reached the right place. As we provide the <strong>best CMS website development services in Chandigarh</strong>, we build your website in such a way that bring leads and grow your business as a brand.</p>
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
			</div><br /><br />
		</>
	)
}
