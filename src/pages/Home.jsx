import React, { useState, useRef, useEffect } from "react";
import Header from "../Components/Header/Header";
import About from "../Components/About/About";
import Timer from "../Components/Timer/Timer";
import Team from "../Components/Team/Team";
import Navigation from "../Components/Navigation/Navigation";
import Toggler from "../Components/Navigation/Toggler";

const Home = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("December 26, 2020 17:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        if (days < 10) {
          days = "0" + days;
        }
        if (hours < 10) {
          hours = "0" + hours;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
      }
    }, 1000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="homepage">
      <main>
        <Header />
        <About />
        <Timer
          value_days={timerDays}
          value_hours={timerHours}
          value_minutes={timerMinutes}
        />
        <Team />
      </main>
    </div>
  );
};
export default Home;
