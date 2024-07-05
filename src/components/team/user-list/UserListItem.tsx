import React, { memo, SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import cl from './user-list.module.scss';
import { Like } from '../../ui';
import { User } from '../../../types/user.ts';

interface UserListItemProps {
  item: User;
}

const UserListItem = ({ item }: UserListItemProps) => {
  const userLikeId = `like-${item.id}`;
  const storageAvatar = JSON.parse(localStorage.getItem(item.first_name));
  const [like, setLike] = useState<boolean>(JSON.parse(localStorage.getItem(userLikeId)) || false);

  const addLike = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!like) {
      localStorage.setItem(userLikeId, JSON.stringify(true));
      setLike(true);
    } else {
      localStorage.removeItem(userLikeId);
      setLike(false);
    }
  };

  return (
    <li key={item.id}>
      <Link to={`/team/${item.id}`} className={cl.userItem}>
        <img src={storageAvatar ? storageAvatar : item.avatar} alt={item.first_name} className={cl.itemImg} />
        <p className={cl.itemText}>
          {item.first_name} {item.last_name}
        </p>
        <Like className={cl.itemIcon} onClick={addLike} data-like={like} />
      </Link>
    </li>
  );
};

export default memo(UserListItem);
