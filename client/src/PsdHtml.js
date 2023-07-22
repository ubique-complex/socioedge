import React from 'react'
import img2 from './images/shoping-cart.png'
import img1 from './images/ecomerce-design.jpg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export const PsdHtml = () => {
	return (
		<>
			<Helmet>
				<title>Socio Edge | psd-to-html</title>
			</Helmet>
			<div className="head portfolio">
				<div className="container">
					<h1 className="text-center"><strong>PSD </strong> TO HTML</h1>
					<p style={{ fontSize: '17' }}>Socio Edge’s primary objective is to fulfill the client's business requirement and provide them excellent website development services</p>
				</div>
			</div>

			<div className="bedcrumb_service">
				<div className="container-fluid">
					<ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
						<li><Link to="/"> <span className="fa fa-home"></span></Link></li>
						<li><Link to="#">/ Web Solution /</Link></li>
						<li><Link to="#">Graphic /</Link></li>
						<li><Link style={{ color: '#121212' }}><span>PSD to HTML</span></Link></li>
					</ol>
				</div>
			</div>
			<br />

			<div className="mobile-text">
				<div className="container">
					<div className="row">
						<div className="col-sm-9">
							<h2 className="box-header">Psd <span> To HTML </span></h2>
							<p>Socio Edge understands your website is your investment with certain results. Our team focusing on to implement your idea correctly which gives you profitable results as per your business requirement. As a web development company, we offer website development services in India and outside the country. We have experienced and dedicated team of developers who build websites on various platform such as Asp.Net, HTML, CSS, Wordpress, PHP, SQL, MYSQL etc. Our team adheres to web design services while developing a website for online users.</p>

							<p>Just developing a website is not enough for the business, marketing plays an important role in promoting business as a brand. As a digital marketing company, our experts analyze every business strengths &amp; weaknesses. So, we can use smart tactics in order to provide the best output to audiences in search engine result.</p><br />

							<div className="row">
								<div className="col-sm-7">
									<h4 className="website-service-head">How to Redesign your website ?</h4>
									<p>Just developing a website is not enough for the business, marketing plays an important role in promoting business as a brand. As a digital marketing company, our experts analyze every business strengths &amp; weaknesses. So, we can use smart tactics in order to provide the best output to audiences in search engine result. </p>
								</div>
								<div className="col-sm-5">
									<img src={img1} alt="img1" className="img-responsive" />
								</div>
							</div>
							<div className="row">
								<div className="col-sm-4">
									<img src={img2} alt="img2" className="img-responsive" />
								</div>
								<div className="col-sm-8">
									<h4 className="website-service-head">Ecommerce Website Design to engage your users</h4>
									<p>Just developing a website is not enough for the business, marketing plays an important role in promoting business as a brand. As a digital marketing company, our experts analyze every business strengths &amp; weaknesses. So, we can use smart tactics in order to provide the best output to audiences in search engine result. marketing plays an important role in promoting business as a brand. As a digital marketing company, our experts analyze every business strengths &amp; weaknesses. So, we can use smart tactics in order to provide the best output to audiences in search engine result.</p>
								</div>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="right-web-services">
								<h4>Graphic Services</h4>
								<ul>
									<li><i className="fa fa-angle-right"></i><Link to="/graphic-design-services">Graphic Design Services</Link></li>
									<li><i className="fa fa-angle-right"></i><Link to="/logo-design-services">Logo Design</Link></li>
									<li><i className="fa fa-angle-right"></i><Link to="/flyer-design-services">Flyer Design</Link></li>
									<li><i className="fa fa-angle-right"></i><Link to="/brochure-design-services">Brochure Design</Link></li>
									{/* <li><i className="fa fa-angle-right"></i><Link to="/mailer-design-services">Mailer Design</Link></li> */}
									{/* <li><i className="fa fa-angle-right"></i><Link to="/visiting-card-design-services">Visiting card Design</Link></li> */}
									<li><i className="fa fa-angle-right"></i><Link to="/psd-to-html">PSD to HTML</Link></li>
								</ul>
							</div>						</div>
					</div>
				</div>
			</div>
			<br />
		</>
	)
}
