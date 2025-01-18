import React, { useState } from "react";
import ParagraphCard from "../others/ParagraphCard";
import "../../Style/Paragraph.css";

export default function Paragraph() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    "Trenchless pipe laying",
    "Controlled puncture under railway and auto road",
    "Laying of electrical cables and fiber-optic lines",
    "Trenchless gas pipeline laying",
    "Trenchless gas pipeline laying",
    "Plumbing using HDD method",
  ];

  return (
    <section id="work" className="paragraph">
      <div className="Container">
        <div className="paragraph_wrapper">
          <div className="paragraph_mini">
            {items.map((item, index) => (
              <ParagraphCard
                key={index}
                h1={item}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <div className="paragraph_content">
            <h1>{items[activeIndex]}</h1>
            <p>After watching our video clip, you will receive answers to the following questions:</p>
            <ul>
              <li>What is horizontal directional drilling and what are its benefits?</li>
              <li>What communications can be laid using HDD method?</li>
              <li>Which is more profitable: laying the pipeline using the HDD method or in an open trench?</li>
            </ul>

            This video also clearly demonstrates the drilling process, from executing a controlled pilot well, expanding the well, and ending with pipe pulling.
          </div>
        </div>
      </div>
    </section>
  );
}
