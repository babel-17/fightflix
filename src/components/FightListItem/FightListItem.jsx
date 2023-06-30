import './FightListItem.css';

export default function FightListItem({ fightItem }) {
  return (
    <div className="FightListItem">
      {/* <div className="emoji flex-ctr-ctr">{fightItem.emoji}</div> */}
      <div className="name">{fightItem.name}</div>
      <div className="buy">
        <button className="btn-sm" onClick={() => console.log('clicked')}>
          ADD
        </button>
      </div>
    </div>
  );
}