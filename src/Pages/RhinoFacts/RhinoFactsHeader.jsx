import { InlineIcon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
const RhinoFactsHeader = () => {
    return (
        <>
            <header id="rhino-facts-header">
                <div className="container">
                    <h1>
                        <Link className=' text-decoration-none text-info' to={"/"}>
                            <InlineIcon icon="bi:arrow-left" />
                            Back
                        </Link>
                    </h1>
                    <h1 className="display-1 text-light mb-0">Black Rhinocores</h1>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
            </header>
            <section id="header-below">
                <div className="most-found py-5">
                    <div className="container">
                        <div className="text-lg-end text-center">
                            <h2 className="mb-0">Most Found in</h2>
                            <p>Southern Africa, East Africa</p>
                        </div>
                    </div>
                </div>
                <div className="life-span">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 border p-4 text-center">
                                <h3>Lifespan</h3>
                                <h1 className="display-2">35-40</h1>
                                <h1>Years</h1>
                            </div>
                            <div className="col-md-6 border p-4 text-center">
                                <h3>Diet</h3>
                                <h1 className="display-2">Heartthrob</h1>
                                <h5>leafy plants, branches, fruit</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RhinoFactsHeader;