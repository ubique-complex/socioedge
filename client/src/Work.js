import React from 'react';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import abtImg2 from './images/about1.jpg'
import abtImg3 from './images/ser.jpg'
import './Work.css'
export const Work = () => {
    return (
        <>
            <Helmet>
                <title>Socio Edge | Work</title>
                <meta name="description" content="Choose your affordable packages for website design services, web development services, SEO services, SMO marketing services and more." />
                <meta name="keywords" content="Cheap Packages For Web Design, Cheap Packages For Website Development, Cheap Packages For SEO, PPC, SMO" />
            </Helmet>
            <div className="head portfolio imgg">
                <div className="container">
                    <h1 className="text-center"><strong> Work </strong> </h1>
                </div>
            </div>

            <div className="bedcrumb_service">
                <div className="container-fluid">
                    <ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
                        <li><Link to="/"> <span className="fa fa-home"></span></Link></li>
                        <li><Link style={{ color: '#121212', textDecoration: 'none' }}><span>&nbsp; / Work</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />
            <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2>Our <span>Work</span></h2>
							<p>In 2022, we formed a team of highly qualified IT experts, and now more than 20 experienced professionals are working with Socio Edge. Our experienced professionals are work in different sectors of IT Services. Here are some work that we do for some Brands</p><br />
						</div>
					</div>
				</div>
			</div>
            <div className="container-fluid">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{ padding: 1 }}>
						<div className="hovereffect">
							<img className="img-responsive" src={abtImg2} alt="" />
							<div className="overlay">
								<h2>Graphic Design</h2>
								<p className="info">As we belong to the I.T industry, we offer a diverse range of web services to make your Online presence effective across India and outside the country.</p>
								<Link to="/graphic-design-work" className="portfolio_button">Read More</Link>
							</div>
						</div>
					</div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{ padding: 1 }}>
						<div className="hovereffect">
							<img className="img-responsive" src={abtImg2} alt="" />
							<div className="overlay">
								<h2>Website Design & Development</h2>
								<p className="info">As we belong to the I.T industry, we offer a diverse range of web services to make your Online presence effective across India and outside the country.</p>
								<Link to="/website-design-and-development-work" className="portfolio_button">Read More</Link>
							</div>
						</div>
					</div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{ padding: 1 }}>
						<div className="hovereffect">
							<img className="img-responsive" src={abtImg2} alt="" />
							<div className="overlay">
								<h2>Digital Marketing</h2>
								<p className="info">As we belong to the I.T industry, we offer a diverse range of web services to make your Online presence effective across India and outside the country.</p>
								<Link to="/digital-marketing-work" className="portfolio_button">Read More</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{ padding: 1 }}>
						<div className="hovereffect">
							<img className="img-responsive" src={abtImg3} alt="img responsive" />
							<div className="overlay">
								<h2>Branding</h2>
								<p className="info">Get affordable web service packages with great features and select your suitable plan as per your budget that meets your business need.</p>
								<Link to="/branding-work" className="portfolio_button">Read More</Link>
							</div>
						</div>
					</div>
				</div>
                </div>
        </>
    );
}