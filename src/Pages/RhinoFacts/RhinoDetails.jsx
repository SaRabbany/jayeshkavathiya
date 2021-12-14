import React from 'react';



const RhinoDetails = (props, {data,imageOrder}) => {
    return (
      <section id="rhino-details">
        <div className="container p-0 mt-5">
          <div className="title border p-3">
            <h2 className="font-alfa-slab">{props.title}</h2>
          </div>
          <div className="row align-items-center border w-100 m-0 border-top-0">
            <div className={`col-md-5 p-4 ${(imageOrder === 2? "order-2" : "")}`}>
              <img className="w-100" src={props.img} />
            </div>
            <div className="col-md-7">{props.desc}</div>
          </div>
        </div>
      </section>
    );
};

export default RhinoDetails;