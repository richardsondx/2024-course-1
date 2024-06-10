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

                    <AccordionItem key={1} 
                        title="Introduction"
                        lessons="4 lessons"
                        ukey={item} icon>
                        <p>Inside this module, you will be introduced to the course. I will share what you can expect from it, reveal my framework, tell my story, and show you some personal statistics.</p>
                        <ul> 
                            <li>1. Welcome to the course.</li>
                            <li>2. What to Expect from the Course.</li>
                            <li>3. The Remote Team Success Framework.</li>
                            <li>4. My Story and Journey.</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem key={2} 
                        title="Module 1 - Building and Managing Remote Teams"
                        lessons="7 lessons"
                        ukey={item} icon>
                        <p>Inside this module, you will be introduced to the course. I will share what you can expect from it, reveal my framework, tell my story, and show you some personal statistics.</p>
                        <ul> 
                            <li>1. Intro to the module.</li>
                            <li>2. Remote Done Right</li>
                            <li>3. Labor Arbitrage.</li>
                            <li>4. Start with a goal..</li>
                            <li>5. Clarity is Key.</li>
                            <li>6. Creating a Remote-First Culture.</li>
                            <li>7. Benefits and Challenges of Remote Teams.</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem key={3} 
                        title="Module 2 - Hiring and Onboarding Remote Developers"
                        lessons="7 lessons"
                        ukey={item} icon>
                        <p>Inside this module, you will be introduced to the course. I will share what you can expect from it, reveal my framework, tell my story, and show you some personal statistics.</p>
                        <ul> 
                            <li>1. Intro to the module.</li>
                            <li>2. Remote Done Right</li>
                            <li>3. Labor Arbitrage.</li>
                            <li>4. Start with a goal..</li>
                            <li>5. Clarity is Key.</li>
                            <li>6. Creating a Remote-First Culture.</li>
                            <li>7. Benefits and Challenges of Remote Teams.</li>
                        </ul>
                    </AccordionItem> 
                    
                </div>
                <ShortCta
                    title={"Stop Selling Your Time, Sell Digital Products"}
                    content={"After watching this video course, you will learn my framework on how to build a $35k/month digital product business from scratch."}
                />
            </div>

        </div>
    )
}