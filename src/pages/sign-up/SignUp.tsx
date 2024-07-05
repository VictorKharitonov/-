import cl from './sign-up.module.scss';
import SignUpForm from '../../components/sign-up-form/SignUpForm.tsx';

const SignUp = () => {
  return (
    <div className={cl.singUp}>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
