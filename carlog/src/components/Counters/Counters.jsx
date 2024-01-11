import { useState } from 'react';
import style from './Counters.module.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counters = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      {counterOn ? (
        <div className={style.wrapper}>
          <div className={style.counter}>
            <CountUp separator="" end={2499} className={style.number} />
            <h2>Samochodów</h2>
          </div>
          <div className={style.counter}>
            <CountUp separator="" end={5} className={style.number} />
            <h2>Lat Doświadczenia</h2>
          </div>
          <div className={style.counter}>
            <CountUp separator="" end={1699} className={style.number} />
            <h2>Powłok ceramicznych</h2>
          </div>
          <div className={style.counter}>
            <CountUp separator="" end={1900} className={style.number} />
            <h2>Korekt lakieru</h2>
          </div>
        </div>
      ) : null}
    </ScrollTrigger>
  );
};
export default Counters;
