import Btn from "../btn";
import DefaultItem from "../steps/defaultItem";
import './style.css' 

export default function InfoSteps() {
    return (
        <div className="col-lg-12">
            <div className="info-steps-wrap">  
                <div className="row"> 
                    <div className="col-md-4">
                        <DefaultItem>
                            <h3>Newsletter</h3>
                            <p>Read my previous newsletter issues on how to build digital product business.</p>       
                            <Btn text={"View Newsletter"} type={'link'} href="#pricing" classes={"grayBtn"}/>
                        </DefaultItem>
                    </div>
                    <div className="col-md-4">
                        <DefaultItem>
                            <h3>Resources</h3>
                            <p>Access free resources and discover different opportunities, ideas, and tools.</p>       
                            <Btn text={"View Resources"} type={'link'} href="#pricing" classes={"grayBtn"}/>
                        </DefaultItem>
                    </div>
                    <div className="col-md-4">
                        <DefaultItem>
                            <h3>Courses</h3>
                            <p>Access lessons and frameworks that will help you build a digital product business.</p>       
                            <Btn text={"View Courses"} type={'link'} href="#pricing" classes={"grayBtn"}/>
                        </DefaultItem>
                    </div>
                </div>
            </div>

        </div>
    )
}