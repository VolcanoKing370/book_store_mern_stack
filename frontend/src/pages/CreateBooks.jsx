import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post(`http://localhost:5555/books`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Created Book Successfully!', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        //alert('A wild ERROR appeared! Check the console!');
        enqueueSnackbar('Error!', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Add A New Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-cyan-500 rounded-xl w-[600px] p-4 mx-auto'>
        {/*Title*/}
        <div className='my-4'>
          <label className='text-xl mr-4 text-slate-700'>Title</label>
          <input 
          type = 'text'
          value = {title}
          onChange = {(e) => setTitle(e.target.value)}
          className='border-2 border-slate-700 px-4 py-2 w-full'
          />
        </div>
        {/*Author*/}
        <div className='my-4'>
          <label className='text-xl mr-4 text-slate-700'>Author</label>
          <input 
          type = 'text'
          value = {author}
          onChange = {(e) => setAuthor(e.target.value)}
          className='border-2 border-slate-700 px-4 py-2 w-full'
          />
        </div>
        {/*PublishYear*/}
        <div className='my-4'>
          <label className='text-xl mr-4 text-slate-700'>Year Published</label>
          <input 
          type = 'number'
          value = {publishYear}
          onChange = {(e) => setPublishYear(e.target.value)}
          className='border-2 border-slate-700 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 m-8 text-white bg-cyan-500 hover:bg-cyan-700' onClick={handleSaveBook}>
          ADD!
        </button>
      </div>
    </div>
  )
}

export default CreateBooks;