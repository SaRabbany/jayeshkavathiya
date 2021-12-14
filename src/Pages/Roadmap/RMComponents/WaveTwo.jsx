import React from 'react';
import '../Allcss/WaveTwo.css';
import wave2 from "../../../Images/wave2.png";

const waveContents2 = [
  {
    description: (
      <>
        <ul>
          <li>Safari Raffle every month for the first year based on the highest number of Rhino's held per vallet or time held</li>
          <li>25% of resales given back to Earth-related charity selected by majority vote </li>
          <li>vote Every holder will receive a certificate and picture of the Rhino which they have adopted</li>
        </ul>
      </>
    ),
  },
  
];

const WaveTwo = () => {
    return (
      <div className="roadmap_wave2">
        <div className="container">
          <div className="roadmapWave2_imgWrapper">
            <img src={wave2} alt="" className="roadmapWave2_img" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-offset="-400" />
          </div>

          <h2 className="roadmapWave2_title" data-aos="fade-left">
            PHASE 2
          </h2>

          {waveContents2.map((content) => (
            <div className="roadmapWave2_contentBlock" data-aos="fade-up">
              <h3 className="roadmapWave2_subTitle">{content.subTitle}</h3>
              <p className="roadmapWave2_text">{content.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default WaveTwo;