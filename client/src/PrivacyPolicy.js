import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export const PrivacyPolicy = () => {
	return (
		<>
			<Helmet>
				<title>Socio Edge | Privacy-Policy</title>
			</Helmet>
			<div className="head portfolio imgs">
				<div className="container">
					<h1 className="text-center"><strong>Privacy</strong> Policy </h1>
				</div>
			</div>

			<div className="bedcrumb_service">
				<div className="container-fluid">
					<ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
						<li><Link to="/"> <span className="fa fa-home"></span></Link></li>
						<li><Link style={{ color: '#121212' }}><span>/ Privacy Policy</span></Link></li>
					</ol>
				</div>
			</div>
			<br />

			<div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2>Socio Edge <span>Privacy Policy</span></h2>
						</div>
					</div>
				</div>
			</div>

			<div className="aboutsss_sss">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2 className="box-header">Our <span>Commitment</span></h2>
							<p>Our privacy policy tells you about our commitment toward clients privacy and information. Socio Edge never discloses personal information that we received from clients.</p>

							<h2 className="box-header">Mail <span>Received From Us</span></h2>
							<p>Mailing services are created by Socio Edge for better solutions. If you are receiving our emails through e-mail marketing, it means you have subscribed our email services. Otherwise, our existing clients used our email service. We respect your time and attention by controlling the frequency of our mailings.</p>

							<p>All emails are system generated. In case you have received unnecessary emails, please forward us that mail with your feedback to growthlicious.in for review. To stop receiving email from us, or to change expressed interests. If you wish to do so, simply follow us growthlicious.in.</p>

							<h2 className="box-header">We <span>Protect Your Privacy</span></h2>
							<p>Socio Edge use suitable security measures to protect your valuable information against the loss, misuse and alteration of data used by our system.</p>

							<h2 className="box-header">Sharing <span>And Usage</span></h2>
							<p>Without client permission, our team never share, sell or rent individual personal information with anyone. Basically, your information is used for contacting you or sending emails based on your request.</p>
						</div>
					</div>
				</div>
			</div>
			<br />
		</>
	)
}
