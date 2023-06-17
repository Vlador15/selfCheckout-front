import classes from './styles.module.scss';
import { useParams } from 'react-router-dom';
import { PaymentCard } from './PaymentCard';
import ArrowImage from '../../assets/images/Arrow.svg';
import { HeaderInfo } from './HeaderInfo';
import { FooterButtons } from './FooterButtons';

export const PaymentPage = () => {
  const { id } = useParams(); // ID кассы
  const totalPrice = '842,95'; // сумма к оплате

  return (
    <div className={classes.container}>
      <div className={classes.container__wrapper}>
        <HeaderInfo id={id} />

        <PaymentCard totalPrice={totalPrice} />
        <img
          src={ArrowImage}
          alt="arrowImage"
          className={classes.paymentCard__imageArrow}
        />
      </div>

      <FooterButtons id={id} />
    </div>
  );
};
