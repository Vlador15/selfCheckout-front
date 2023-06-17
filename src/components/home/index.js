import { useContext } from 'react';
import classes from './styles.module.scss';
import { Context } from './../../index';
import { useNavigate } from 'react-router-dom';

export function ListSelfCheckouts() {
  const navigate = useNavigate();

  const { data } = useContext(Context);
  const selfCheckouts = data.getSelfCheckouts;

  const handleCheckout = (item) => {
    data.setActiveSelfCheckout(item.id);
    navigate(`/payment/${item.id}`);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Выберите кассу самообслуживания:</h1>

      <div className={classes.list}>
        {selfCheckouts.map((item) => (
          <div
            className={classes.itemList}
            key={item.id}
            onClick={() => handleCheckout(item)}
          >
            Касса #{item.id}
          </div>
        ))}
      </div>
    </div>
  );
}
