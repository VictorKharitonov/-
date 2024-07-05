import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import cl from './input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  icon?: ReactNode;
  error: string | undefined;
}

const Input = forwardRef(({ type, className, label, id, error, icon, ...rest }: InputProps, ref) => {
  return (
    <div>
      <label htmlFor={id} className={cl.inputLabel}>
        {label}
      </label>
      <div className={`${cl.inputWrapper} ${error ? cl.errorWrapper : ''}`}>
        <input ref={ref} type={type} id={id} className={`${cl.input} ${className ? className : ''}`} {...rest} />
        {icon && icon}
        <div className={cl.inputBackground}></div>
      </div>
      {error && <p className={cl.isError}>{error}</p>}
    </div>
  );
});

export default Input;
