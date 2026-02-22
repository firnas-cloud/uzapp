'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
export default function SignIn(){const [email,setEmail]=useState('admin@uzapp.local');const [password,setPassword]=useState('admin12345');
 return <form className='glass mx-auto max-w-md p-6' onSubmit={e=>{e.preventDefault();signIn('credentials',{email,password,callbackUrl:'/admin'})}}><h1 className='text-2xl font-bold'>Sign In</h1><input className='input mt-3' value={email} onChange={e=>setEmail(e.target.value)} /><input className='input mt-3' type='password' value={password} onChange={e=>setPassword(e.target.value)} /><button className='btn-primary mt-4 w-full'>Continue</button></form>
}
