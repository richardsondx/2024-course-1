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

                    <AccordionItem key={1} 
                        title="What is this course about?" 
                        ukey={1}>
                        <p>In this course, you will learn the entire process of building and managing remote development teams to create high-quality apps. Discover my framework that took me from a solo developer to leading teams to built hundreds of apps for clients and personal projects.</p>
                        <p> My goal with this course is to teach you the skills I’ve used for the past 14 years to lead remote teams  effectively, while ensuring productivity, high quality, and successful delivery.</p>
                    </AccordionItem>

                    <AccordionItem key={2} 
                        title="Who is this course for?" 
                        ukey={2}>
                        <p>This course is for anyone who want to manage remote development teams successfully. It was written so that it's accessible even for non-engineers. Whether you have no technical background, are struggling with remote team management, or are looking to scale your operations, this course provides the knowledge and tools to help you manage remote team effectively.</p>
                    </AccordionItem>

                    <AccordionItem key={3} 
                        title="This course is not for you if…" 
                        ukey={3}>
                        <p>- You are already an experienced engineer with extensive knowledge of managing development teams.</p>
                        <p>- You prefer traditional, in-office team management over remote work.</p>
                        <p>- You are looking for quick and easy hacks to manage teams with zero effort.</p>
                    </AccordionItem>

                    <AccordionItem key={4} 
                        title="Do I need any prior knowledge before taking this course?" 
                        ukey={4}>
                        <p>No prior technical knowledge is required! This course is designed for anyone, regardless of their technical expertise. I will teach you everything you need to know to build and manage a successful remote development team.</p>
                    </AccordionItem>

                    <AccordionItem key={5} 
                        title="Is this course only for building remote web development team?" 
                        ukey={5}>
                        <p>The concept in this course can be applied to all industry where remote development teams are relevant. Whether you are in tech, marketing, education, or any other industry, the principles and practices taught in this course will be beneficial.</p>
                    </AccordionItem>

                    <AccordionItem key={6} 
                        title="What if I have no team yet?" 
                        ukey={6}>
                        <p>No problem! This course is perfect for you. I will guide you through the process of hiring, onboarding, and building your first remote development team from scratch.</p>
                    </AccordionItem>

                    <AccordionItem key={7} 
                        title="What if I’m starting from scratch?" 
                        ukey={7}>
                        <p>That’s excellent! This course is designed to be comprehensive and beginner-friendly. You’ll learn everything from the basics of remote team management to advanced strategies for scaling and optimizing your operations.</p>
                    </AccordionItem>

                    <AccordionItem key={8} 
                        title="Why is this course priced at $149?" 
                        ukey={8}>
                        <p>Most courses like this are priced at $1000 or more because they are created by large teams with high production costs and heavy marketing budgets. I filmed this course independently, focusing on delivering value without the extra frills. I want to make this knowledge accessible to as many people as possible, which is why I offer it at a much lower price.</p>
                    </AccordionItem>

                    <AccordionItem key={9} 
                        title="Why should I trust you?" 
                        ukey={9}>
                        <p>I have successfully managed remote development teams have built hundreds of apps, generating substantial revenue. My real-world experience and transparent sharing of successes and failures ensure you are learning from someone who has walked the path.</p>
                    </AccordionItem>

                    <AccordionItem key={10} 
                        title="Will I be able to manage a remote team after this course?" 
                        ukey={10}>
                        <p>While I can’t guarantee immediate success, I can assure you that if you follow the framework step-by-step, put in the work, and apply the lessons learned, you will see significant improvements in how you manage remote teams.</p>
                        <p> Success depends on your commitment and effort, but this course provides all the necessary tools and strategies to help you achieve your goals.</p>
                    </AccordionItem>

                    <AccordionItem key={11} 
                        title="Is it really worth $149?" 
                        ukey={11}>
                        <p>Absolutely. The insights and frameworks provided in this course are the result of years of hands-on experience and trial and error. You can save countless hours and avoid common pitfalls by learning from my journey. It’s a comprehensive guide that you can revisit as you grow and scale your remote teams, making it an invaluable resource.</p>
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