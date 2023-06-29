import { useState } from 'react';
import * as fightsService from '../../utilities/fights-api';
import { useNavigate } from 'react-router-dom';

export default function NewFightPage() {
  const navigate = useNavigate();
  const [fight, setFight] = useState({
    title: '',
    description: '',
    date: '',
  });
  const handleChange = (evt) => {
    setFight({
      ...fight,
      [evt.target.name]: evt.target.value,
    });
    console.log(fight);
  };
  function handleSubmit(evt) {
    evt.preventDefault();
    fightsService.create(fight);
    // navigate('/fights');
    console.log(fight);
  }
  return (
    <>
    <h1>NewFightPage</h1>
    <input name="title" value={fight.title} onChange={handleChange}></input>
    <input name="date" value={fight.date} onChange={handleChange}></input>
    <input name="description" value={fight.description} onChange={handleChange}></input>
    <button onClick={handleSubmit}>Create</button>
    </>
  );
}