import React from "react";
import Card from "./Card";

const team = (props) => {

  const rows = [0,1,2];

  const teammates = [
    [
      { name: "Balachandra DS", position: "President" },
      { name: "Sambhav K Bhandari", position: "Vice President" },
    ],
    [
      { name: "Soumya Sai Nanduri", position: "Secretary/Treasurer" },
      { name: "Ruthik Raj N", position: "Event Management Lead" },
      { name: "H G Saathvik", position: "Editor-In-Chief" },
    ],
    [
      { name: "Suraksh N S", position: "Technical Lead" },
      { name: "Nimisha Bellur", position: "Creative Team Lead" },
      { name: "Khushi S", position: "Logistics Lead" },
    ],
  ];

  return (
    <section id="team" className="section-team">
      <h2 className="heading-secondary u-margin-bottom-big"> Meet the team </h2>
      
      {rows.map(num => {
        return (
        <div className="team-flex-box" key={num}>
        {teammates[num].map((teammate) => {
          return (
            <Card
              key={teammate.name}
              name={teammate.name}
              position={teammate.position}
            />
          );
        })}
      </div>)
      })}
    </section>
  );
}

export default team;
