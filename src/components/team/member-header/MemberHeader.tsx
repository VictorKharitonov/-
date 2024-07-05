import { useEffect } from 'react';
import cl from './member-header.module.scss';
import { useParams } from 'react-router';
import { getUserAction } from '../../../store/asycnActions/userAction.ts';
import ButtonBack from './ButtonBack.tsx';
import { userSelector } from '../../../store/selectors.ts';
import { useTypedDispatch, useTypedSelector } from '../../../hooks';
import Avatar from './Avatar.tsx';

const MemberHeader = () => {
  const {
    data: { first_name, last_name, avatar },
    isLoading,
    error
  } = useTypedSelector(userSelector);
  const params = useParams();
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getUserAction(params.id));
  }, []);

  return (
    <div className={cl.profileWrapper}>
      <ButtonBack />
      {error && <p>{error}</p>}
      {isLoading ? (
        <p className={cl.loader}>Загрузка...</p>
      ) : (
        <div className={cl.profile}>
          <Avatar src={avatar} name={first_name} isLoading={isLoading} />
          <div className={cl.textContainer}>
            <h1 className={cl.title}>{`${first_name} ${last_name}`}</h1>
            <p className={cl.description}>Партнер</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberHeader;
