import SectionTitle from "../sectiontitle";
import DefaultItem from "../steps/defaultItem"; 
import Img from "/img13.webp";
import Img2 from "/img14.webp";
import Img3 from "/img15.webp";
import Img4 from "/img16.webp";
import Img5 from "/img17.webp";
import Img6 from "/img18.webp";   
import ShortCta from "../shortcta";
import './style.css'

export default function Stories() {
    return (
        <div className="col-lg-12">
            <div className="stores-wrap">
                <SectionTitle
                    title="Success stories"
                    content="Here are a few life-changing results from my students."
                />
                <div className="row">
                    <div className="col-lg-4">
                        <DefaultItem>
                            <img src={Img} alt="" />
                        </DefaultItem>
                    </div>  
                    <div className="col-lg-4">
                        <DefaultItem>
                            <img src={Img2} alt="" />
                        </DefaultItem>
                    </div>  
                    <div className="col-lg-4">
                        <DefaultItem>
                            <img src={Img3} alt="" />
                        </DefaultItem>
                    </div>  
                    <div className="col-lg-4">
                        <DefaultItem>
                            <img src={Img4} alt="" />
                        </DefaultItem>
                    </div>  
                    <div className="col-lg-4">
                        <DefaultItem>
                            <img src={Img5} alt="" />
                        </DefaultItem>
                    </div>  
                    <div className="col-lg-4">
                        <DefaultItem>
                            <img src={Img6} alt="" />
                        </DefaultItem>
                    </div>  
                </div> 
                <ShortCta
                    title={"Become My Next Success Story"}
                    content={"Turn your knowledge into products that sell themselves."}
                />
            </div>

        </div>
    )
}