import React from 'react';
import Footer from '../../Components/Footer/Footer';
import RhinoDetails from './RhinoDetails';
import RhinoFactsHeader from './RhinoFactsHeader';

const RhinoFacts = () => {
    var data = [
      {
        title: "White Rhino Ceratotherium Simum (17,212- 18,915 remaining)",
        desc: (
          <ul className="details_list">
            <li>Front horn- 37 in - 79 in (94cm - 201 cm)   </li>
            <li>Back horn- 22 in or 55cm</li>
            <li>Weight = 4,000 - 6,000 lbs (1,800 - 2,700 kg)</li>
            <li>Height = 5-6 feet (1.5-1.8 m) tall at shoulder</li>
            <li>Length = 10-16 feet (3-5m) length of head and body</li>
          </ul>
        ),
        img: "https://www.bing.com/th?id=ALSTU7C7D909509DE3FB72A02B648F75FF035138D260E1BDED6EE6AA8F33733880FB2&w=174&h=92&o=6&pid=SANGAM",
      },
      {
        title: "Black Rhino- Diceros Bicornis (5,366 - 5,627 remaining) ",
        desc: (
          <ul className="details_list">
            <li>Front horn- 20-55 in (0.5-1.3m)    </li>
            <li>Back horn- Up to 22 in (55cm)</li>
            <li>Weight- 1,750 - 3,000 lbs (800-1,350 kg)</li>
            <li>Height- 4.5-5.5 feet (1.4-1.7 m) tall at shoulder</li>
            <li>Length- 10-12.5 feet (3.0-3.8 m) length of head and body</li>
          </ul>
        ),
        img: "https://www.bing.com/th?id=ALSTU7C7D909509DE3FB72A02B648F75FF035138D260E1BDED6EE6AA8F33733880FB2&w=174&h=92&o=6&pid=SANGAM",
      },
      {
        title: "Greater One Horned Rhino- Rhinoceros Unicornis (3,588 remaining) ",
        desc: (
          <ul className="details_list">
            <li>Single horn up to 9.8 in or 25 cm </li>
            <li>Weight- 4,000- 6,000 lbs (1,800 - 2,700 kg) </li>
            <li>Height- 5.75 - 6.5 feet (1.75 - 2.0 m) tall at shoulder </li>
            <li>Length- 10-12.5 feet (3.0 - 3.8m) length of head and body</li>
          </ul>
        ),
        img: "https://www.bing.com/th?id=ALSTU7C7D909509DE3FB72A02B648F75FF035138D260E1BDED6EE6AA8F33733880FB2&w=174&h=92&o=6&pid=SANGAM",
      },
      {
        title: "Sumatran Rhino- Dicerorhinus Sumatrensis (<80 remaining) ",
        desc: (
          <ul className="details_list">
            <li>Front horn- 10-31 in (25-79 cm) long </li>
            <li>Second horn- less than 3 inches (10 cm)   </li>
            <li>Weight- 1,300 -2,000 lbs (600-950 kg) </li>
            <li>Height- 3-5 feet (1.0 - 1.5m) tall at shoulder</li>
            <li>Length- 6.5 - 9.5 feet (2.0 - 3.0 m) length of body</li>
          </ul>
        ),
        img: "https://www.bing.com/th?id=ALSTU7C7D909509DE3FB72A02B648F75FF035138D260E1BDED6EE6AA8F33733880FB2&w=174&h=92&o=6&pid=SANGAM",
      },
    ];
    return (
      <main id="rhino-facts-page">
        <RhinoFactsHeader />
        <RhinoDetails title={data[0].title} desc={data[0].desc} img={data[0].img} />
        <RhinoDetails imageOrder={2} title={data[1].title} desc={data[1].desc} img={data[1].img} />
        <RhinoDetails title={data[2].title} desc={data[2].desc} img={data[2].img} />
        <RhinoDetails title={data[3].title} desc={data[3].desc} img={data[3].img} />
        <Footer />
      </main>
    );
};

export default RhinoFacts;