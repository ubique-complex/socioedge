import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './terms.css'
// background:url(img/aami3-91-512.png)
export const TnC = () => {
    return (
        <>
            <Helmet>
                <title>Socio Edge | term-and-conditions</title>
            </Helmet>
            <div className="head portfolio imgs">
                <div className="container">
                    <h1 className="text-center"><strong>Terms </strong>and conditions</h1>
                </div>
            </div>

            <div className="bedcrumb_service">
                <div className="container-fluid">
                    <ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
                        <li><Link to="/"> <span className="fa fa-home"></span></Link></li>
                        <li><Link style={{ color: '#121212' }}><span>/ Term-and-conditions</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="top_text wow fadeIn animated animated bg_none" style={{ visibility: 'visible' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Socio Edge <span>Terms & Condition</span></h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="aboutsss_sss">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="box-header">STANDARD <span>TERMS AND CONDITIONS</span></h2>
                            <p>Our standard of terms and conditions are applicable to Web Design & Development, Mobile App Development, Custom Software Development, and Digital Marketing Services apply to all contracts that work undertaken by TrendPuff for its clients.</p>
                            <p>Socio Edge has right to update any prior notice under any condition can edit this agreement and all the changes would become applicable as soon as they appear on the website. Whenever you visit our website must acknowledge our terms of use.</p>

                            <h2 className="box-header">OUR <span>FEES AND DEPOSITS</span></h2>
                            <p>To start working with the project 50% fee of the total fee should be submitted immediately as per company terms for further process. The remaining 50% fee will be paid on installments basis till the project has not delivered to the client or published.</p>
                            <p>In case, we have not fulfilled our obligations to deliver the work then the deposit 50% fee is refundable. But the work has started and you want to terminate the contract then the deposit is not refundable.</p>

                            <h2 className="box-header">INFORMATION <span>REQUIRED</span></h2>
                            <p>You must give all necessary information which is required by us to complete the project. This information may include, photographs, written content, logo and other printed material. If there is any delay in providing such information, we have the right to extend the deadline of the project with a reasonable cost.</p>

                            <h2 className="box-header">VARIATIONS</h2>
                            <p>We will provide you multiple designs so that you can finalize one of the design. However, we have the right to decide the limit of the design number. We can charge you for additional designs once the original design finalized.</p>

                            <h2 className="box-header">APPROVAL <span>AND REJECTION OF WORK</span></h2>
                            <p>After completing the project, Socio Edge notifies you to review it. If any changes required, write all unsatisfactory points in detail and let us know in writing within 7 days. If you reject any of our work within the review period. We will fix issues and ensure you the perfection of the project.</p>

                            <h2 className="box-header">PAYMENT</h2>
                            <p>Socio Edge will send you the invoice for balance 50% fee after successful project delivery.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}
