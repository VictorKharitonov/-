import { SyntheticEvent, useState } from 'react';

const useShowPassword = () => {
  const [show, setShow] = useState({
    password: false,
    passwordAccept: false
  });

  const handleShowPassword = (e: SyntheticEvent<HTMLInputElement>) => {
    if (e.currentTarget.dataset.name === 'password') {
      setShow(status => ({ ...status, password: !status.password }));
    } else {
      setShow(status => ({ ...status, passwordAccept: !status.passwordAccept }));
    }
  };

  return [show, handleShowPassword];
};

export default useShowPassword;
