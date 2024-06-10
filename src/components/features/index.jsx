import FeatureItem from "./featureItem"; 
import './style.css'
 
export default function Features() {
    return (
        <div className="col-lg-12">
            <div className="features-wrap">  
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <FeatureItem 
                            title="Foundation" 
                            content="How to establish core principles." 
                        />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <FeatureItem 
                            title="Communication" 
                            content="How to implement effective communication tools." 
                        />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <FeatureItem 
                            title="Management" 
                            content="How to outline a plan with clear criteria." 
                        />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <FeatureItem 
                            title="Collaboration " 
                            content="How to build trust and teamwork." 
                        />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <FeatureItem 
                            title="Productivity" 
                            content="How to set realistic workload expectations." 
                        />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <FeatureItem 
                            title="Quality" 
                            content="How to automate quality expectation processes." 
                        />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <FeatureItem 
                            title="Scaling" 
                            content="	How to develop scaling strategies." 
                        />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <FeatureItem 
                            title="Leadership" 
                            content="How to delegate decisions effectively." 
                        />
                    </div> 
                </div>
            </div>

        </div>
    )
}