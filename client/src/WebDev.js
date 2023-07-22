import React, { useState } from 'react'
import './webdev.css'
import img1 from './images/cms-developers-banner.png'
import img2 from './images/php-development.jpg'
import img3 from './images/website.gif'
import img4 from './images/web-development.png'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios';


const WebDev = () => {
	const [state, setState] = useState({
		name: '',
		email: '',
		phone: '',
		subject: 'You receiced a mail for ecommerce Web Development Services',
		message: ''
	});
	const [result, setResult] = useState(null);

	const sendEmail = event => {
		event.preventDefault();
		axios({
			method: "POST",
			url: "/send",
			data: state
		}).then(res => {
			console.log(res.state);
			setResult(res.data);
			setResult({ success: true, message: 'Thanks for contacting us. We will get back to you shortly' });
			setState({ name: '', email: '', phone: '', message: '' });
		})
			.catch(() => {
				setResult({ success: false, message: 'Something went wrong. try again later' });
			});
	};


	const onInputChange = event => {
		const { name, value } = event.target;

		setState({
			...state,
			[name]: value
		});
	};
	return (
		<>
			<Helmet>
				<title>Socio Edge | web-development-services</title>
				<meta name="description" content="Get the best web development services in Chandigarh, India. Our Chandigarh web developers are professionals and experienced in website development Service." />
				<meta name="keywords" content="Web Developer In Chandigarh, Website Development Service Chandigarh, Website Development Services In Chandigarh, Web Developer Service In Chandigarh" />

			</Helmet>
			<div className="development_bg devimg">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-8">
							<div className="ineer_serv_textt">
								<h2>Website Development Services</h2>
								<p>Having a website for small or local businesses is necessary because it enhances business credibility. With the help of a website, you can showcase your products & services online. So, Hire a team of Website Developer in Chandigarh to grow your business and reach your potential customers.</p>
								<h2 style={{ color: '#ffffff' }}>Call @ +91 79863 78511</h2>
							</div>
						</div>

						<div className="col-sm-4">
							<div className="technical_form">
								<h4>Share Your Project Requirements</h4>
								<form className="iner-formm" name="contactForm" method="post" onSubmit={sendEmail} autocomplete="off">
									<div className="form-group">
										<input type="text" className="form-control input-lg" placeholder="Full name" name="name" maxlength="30" value={state.name} onChange={onInputChange} required />
										<span className="contact_name" style={{ color: 'red', fontSize: '12' }}></span>
									</div>
									<div className="form-group">
										<input type="email" className="form-control input-lg" placeholder="Email Address" name="email" value={state.email} onChange={onInputChange} required />
										<span className="contact_email" style={{ color: 'red', fontSize: '12' }}></span>
									</div>
									<div className="form-group">
										<input type="Phone Number" className="form-control input-lg" placeholder="Phone Number" name="phone" maxlength="10" value={state.phone} onChange={onInputChange} required />
										<span className="contact_phone" style={{ color: 'red', fontSize: '12' }}></span>
									</div>
									<div className="form-group">
										<textarea className="form-control input-lg desc" placeholder="Description" type="text" name="message" value={state.message} onChange={onInputChange} required></textarea>
										<span className="contact_query" style={{ color: 'red', fontSize: '12' }}></span>
									</div>
									{result && (
										<p style={{ color: '#000000' }} className={`${result.success ? 'success' : 'error'}`}>
											{result.message}
										</p>
									)}
									<button className="btn-info" type="submit" name="submit_button" value="Submit">Get Free Quote</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bedcrumb_service">
				<div className="container-fluid">
					<ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
						<li><Link to="/"> <span className="fa fa-home"></span></Link></li>
						<li><Link to="#">/ Web Solution /</Link></li>
						<li><Link to="/web-development-services">Development /</Link></li>
						<li><Link style={{ color: '#121212' }}><span>Web Development Services</span></Link></li>
					</ol>
				</div>
			</div>
			<br />

			<div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2>Website Development <span>Services</span></h2>
							<p>Ubique Creation’s primary objective is to fulfill the client's business requirement and provide them excellent website development services<br /> which strengthen the business value.</p><br />
						</div>
					</div>
				</div>
			</div>

			<div className="mobile-text">
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<h2 className="box-header">Get Professional <span>Web Development Services</span></h2>
							<p>Socio Edge understands your website is your investment with certain results. Our team focuses on applying your ideas correctly, which gives you profitable results according to your business needs. We believes into providing <strong>website development services in Chandigarh</strong>, India and outside the country. We have experienced and dedicated team of developers who build websites on various platform such as Asp.Net, HTML, CSS, Wordpress, PHP, SQL, MYSQL etc. Our team adheres to web design services while developing a website for online users. Our <strong>website developer in Chandigarh</strong>, use trending technologies for impeccable website development process.</p>

							<p>As we know website is a prominent part of every online business that's why our team suggest you to choose better platform. After finalizing website platform, our designer design the eye catchy layouts of website for approval. Subsequently, web developer does the website coding and finished it on time, keeping the search engine compatibility in mind.</p>

							<p>At Socio Edge, our <strong>website developers in Chandigarh</strong> remove each glitch step-by-step during the web development process and deliver bug-free website for Online publication. As a website development services  provider, we also offer web re-development services. If your website does not reflect the desired result, then it’s a good time to redevelop your business website but you need to hire a team of professional like Socio Edge who can fix the problem and brings you desired results.</p><br />

							<Link to="contact-us.php" className="portfolio_button">Send Us Query</Link>
						</div>
						<div className="col-sm-6">
							<img src={img4} alt="img4" className="img-responsive" />
						</div>
					</div>
				</div>
			</div>

			<div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2>Are You Ready for <span>Website Development..?</span></h2>
							<p>Our developer's planning & implementation is to meet your business needs during the website development process, which leads <br />rich in features & carry forward your brand value.</p><br />
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="wow fadeInLeft box" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInRight' }}>
						<div className="col-sm-4 col-md-4 col-xs-12 box">
							<div className="web_development_services details">
								<img src={img3} alt="img3" />
								<p>Customized website design service is all about its increase website loading speed, security, scalability & flexibility, functionality.</p>
								<h6><Link style={{ color: 'white' }} to="/website-design-services">Custom Web Design </Link></h6>
							</div>
						</div>
					</div>
					<div className="wow bounceInDown box" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'bounceInDown' }}>
						<div className="col-sm-4 col-md-4 col-xs-12 box">
							<div className="web_development_services details">
								<img src={img2} alt="img2" />
								<p>Get robust web solutions with help of PHP development which is highly professional, secure and error free functionality.</p>
								<h6><Link style={{ color: 'white' }} to="/php-website-development-services">PHP Website Development</Link></h6>
							</div>
						</div>
					</div>
					<div className="wow fadeInRight box" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInRight' }}>
						<div className="col-sm-4 col-md-4 col-xs-12 box">
							<div className="web_development_services details">
								<img src={img1} alt="img1" />
								<p>With the help of CMS, an administrator assigns multiple levels of access to users, as well as edit and manage website data.</p>
								<h6><Link style={{ color: 'white' }} to="/cms-website-design-services">CMS Development</Link></h6>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />

			<div className="mobile-text">
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<div className="mobile-text-box">
								<h2 className="box-header">What We Cater<span> To Our Clients</span></h2>
								<div className="right-web-services">
									<ul>
										<li><i className="fa fa-angle-right"></i><Link to="/php-website-development-services">PHP Website Development</Link></li>
										<li><i className="fa fa-angle-right"></i><Link to="/wordpress-website-development-services">WordPress Website Development</Link></li>
										<li><i className="fa fa-angle-right"></i><Link to="/ecommerce-website-development-services">E-Commerce Website Development</Link></li>
										{/* <li><i className="fa fa-angle-right"></i><Link to="/opencart-website-development-services">Opencart Website Development</Link></li> */}
										<li><i className="fa fa-angle-right"></i><Link to="/magento-website-development-services">Magento Website Development</Link></li>
										{/* <li><i className="fa fa-angle-right"></i><Link to="/drupal-website-development-services">Drupal Website Development</Link></li> */}
									</ul><br />
								</div>
							</div>
						</div>

						<div className="col-sm-6">
							<div className="mobile-text-box">
								<h2 className="box-header">Testing & <span>  Maintenance Support</span></h2>
								<p>Testing is essential for any project to run smoothly without giving any technical and non-technical issues. Our testing team find out all the bugs and technical issues and fix them before delivering it to the client for online or offline publication.</p>
								<p>We also provide web maintenance support to ensure that your website runs efficiently and match the current market standards. It’s necessary for the organization to know and understand how web business work.</p>
								<p>To find out best professional web design and development experts is always a tough task. Socio Edge offers you an affordable <strong>website development services in Chandigarh</strong>, India and around the globe that ensures your business growth.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2>HIRE <span>DEVELOPERS</span></h2>
							<p>Hire a team of experienced and full-time resource from Socio Edge. Our developers finish their work on time without compromising with the quality. Keep away your concerns by hiring us!</p>
							<div align="center"><Link to="contact-us.php" className="portfolio_button">Enquiry Now</Link></div>
						</div>
					</div>
				</div>
			</div>
			<br />
		</>
	)
}
export default WebDev;
