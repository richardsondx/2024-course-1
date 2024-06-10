import DefaultItem from "./defaultItem";
import './style.css'
import Img from "/img5.webp";
import Img2 from "/img6.webp";
import Img3 from "/img7.webp";
import Img4 from "/img8.webp";

export default function Steps() {
    return (
        <div className="col-lg-12">
            <div className="steps-wrap">  
                <div className="row">
                    <div className="col-md-6">
                        <DefaultItem>
                            <h3>Build Your Remote Team</h3>
                            <p>Learn how to assemble and manage a high-performing remote development team. Understand how to select the right talent, foster collaboration, and build a cohesive team that delivers quality apps efficiently.</p>
                            <img src={Img} alt="" />
                        </DefaultItem>
                    </div>
                    <div className="col-md-6">
                        <DefaultItem>
                            <h3>Manage Projects Effectively</h3>
                            <p>Learn how to manage development projects from start to finish without a technical background. Understand the methodologies and tools that will help you keep your projects on track and ensure timely delivery.</p>
                            <img src={Img2} alt="" />
                        </DefaultItem>
                    </div>
                    <div className="col-md-6">
                        <DefaultItem>
                            <h3>Ensure Quality and Productivity</h3>
                            <p>Learn how to maintain high standards of quality and productivity within your remote team. Understand the practices and tools that will help you track performance, ensure accountability, and deliver top-notch apps.</p>
                            <img src={Img3} alt="" />
                        </DefaultItem>
                    </div>
                    <div className="col-md-6">
                        <DefaultItem>
                            <h3>Scale Your Operations</h3>
                            <p>Learn how to scale your remote team and manage larger, more complex projects. Understand the strategies and processes that will allow you to grow your team and handle increasing workloads without sacrificing quality.</p>
                            <img src={Img4} alt="" />
                        </DefaultItem>
                    </div>
                </div>
            </div>

        </div>
    )
}