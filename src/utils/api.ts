const BASE_URL = 'https://reqres.in/api';

export const signUp = async ({
  email,
  password
}: {
  email: string;
  password: string;
}): Promise<{ id: number; token: string }> => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password
    })
  });

  if (!response.ok) {
    throw new Error('Некоректаня почта или пароль - eve.holt@reqres.in pistol');
  }

  return await response.json();
};

export const getUsers = async (page: number) => {
  const response = await fetch(`${BASE_URL}/users?page=${page}&per_page=8`);

  if (!response.ok) {
    throw new Error('Ошибка при получение пользователей');
  }

  return await response.json();
};

export const getUserById = async (id: number) => {
  const response = await fetch(`${BASE_URL}/users/${id}`);

  if (!response.ok) {
    throw new Error('Ошибка при получение пользователя');
  }

  return await response.json();
};
