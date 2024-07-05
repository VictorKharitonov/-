import cl from './member-header.module.scss';
import { useNavigate } from 'react-router';
import { ArrowLeft, Button } from '../../ui';

const ButtonBack = () => {
  const navigate = useNavigate();

  const handleButtonCLick = () => {
    navigate(-1);
  };

  return (
    <>
      <Button variant="white" className={cl.btnBack} onClick={handleButtonCLick}>
        Назад
      </Button>
      <ArrowLeft onClick={handleButtonCLick} className={cl.backIcon} />
    </>
  );
};

export default ButtonBack;
