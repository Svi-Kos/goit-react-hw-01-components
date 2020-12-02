import PropTypes from 'prop-types';
import s from 'components/Friends/FriendItem/Friend.module.css';

export default function FriendListItem(props) {
  return (
    <div className={s.friendEl}>
      <span
        className={s.status}
        style={{ backgroundColor: props.isOnline ? 'green' : 'red' }}
      >
        {props.isOnline}
      </span>
      <img
        className={s.avatar}
        src={props.avatar}
        alt={props.name}
        width="48"
      />
      <p className={s.name}>{props.name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
