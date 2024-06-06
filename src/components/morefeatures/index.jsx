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
                    content="Everyone who purchased the bundle version of this course will also get access to bonus materials listed below, which are worth over $500 in total value."
                />  
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <DefaultItem>
                            <h3>Product Visual Templates</h3>
                            <p>Make your products look high quality. Get my pre-made visual templates that you can easily edit and use.</p>
                            <img src={Img} alt="" />
                        </DefaultItem>
                    </div> 
                    <div className="col-lg-4 col-md-6">
                        <DefaultItem>
                            <h3>Digital Product Checklist</h3>
                            <p>Receive a step-by-step checklist to make sure you're not missing any steps while building your business.</p>
                            <img src={Img2} alt="" />
                        </DefaultItem>
                    </div> 
                    <div className="col-lg-4 col-md-6">
                        <DefaultItem>
                            <h3>Digital Product Ideas</h3>
                            <p>Choose which digital product businesses to create. Get 80+ digital product ideas that you can try.</p>
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
                            <h3>Notion Content System</h3>
                            <p>Create and plan quality content from one place. Get my content system for a rapid audience growth.</p>
                            <img src={Img5} alt="" />
                        </DefaultItem>
                    </div> 
                    <div className="col-lg-4 col-md-6">
                        <DefaultItem>
                            <h3>Notion Second Brain</h3>
                            <p>From tasks to goals, have a system for your life. Get my second brain system and organize your entire life.</p>
                            <img src={Img6} alt="" />
                        </DefaultItem>
                    </div> 
                    <div className="col-lg-4 col-md-6">
                        <DefaultItem>
                            <h3>Notion Creator Course</h3>
                            <p>Get a course on how to create and sell Notion templates. See behind the scenes of my current business.</p>
                            <img src={Img7} alt="" />
                        </DefaultItem>
                    </div> 
                    <div className="col-lg-4 col-md-6">
                        <DefaultItem>
                            <h3>Upcoming modules</h3>
                            <p>Get access to the new upcoming modules for this course. Learn the secrets of automation and more.</p>
                            <img src={Img8} alt="" />
                        </DefaultItem>
                    </div> 
                    <div className="col-lg-4">
                        <DefaultItem>
                            <h3>And much more...</h3>
                            <p>Inside this course, you will learn the entire process that helped me make $35k/month and generate over $300k in total sales starting from absolute 0.</p>
                            <p>You will gain access to knowledge that will reveal how you can stop selling your time and start selling digital products instead.</p>
                            <Btn text={"Get Instant Access"} type={'link'} href="#pricing"/>
                        </DefaultItem>
                    </div> 
                </div>
            </div>

        </div>
    )
}