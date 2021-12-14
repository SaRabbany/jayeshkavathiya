import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ScrollAnimation from "react-animate-on-scroll";



const FaqCard = ({data}) => {
    const [isToggled, setIsToggled] = useState(false);
    const id = uuidv4();

    return (
        <>
            <ScrollAnimation offset={100} animateIn="animate__fadeInUp" className="accordion-item faq-card border-0">
                <h2 className={`accordion-header ${isToggled ? "acitve" : ""}`} id="headingOne">
                    <button onClick={() => setIsToggled(!isToggled)} className="accordion-button fs-5 fst-italic" data-bs-toggle="collapse" data-bs-target={`#h${id}`}>
                        {data?.question}
                    </button>
                </h2>
                <div id={`h${id}`} className="accordion-collapse collapse border-0" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">{data?.answer}</div>
                </div>
            </ScrollAnimation>
        </>
    );
};

export default FaqCard;
