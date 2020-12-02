import FriendListItem from 'components/Friends/FriendItem/FriendListItem.jsx';
import PropTypes from 'prop-types';
import s from 'components/Friends/FriendList/FriendList.module.css';

function FriendList({ items }) {
  return (
    <ul className={s.friendList}>
      {items.map(item => (
        <li className={s.item} key={item.id}>
          <FriendListItem
            name={item.name}
            avatar={item.avatar}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
