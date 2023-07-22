import React from 'react';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
const Wddw = () => {
    return (
        <>
        <Helmet>
                <title>Socio Edge | Website design and development Work</title>
                <meta name="description" content="Choose your affordable packages for website design services, web development services, SEO services, SMO marketing services and more." />
                <meta name="keywords" content="Cheap Packages For Web Design, Cheap Packages For Website Development, Cheap Packages For SEO, PPC, SMO" />
            </Helmet>
            <div className="head portfolio imgg">
                <div className="container">
                    <h1 className="text-center"><strong> Website design and development Work </strong> </h1>
                </div>
            </div>

            <div className="bedcrumb_service">
                <div className="container-fluid">
                    <ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
                        <li><Link to="/"> <span className="fa fa-home"></span></Link></li>
                        <li><Link to="#">/ work /</Link></li>
                        <li><Link style={{ color: '#121212', textDecoration: 'none' }}><span>&nbsp; Website design and development Work</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />
        </>
    )
}
export default Wddw;