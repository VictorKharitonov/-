import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { signUpSelector } from '../store/selectors.ts';
import useTypedSelector from '../hooks/useTypedSelector.ts';

interface AuthProps {
  children: ReactNode;
}

const Auth = ({ children }: AuthProps) => {
  const navigate = useNavigate();
  const { token } = useTypedSelector(signUpSelector);

  useEffect(() => {
    if (!token) {
      navigate('/sign-up');
    }
  }, [token, navigate]);

  return children;
};

export default Auth;
