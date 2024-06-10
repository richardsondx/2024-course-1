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
import Btn from './components/btn'
import './global.css'

function Course() { 
  const menuItems = [
    {href:"#",value:"Overview"},
    {href:"#whatisinside",value:"What's Inside"},
    {href:"#pricing",value:"Pricing"},
    {href:"#testimonial",value:"Testimonials"},
    {href:"#faq",value:"FAQ's"},
  ]
  return (
    <>
      <Header menus={menuItems} btnInfo={{value:"Get Instant Access",href:"#pricing"}}>
        <p>Limited-time offer: Save $500 on bundle with code <b>"BUNDLE2024"</b> at checkout.</p>
      </Header>
      <main>

        <div className="container">
          <div className="row">

              {/* Hero */} 
              <Hero 
                title="Build and Manage a Remote Development Teams (for Non-Engineers)"
                content="How to Lead Remote Development Teams and Build Quality Apps Without a Technical Background"
              >
                <Btn type={"link"} href={"#pricing"} classes={"largeBtn"} text={"Get Instant Access"} />
                <span>Limited-time offer, the prices will increase soon.</span>
              </Hero>

              {/* Video */}
              <VideoBlk />

              {/* Testimonial */}
              <Testimonial 
                section_title="How I Went from a Team of One to Leading Teams that Built Software as a Service"
                section_content="After watching this 2-hour video course, you will understand my entire framework for building and managing remote development teams. Learn how I went from working alone to leading teams that developed hundreds of apps for clients and my own projects."
                img={Avatar}
                name={"Parker Worth"}
                title={"Content Creator"} 
                content={'"Mitkus is a digital genius. He taught me how to make products that last a lifetime. Imagine waking up and checking your phone to see that you’ve made $1,000s while you were asleep? That’s what Mitkus did for me. Don’t miss this course"'} 
                href={"#pricing"}
                id="whatisinside"
              />

              {/* Features */}
              <Features />

              {/* Testimonial */}
              <Testimonial 
                section_title="Build a High-Performing Remote Team and Scale Your Business Effortlessly. Lead Projects from Anywhere, Anytime."
                section_content="Follow my step-by-step process to build and manage a remote development team that delivers high-quality apps."
                img={Avatar}
                name={"Jon Brosio"}
                title={"Content Creator"} 
                content={'"I recently came across Mitkus. The dude knows his shit. I have built and marketed over $100,000 worth of courses. Instantly – I knew I had a lot more to learn after coming across his work. Can not wait to learn more."'} 
                href={"#pricing"}
              />
                    

              {/* Steps */}
              <Steps/>
                    

              {/* more Features */}
              <MoreFeatures />


              {/* course details */}
              <CourseDetails />

              {/* Why details */}
              <WhyDetails />

              {/* pricing */}
              <Pricing/>

              {/* Testimonial */}
              <Testimonials />

              {/* Stories */}
              <Stories/>

              {/* Faq */}
              <Faq/>
           
          </div>
        </div>

      </main>
    </>
  )
}

export default Course
