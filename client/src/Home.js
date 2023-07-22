import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { SliDer } from './SliDer'
import service1 from './images/1.png'
import service2 from './images/2.png'
// import service3 from './images/3.png'
import service4 from './images/4.png'
import service5 from './images/5.png'
import service6 from './images/6.png'
import orderImg1 from './images/marketingicon.png'
import orderImg2 from './images/developmenticon.png'
import orderImg3 from './images/creativeicon.png'
import orderImg4 from './images/brandicon.png'
import orderImg5 from './images/identityicon.png'
import orderImg6 from './images/strategyicon.png'
import rightImg from './images/rightt.png'
import serv1 from './images/111.png'
import serv2 from './images/222.png'
import serv3 from './images/333.png'
import serv4 from './images/444.png'
import serv5 from './images/555.png'
import serv6 from './images/666.png'
import mktIcon from './images/market-icon-1.png'
import mktIcon2 from './images/market-icon-2.png'
import mktIcon3 from './images/market-icon-3.png'
import mktIcon4 from './images/market-icon-4.png'
import './home.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Home = () => {
	const [state, setState] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
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
			setState({ name: '', email: '', phone: '', subject: '', message: '' });
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
				<title>Socio Edge | Home</title>
				<meta name="description" content="Hire best web designer and website developer in Delhi to get creative and responsive website design. Our website maker in Delhi are experienced to take care of SMEs or brand business."></meta>
				<meta name="Keyword" content="Website Designer In Chandigarh, Web Designers Chandigarh, Website Developer In Chandigarh, Web Developers In Chandigarh, Chandigarh Best Web Designers, Chandigarh Best Website Developers "></meta>
			</Helmet>

			<SliDer />
			<br />
			<div className="top_text wow fadeIn animated animated" style={{ visibility: 'visible' }}>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2>Complete Web Solutions <strong style={{ color: '#121212' }}>With Right Recomendations</strong></h2>
							<p>Our specialist are skilled in providing web design & development, mobile app developmeent and digital marketing dervices that increase the overall performance of business Globally.</p>
						</div>
					</div>
				</div>
			</div>

			<div style={{ background: '#ffffff' }}>
				<div className="container">
					<div className="ssss">
						<div className="row">
							<div className="col-sm-4">
								<div className="new_service">
									<img src={service1} alt="Serviceimage1" />
									<h4>Website Design Services</h4>
									<p>Get creative web designs with the best user interface for multiple platforms that increase the trust flow among users and bring audiences...</p>
									<button className="btn btn-success buton"><Link to="/website-design-services">Upgrade Your Design</Link></button>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="new_service">
									<img src={service2} alt="Serviceimage2" />
									<h4>Search Engine Optimization</h4>
									<p>Our SEO team's motive is to get high ranking for businesses in top search engine results, which enhances visitors on the website...</p>
									<button className="btn btn-success buton"><Link to="/seo-services">Grow Your Business</Link></button>
								</div>
							</div>
							{/* <div className="col-sm-4">
								<div className="new_service">
									<img src={service3} alt="Serviceimage3" />
									<h4>Mobile Application Development</h4>
									<p>Our core focus is to develop UX/UI designs and add user-friendly navigation for multiple platforms to reach audiences in a easy & effective way...</p>
									<button className="btn btn-success buton"><Link to="">Make Your App</Link></button>
								</div>
							</div> */}
							<div className="col-sm-4">
								<div className="new_service">
									<img src={service4} alt="Serviceimage4" />
									<h4>Content Marketing</h4>
									<p>Another powerful way to attract, engage and convert users into clients through content marketing services which increase website traffic...</p>
									<button className="btn btn-success buton"><Link to="/content-marketing-services">Engage Visitors</Link></button>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="new_service">
									<img src={service5} alt="Serviceimage5" />
									<h4>E-Commerces Website Design</h4>
									<p>Customized your ecommerce website design with user-friendly navigation functionality that ensures high traffic & sell your products...</p>
									<button className="btn btn-success buton"><Link to="/ecommerce-website-development-services">Sale Your Product</Link></button>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="new_service">
									<img src={service6} alt="Serviceimage6" />
									<h4>Pay Per Click Services</h4>
									<p>PPC(Pay Per Click) or Paid Marketing services is a fast and reliable way to generate traffic and sales for businesses...</p>
									<button className="btn btn-success buton"><Link to="/ppc-campaign-marketing-services">Get More Leads</Link></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="clearfix"></div>
			<section className="offerbg">
				<div className="container wow fadeIn animated animated" data-wow-duration="1200ms" data-wow-delay="400ms" style={{ visibility: 'visible', animationDuration: 1200, animationDdelay: 400, animationName: 'fadeIn' }}>
					<h2><span>Our Core Values</span></h2>
					<p className="text-center">As a <b>Website designer in Chandigarh</b>, believes in providing diverse range of web services such as web development, mobile app development, digital marketing services <br />for small and corporate business to make their Online presence effective.</p>
					<div className="greyli"></div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 offerbox wow zoomIn animated animated anim" data-wow-duration="1200ms" data-wow-delay="400ms">
						<div className="img">
							<img src={orderImg1} width="60" height="39" alt="Out of the Box Strategy" />
						</div>
						<h3>Customer Relationship</h3>
						<p>Deliver better products to improve customer experience that makes business relationship better.</p>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 offerbox wow zoomIn animated animated anim" data-wow-duration="1200ms" data-wow-delay="400ms">
						<div className="img">
							<img src={orderImg2} width="44" height="37" alt="ROI Oriented SEO" />
						</div>
						<h3>Business Growth </h3>
						<p>Our team challenge ourselves and learn trending technologies for a better and efficient growth.</p>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 offerbox wow zoomIn animated animated anim" data-wow-duration="1200ms" data-wow-delay="400ms">
						<div className="img">
							<img src={orderImg3} width="46" height="44" alt="Creative Direction" />
						</div>
						<h3>Clients Intelligence </h3>
						<p>We listen to our customer's unique and creative ideas before execution of any plan.</p>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 offerbox wow zoomIn animated animated anim" data-wow-duration="1200ms" data-wow-delay="400ms">
						<div className="img">
							<img src={orderImg4} width="51" height="50" style={{ backgroundImage: 'none' }} alt="Brand Building" />
						</div>
						<h3>Brand Building </h3>
						<p>Our marketing efforts transform your small business into brand and established as a competitor.</p>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 offerbox wow zoomIn animated animated anim" data-wow-duration="1200ms" data-wow-delay="400ms">
						<div className="img">
							<img src={orderImg5} width="44" height="43" alt="Focus on right audience" />
						</div>
						<h3>Right Strategy</h3>
						<p>We implement trending and useful strategy in marketing, designing and development process.</p>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 offerbox wow zoomIn animated animated anim" data-wow-duration="1200ms" data-wow-delay="400ms">
						<div className="img">
							<img src={orderImg6} width="32" height="46" alt="Latest Technology" />
						</div>
						<h3>Project Analysis</h3>
						<p>Inspect client expectations in the beginning and list all the requirement for a good result.</p>
					</div>
				</div>
			</section>
			{/* third section */}

			<div className="web-theme" style={{ background: '#ffffff' }}>
				<div className="container">
					<div className="row">
						<div className="top_text">
							<div className="col-sm-12">
								<h2><span>We don't just build websites!</span> We build life long relationships</h2>
								<p>As we help clients to achieve their business objectives from the very first day through empowering their business website most convenient, secure and productive way to reach the audience.</p>
							</div>
						</div>
					</div><br /><br />
					<div className="row">
						<div className="col-md-6">
							<div className="img-newab">
								<img data-src="images/check-mark.png" className="right" src={rightImg} alt="shurity" />
								<div className="textttttt">
									<h4 className="no-margin"><strong>Grow Your Business With The Help of Socio Edge</strong></h4>
									<p className="justify">Custom website design services is necessary for every business. Our team transform client thoughts into reality, which strengthen the client business value. Our designers & developers believes in developing modern and appealing website designs as per client’s business need.</p>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="img-newab">
								<img data-src="images/check-mark.png" className="right" src={rightImg} alt="shurity" />
								<div className="textttttt">
									<h4 className="no-margin"><strong>Design A Website For Online Business</strong></h4>
									<p className="justify">Our motive is to design a Ecommerce website that supports user-friendly navigation. Ecommerce websites are easy and effective way to reach the audience directly and sell products that enhance overall performance of Online store or product based business.</p>
								</div>
							</div>
						</div>
					</div>
					<br />
					<div className="row">
						<div className="col-md-6">
							<div className="img-newab">
								<img data-src="images/check-mark.png" className="right" src={rightImg} alt="shurity" />
								<div className="textttttt">
									<h4 className="no-margin"><strong>Top Digital Marketing Services in Chandigarh</strong></h4>
									<p className="justify">Our digital marketing strategists help you overcome online marketing challenges, improve branding and enhance traffic on websites. We ensure that your website receives visibility on major search engines and get top ranking on search engine result page despite of high competition.</p>
								</div>
							</div>
						</div>
						<br />
						<div className="col-md-6">
							<div className="img-newab">
								<img data-src="images/check-mark.png" className="right" src={rightImg} alt="shurity" />
								<div className="textttttt">
									<h4 className="no-margin"><strong>Be Found When Your Customers Are Searching</strong></h4>
									<p className="justify">As we provide SEO services, Our SEO expert audit your business website and fix the imperfection as per search engine algorithm. Our in-depth analysis and optimization strategies take your website to the top. Our experts believes in working on the latest update of the search engine.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* end of another section */}
			<div className="home-1">
				<div className="left">
					<h4>Why Socio Edge...?</h4>
					<p className="text-justify">Socio Edge listens to our client’s ideas and suggests the best plan for their business to chalk out the creative
						and technically strong solutions that suitable for their business growth. Our top priority is to understand the client’s business expectations
						and provide them with customized web design services that make them a successful brand.<br /><br /> As a Web Developers In Chandigarh, our motive is to offer
						top-notch services such as mobile apps development, web design and development, and digital marketing services with customer
						support facilities that enhance business relationships. <br /><br />Our dedicated team is well experienced and passionate about new technologies. We believe in
						making correct planning and execution from start to end which is crucial for profitable growth. Our best website designer in Chandigarh believes in providing
						quality based services around the globe, as a result, it gives a solid return that wins client loyalty and brings them back again and again.</p>
				</div>
				<div className="right animate slideRight" id="ani-three">
					<ul>
						<li><img src={serv1} alt="Unique Web Designs" />Unique Web Designs</li>
						<li><img src={serv2} alt="Easy accessibility" />Easy accessibility</li>
						<li><img src={serv3} alt="fast Loading" />Fast Loading</li>
						<li><img src={serv4} alt="Easy to navigate" />Easy to navigate</li>
						<li><img src={serv5} alt="Fully Responsive" />Fully Responsive</li>
						<li><img src={serv6} alt="SEO Friendly" />SEO Friendly</li>
					</ul>
				</div>
			</div>

			{/* we-offer-section starts */}
			{/* we-offer-section end */}

			<section className="marketing-section-two">
				<div className="container-fluid">
					<div className="steps-blocks">
						<div className="row clearfix">
							{/* <!--Step Block--> */}
							<div className="step-block col-md-3 col-sm-6 col-xs-12">
								<div className="inner-box">
									<div className="icon-box">
										<span className="icon"><img src={mktIcon} alt="mkt-icon" /></span>
									</div>
									<h3>Get Client’s Goal</h3>
									<div className="step-number">Step 01</div>
								</div>
							</div>
							{/* <!--Step Block--> */}
							<div className="step-block col-md-3 col-sm-6 col-xs-12">
								<div className="inner-box">
									<br />
									<div className="icon-box">
										<span className="icon"><img src={mktIcon2} alt="mkt-icon" /></span>
									</div>
									<h3>Realize Challenges</h3>
									<div className="step-number">Step 02</div>
								</div>
							</div>
							{/* <!--Step Block--> */}
							<div className="step-block col-md-3 col-sm-6 col-xs-12">
								<div className="inner-box">
									<br /><br />
									<div className="icon-box shifter">
										<span className="icon"><img src={mktIcon3} alt="mkt-icon" /></span>
									</div>
									<h3>Find Solution</h3>
									<div className="step-number">Step 03</div>
								</div>
							</div>
							{/* <!--Step Block--> */}
							<div className="step-block col-md-3 col-sm-6 col-xs-12">
								<div className="inner-box ">
									<br /><br /><br /><br />
									<div className="icon-box">
										<span className="icon"><img src={mktIcon4} alt="mkt-icon" /></span>
									</div>
									<h3>Final Result</h3>
									<div className="step-number">Step 04</div>
								</div>
							</div>
						</div>
					</div>
					<h3>We’ll Make Your Web Marketing! More Efficient!</h3>
					<Link to="/price-packages" className="theme-btn btn-style-one">Pricing & Plan</Link>
					<div className="container">
						<div className="ready-for-next" style={{ marginTop: 35 }}>
							<div className="text">Ready to discuss your <strong>Project</strong>?</div>
							<div className="tel"><Link to="tel:+7986378511"> <i className="icon-phone-3"></i> <strong className="font-26">+91-79863 78511</strong> </Link></div>
							<div className="free-quote"><Link to="/contact" className="popup"> Free Quote </Link></div>
						</div>
					</div>
				</div>
			</section>

			{/* form starts */}
			<div className="bootom_form">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2>Let's Talk</h2>
							<p>Visit Us, Give us a call, write us an email or fill out the form below.</p>
						</div>
						<div className="form-area">
							{result && (
								<p className={`${result.success ? 'success' : 'error'}`}>
									{result.message}
								</p>
							)}
							<form name="serviceForm" method="post" onSubmit={sendEmail} autocomplete="off">
								<div className="col-sm-6">
									<span className="error" style={{ color: 'red', fontSize: 12 }}></span>
									<div className="form-group">
										<input type="text" className="form-control" name="name" value={state.name} placeholder="Name" maxlength="30" onChange={onInputChange} required />
									</div>
									<div className="form-group">
										<input type="email" className="form-control" name="email" value={state.email} placeholder="Email" onChange={onInputChange} required />
									</div>
									<div className="form-group">
										<input type="number" className="form-control" name="phone" placeholder="Mobile Number" value={state.phone} maxlength="10" onChange={onInputChange} required />
									</div>
									<div className="form-group">
										<input type="text" className="form-control" name="subject" value={state.subject} placeholder="Subject" maxlength="50" onChange={onInputChange} required />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="form-group">
										<textarea type="textarea" className="form-control" name="message" placeholder="Message" value={state.message} maxlength="190" rows="9" onChange={onInputChange} required></textarea>
									</div>
								</div>
								<div className="clearfix"></div>
								{/* <div className="clear">
								<div className="col-sm-3 cate">
									<input type="checkbox" name="service[]" value="Website Designing"/>
									<label>Website Designing</label>
									<input type="checkbox" name="service[]" value="Website Re-Designing"/>
									<label>Website Re-Designing</label>
									<input type="checkbox" name="service[]" value="Hotel Website Design"/>
									<label>Hotel Website Design</label>
								</div>
								<div className="col-sm-3 cate">
									<input type="checkbox" name="service[]" value="Website Development"/>
									<label>Website Development</label>
									<input type="checkbox" name="service[]" value="Dynamic Website"/>
									<label>Dynamic Website</label>
									<input type="checkbox" name="service[]" value="E-Commerce Development"/>
									<label>E-Commerce Development</label>
								</div>
								<div className="col-sm-3 cate">
									<input type="checkbox" name="service[]" value="SEO"/>
									<label>Search Engine Optimization</label>
									<input type="checkbox" name="service[]" value="SMO"/>
									<label>Social Media Optimization</label>
									<input type="checkbox" name="service[]" value="PPC"/>
									<label><span></span>PPC Campaign (Adwords)</label>
								</div>
								<div className="col-sm-3 cate">
									<input type="checkbox" name="service[]" value="Domain Registration"/>
									<label>Domain Registration</label>
									<input type="checkbox" name="service[]" value="Website Hosting"/>
									<label>Website Hosting</label>
									<input type="checkbox" name="service[]" value="Logo Designing"/>
									<label>Logo Designing</label>
								</div>
							</div> */}
								<div className="service-button2" style={{ marginleft: 15 }}><button type="submit" name="submit_button" value="Submit" style={{ paddingTop: 9, paddingBottom: 9, paddingRight: 19, paddingLeft: 14, marginLeft: 13, color: 'white', backgroundColor: '#121212', border: 'none' }}>GET A FREE QUOTE</button></div>
							</form>
						</div>
					</div>
				</div>
			</div>

		</>
	)

};
export default Home;