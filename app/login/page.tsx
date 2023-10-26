'use client';
import React, {useCallback, useEffect, useState} from 'react';
import { ReduxProvider } from '@/redux/provider'
import styles from './login.module.css';
import { useRouter } from 'next/navigation';
// import { useAppDispatch } from '@/redux/hooks';
// import { logIn, logOut } from '@/redux/features/auth-slice';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const dispatch = useAppDispatch();

  
  function login() {
    /** validate credential of user */
    if (!username && !password) {
      setError('Username and Password is required');
      return;
    } else if (username.length <= 0 && password.length <= 0) {
      setError('Username and Password is required');
      return;
    } else if (username.length <= 0) {
      setError('Username is required');
      return;
    } else if (password.length <= 0) {
      setError('Password is required');
      return;
    } else {
      setError('');
    }

    /**
     * Run Validation with APIs here to check with the backend.
     * since this is POC Project with only front end, leave this part
     * and can continue later on if want to add
     * in the meantime, bypass this authentication
    * */
   localStorage.setItem('username', username);
    // dispatch(logIn(username));
    router.push('/user');
  };
  
  const LoginError = (props: any) => {
    return (
      <div className="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{error}</span>
      </div>
    );
  };

  return (
    <div className={styles.mainContainer}>
      <div className="grid place-content-center">
        <h1 className="text-5xl text-violet-500">
          <i>Developer Membership System</i>
        </h1>
        <h2 className="text-xl text-violet-300">
          By Highrul.dev | next.js
        </h2>
        <div className="flex items-center justify-center h-full pt-20">
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center h-full pt-4">
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center h-full pt-4">
          <button onClick={login} className="btn btn-primary w-full max-w-xs">Login</button>
        </div>
        <div className="flex items-center justify-center h-full pt-4">
          {error && <LoginError />}
        </div>
      </div>
    </div>
  );
};

export default Login;
