import React from "react";
import moment from "moment";


  class Countdown  extends React.Component {

    
    
    state = {
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined
    };

    componentDidMount() {
      this.interval = setInterval(() => {
          const { timeTillDate, timeFormat } = this.props;
          const then = moment(timeTillDate, timeFormat);
          const now = moment();
          const countdown = moment(then - now);
          const days = countdown.format('D');
          const hours = countdown.format('HH');
          const minutes = countdown.format('mm');
          const seconds = countdown.format('ss');

          this.setState({ days, hours, minutes, seconds });
      }, 1000);
    }

    componentWillUnmount() {
      if (this.interval) {
          clearInterval(this.interval);
      }
    }

    render() {

      const { days, hours, minutes, seconds } = this.state;



      // Mapping the date values to radius values
      const daysRadius = mapNumber(days, 30, 0, 0, 360);
      const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
      const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
      const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

      if (!seconds) {
          return null;
      }

      return (
        <section class="counter-section bg-gradient">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="counter-text">
                
                  <h3>
                    Comptez chaque seconde
                    <br />
                    jusqu'à l'événement
                  </h3>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="cd-timer" id="countdown">
                  {days && (
                    <div className="cd-item">
                      <span>{days}</span>
                      <p>days</p>
                    </div>
                  )}
                  {hours && (
                    <div className="cd-item">
                      <span>{hours}</span>
                      <p>hours</p>
                    </div>
                  )}
                  {minutes && (
                    <div className="cd-item">
                      <span>{minutes}</span>
                      <p>minutes</p>
                    </div>
                  )}
                  {seconds && (
                    <div className="cd-item">
                      <span>{seconds}</span>
                      <p>seconds</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

  }

  const SVGCircle = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#e74c3c"
            stroke-width="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </svg>
  );

  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
  }

  function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');

    return d;
  }

  function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  }

  export default Countdown