import React, { useEffect, useState } from "react";
import Navbar_LOGO from "../../Images/logo (1).png";
import { InlineIcon } from "@iconify/react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbarShown, setIsNavbarShown] = useState(false)
    useEffect(() => {
        const navbarContent = document.querySelector("#Navbar .navbar-content");
        window.addEventListener("scroll", function (e) {
            console.log(this.window.scrollY);
            if (this.window.scrollY > 10) {
                navbarContent?.classList.add("navbar-small");
            } else {
                navbarContent?.classList.remove("navbar-small");
            }

            if (this.window.scrollY > 1046) {
                navbarContent?.classList.add("navbar-sticky-out");
            } else {
                navbarContent?.classList.remove("navbar-sticky-out");
            }
        });
    }, []);

    return (
      <nav id="Navbar" className=" text-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2 order-1 d-lg-none">
              <InlineIcon onClick={() => setIsNavbarShown(!navbarShown)} className="display-1" icon="clarity:bars-line" />
            </div>
            <div className="col-lg-4 text-center  order-0 navbar-logo">{/* <img src={Navbar_LOGO} alt="" /> */}</div>
            <div className="col-lg-8 order-2 col-10 navbar-title">
              <h1 className="display-1 text-end mb-0 font-alfa-slab"> RHINO COLLECTION</h1>
              <p className="font-alfa-slab text-end">Exclusively on Solana</p>
            </div>
          </div>

          <div className={`navbar-content ${navbarShown ? "navbar_shown" : ""}`}>
            <div className="wrapper">
              <ul className="navbar-items">
                <li className="navbar-item">
                  <a href="#welcome" className="navbar-link" to="/">
                    Overview
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="#GoatBarn" className="navbar-link" to="/">
                    Art Work
                  </a>
                </li>
                <li className="navbar-item">
                  <Link className="navbar-link" to="/rhino-facts">
                    Rhino Facts
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link className="navbar-link" to="/road-map">
                    Roadmap
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link className="navbar-link" to="/">
                    FAQs
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link className="navbar-link" to="/">
                    Team
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link className="navbar-link" to="/">
                    <button className="theme-btn px-5 rounded">Mint</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
