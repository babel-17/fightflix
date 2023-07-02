import './FightListItem.css';
import { Link } from 'react-router-dom';

export default function FightListItem({ fightItem, handleDelete }) {
  return (
    <div className="FightListItem">
      {/* <div className="emoji flex-ctr-ctr">{fightItem.emoji}</div> */}
      <div className="name">{fightItem.name}</div>
      <div className="buy">
       <Link to={`/fights/${fightItem._id}/edit`}>
        <button className="btn-sm" >
          EDIT
        </button>
        </Link>
        <button onClick={() => handleDelete(fightItem._id)} className="btn-sm">
          DELETE
        </button>
      </div>
    </div>
  );
}