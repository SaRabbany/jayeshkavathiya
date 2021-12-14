import React from 'react';

const RhinoDetails = ({data,imageOrder}) => {
    return (
        <section id="rhino-details">
            <div className="container p-0 mt-5">
                <div className="title border p-3">
                    <h2 className='font-alfa-slab'>White Rhino Ceratotherium Simum (17,212- 18,915 remaining)</h2>
                </div>
                <div className="row align-items-center border w-100 m-0 border-top-0">
                    <div className={`col-md-5 p-4 ${imageOrder===2?"order-1":""}`}>
                        <img className='w-100' src="https://www.bing.com/th?id=ALSTU7C7D909509DE3FB72A02B648F75FF035138D260E1BDED6EE6AA8F33733880FB2&w=174&h=92&o=6&pid=SANGAM" />
                    </div>
                    <div className="col-md-7">
                        <ul className="details_list">
                            <li>Lorem ipsum dolor sit, amet c.</li>
                            <li>Vero veniam omnis m hic quas aliquid.</li>
                            <li>Impedit soluta quis sint minima  dolorum!</li>
                            <li>Nostrum obcaecati quibusdam iste pariatur?</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RhinoDetails;