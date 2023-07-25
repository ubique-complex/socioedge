import React from 'react'
import './FooTer.css';
import logo from './images/Socio-edge-logo-2.svg';
import { Link } from "react-router-dom";

// const footerStyle = {
//   position: "absolute",
//   top: "1300vh",
//   width: "100%"
// }

export const FooTer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="text-center text-lg-start bg-light text-muted r-style" >
        {/* <!-- Section: Social media --> */}
        <section
          className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >
          {/* <!-- Left --> */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <Link to="https://www.facebook.com/Socio Edge.in" className="me-4 text-reset">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link to="https://twitter.com/Socio Edgein" className="me-4 text-reset">
              <i className="fa fa-twitter"></i>
            </Link>
            {/*<Link to="" className="me-4 text-reset">
              <i className="fa fa-google"></i>
            </Link> */}
            <Link to="https://www.instagram.com/Socio Edgein/" className="me-4 text-reset">
              <i className="fa fa-instagram"></i>
            </Link>
            {/* <Link to="" className="me-4 text-reset">
              <i className="fa fa-linkedin"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fa fa-github"></i>
            </Link> */}
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <img src={logo} alt="Socio Edge" style={{ width: 221 }} />
                <p classNameName="text-justify">
                  The Socio Edge is a leading IT company in Chandigarh,
                  where we believe in data driven planning to develop strategies that are exclusively matched to your brand.
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <Link to="/web-development-services" className="text-reset">Web Solution</Link>
                </p>
                <p>
                  <Link to="/mobile-application-development-services" className="text-reset">App Solution</Link>
                </p>
                <p>
                  <Link to="/digital-marketing-services" className="text-reset">Digital Marketing</Link>
                </p>
                <p>
                  <Link to="/graphic-design-services" className="text-reset">Graphic Designing</Link>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                {/* <p>
                  <Link to="/work" className="text-reset">Work</Link>
                </p> */}
                <p>
                  <Link to="/price-packages" className="text-reset">Packages</Link>
                </p>
                <p>
                  <Link to="/privacy-policy" className="text-reset">Privacy Policy</Link>
                </p>
                <p>
                  <Link to="/term-and-conditions" className="text-reset">Terms & Conditions</Link>
                </p>

              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Contact
                </h6>
                <p><i className="fa fa-home me-3"></i> 20-A, Tej Bagh Colony, Sanour Road, Patiala, Punjab 147001 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p>
                  <i className="fa fa-envelope me-3"></i>
                  socioedge9@gmail.com
                </p>
                <p><i className="fa fa-phone me-3"></i> + 91 7986 37 8511</p>
                {/* <p><i className="fa fa-print me-3"></i> + 91 7986 37 8511</p> */}
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-4 copystyle">
          © 2023 Copyright:
          <Link className="text-reset fw-bold" to="/">socioedge.in</Link>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
      <div id="sticky-footer" class="hidden-xs hidden-sm">
        <div class="sticky-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-2 foot-txt"></div>
              <div class="col-md-3">
                <div class="support24">
                  <Link to=""><i class="fa fa-phone"></i><span>24/7 Support</span></Link>
                </div>
              </div>
              <div class="col-md-4 foot-txt">
                <span>Call Us : +91-7986-37-8511</span>
              </div>
              <div class="col-md-2 vcenter">
                <div class="call-back-bt">
                  <Link to="/contact" data-toggle="modal" data-target="#myModal">Get a call Back </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="requestcall">
        <div className="modal" id="myModal" style={{ display: 'block', paddingRight: 17 }}>
          {/* <div className="modal-backdrop" style={{ height: 657 }}></div> */}
      {/* <div className="modal-dialog">
            <div className="modal-content">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <div className="">
                <div className="ibform">
                  Get a <span>call back</span> in one click.
						<form name="callbackForm" method="post" action="" autocomplete="off">
                    <div className="inpuricon"><img src="img/icon1.png" /></div>
                    <input name="name" type="text" class="input-1" placeholder="Full Name" maxlength="30" onKeyPress="return withoutspecialnumeric(event)" />
                    <span className="name" style={{ color: 'red', fontSize: 12 }}></span>
                    <div className="inpuricon"><img src="img/icon2.png" /></div>
                    <input name="email" type="text" class="input-1" placeholder="Email Address" />
                    <span className="email" style={{ color: 'red', fontSize: 12 }}></span>
                    <div className="inpuricon"><img src="img/icon3.png" /></div>
                    <input name="phone" type="text" class="input-1" placeholder="Mobile Number" maxlength="10" onKeyPress="return isNumberKey(event)" />
                    <span className="phone" style={{ color: 'red', fontSize: 12 }}></span> */}
      {/* <!--<div class="inpuricon"><img src="img/icon4.png"/></div>
							<input name="date" type="text" class="input-1" placeholder="Date (dd-mm-YY)">
							<span class="date" style="color:red; font-size: 12px;"></span>
							<div class="inpuricon"><img src="img/icon5.png"/></div>
							<input name="time" type="text" class="input-1" placeholder="Time (HH:MM AM/PM)">
							<span class="time" style="color:red; font-size: 12px;"></span>--> */}
      {/* <button className="ifbt hvr-sweep-to-right" type="submit" name="submit_call" value="Submit" onclick="return checkValidationCall();">GET STARTED</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div> */}

    </>
  )
}
