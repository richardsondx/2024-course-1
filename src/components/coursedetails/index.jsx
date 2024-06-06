import SectionTitle from "../sectiontitle";
import AccordionItem from "../accordionItem"; 
import ShortCta from "../shortcta";
import './style.css'

export default function CourseDetails() {
    return (
        <div className="col-lg-8 offset-lg-2">
            <div className="course-details-wrap">
                <SectionTitle
                    title="Inside the Course"
                    content="Here's what you will learn inside this course."
                />  
                <div className="accordion" id="accordionPanelsStayOpenExample">

                    {[1,2,3,4,5,6,7,8,9].map(item => ( 
                        <AccordionItem key={item} 
                            title="Module 1 - Introduction"
                            lessons="4 lessons"
                            ukey={item} icon>
                            <p>Inside this module, you will be introduced to the course. I will share what you can expect from it, reveal my framework, tell my story, and show you some personal statistics.</p>
                            <ul> 
                                <li>1. Intro to the module.</li>
                                <li>2. Course.</li>
                                <li>3. Framework.</li>
                                <li>4. My story.</li>
                            </ul>
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