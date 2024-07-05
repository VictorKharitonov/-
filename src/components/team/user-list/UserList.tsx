import cl from './user-list.module.scss';
import { User } from '../../../types/user.ts';
import UserListItem from './UserListItem.tsx';

interface UserListPros {
  data: User[];
}

const UserList = ({ data }: UserListPros) => {
  return (
    <ul className={cl.userList}>
      {data.length > 0 ? data.map(item => <UserListItem item={item} key={item.id} />) : <p>Пользователи не найдены</p>}
    </ul>
  );
};

export default UserList;
