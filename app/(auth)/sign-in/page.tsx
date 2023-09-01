"use client"
import { NextPage } from 'next';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === process.env.NEXT_PUBLIC_LOGIN_EMAIL && password === process.env.NEXT_PUBLIC_LOGIN_PASSWORD) {
      // Implement your login logic here, e.g., redirect to dashboard
      console.log('Logged in successfully');
      router.push("/")
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <div className='loginbg'>
      <div className='flex flex-col items-center justify-center p-40 text-white'>

      <h1 className=' font-bold text-2xl p-12'>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="text-black flex gap-8 p-4">
          <Image
          src="/assets/login.svg"
          alt="username"
          width={18}
          height={18}
          />
          <input
            type="text"
            id="username"
            value={email}
            placeholder={"Username"}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='field p-2 px-6'
            />
        </div>
        <div className="text-black flex gap-8 p-4" >
        <Image
          src="/assets/password.svg"
          alt="username"
          width={18}
          height={18}
          />
          <input
            type="password"
            id="password"
            value={password}
            placeholder={"Password"}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='field p-2 px-6 '
            />
        </div>
        <button type="submit" className='px-24 py-2 rounded-lg my-8 me-2 mx-16 btn btn:hover'>Login</button>
      </form>
            </div>
    </div>
  );
};

export default Page;
