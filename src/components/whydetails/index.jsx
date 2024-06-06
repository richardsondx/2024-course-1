import SectionTitle from "../sectiontitle"; 
import DefaultItem from "../steps/defaultItem";
import './style.css'

export default function WhyDetails() {
    return (
        <div className="col-lg-10 offset-lg-1">
            <div className="why-details-wrap">
                <SectionTitle
                    title="Why I Created This"
                    content="Most of us already have what it takes. We only don't know how, so we choose the easier way - working for others. The problem is, in the long run, it's not easy at all."
                />
                <DefaultItem classes={"only_for_content mt-5"}>
                    <h4>My story</h4>
                    <p>A few years ago, I was running my own UI/UX studio. I won one of the biggest clients in my country, received awards, earned 6 figures, and was my own boss.</p> 
                    <p>Living the dream, some would say. <br /> Except, I wasn't.</p>
                    <p>Every day, I had to perform to please people I didn't know or even like:</p>
                    <ul className="withBulletList">
                        <li>2-4 daily calls that I hated (sorry ex-clients)</li>
                        <li>No work freedom, always following others' direction</li>
                        <li>Knowledge used for others' profit, with little pay or recognition</li>
                    </ul>
                    <p>I was just a person hired to perform to THEM in the way THEY wanted. <br /> Let me tell you.</p>
                    <p>"Do your job and shut up" doesn't feel like a dream at all, even when you're making 6 figures from it.</p>
                    <p>And that wasn't even the worst part.</p>
                    <p>When I reached my all-time high income, I realized there were limits. If I wanted to make more money, I couldn't do it on my own. And I had already been feeling burnout for a few months then. Great, huh?</p>
                    <p>There were 2 options:</p>
                    <ul className="withNumberLists">
                        <li>I could suck it up and continue working for others, as everyone does.</li>
                        <li>I could use my savings and f**k everything and try for the following year.</li>
                    </ul>
                    <p>I felt desperate realizing that even though I had money and a future, there was no happiness in that. So at the top of my career, I dropped everything and dedicated myself fully to creating and selling digital products.</p>
                    <p>At the time, I had 0 followers and 0 traffic.</p>
                    <p>To this day, I can clearly remember that moment. It was a beautiful spring day; I was spending time walking my dog with my girlfriend.</p>
                    <p>My phone buzzed as I received a notification. <br /> "You made a sale!"</p>
                    <p>Only a day or two had passed since I listed a Notion template for sale, and they weren't as popular back then as they are now. This was it. I realized that I would never go back to selling my time to anyone again. It only took me a few seconds to realize that if I could sell it once, there was no reason why I couldn't sell it again and again.</p>
                    <p>So when I went back home, I doubled down.</p>
                    <p>Now hear me out,</p>
                    <p>I would be lying if I said that there weren't days or even weeks when I thought, "What the f*ck am I doing?" My journey was a constant rollercoaster of ups and downs. There were months where I earned less than I spent.</p>
                    <p>BUT there was never a day when I wanted to go back to working for someone else.</p>
                    <p>In June 2023, I achieved my first $35k/month from 2 income streams spread across multiple platforms. No calls, meetings, or other duties for others. It felt so strange to realize that my life had actually shifted 360 degrees.</p>
                    <p>Why am I telling you this?</p>
                    <p>What I did in the past 2 years is possible for everyone. There is a chance that you could achieve the same, even faster. And if you feel the same way I did - stuck in selling your time and soul for others - take this as a sign.</p>
                    <p>You see, most of us already have what it takes.</p>
                    <p>We only don't know how, so we choose the easier way - working for others. The problem is that in the long run, it is not easy at all.</p>
                    <p>If you've been following me, I've been sharing my journey going from $500/month to $7000/month and finally $35,000/month on my social media accounts. The journey wasn't easy. There were many trials and errors. But I stuck with it.</p>
                    <p>It took me more than 10,000 hours to acquire the knowledge I have today.</p>
                    <p>Now I'm sharing it ALL in my 5-hour video course.</p>
                    <p>This is not the kind of course where you watch and forget. This is the kind of course that you revisit from time to time as you follow the framework. It's a complete map to change lives and show a different way of how selling value works.</p>
                    <p>And you can access that map today.</p>
                </DefaultItem>
            </div>

        </div>
    )
}