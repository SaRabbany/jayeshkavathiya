import React from 'react';
import '../Allcss/WaveThree.css';
import wave3 from "../../../Images/wave3.png";

const waveContents3 = [
  {
    description: (
      <>
        <ul>
          <li>Special attributes/skillsets for the boxing game will be distributed/airdropped for each Rhino NFT</li>
          <li>Development of play to earn boxing game in metaverse will begin </li>
          <li> Create a custom token and DAO PHASE 4</li>
        </ul>
      </>
    ),
  },
];

const WaveThree = () => {
    return (
        <div className='roadmap_wave3'>
            <div className="roadmapWave3_imgWrapper">
                <img src={wave3} alt="" className="roadmapWave3_img" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-offset="-400" />
            </div>

            <div className="container">
                <h2 className="roadmapWave3_title" data-aos="fade-right">PHASE 3</h2>
            
                {
                    waveContents3.map(content => 
                        <div className="roadmapWave3_contentBlock" data-aos="fade-up">
                            <h3 className="roadmapWave3_subTitle">{content.subTitle}</h3>
                            <p className="roadmapWave3_text">{content.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default WaveThree;