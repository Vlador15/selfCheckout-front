import classes from './styles.module.scss';
import { useEffect, useState } from 'react';
import { getTime, getDate } from '../../helpers';

export const HeaderInfo = ({ id }) => {
  const [data, setData] = useState({
    date: getDate(),
    time: getTime(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => ({
        ...prev,
        time: getTime(),
      }));
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className={classes.date}>
      <span>{data.date}</span>
      <span>{data.time}</span>
      <span>Касса #{id}</span>
    </p>
  );
};
