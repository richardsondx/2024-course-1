import SectionTitle from "../sectiontitle";    

export default function TestimonailOfHome() {
    return (
        <div className="col-lg-12" id="testimonial">
            <div className="mainTestimonial testimonailOfHome">
                <SectionTitle
                    title="Community of 40,000+"
                    content="With the same single goal in mind of selling value over time."
                />
                <div className="all_testimonials">
                <iframe id="testimonialto-wall-of-love-for-testimonial-light" src="https://embed-v2.testimonial.to/w/wall-of-love-for-testimonial?theme=light&card=base" frameBorder="0" scrolling="no" width="100%" height="1200"></iframe>
                </div>
            </div>

        </div>
    )
}