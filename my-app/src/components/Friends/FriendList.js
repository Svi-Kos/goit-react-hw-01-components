import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

function FriendList({ items }) {
  return (
    <ul class="friend-list">
      {items.map(item => (
        <li class="item" key={item.id}>
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
