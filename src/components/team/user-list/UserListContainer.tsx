import { useEffect, useState } from 'react';
import cl from './user-list.module.scss';
import { Arrow, Button } from '../../ui';
import UserList from './UserList.tsx';
import { getUsersAction } from '../../../store/asycnActions/usersAction.ts';
import { usersSelector } from '../../../store/selectors.ts';
import { useTypedDispatch, useTypedSelector } from '../../../hooks';

const UserListContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useTypedDispatch();
  const { data, total_pages, isLoading } = useTypedSelector(usersSelector);

  useEffect(() => {
    dispatch(getUsersAction(currentPage));
  }, [currentPage, dispatch]);

  const getNextUsers = () => {
    setCurrentPage(page => page + 1);
  };

  return (
    <section className={cl.listContainer}>
      {isLoading && currentPage === 1 ? <p>Загрузка...</p> : <UserList data={data} />}
      {!isLoading && total_pages > currentPage && (
        <Button variant="black" className={cl.btn} onClick={getNextUsers}>
          Показать еще <Arrow className={cl.btnIcon} />
        </Button>
      )}
    </section>
  );
};

export default UserListContainer;
