import './UserLogOut.css';
import { logOut } from '../../utilities/users-service';

export default function UserLogOut({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }
  console.log(user);
  return (
    <div className="UserLogOut">
      <div>{user.name}</div>
      <div className="email">{user.email}</div>
      <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
    </div>
  );
}
