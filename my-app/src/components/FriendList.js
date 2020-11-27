export default function FriendList(props) {
  return (
    <ul class="friend-list">
      <li class="item">
        <span class="status">{props.isOnline}</span>
        <img class="avatar" src={props.avatar} alt={props.name} width="48" />
        <p class="name">{props.name}</p>
      </li>
    </ul>
  );
}
