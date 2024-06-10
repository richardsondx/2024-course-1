import SectionTitle from "../sectiontitle";
import DefaultItem from "../steps/defaultItem"; 
import Img from "/img5.webp";
import Img2 from "/img6.webp";
import Img3 from "/img7.webp";
import Img4 from "/img8.webp";
import Img5 from "/img9.webp";
import Img6 from "/img10.webp";
import Img7 from "/img11.webp";
import Img8 from "/img12.webp"; 
import Btn from "../btn";

export default function MoreFeatures() {
    return (
        <div className="col-lg-12">
            <div className="steps-wrap">
                <SectionTitle
                    title="There Is More..."
                    content="Everyone who purchases the bundle version of this course will also get access to bonus materials listed below, valued at over $500."
                />  
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <DefaultItem>
                            <h3>Remote Team Management Templates</h3>
                            <p>Make your management processes seamless. Get my pre-made templates for managing remote teams that you can easily edit and use.</p>
                            <img src={Img} alt="" />
                        </DefaultItem>
                    </div> 
                    <div className="col-lg-4 col-md-6">
                        <DefaultItem>
                            <h3>Talent Sourcing Ideas</h3>
                            <p>Discover where to find top remote talent. Get 50+ ideas on how to source and hire the best remote developers.</p>
                            <img src={Img2} alt="" />
                        </DefaultItem>
                    </div> 
                    <div className="col-lg-4 col-md-6">
                        <DefaultItem>
                            <h3>Remote Work Toolbox</h3>
                            <p>Receive a curated list of the best tools for managing remote teams and accelerating your project development.</p>
                            <img src={Img3} alt="" />
                        </DefaultItem>
                    </div> 
                    <div className="col-lg-4 col-md-6">
                        <DefaultItem>
                            <h3>Product Creator Toolbox</h3>
                            <p>Receive a hand-picked list of the best tools for digital product creators and accelerate your growth.</p>
                            <img src={Img4} alt="" />
                        </DefaultItem>
                    </div> 
                    <div className="col-lg-4 col-md-6">
                        <DefaultItem>
                            <h3>Communication System</h3>
                            <p>Create and maintain clear communication channels. Get my system for effective communication within your remote team.</p>
                            <img src={Img5} alt="" />
                        </DefaultItem>
                    </div> 
                    <div className="col-lg-4 col-md-6">
                        <DefaultItem>
                            <h3>Team Organization System</h3>
                            <p>From tasks to team goals, have a system that keeps everything on track. Get my organizational system and manage your remote team efficiently.</p>
                            <img src={Img6} alt="" />
                        </DefaultItem>
                    </div> 
                    <div className="col-lg-4 col-md-6">
                        <DefaultItem>
                            <h3>Leadership Course</h3>
                            <p>Get a course on how to lead remote teams effectively. Learn the strategies and techniques that have helped me lead successful remote projects.</p>
                            <img src={Img7} alt="" />
                        </DefaultItem>
                    </div> 
                    <div className="col-lg-4 col-md-6">
                        <DefaultItem>
                            <h3>Upcoming modules</h3>
                            <p>Get access to new upcoming modules for this course. Learn advanced project management techniques and more.</p>
                            <img src={Img8} alt="" />
                        </DefaultItem>
                    </div> 
                    <div className="col-lg-4">
                        <DefaultItem>
                            <h3>And much more...</h3>
                            <p>Inside this course, you will learn the entire framework that helped me build and manage remote teams capable of developing hundreds of apps.</p>
                            <p>You will gain access to knowledge that will reveal how you can effectively lead a remote team and scale your business without a technical background.</p>
                            <Btn text={"Get Instant Access"} type={'link'} href="#pricing"/>
                        </DefaultItem>
                    </div> 
                </div>
            </div>

        </div>
    )
}