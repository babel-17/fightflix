import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import FightHistoryPage from '../FightHistoryPage/FightHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import NewFightPage from '../NewFightPage/NewFightPage';
import FightList from '../../components/FightList/FightList';
import EditPage from '../EditPage/EditPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      { user ?
          
        <Routes>
          {/* Route components in here */}
          <Route path="/fights/new" element={<NewFightPage user={user} setUser={setUser} />} />
          <Route path="/fights" element={<FightList />} />
          <Route path="/fights/:id/edit" element={<EditPage />} />
          {/* <Route path="/fights/:id/delete" element={<EditPage />} /> */}

        </Routes>
      
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
