import classes from './styles.module.scss';

export const PaymentCard = ({ totalPrice = '842,95' }) => {
  const [rub, kop] = totalPrice.split(',');

  return (
    <div className={classes.paymentCard}>
      <div className={classes.paymentCard__checkImage}>
        <div className={classes.paymentCard__wrapper}>
          <div className={classes.paymentCard__content}>
            <span className={classes.paymentCard__title}>
              Стоимость покупок
            </span>

            <div className={classes.paymentCard__price}>
              <span className={classes.paymentCard__priceRub}>{rub}</span>
              <span className={classes.paymentCard__priceKop}>,{kop}</span>
              <span>₽</span>
            </div>

            <p className={classes.paymentCard__text}>
              Приложите <br /> или прокатайте карту
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
