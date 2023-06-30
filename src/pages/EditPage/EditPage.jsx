import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getById, update } from '../../utilities/fights-api';
import './EditPage.css';
import { useNavigate } from 'react-router-dom';

export default function EditPage(props) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        date: '',
    });
    
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const prefillFormData = async () => {
        const fightData = await getById(id);
        setFormData(fightData);
        }
        prefillFormData();
    }, [id]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }))
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, description, date } = formData;
        const updatedPost = await update(id, { name, description, date });
        navigate(`/fights`);
    };
    
    return (
        <div className='edit-container'>
        <form className='edit-form' onSubmit={handleSubmit}>
            <input
            className='edit-name'
            placeholder='Name'
            value={formData.name}
            name='name'
            required
            autoFocus
            onChange={handleChange}
            />
            <input
            className='description'
            placeholder='description'
            value={formData.description}
            name='description'
            required
            onChange={handleChange}
            />
            <input
            className='date'
            placeholder='date'
            value={formData.date}
            name='date'
            required
            onChange={handleChange}
            />
            <button className='edit-button'>Submit</button>
        </form>
        </div>
    )
};