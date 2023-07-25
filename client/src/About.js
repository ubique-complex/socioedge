import React from 'react'
import { Helmet } from 'react-helmet'
import './About.css'
import abtImg from './images/who-we-are.jpg'
import abtImg2 from './images/about1.jpg'
import abtImg3 from './images/ser.jpg'
import { Link } from 'react-router-dom'
export const About = () => {
	return (
		<>
			<Helmet>
				<title>Socio Edge | Who We Are</title>
				<meta name="description" content="Know more about Socio Edge that what web services they are providing and how much they are charging from the clients in Chandigarh"></meta>
			</Helmet>
			<div className="head portfolio imgg">
				<div className="container">
					<h1 className="text-center"><strong>Proud To Be A </strong>Professional Web Designer</h1>
					{/* <!--<p style="font-size:14px;">Socio Edge  was established in 2017, with a vision to cater something exclusive to our clients by using new  technologies.</p> --> */}
				</div>
			</div>

			<div className="bedcrumb_service">
				<div className="container-fluid">
					<ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
						<li><Link href="/"> <span className="fa fa-home"></span></Link></li>
						<li><Link style={{ color: '#121212', textDecoration: 'none' }}><span>&nbsp; / Who We Are</span></Link></li>
					</ol>
				</div>
			</div>
			<br />

			<div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2>Who <span>We Are..?</span></h2>
							<p>In 2022, we formed a team of highly qualified IT experts, and now more than 20 experienced professionals are working with Socio Edge. Our experienced professionals are work in different sectors of IT Services.</p><br />
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-sm-6 mobile-text">
						<div className="">
							<h2 className="box-header">About <span>Socio Edge</span></h2>
							<p>This segment tells you about Socio Edge businesses, values and commitment, and its management services. As we know that website can become an online identity for any business. Therefore, our team believes that every business should have a site and promote their business on the Internet. For that, businesses need to appoint a team of experts who are indulged in website design and development, digital marketing services to achieve business goals. Our team experienced professionals chalk out innovative, effective, and user-friendly websites applications for clients and help them to deliver business-oriented results.</p>
							<p>Our experts believe in providing top-notch services that include innovative ideas, quality, creativity, and delivering work on time. Socio Edge committed to enhancing your brand's dignity through the latest marketing strategies to achieve the best ROI.</p>
							<p>If you are looking for specific IT services then you have reached the right place. Socio Edge removes the technical barrier and transforms all your business need into the reality that helps us to grow strong business relationships with all types of customers. We're excited to help you out. So, moving forward we have some qualities in the following ways:</p>

							<h2 className="box-header">We <span>Lead The Industry</span></h2>
							<ul className="list_who">
								<li><i className="fa fa-arrow-circle-right" aria-hidden="true"></i>Focused on Delivering Growth</li>
								<li><i className="fa fa-arrow-circle-right" aria-hidden="true"></i>Early Technology Adopter</li>
								<li><i className="fa fa-arrow-circle-right" aria-hidden="true"></i>Execute Strategies In Right Direction</li>
							</ul>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="ineer_laptopslider">
							<img src={abtImg} className="img-responsive" alt="" />
							{/* <!-- 
							<div className="slider_laptop">
								<div id="myCarousel2" className="carousel slide" data-ride="carousel">
								<!-- Indicators
									<ol className="carousel-indicators">
										<li data-target="#myCarousel2" data-slide-to="0" className="active"></li>
										<li data-target="#myCarousel2" data-slide-to="1"></li>
										<li data-target="#myCarousel2" data-slide-to="2"></li>
										<li data-target="#myCarousel2" data-slide-to="3"></li>
									</ol>
								<!-- Wrapper for slides
									<div className="carousel-inner">
										<div className="item"> <img src="img/slider4.jpg" alt="digital-marketing" style="width:100%; height:100%;"> </div>
										<div className="item active"> <img src="img/slider.jpg" alt="app-development" style="width:100%; height:100%;"> </div>
										<div className="item"> <img src="img/slider2.jpg" alt="website-development" style="width:100%; height:100%;"> </div>
										<div className="item"> <img src="img/slider3.jpg" alt="e-commerce-website-development" style="width:100%; height:100%;"> </div>
									</div>
								<!-- Left and right controls
									<Link className="left carousel-control" href="#myCarousel2" data-slide="prev"> <span className="glyphicon glyphicon-chevron-left"></span> <span className="sr-only">Previous</span> </Link> <Link className="right carousel-control" href="#myCarousel2" data-slide="next"> <span className="glyphicon glyphicon-chevron-right"></span> <span className="sr-only">Next</span> </Link> </div>
								</div>
								--> */}
							<h4 className="call_middle">Call us: +91-79863 78511</h4>
						</div>
					</div>
				</div>

				<div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
					<h2>Choose Best Services <span>& Affordable Packages</span></h2>
					<p>Get the best services and packages deal from Socio Edge at an affordable price. Hire a team that delivers work on time without compromising the product quality.</p><br />
				</div>
			</div>

			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{ padding: 1 }}>
						<div className="hovereffect">
							<img className="img-responsive" src={abtImg2} alt="" />
							<div className="overlay">
								<h2>View All Services</h2>
								<p className="info">As we belong to the I.T industry, we offer a diverse range of web services to make your Online presence effective across India and outside the country.</p>
								<Link to="/services" className="portfolio_button">Read More</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{ padding: 1 }}>
						<div className="hovereffect">
							<img className="img-responsive" src={abtImg3} alt="img responsive" />
							<div className="overlay">
								<h2>Price & Packages</h2>
								<p className="info">Get affordable web service packages with great features and select your suitable plan as per your budget that meets your business need.</p>
								<Link to="/price-packages" className="portfolio_button">Read More</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<h2>HIRE <span>DEVELOPERS</span></h2>
								<p>Hire experienced and full-time resources from Socio Edge. Our developers finish their work on time without compromising with the quality. Keep away your concerns by hiring us!</p>
								<div align="center"><Link href="/contact" className="portfolio_button">Enquiry Now</Link></div>
							</div>
						</div>
					</div>
				</div>
				<br />

				{/* <!-- Latest Course Section End --> */}
				<div className="mobile-text">
					<div className="container">
						<div className="row">
							<div className="col-sm-6">
								<div className="mobile-text-box">
									<h2 className="box-header">Our <span>Mission</span></h2>
									<p>Our mission is to help our clients to provide the perfect web and digital marketing solutions from day one to enhance their business ROI. And, deliver them affordable business solutions with exceptional customer support from start to finish.</p>
								</div>
							</div>

							<div className="col-sm-6">
								<div className="mobile-text-box">
									<h2 className="box-header">Our <span> Vision</span></h2>
									<p>Our vision is to empower & develop business web applications in the most convenient manner. And, provide a secure or productive platform to the audiences and clients. We also believe that our work should take our client's business towards growth.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
		</>
	)
}
