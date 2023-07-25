import React, { useState } from 'react'
import img2 from './images/video.jpg'
import img1 from './images/gogole.jpg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'

const Ppc = () => {
	const [state, setState] = useState({
		name: '',
		email: '',
		phone: '',
		subject: 'You receiced a mail for PPC Services',
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
				<title>Socio Edge | ppc-campaign-marketing-services</title>
			</Helmet>
			<div className="development_bg">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-8">
							<div className="ineer_serv_textt">
								<h2>Pay Per Click or PPC Ads Campaign</h2>
								<p>Google offers a unique advertising platform called Pay Per Click marketing services across the world through which businesses easily boost the traffic on website and generate sales.</p>
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
						{/* <script src='https://www.google.com/recaptcha/api.js'></script> */}
					</div>
				</div>
			</div>

			<div className="bedcrumb_service">
				<div className="container-fluid">
					<ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
						<li><Link to="/"> <span className="fa fa-home"></span></Link></li>
						<li><Link to="#">/ Digital Marketing /</Link></li>
						<li><Link to="#">SEM /</Link></li>
						<li><Link style={{ color: '#669940' }}><span>PPC Campaign Services</span></Link></li>
					</ol>
				</div>
			</div>
			<br />

			<div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2>PPC<span> Marketing Services</span></h2>
							<p>Our PPC Marketing Services is the world's least expensive and most effective marketing support for every businessman whether it's a small business or an established brand.</p><br />
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-sm-9 mobile-text">
						<div className="">
							<h2 className="box-header">PPC Campaign <span>Services (Pay Per Click)</span></h2>
							<p>Socio Edge offers <strong>PPC services in Chandigarh</strong> which is a fast and reliable way to generate traffic and sales for businesses. Our team of experts handle <strong>PPC advertising services in Chandigarh</strong> and creates ad campaigns for clients business to deliver them business oriented results within a stipulated time. We are well equipped to handle such pay per click campaigns of any size.</p>

							<p>Google has the largest traffic so far, which any company would love to target. Therefore, it’s natural that Adwords would be the first choice of your paid marketing campaigns. We analyze the keywords, target audiences, targeted location and suggest suitable landing page for PPC campaign. We ensure that your traffic is coming from the right channel. We also change our PPC strategy if it is required.</p><br />

							<div className="services_inn_bg">
								<div className="row">
									<div className="col-sm-6">
										<div className="bgfff">
											<img src={img1} alt="img1" width="80px" />
											<h4>Life Beyond Google</h4>
											<p>Although Google is the most famous advertising platform, it is not the only one. In fact it is more prudent to diversify your ads spend across, Bing, Banner Distribution Networks and custom banners on specifically targeted websites.</p>
											<Link to="/seo-services">Know More</Link>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="bgfff">
											<img src={img2} alt="img2" width="80px" />
											<h4>Video Ads</h4>
											<p>Ever seen static ads on Youtube Videos or specific video ads that show before the video starts? It's a very effective medium of advertising and has a high brand recall. If you have the budget, it is definitely worth looking at.</p>
											<Link to="/youtube-video-marketing-services">Know More</Link>
										</div>
									</div>
								</div>
							</div>
							<br />

							<h4 className="website-service-head">Get PPC Marketing Services In Chandigarh</h4>
							<p>Get a quick solution to increase sales through <strong>PPC services in Chandigarh</strong>. Hire a dedicated full-time resource like Socio Edge and insulate yourself from worries of keeping an in-house employee. This also saves you from infrastructural and  recruitment commitments.</p>

							<p>Our team members are proficient in <strong>PPC advertising services in Chandigarh</strong>. They are technically strong and have a lot of knowledge of online marketing, through which they can increase website traffic and international visibility.</p>

							{/* <!--
							<ul className="mobile_list">
								<li><i className="fa fa-hand-o-right"></i> We are expert in online marketing.</li>
								<li><i className="fa fa-hand-o-right"></i> Our skilled team has great knowledge about the communication tools used these days.</li>
								<li><i className="fa fa-hand-o-right"></i> Technical efficiency.</li>
								<li><i className="fa fa-hand-o-right"></i> We will increase your traffic and international visibility</li>
							</ul>
							<div className="services_inn_bg">
								<h4 className="website-service-head">Get PPC Marketing Services In Chandigarh</h4>
								<p>Get a quick solution to increase sales through <strong>PPC services in Chandigarh</strong>. Hire a dedicated full-time resource like Socio Edge and insulate yourself from worries of keeping an in-house employee. This also saves you from infrastructural and  recruitment commitments.</p>
							</div>
							--> */}
						</div>
					</div>
					<div className="col-sm-3">
						<div className="right-web-services">
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
							</div><br />						</div>
					</div>
				</div>
			</div>
			<br />

		</>
	)
}
export default Ppc;