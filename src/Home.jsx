import Header from './components/header/header'
import Hero from './components/hero'
import Testimonial from './components/testimonial'
import VideoBlk from './components/videoblk'
import Avatar from "/avatar.webp"
import Features from './components/features'
import Steps from './components/steps'
import MoreFeatures from './components/morefeatures'
import CourseDetails from './components/coursedetails'
import WhyDetails from './components/whydetails'
import Pricing from './components/pricing'
import Testimonials from './components/testimonials'
import Faq from './components/faq'
import Stories from './components/stories'
import Footer from './components/footer'
import NewletterForm from './components/newletterForm'
import InfoSteps from './components/infoSteps'
import TestimonailOfHome from './components/testimonailOfHome'
import About from './components/about'
import Resources from './components/resources'
import './global.css'

function Home() { 
  const menuItems = [
    {href:"#about",value:"About"},
    {href:"#newsletter",value:"Newsletter"},
    {href:"#resources",value:"Resources"},
    {href:"/courses",value:"Courses"},
    {href:"#contact",value:"Contact"},
  ]
  return (
    <>
      <Header menus={menuItems} btnInfo={{value:"View Course",href:"courses"}}>
        <p>✹ Build your digital product business {'\u002D\u003E'} <a href="#">Create Once, Sell Forever (LIVE)</a></p>
      </Header>
      <main>

        <div className="container">
          <div className="row">

              {/* Hero */}
              <Hero 
                title="Stop Selling Your Time, Sell Digital Products Instead"
                content="Turn your knowledge into products that sell themselves. Learn how to build your brand, audience, offer and drive traffic and sales on autopilot."
                id="homeHero"
              >
                <NewletterForm />
              </Hero>
    
 
              {/* more Features */}
              <InfoSteps />


              {/* Testimonial */}
              <TestimonailOfHome />
              
              {/* About us */}
              <About />
              
              {/* resources */}
              <Resources />




          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home
