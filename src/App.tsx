import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/About"));
const Project = lazy(() => import("./pages/project"));
const ContactUs = lazy(() => import("./pages/Contact"));
// SERVICES
const AndroidAppDev = lazy(() => import("./pages/Services/androidapp"));
const AiAppDev = lazy(() => import("./pages/Services/aiapp"));
const PythonDev = lazy(() => import("./pages/Services/pythondev"));
const ContentWriter = lazy(() => import("./pages/Services/content_writer"));
const CyberSecurity = lazy(() => import("./pages/Services/cyber_security"));
const Devops = lazy(() => import("./pages/Services/devops"));
const DigitalMarketing = lazy(() => import("./pages/Services/digital_marketing"));
const IOTDev = lazy(() => import("./pages/Services/iot"));
const WebSiteDev = lazy(() => import("./pages/Services/websitedev"));
const SEO = lazy(() => import("./pages/Services/seo"));
const QAAutomationTesting = lazy(() => import("./pages/Services/qaautomation"));
// INDUSTRIES
const BankingAndFinancial = lazy(() => import("./pages/Industries/banking&financial"));
const Education = lazy(() => import("./pages/Industries/education"));
const EnergyResourcesUtilities = lazy(() => import("./pages/Industries/energy&resources"));
const Insurance = lazy(() => import("./pages/Industries/insurance"));
const LifeScienceHealthcare = lazy(() => import("./pages/Industries/life_healthcare"));
const PublicServices = lazy(() => import("./pages/Industries/public&services"));
const CommunicationMedia = lazy(() => import("./pages/Industries/communicationmedia"));
const TravelMediaLogistics = lazy(() => import("./pages/Industries/travel&trans&log"));
const InformationServices = lazy(() => import("./pages/Industries/consumergoods"));
// PROJECTS
const Constrogen = lazy(() => import("./pages/Projects/constrogen"));
const VBY = lazy(() => import("./pages/Projects/vby"));
const IntelliReader = lazy(() => import("./pages/Projects/intellireader"));
const Skarvi = lazy(() => import("./pages/Projects/skarvi"));
const EMS = lazy(() => import("./pages/Projects/ems"));
const Vibro = lazy(() => import("./pages/Projects/vibro"));
function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Suspense fallback={<div className="page-loader">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            {/* SERVICES */}
            <Route path="/android-app-development" element={<AndroidAppDev />} />
            <Route path="/ai-app-development" element={<AiAppDev />} />
            <Route path="/python-development" element={<PythonDev />} />
            <Route path="/content-writer" element={<ContentWriter />} />
            <Route path="/cyber-security" element={<CyberSecurity />} />
            <Route path="/devops" element={<Devops />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/iot-development" element={<IOTDev />} />
            <Route path="/website-development" element={<WebSiteDev />} />
            <Route path="/seo" element={<SEO />} />
            <Route path="/qa-automation-testing" element={<QAAutomationTesting />} />
            {/* INDUSTRIES */}
            <Route path="/banking-and-financial" element={<BankingAndFinancial />} />
            <Route path="/education" element={<Education />} />
            <Route path="/energy-resources-utilities" element={<EnergyResourcesUtilities />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/life-sciences-healthcare" element={<LifeScienceHealthcare />} />
            <Route path="/public-services" element={<PublicServices />} />
            <Route path="/communications-media-technology" element={<CommunicationMedia />} />
            <Route path="/travel-transportation-logistics" element={<TravelMediaLogistics />} />
            <Route path="/information-services" element={<InformationServices />} />
            {/* PROJECT */}
            <Route path="/constrogen" element={<Constrogen />} />
            <Route path="/vby" element={<VBY />} />
            <Route path="/intellireader" element={<IntelliReader />} />
            <Route path="/ems" element={<EMS />} />
            <Route path="/vibro" element={<Vibro />} />
            <Route path="/etrm" element={<Skarvi />} />
          </Routes>
        </Suspense>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
