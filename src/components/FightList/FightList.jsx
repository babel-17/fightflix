import './FightList.css';
import FightListItem from '../FightListItem/FightListItem';
import { useEffect } from 'react';
import { useState } from 'react';
import * as fightsAPI from '../../utilities/fights-api';

export default function FightList() {
  const [fightItems, setFightItems] = useState([]);
  useEffect(() => {
    async function getFightItems() {
      const fightItems = await fightsAPI.getFightItems();
      console.log(fightItems);
      setFightItems(fightItems);
    }
    getFightItems();
  }, []);
  const items = fightItems.map(item =>
    <FightListItem
      key={item._id}
      fightItem={item}
    />
  );
  console.log(fightItems);
  return (
    <main className="FightList">
      {items}
    </main>
  );
}