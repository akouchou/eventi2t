import React from "react";
import moment from 'moment';


 /* function Countdown (){

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-11-1`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const [year] = useState(new Date().getFullYear());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });
      return (
        <div>
          <h1>I2T Event Group{year} Countdown</h1>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
      );

  }


  export default Countdown;*/

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
          <div>
              <h1>Delai de reservation</h1>
              <div className="countdown-wrapper">
                  {days && (
                      <div className="countdown-item">
                          <SVGCircle radius={daysRadius} />
                          {days}
                          <span>days</span>
                      </div>
                  )}
                  {hours && (
                      <div className="countdown-item">
                          <SVGCircle radius={hoursRadius} />
                          {hours}
                          <span>hours</span>
                      </div>
                  )}
                  {minutes && (
                      <div className="countdown-item">
                          <SVGCircle radius={minutesRadius} />
                          {minutes}
                          <span>minutes</span>
                      </div>
                  )}
                  {seconds && (
                      <div className="countdown-item">
                          <SVGCircle radius={secondsRadius} />
                          {seconds}
                          <span>seconds</span>
                      </div>
                  )}
              </div>
          </div>
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