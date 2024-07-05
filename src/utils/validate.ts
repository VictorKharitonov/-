type TFields = 'name' | 'email' | 'password' | 'passwordAccept';

const fields: Record<TFields, string> = {
  name: 'имя',
  email: 'электронная почта',
  password: 'пароль',
  passwordAccept: 'подтвердите пароль'
};

export function getErrorMessageByType(type: string | undefined, field: string) {
  const currentField = fields[field];

  switch (type) {
    case 'required':
      return `Поле ${currentField} недолжен быть пустым`;
    case 'maxLength':
      return `Поле ${currentField} - максимальная длинна 50 символов`;
    case 'pattern':
      return `Не валидные данные`;
    case 'minLength':
      return `Поле ${currentField} - минимальная длинна 8 символов`;
    case 'validate':
      return `Пароли не совпадают`;
    default:
      return '';
  }
}
