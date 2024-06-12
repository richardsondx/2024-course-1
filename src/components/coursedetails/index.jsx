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
                        ukey={1} icon>
                        <p>Inside this module, you will get an overview of what the course entails, learn about my unique approach, and hear my personal journey.</p>
                        <ul> 
                            <li>1. Welcome to the course.</li>
                            <li>2. What to Expect from the Course.</li>
                            <li>3. The Remote Team Success Framework.</li>
                            <li>4. My Story and Journey.</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem key={2} 
                        title="Module 1 - Building Remote Teams"
                        lessons="7 lessons"
                        ukey={2} icon>
                        <p>This module introduces key strategies and principles for effectively building and managing remote teams.</p>
                        <ul> 
                            <li>1. Introduction to the module.</li>
                            <li>2. Remote Done Right.</li>
                            <li>3. Labor Arbitrage.</li>
                            <li>4. Start with a goal..</li>
                            <li>5. Clarity is Key.</li>
                            <li>6. Creating a Remote-First Culture.</li>
                            <li>7. Benefits and Challenges of Remote Teams.</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem key={3} 
                        title="Module 2 - Hiring Remote Developers"
                        lessons="6 lessons"
                        ukey={3} icon>
                        <p>Discover the essential steps for hiring and onboarding top remote developers in this module.</p>
                        <ul> 
                            <li>1. Introduction to the module.</li>
                            <li>2. Defining Job Roles and Requirements.</li>
                            <li>3. Attracting and Sourcing Top Talent.</li>
                            <li>4. Hiring Offshore talent.</li>
                            <li>5. Conducting Effective Remote Interviews.</li>
                            <li>6. Successful Onboarding Processes.</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem key={4} 
                        title="Module 3 - Effective Communication"
                        lessons="6 lessons"
                        ukey={4} icon>
                        <p>Learn how to communicate effectively and achieve quality outcomes with your remote team in this module.</p>
                        <ul> 
                            <li>1. Introduction to the module.</li>
                            <li>2. Communication Tools and Platforms.</li>
                            <li>3. Best Practices for Remote Communication.</li>
                            <li>4. How to write productive documentations.</li>
                            <li>5. How Transparency Build Predictability.</li>
                            <li>6. How to Communicate Consistency.</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem key={5} 
                        title="Module 4 - Project Management"
                        lessons="4 lessons"
                        ukey={5} icon>
                        <p>Explore project management techniques tailored for app development in a remote setting.</p>
                        <ul> 
                            <li>1. Introduction to the module.</li>
                            <li>2. Project Management Methodologies.</li>
                            <li>3. Choosing the Right Project Management Tool.</li>
                            <li>4. Creating Project Plans and Timelines.</li>
                            <li>5. Task Prioritization Workflow.</li>
                            <li>6. My Project Management Operating System.</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem key={6} 
                        title="Module 5 - Trust and Collaboration"
                        lessons="8 lessons"
                        ukey={6} icon>
                        <p>This module delves into fostering trust and collaboration within remote teams.</p>
                        <ul> 
                            <li>1. Introduction to the module.</li>
                            <li>2. Building Personal Connection.</li>
                            <li>3. Flexibility and Understanding.</li>
                            <li>4. Empowerment and Autonomy.</li>
                            <li>5. Things that kills a collaborative environmen.</li>
                            <li>6. How to aligns and achieve team goals.</li>
                            <li>7. Encouraging Team Collaboration.</li>
                            <li>8. Recognizing and Celebrating Achievements.</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem key={7} 
                        title="Module 6 - Productivity and Accountability"
                        lessons="4 lessons"
                        ukey={7} icon>
                        <p>Gain insights on maintaining productivity and accountability in remote work environments in this module.</p>
                        <ul> 
                            <li>1. Introduction to the module.</li>
                            <li>2. Project Management Methodologies.</li>
                            <li>3. Choosing the Right Project Management Tool.</li>
                            <li>4. Creating Project Plans and Timelines.</li>
                            <li>5. Task Prioritization Workflow.</li>
                            <li>6. My Project Management Operating System.</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem key={8} 
                        title="Module 7 - Development Cycles"
                        lessons="4 lessons"
                        ukey={8} icon>
                        <p>Understand the intricacies of managing development cycles to ensure high-quality results.</p>
                        <ul> 
                            <li>1. Introduction to the module.</li>
                            <li>2. Crafting Clear Success Metrics.</li>
                            <li>3. Ensuring Excellence in Deliverables.</li>
                            <li>4. Navigating Challenges and Unexpected Outcomes.</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem key={8} 
                        title="Module 8 - Scaling Remote Teams"
                        lessons="3 lessons"
                        ukey={8} icon>
                        <p>Learn strategies for effectively scaling your remote team in this module.</p>
                        <ul> 
                            <li>1. Introduction to the module.</li>
                            <li>2. Assessing When to Scale Your Team.</li>
                            <li>3. Strategies for Effective Scaling.</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem key={9} 
                        title="Module 9 - Leadership Skills"
                        lessons="6 lessons"
                        ukey={9} icon>
                        <p>Develop essential leadership skills for managing remote teams in this comprehensive module.</p>
                        <ul> 
                            <li>1. Introduction to the module.</li>
                            <li>2. Developing Leadership Qualities.</li>
                            <li>3. Decision-Making in Remote Teams.</li>
                            <li>5. Delegating Decision Making.</li>
                            <li>4. Resources Access.</li>
                            <li>6. Leading by Example in a Virtual Environment</li>
                        </ul>
                    </AccordionItem>
                    
                </div>
                <ShortCta
                    title={"Stop Micromanaging, Start Leading Remote Teams"}
                    content={"After watching this video course, you will learn my framework on how to build and manage remote development teams that can work on high quality web development projects, on time and on budget."}
                />
            </div>

        </div>
    )
}