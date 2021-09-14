import React, { useEffect, useState } from "react";

const Countdown = ({ countDownTime, className }) => {
  function getTimeDistance(countDownTime) {
    var countDownDate = new Date(countDownTime).getTime();
    var now = new Date().getTime();
    return countDownDate - now;
  }

  const distance = getTimeDistance(countDownTime);

  const [days, setDays] = useState(
    Math.floor(distance / (1000 * 60 * 60 * 24))
  );
  const [hours, setHours] = useState(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const [minutes, setMinutes] = useState(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  );
  const [seconds, setSeconds] = useState(
    Math.floor((distance % (1000 * 60)) / 1000)
  );
  useEffect(() => {
    var x = setInterval(function () {
      var distance = getTimeDistance(countDownTime);
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
    }, 1000);
  }, []);
  return (
    <div className={className}>
      {days}D : {hours}H : {minutes}M : {seconds}S
    </div>
  );
};

export default Countdown;
