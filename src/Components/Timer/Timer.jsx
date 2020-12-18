import React from "react";
import Block from "./Block";
import Elistnextevents from '../Eventslist/Elistnextevents';

function timer(prop) {
  return (
    <section id="timer" className="countdown-timer">
      {Elistnextevents.map((item)=>{
        return <h3 className="heading-tertiary">{item.name}</h3>
      })}
      <div className="countdown-timer__box">
        <Block name="days" value={prop.value_days} color="red" />
        <Block name="hours" value={prop.value_hours} color="blue" />
        <Block name="minutes" value={prop.value_minutes} color="yellow" />
      </div>
      <a href="#" className="btn btn--white btn--animated">
        Know More
      </a>
    </section>
  );
}

export default timer;
