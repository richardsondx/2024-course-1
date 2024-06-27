import SectionTitle from "../sectiontitle"; 
import DefaultItem from "../steps/defaultItem";
import './style.css'

export default function About() {
    return (
        <div className="col-lg-8 offset-lg-2">
            <div className="why-details-wrap about" id="about">
                <SectionTitle
                    title="About"
                    content="From selling physical products to digital products. From selling time to providing value. The path that led me here due to my constant need for improvement."
                />
                <DefaultItem classes={"only_for_content mt-5"}>
                    <h4>Hi, I’m Richardson Dackam</h4>
                    <p>For over a decade, I've navigated the dynamic world of web development. My journey began when I decided to learn how to code and build apps. I dedicated myself to mastering Ruby on Rails in just two months, and I shared my story in a blog post titled "How I Trained to Learn Rails," which went viral. Some of you might know me from that article.</p>
                    <p>Starting from those humble beginnings, I joined a startup incubator, where I helped build a startup from the ground up. I then went on to take a few contract. My drive and dedication paid off quickly, and I went from a junior developer to a senior developer in less than a year. This rapid rise wasn't just about climbing the career ladder—it was about gaining the skills and confidence to take control of my career.</p>
                    <p>With my newfound expertise, I started my own agency, Rich DX Studio. I began building apps for some of the top tech companies in the world, including Ticketmaster, Live Nation, FreshBooks, CoreLogic, Rogers, Grey Global Group. My journey took me through design, front-end, and back-end development at the senior level. Along the way, I also worked on projects for renowned brands such as Cadillac Fairview, Soho House Group, Aldo, Mongrel Media, Universe, CityTV, Walmart Canada, and The Shopping Channe, Aurora Solar, NoFraud. I’ve led teams, met tight deadlines, and created apps used by millions. I even built apps for startups that later got acquired.</p>
                    <p>Living the dream, right? Not quite.</p>
                    <p>Despite the financial success, I realized that my true passion was creating something of my own, not just doing service work for others. Every day, I worked on projects I wasn't passionate about, followed directions I didn't believe in, and my knowledge and efforts profited others more than me. I was good at what I did, but there was no joy in it.</p>
                    <p>Then, I started building my own apps on the side. I remember the thrill of receiving my first $1,000 check from Amazon for a book recommendation app I built. That was the spark I needed. I went on to build more apps, some of which even received acquisition offers. That made me realize that my true passion was creating something of my own, not just doing service work for others.</p>
                    <p>Since then, I’ve read hundreds of books and taken countless courses, not just to master app development, but to understand how to build products that customers love, rave about, and pay for. I became obsessed with creating products that offer great user experiences and are built to scale easily. Through various experiments, relentless learning, and the trial and error I've witnessed and experienced during my career, I’ve developed a repeatable framework to achieve this successfully every time.</p>
                    <p>Now, after working as a successful freelancer and senior software developer for over a decade, I'm here to share everything I’ve learned.</p>
                    <p>I’ve packaged my knowledge into self-paced courses and resources designed to help you replicate my success. I know how to take an idea and turn it into a product that scale. There are plenty of people who can teach you how to market and grow your app revenue, but the hard part is building it—and that’s what I excel at.</p>
                    <p>Why am I telling you this? Because if you're a solopreneur or someone looking to build an app, I want to show you how to do it. Even if you're not a technical person, my courses are crafted with you in mind. I've spent over 10,000 hours honing my skills, working on projects that most people never get access to (like when I worked with airlines).</p>
                    <p>Now, I’m sharing everything I know in my comprehensive video course. This isn’t just a course you watch and forget. It’s a complete roadmap that you can revisit time and again, guiding you through building apps efficiently and meeting all your expectations.</p>
                    <p>And you can start accessing that roadmap today.</p>
                    {/* <ul className="withBulletList">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul> */}
                    {/* <ul className="withNumberLists">
                        <li>1</li>
                        <li>2</li>
                    </ul> */}
                </DefaultItem>
            </div>

        </div>
    )
}