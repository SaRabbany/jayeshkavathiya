import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import HEADER_BIG_IMG from "../../Images/hero-img.png";

const Header = () => {
    // useEffect(()=> {
    //     window.addEventListener("scroll",function(e){
    //         console.log(this.window.scrollY);
    //     })

    // },[])
    return (
      <>
        <header id="header">
          <Navbar />
          <div className="navbar-below">
            <div className="image-and-text-wrapper">
              <div className="container">
                <div className="image-and-text">
                  <img src={HEADER_BIG_IMG} alt="" />
                  <div className="text text-center text-md-start col-10 col-md-8 col-lg-5 ms-lg-auto">
                    <h2>The goat's business is none of the sheep's concern</h2>
                    <h2 className="text-center text-md-end"> -Edna ferber</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="welcome">
          <div className="welcome-text-and-image">
            <div className="wrapper">
              <div className="container">
                <div className="image">
                  <img src={HEADER_BIG_IMG} alt="" />
                </div>
                <div className="col-12 col-md-10 col-lg-8   ms-lg-auto">
                  <div className="welcome-text-and-desc">
                    <h1 className="font-alfa-slab mb-4 display-2">INSPIRATION</h1>
                    <p>
                      This project also aims at promoting awareness of endangered species and climate change in an effort to help preserve our beautiful planet and the life that resides on it while
                      inspiring global unity and incorporating cultures and countries from all over the world.
                    </p>
                    <p>
                      We are a 3D high-quality collection that is inspired by the crypto leaders of the New World. Our collection consists of 5055 unique GOATs ready to dominate the Solana blockchain
                      world. Just as the crypto leaders have done.
                    </p>
                    <p>
                      We are a 3D high-quality collection that is inspired by the crypto leaders of the New World. Our collection consists of 5055 unique GOATs ready to dominate the Solana blockchain
                      world. Just as the crypto leaders have done.
                    </p>
                  </div>
                  <div className="button text-center mb-3">
                    <button className="theme-btn p-5 py-3 fs-3 font-alfa-slab shadow-lg rounded">JOIN US</button>
                  </div>
                  <div className="row ms-auto my-5 col-md-12 justify-content-center">
                    <div className="col-md-5">
                      <h3 className="text-end text-md-center font-alfa-slab">
                        To Be Minded <br /> 5,500
                      </h3>
                    </div>
                    <div className="col-md-5">
                      <h3 className="text-end text-md-center font-alfa-slab">
                        Attribute <br />
                        220
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 p-md-0"></div>
        </section>
      </>
    );
};

export default Header;
