import React from 'react';
import GoatBarnImg from "../../Images/bar-img.png"
import DoorClosedImage from "../../Images/doors-closed.png"
import DoorOpenedImage from "../../Images/doors-opened.png"

const GoatBarn = () => {
    return (
      <section id="GoatBarn">
        <div className="goat-barn-image">
          <img className="img-fluid" src={GoatBarnImg} alt="" />
        </div>
        <div className="door-image">
          <img src={DoorClosedImage} alt="" className="closed_img" />
          <img src={DoorOpenedImage} alt="" className="opened_img" />
        </div>

        <div className="container">
          <div className="description">
            <h3>ARTWORK</h3>
            <p>
              Our artwork showcases our inspiration  by blending together traditional attires from all around the world along with custom crafted skins inspired from beautiful crystals, rocks and
              minerals from our beautiful planet Earth, and we even have some galaxy inspired skins!  Aside from this we have included custom Rhino horns incorporating flags from countries worldwide.
            </p>
          
            <p>Website design ideas- pictures of all species of Rhino together with info summary on history of Rhino’s and population </p>
          </div>
        </div>
      </section>
    );
};

export default GoatBarn;