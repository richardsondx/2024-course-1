import Btn from "../btn";
import SectionTitle from "../sectiontitle"; 
import DefaultItem from "../steps/defaultItem"; 
import Avatar from "/avatar3.svg";
import tickIcon from "/tick.svg";
import closeIcon from "/close.svg";
import PricingBlk from "./pricingBlk";
import './style.css'
export default function Pricing() {
    return (
        <div className="col-lg-8 offset-lg-2">
            <div className="why-details-wrap" id="pricing">
                <SectionTitle
                    title="Investment In Yourself"
                    content="There is not better investment than invest in yourself and your better life. Specialy when it's a course showing you entire framework how to get your investment back in no time."
                />
                <div className="row mt-5">
                    <div className="col-md-6">
                        <PricingBlk
                            packageName="Bundle"
                            packageInfo="Get the course plus bonuses"
                            price="299"
                            disc_price="799"
                            promo_code='$500 OFF! Use code "BUNDLE2024"'
                        >
                            <ul>
                                <li><img src={tickIcon} alt="" /> Create Once, Sell Forever</li>
                                <li><img src={tickIcon} alt="" /> Access to all lessons (73+)</li>
                                <li><img src={tickIcon} alt="" /> Secret community access</li>
                            </ul>
                            <p>Bonus materials:</p>
                            <ul>
                                <li><img src={tickIcon} alt="" /> Upcoming modules & lessons</li>
                                <li><img src={tickIcon} alt="" /> Product Visual Templates</li>
                                <li><img src={tickIcon} alt="" /> Digital Product Checklist</li>
                                <li><img src={tickIcon} alt="" /> Digital Product Ideas</li>
                                <li><img src={tickIcon} alt="" /> Product Creator Toolbox</li>
                                <li><img src={tickIcon} alt="" /> Notion Content System</li>
                                <li><img src={tickIcon} alt="" /> Notion Second Brain</li>
                                <li><img src={tickIcon} alt="" /> Notion Creator Course</li>
                            </ul> 
                        </PricingBlk>
                    </div>
                    <div className="col-md-6">
                        <PricingBlk
                            packageName="Course"
                            packageInfo="Get the course"
                            price="149"
                            disc_price="399"
                            promo_code='$250 OFF! Use code "COURSE2024"'
                        >
                            <ul>
                                <li><img src={tickIcon} alt="" /> Create Once, Sell Forever</li>
                                <li><img src={tickIcon} alt="" /> Access to all lessons (73+)</li>
                                <li><img src={tickIcon} alt="" /> Secret community access</li>
                            </ul>
                            <p>Bonus materials:</p>
                            <ul>
                                <li><img src={closeIcon} alt="" /> Upcoming modules & lessons</li>
                                <li><img src={closeIcon} alt="" /> Product Visual Templates</li>
                                <li><img src={closeIcon} alt="" /> Digital Product Checklist</li>
                                <li><img src={closeIcon} alt="" /> Digital Product Ideas</li>
                                <li><img src={closeIcon} alt="" /> Product Creator Toolbox</li>
                                <li><img src={closeIcon} alt="" /> Notion Content System</li>
                                <li><img src={closeIcon} alt="" /> Notion Second Brain</li>
                                <li><img src={closeIcon} alt="" /> Notion Creator Course</li>
                            </ul> 
                        </PricingBlk> 
                    </div>
                </div>
                <div className="pricing-intros">
                    <img src={Avatar} alt="" />
                    <div>
                        <h4>Created by Richardson Dackam</h4>
                        <p>I'm a senior software developer and team lead that has generated over $300,000+ in revenue leading remote development team for web development projects through my web development agency. I have also worked for some of the top companies in tech and across various timezones and now, I'm willing to share everything I've learned with you.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}