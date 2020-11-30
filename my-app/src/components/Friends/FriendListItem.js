import PropTypes from 'prop-types';

export default function FriendListItem(props) {
  return (
    <div>
      <span class="status">{props.isOnline}</span>
      <img class="avatar" src={props.avatar} alt={props.name} width="48" />
      <p class="name">{props.name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
