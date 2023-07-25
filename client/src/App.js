
import './App.css';
import Home from './Home';
import { About } from './About';
import { NavBar } from './NavBar';
import { FooTer } from './FooTer';
import { Packages } from './Packages';
// import { Work } from './Work';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import WebDesignServices from './webDesignServices';
import { WebRedesign } from './WebRedesign';
import WebEcommerce from './WebEcommerce';
import { CmsWeb } from './CmsWeb';
import { WebPortal } from './WebPortal';
import { StaticWeb } from './StaticWeb';
import WebDev from './WebDev';
import PhpWeb from './PhpWeb';
import { WordPressWeb } from './WordPressWeb';
import { EcomWevDev } from './EcomWevDev';
import MogentoWeb from './MogentoWeb';
import GraphicDesign from './GraphicDesign';
import { LogoDesign } from './LogoDesign';
import { FlyerDesign } from './FlyerDesign';
import BrochureDesign from './BrochureDesign';
import { PsdHtml } from './PsdHtml';
import MobileApp from './MobileApp';
import AndroidApp from './AndroidApp';
import IosApp from './IosApp';
import Seo from './Seo';
import Content from './Content';
import { EcomSeo } from './EcomSeo';
import Smo from './Smo';
import FbMarket from './FbMarket';
import { YtMarket } from './YtMarket';
import { Sem } from './Sem';
import Ppc from './Ppc';
import { GwordManage } from './GwordManage';
import EmailMarket from './EmailMarket';
import Contact from './Contact';
import { TnC } from './TnC';
import { PrivacyPolicy } from './PrivacyPolicy';
import DigitalMarket from './DigitalMarket';
import Services from './Services';

// import Gdw from './GraphicDesignWork';
// import Wddw from './WebdesignanddevelopmentWork';
// import Dmw from './DigitalmarketingWork';
// import Bw from './BrandingWork';
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/who-we-are" element={<About />} />
          <Route exact path="/price-packages" element={<Packages />} />
          <Route exact path="/services" element={<Services />} />
          {/* <Route exact path="/work" element={<Work />} /> */}

          <Route exact path="/contact" element={<Contact />} />

          <Route exact path="/term-and-conditions" element={<TnC />} />

          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route exact path="/website-design-services" element={<WebDesignServices />} />
          <Route exact path="/website-redesign-services" element={<WebRedesign />} />
          <Route exact path="/ecommerce-website-design-services" element={<WebEcommerce />} />
          {/* <Route exact path="/hotel-website-design-services">
            <WebDesignServices />
          </Route> */}
          <Route exact path="/cms-website-design-services" element={<CmsWeb />} />
          <Route exact path="/web-portal-design-services" element={<WebPortal />} />
          <Route exact path="/static-website-design-services" element={<StaticWeb />} />
          <Route exact path="/web-development-services" element={<WebDev />} />
          <Route exact path="/php-website-development-services" element={<PhpWeb />} />
          <Route exact path="/wordpress-website-development-services" element={<WordPressWeb />} />
          <Route exact path="/ecommerce-website-development-services" element={<EcomWevDev />} />
          <Route exact path="/magento-website-development-services" element={<MogentoWeb />} />
          <Route exact path="/graphic-design-services" element={<GraphicDesign />} />
          <Route exact path="/logo-design-services" element={<LogoDesign />} />
          <Route exact path="/flyer-design-services" element={<FlyerDesign />} />
          <Route exact path="/brochure-design-services" element={<BrochureDesign />} />
          {/* <Route exact path="/mailer-design-services">
            <WebDesignServices />
          </Route>
          <Route exact path="/visiting-card-design-services">
            <WebDesignServices />
          </Route> */}
          <Route exact path="/psd-to-html" element={<PsdHtml />} />
          <Route exact path="/digital-marketing-services" element={<DigitalMarket />} />
          <Route exact path="/seo-services" element={<Seo />} />
          <Route exact path="/content-marketing-services" element={<Content />} />
          {/* <Route exact path="/hotel-website-seo-services">
            <WebDesignServices />
          </Route> */}
          <Route exact path="/ecommerce-website-seo-services" element={<EcomSeo />} />
          {/* <Route exact path="/orm-management-services">
            <WebDesignServices />
          </Route> */}
          <Route exact path="/conversion-rate-optimization-services" element={<WebDesignServices />} />
          <Route exact path="/email-marketing-services" element={<EmailMarket />} />
          {/* <Route exact path="/bulk-sms-services">
            <WebDesignServices />
          </Route> */}
          <Route exact path="/sem-marketing-services" element={<Sem />} />
          <Route exact path="/ppc-campaign-marketing-services" element={<Ppc />} />
          <Route exact path="/google-adwords-management-services" element={<GwordManage />} />
          <Route exact path="/smo-marketing-services" element={<Smo />} />
          <Route exact path="/facebook-marketing-services" element={<FbMarket />} />
          <Route exact path="/youtube-video-marketing-services" element={<YtMarket />} />
          <Route exact path="/mobile-application-development-services" element={<MobileApp />} />
          <Route exact path="/android-application-development-services" element={<AndroidApp />} />
          <Route exact path="/ios-application-development-services" element={<IosApp />} />
          {/* <Route exact path="/ipad-application-development-services">
            <WebDesignServices />
          </Route> */}
          {/* <Route exact path="/mobile-website-development-services">
            <WebDesignServices />
          </Route> */}
          {/* <Route exact path="/web-application-development-services">
            <WebDesignServices />
          </Route> */}
          {/* <Route exact path="/custom-software-development-services">
            <WebDesignServices />
          </Route> */}

          {/* <Route exact path="/website-design-and-development-work" element={<Wddw />} />
          <Route exact path="/digital-marketing-work" element={<Dmw />} />
          <Route exact path="/branding-work" element={<Bw />} />
          <Route exact path="/graphic-design-work" element={<Gdw />} /> */}

        </Routes>
        <FooTer />
      </Router>
    </>
  );
}

export default App;
