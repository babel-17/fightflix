import { checkToken } from '../../utilities/users-service';

export default function FightHistoryPage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
  }
  
  return (
    <>
      <h1>FightHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}