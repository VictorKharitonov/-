import cl from './header.module.scss';
import { Button, Out } from '../ui';
import { logout } from '../../store/slices/signUpSlice.ts';
import { useNavigate } from 'react-router';
import { useTypedDispatch } from '../../hooks';

const ButtonLogout = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/sign-up');
  };
  return (
    <>
      <Button variant="white" className={cl.btn} onClick={handleLogout}>
        Выход
      </Button>
      <Out onClick={handleLogout} className={cl.outBtn} />
    </>
  );
};

export default ButtonLogout;
