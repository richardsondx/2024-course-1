import SectionTitle from "../sectiontitle";    

export default function Testimonials() {
    return (
        <div className="col-lg-12" id="testimonial">
            <div className="mainTestimonial">
                <SectionTitle
                    title="What Others Have to Say"
                    content="Don't just take my word for it, listen to thousands of others."
                />
                <div className="all_testimonials">
                <iframe id="testimonialto-wall-of-love-for-testimonial-light" src="https://embed-v2.testimonial.to/w/wall-of-love-for-testimonial?theme=light&card=base" frameBorder="0" scrolling="no" width="100%" height="1200"></iframe>
                </div>
            </div>

        </div>
    )
}