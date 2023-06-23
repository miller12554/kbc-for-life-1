import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import OAuth from '../context/OAuth';
import { useForm } from 'react-hook-form';

const Signin = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  
  } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account-profile')
    } catch (e) {
      setError(error)
      console.log(e.message)
    }
  };

  const onSubmit = async (data) => {
    await sleep(2000);
    if (data.username === 'bill') {
      alert(JSON.stringify(data));
    } else {
      alert('There is error');
      setError('username', 'validate');
    }
  };

  console.log(errors);


  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
        <p className='py-2'>
          Don't have an account yet?{' '}
          <Link to='/sign-up' className='underline'>
            Sign up.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email Address</label>
          <input id="email"
            placeholder="bluebill1049@hotmail.com"  {...register('email')}  onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input {...register("password", {
  required: true
          })} onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' />
          
        </div>
        <div style={{ color: 'red' }}>
          {Object.keys(errors).length > 0 &&
            'You must enter a password.'}
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
          Sign In
        </button>
        <div className="text-center">Or</div>
        <OAuth />
      </form>
    </div>
  );
};

export default Signin;
