import { InlineIcon } from '@iconify/react';
import React from 'react';

const Footer = () => {
    return (
      <footer id="footer" className="bg-dark text-light">
        <div className="container">
          <div className="d-flex py-4 align-items-center justify-content-between">
            <div className="copy-right">
              <p className="mb-0">Copyright © 2021 Rhino NFT Collection</p>
            </div>
            <div className="icons d-flex">
              <div className="icon me-5">
                <InlineIcon className="display-3" icon={"mdi:twitter"} />
              </div>
              <div className="icon">
                <InlineIcon className="display-3" icon={"akar-icons:discord-fill"} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;