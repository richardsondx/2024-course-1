import Btn from "../btn";
import DefaultItem from "../steps/defaultItem";
import './style.css' 
import Img from '/resources3.jpeg'
import Img2 from '/resources2.jpeg'
import Img3 from '/resources.jpeg'
import SectionTitle from "../sectiontitle";

export default function Resources() {
    return (
        <div className="col-lg-12">
            <div className="info-steps-wrap resources" id="resources">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <SectionTitle
                            title="Start Your Digital Product Business With Resources"
                            content="Learn the basics and start your journey as a digital product creator. Gain access to free resources and discover different opportunities, ideas, and tools."
                        />  
                    </div>
                </div>
                <div className="row">  
                    <div className="col-md-4">
                        <DefaultItem>
                            <img src={Img} alt="" />
                            <h3>Digital Product Ideas</h3>
                            <p>A list of 80 digital product ideas that you can easily create and sell.</p>       
                            <Btn text={"Get It for FREE"} type={'link'} href="#" classes={"grayBtn"}/>
                        </DefaultItem>
                    </div>
                    <div className="col-md-4">
                        <DefaultItem>
                            <img src={Img2} alt="" />
                            <h3>Digital Products Guide</h3>
                            <p>Guide to help you make money online selling digital products.</p>           
                            <Btn text={"Get It for FREE"} type={'link'} href="#" classes={"grayBtn"}/>
                        </DefaultItem>
                    </div>
                    <div className="col-md-4">
                        <DefaultItem>
                            <img src={Img3} alt="" />
                            <h3>Digital Product Checklist</h3>
                            <p>Checklist to help you go from idea to launch in 35 simple steps.</p>           
                            <Btn text={"Get It for FREE"} type={'link'} href="#" classes={"grayBtn"}/>
                        </DefaultItem>
                    </div>
                </div>
            </div>

        </div>
    )
}