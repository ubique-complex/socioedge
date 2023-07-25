import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'
const EmailMarket = () => {
	const [state, setState] = useState({
		name: '',
		email: '',
		phone: '',
		subject: 'You receiced a mail for Email Marketing Services',
		message: ''
	});
	const [result, setResult] = useState(null);

	const sendEmail = event => {
		event.preventDefault();
		axios({
			method: "POST",
			headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": true
            },
            url: "http://localhost:5000/send",
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
				<title>Socio Edge | Email-marketing-services</title>
			</Helmet>
			<div className="development_bg">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-8">
							<div className="ineer_serv_textt">
								<h2>Email Marketing Services</h2>
								<p>Our team have maintained Socio Edge as best email marketing services provider in Chandigarh. If you are looking for email marketing services then Socio Edge is the right choice for your business.</p>
								<h2 style={{ color: '#ffffff' }}>Call @ +91-79863 78511</h2>
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
										<textarea className="form-control input-lg" placeholder="Description" type="text" name="message" style={{ width: '100%', height: '70' }} value={state.message} onChange={onInputChange} required ></textarea>
										<span className="contact_query" style={{ color: 'red', fontSize: '12' }}></span>
									</div>
									{result && (
										<p style={{ color: '#000000' }} className={`${result.success ? 'success' : 'error'}`}>
											{result.message}
										</p>
									)}
									<button className="btn-info" type="submit" name="submit_button" value="Submit" >Get Free Quote</button>
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
						<li><Link to="/digital-marketing-services">/ Digital Marketing /</Link></li>
						<li><Link to="#">Lead /</Link></li>
						<li><Link style={{ color: '#121212' }}><span>Email Marketing</span></Link></li>
					</ol>
				</div>
			</div>
			<br />

			<div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible ' }}>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2>Email Marketing<span> Enhance Business Value</span></h2>
							<p>The email marketing service is a very useful tool for promoting services and products to target potential consumers, which generates <br />more traffic and leads for the business.</p><br />
						</div>
					</div>
				</div>
			</div>

			<div className="mobile-text">
				<div className="container">
					<div className="row">
						<div className="col-sm-9 mobile-text">
							<div className="">
								<h2 className="box-header">Email <span>Marketing Services</span></h2>
								<p>As we are into Digital marketing services, we also provide <strong>email marketing services in Chandigarh</strong> which is a vital part of online marketing. Email marketing expert sent promotional messages and build brand awareness that generates leads for the company. The email is also known as electronic direct mail (EDM) which is an affordable way to increase sales. Email marketing services is a valuable tool or communication channel preferred by users to deliver customized content to potential customers or companies at a reasonable cost. We used <strong>email marketing services in Chandigarh</strong> to target a large group of consumers and to maintain a business relationship with customers.</p>

								<p>When it comes to the electronic mailers, the simple and clear message sent to qualified, targeted prospects will fetch the best return on your efforts. We ensure that your EDMs are beautifully created and presented in a professional outlook that reinforces your brand proposition and generates attractive click-through rates. Furthermore, we evaluate the current landing pages of the site and create new gateways if required.</p><br />

								<div className="services_inn_bg">
									<h4 className="website-service-head">Why Socio Edge Is Best for Email Marketing Services In Chandigarh..?</h4>
									<div className="row">
										<div className="col-sm-6">
											<div className="bgfff">
												<h6>Our dedicated servers send emails to targeted audiences</h6>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="bgfff">
												<h6>Provide you the detail reports of who opened your newsletter &amp; client count as well</h6>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="bgfff">
												<h6>You can relax in peace as we help manage subscribe and un-subscription with no difficulty</h6>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="bgfff">
												<h6>We will help you to enhance your brand loyalty</h6>
											</div>
										</div>
									</div>
								</div><br />

								<p>As a team, We customize business-oriented newsletter or email, and there is also a full email marketing tool to find out the number of emails opened, including subscribe and un-subscription features. Our <strong>email marketing services in Chandigarh</strong> enhance sales by staying in touch with customers and send regular offers on your promotions at the invincible rate.</p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="right-web-services">
								<h4>SEO Services</h4>
								<ul>
									<li><i className="fa fa-angle-right"></i><Link to="/seo-services">SEO Services</Link></li>
									<li><i className="fa fa-angle-right"></i><Link to="/content-marketing-services">Content Marketing</Link></li>
									{/* <li><i className="fa fa-angle-right"></i><Link to="hotel-website-seo-services.php">Hotel Website SEO</Link></li> */}
									<li><i className="fa fa-angle-right"></i><Link to="/ecommerce-website-seo-services">Ecommerce Website SEO</Link></li>
								</ul>
							</div><br />
							<div className="right-web-services">
								<h4>Lead Generation Services</h4>
								<ul>
									{/* <li><i className="fa fa-angle-right"></i><Link to="orm-management-services.php">ORM Services</Link></li> */}
									<li><i className="fa fa-angle-right"></i><Link to="/conversion-rate-optimization-services">Conversion Rate Optimization</Link></li>
									<li><i className="fa fa-angle-right"></i><Link to="/email-marketing-services">Email Marketing</Link></li>
									{/* <li><i className="fa fa-angle-right"></i><Link to="bulk-sms-services.php">Bulk SMS Services</Link></li> */}
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
							</div><br />						</div>
					</div>
				</div>
			</div><br />

		</>
	)
}
export default EmailMarket