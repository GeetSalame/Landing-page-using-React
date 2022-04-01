import React from 'react'
import FeatureBox from './FeatureBox';
import image1 from "../images/feature_1.png";
import image2 from "../images/feature_2.png";
import image3 from "../images/feature_3.png";

function Feature() {
  return (
    <div id="features">
        <div className="a-container">
            <FeatureBox image={image1} title="Development Course"/>
            <FeatureBox image={image2} title="Finance Services"/>
            <FeatureBox image={image3} title="UI/UX Course"/>
        </div>
    </div>
  )
}

export default Feature;