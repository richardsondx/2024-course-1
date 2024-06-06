import SectionTitle from "../sectiontitle";
import AccordionItem from "../accordionItem"; 
import ShortCta from "../shortcta";

export default function Faq() {
    return (
        <div className="col-lg-8 offset-lg-2 pb-5" id="faq">
            <div className="course-details-wrap">
                <SectionTitle
                    title="Frequently Asked Questions"
                    content="Below you will find some of the most frequently asked questions."
                />  
                <div className="accordion" id="accordionPanelsStayOpenExample">

                {[10,11,12,13,14,15,16,17,18,19].map(item => ( 
                        <AccordionItem key={item} 
                            title="What is this course about?" 
                            ukey={item}>
                            <p>In this course, you will learn the entire process of building a digital products business. You will learn how to build your brand, audience, offer and drive traffic and sales on autopilot.</p>
                            <p>This course aims to provide you with all the secrets and fundamentals of what it truly takes to build a successful 6-figure digital product business from scratch.</p>
                        </AccordionItem> 
                    ))}  
                </div>
                <ShortCta
                    title={"Stop Selling Your Time, Sell Digital Products"}
                    content={"After watching this video course, you will learn my framework on how to build a $35k/month digital product business from scratch."}
                />
            </div>

        </div>
    )
}