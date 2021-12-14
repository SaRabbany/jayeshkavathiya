import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const GoatTeam = () => {
    return (
      <section id="goatTeam">
        <div className="section-title text-center mb-5">
          <h1 className="display-2 font-alfa-slab">The Rhino Team</h1>
        </div>
        <div className="col-md-10 col-lg-9 mx-auto" data-aos="fade-up">
          <div className="row row-col-2 row-cols-md-3 row-cols-lg-6">
            {[...new Array(6)].map((e, i) => (
              <>
                <ScrollAnimation offset={150} animateIn="animate__fadeInUp" className="team-card">
                  <div className="wrapper">
                    <div className="image">
                      <img className="img-fluid" src="https://pluspng.com/img-png/baby-rhino-png-pin-rhino-clipart-13-1000.png" alt="" />
                    </div>
                    <div className="body text-center mt-2">
                      <h6 className="font-alfa-slab">Lorem ipsum, dolor sit</h6>
                    </div>
                  </div>
                </ScrollAnimation>
              </>
            ))}
          </div>
        </div>
      </section>
    );
};

export default GoatTeam;
