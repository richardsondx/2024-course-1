import FeatureItem from "./featureItem"; 
import './style.css'
 
export default function Features() {
    return (
        <div className="col-lg-12">
            <div className="features-wrap">  
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <FeatureItem 
                            title="Niche" 
                            content="How to find and choose a profitable niche." 
                        />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <FeatureItem 
                            title="Brand" 
                            content="How to build a strong and memorable brand." 
                        />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <FeatureItem 
                            title="Audience" 
                            content="How and where to build your audience online." 
                        />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <FeatureItem 
                            title="Newsletter " 
                            content="How to start your newsletter and gain your audience's trust." 
                        />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <FeatureItem 
                            title="Free Product" 
                            content="How and why to create your free product before a paid one." 
                        />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <FeatureItem 
                            title="Paid Product" 
                            content="How to create a product that people actually want to buy." 
                        />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <FeatureItem 
                            title="Landing Page" 
                            content="How to create a converting landing page with no-code." 
                        />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <FeatureItem 
                            title="Traffic and Sales" 
                            content="How to get traffic to your product page and make sales." 
                        />
                    </div> 
                </div>
            </div>

        </div>
    )
}