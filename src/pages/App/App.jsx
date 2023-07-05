import { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as videosAPI from '../../utilities/videos-api';
import AuthPage from '../AuthPage/AuthPage';
import FightHistoryPage from '../FightHistoryPage/FightHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import NewFightPage from '../NewFightPage/NewFightPage';
import FightList from '../../components/FightList/FightList';
import EditPage from '../EditPage/EditPage';
import VideoCard from '../../components/VideoCard/VideoCard';
import axios from 'axios';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState('');
  const fileInputRef = useRef();
  const [file, setFile] = useState(null);

  useEffect(function () {
    videosAPI.getAll().then(videos => setVideos(videos));
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData);
    const res = await videosAPI.upload(formData);
    console.log(res);

    // const file = fileInputRef.current.files[0];
    // console.log(file);
    // // Check if the file exists before trying to append it to formData
    // if(file) {
    //   console.log(`Uploading file: ${file.name}`);
      
    //   const formData = new FormData();
    //   formData.append('title', title);
    //   formData.append('video', file);

    //   console.log(formData);
    //   const newVideo = await videosAPI.upload(formData);
    //   setVideos([newVideo, ...videos]);
    //   setTitle('');
    //   fileInputRef.current.value = '';
    // } else {
    //   console.log('No file selected.');
    // }
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

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



