import classes from './styles.module.scss';
import PeopleImage from '../../assets/images/ImgPeople.svg';
import LeftArrowImage from '../../assets/images/LeftArrow.svg';
import { useNavigate } from 'react-router-dom';

export const FooterButtons = ({ id }) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate(`/`);
  };

  const handleCalling = () => {
    console.log(`Вызов сотрудника на кассу самообслуживания #${id}`);
  };

  return (
    <div className={classes.footer}>
      <button className={classes.footer__arrow} onClick={() => goToHome()}>
        <img src={LeftArrowImage} alt="LeftArrowImage" />
      </button>
      <button className={classes.footer__call} onClick={() => handleCalling()}>
        <img src={PeopleImage} alt="peopleImg" />
        <p>Вызов сотрудника</p>
      </button>
    </div>
  );
};
