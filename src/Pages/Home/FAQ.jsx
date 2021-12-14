import React from "react";
import FaqCard from "../../Components/FaqCard/FaqCard";

const FAQ = () => {

    const FAQsData = [
      {
        question: "How does the “fair launch” system work?",
        answer: "Details TBA",
      },
      {
        question: "What is the price?",
        answer: "TBD",
      },
      {
        question: "When is the drop?",
        answer: "TBD",
      },
      {
        question: "Do I own the Rhino NFT after I make the purchase?",
        answer: "Yes, the buyer will receive full intellectual property rights ",
      },
      {
        question: "How many total Rhinos in the collection?",
        answer: "9,999",
      },
      {
        question: "Will there be a rarity chart?",
        answer: "Yes, details TBA",
      },
    ];


    return (
        <section id="FAQs">
            <div className="section-title text-center">
                <h1 className="display-3 font-alfa-slab mb-0">FAQs</h1>
                <p className="font-alfa-slab">Cards on the Table</p>
            </div>
            <div className="container">
                <div className="accordion" id="accordionExample">
                    {FAQsData.map(faqData => <FaqCard data={faqData}/>)}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
