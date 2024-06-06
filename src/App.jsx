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
import './global.css'
import Stories from './components/stories'

function App() { 

  return (
    <>
      <Header />
      <main>

        <div className="container">
          <div className="row">

              {/* Hero */}
              <Hero/> 

              {/* Video */}
              <VideoBlk />

              {/* Testimonial */}
              <Testimonial 
                section_title="Revealing My Framework: How I Went from $0 to $35K/Month with Digital Products"
                section_content="After watching this 5-hour video course, you will understand my entire $300,000+ digital product business framework, enabling you to take advantage of it and build your own."
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
                section_title="Build Assets and Detach Value From Time. Make Money Even When You're Sleeping."
                section_content="Follow my step-by-step process and build your own profitable digital product business that makes money even while you sleep. Let this course change the direction of your life."
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

export default App
