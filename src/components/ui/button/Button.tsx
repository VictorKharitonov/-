import { ComponentProps, ElementType, ReactNode } from 'react';
import cl from './button.module.scss';

type TButtonColor = 'white' | 'black' | 'default';
type TButtonType = Record<TButtonColor, string>;

const defaultTag = 'button';

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children?: ReactNode;
  as?: E;
  variant?: TButtonColor;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> & Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const BUTTON_TYPE: TButtonType = {
  white: cl.button_white,
  black: cl.button_black,
  default: cl.button_default
};

const Button = <E extends ElementType = typeof defaultTag>({
  className,
  children,
  variant = 'default',
  as,
  ...rest
}: ButtonProps<E>) => {
  const Component = as || defaultTag;

  return (
    <Component className={`${cl.button} ${BUTTON_TYPE[variant]} ${className}`} {...rest}>
      {children}
    </Component>
  );
};

export default Button;
