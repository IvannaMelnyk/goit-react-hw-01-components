import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  const statusClassName = isOnline ? s.online : s.offline;
  return (
    <li key={id} className={s.item}>
      <span className={statusClassName}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
FriendListItem.propTpes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
