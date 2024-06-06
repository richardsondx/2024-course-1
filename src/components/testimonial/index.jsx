import SectionTitle from "../sectiontitle";
import TestimonialItem from "./testimonialItem";
import  './style.css'
 
export default function Testimonial({section_title,section_content,img,name,title,content,href,...rest}) {
    return (
        <div className="col-lg-8 offset-lg-2">
            <div className="testimonial-wrap"{...rest}> 
                <SectionTitle title={section_title} content={section_content}/> 

                <TestimonialItem
                    img={img}
                    name={name}
                    title={title}
                    content={content}
                    href={"#pricing"}
                />
            </div>

        </div>
    )
}