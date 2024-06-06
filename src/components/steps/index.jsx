import DefaultItem from "./defaultItem";
import './style.css'
import Img from "/img5.webp";
import Img2 from "/img6.webp";
import Img3 from "/img7.webp";
import Img4 from "/img8.webp";

export default function Steps() {
    return (
        <div className="col-lg-12">
            <div className="steps-wrap">  
                <div className="row">
                    <div className="col-lg-6">
                        <DefaultItem>
                            <h3>Build your brand</h3>
                            <p>Learn how to pick a profitable niche. Understand how to separate yourself from others and build a strong and memorable brand that people trust and purchase from.</p>
                            <img src={Img} alt="" />
                        </DefaultItem>
                    </div>
                    <div className="col-lg-6">
                        <DefaultItem>
                            <h3>Build your audience</h3>
                            <p>Learn how to build your audience without relying on luck. Understand the entire process that helped me build 290k+ followers organically across different social media channels.</p>
                            <img src={Img2} alt="" />
                        </DefaultItem>
                    </div>
                    <div className="col-lg-6">
                        <DefaultItem>
                            <h3>Create your product</h3>
                            <p>Learn how to create products that sell themselves. Understand how to translate your knowledge into products and how to validate them before even creating.</p>
                            <img src={Img3} alt="" />
                        </DefaultItem>
                    </div>
                    <div className="col-lg-6">
                        <DefaultItem>
                            <h3>Stop selling your time</h3>
                            <p>Learn how to sell products instead of selling your time. Understand how to leverage your multiple pre-built digital assets so you can make money even while you sleep.</p>
                            <img src={Img4} alt="" />
                        </DefaultItem>
                    </div>
                </div>
            </div>

        </div>
    )
}