import { useEffect } from 'react';
import cl from './sign-up-form.module.scss';
import input from '../ui/input/input.module.scss';
import { Button, Input, Eye } from '../ui';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getErrorMessageByType } from '../../utils/validate.ts';
import { signUpAction } from '../../store/asycnActions/signUpAction.ts';
import { signUpSelector } from '../../store/selectors.ts';
import { useNavigate } from 'react-router';
import { useShowPassword, useTypedDispatch, useTypedSelector } from '../../hooks';

type Inputs = {
  name: string;
  email: string;
  password: string;
  passwordAccept: string;
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const { isLoading, error, token } = useTypedSelector(signUpSelector);
  const [show, handleShowPassword] = useShowPassword();

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors }
  } = useForm<Inputs>();

  const password = watch('password');
  const passwordAccept = watch('passwordAccept');

  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(signUpAction({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (passwordAccept) {
      trigger('passwordAccept');
    }
  }, [passwordAccept, password, trigger]);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [navigate, token]);

  return (
    <div className={cl.singUpFormWrapper}>
      <h2 className={cl.formTitle}>Регистрация</h2>
      <form className={cl.singUpForm} onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="Имя"
          id="form-name"
          {...register('name', { required: true, maxLength: 50 })}
          error={getErrorMessageByType(errors.name?.type, 'name')}
        />
        <Input
          type="email"
          label="Электронная почта"
          id="form-email"
          defaultValue="eve.holt@reqres.in"
          {...register('email', {
            required: true
          })}
          error={getErrorMessageByType(errors.email?.type, 'email')}
        />
        <Input
          type={show.password ? 'text' : 'password'}
          label="Пароль"
          id="form-password"
          icon={<Eye className={input.inputIcon} onClick={handleShowPassword} data-name="password" />}
          {...register('password', {
            required: true,
            minLength: 6
          })}
          error={getErrorMessageByType(errors.password?.type, 'password')}
        />
        <Input
          type={show.passwordAccept ? 'text' : 'password'}
          label="Подтвердите пароль"
          id="form-accept-password"
          icon={<Eye className={input.inputIcon} onClick={handleShowPassword} data-name="passwordAccept" />}
          {...register('passwordAccept', {
            required: true,
            minLength: 6,
            validate: value => value === password
          })}
          error={getErrorMessageByType(errors.passwordAccept?.type, 'passwordAccept')}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Вход...' : 'Зарегистрироваться'}
        </Button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default SignUpForm;
