'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
export default function SignIn(){
const [email,setEmail]=useState('admin@uzapp.dev'); const [password,setPassword]=useState('admin1234');
return <form className="glass mx-auto grid max-w-md gap-3 p-5" onSubmit={e=>{e.preventDefault();void signIn('credentials',{email,password,callbackUrl:'/admin'});}}><h1 className="text-xl font-bold">Sign in</h1><input className="rounded-xl bg-zinc-900 p-2" value={email} onChange={e=>setEmail(e.target.value)} /><input type="password" className="rounded-xl bg-zinc-900 p-2" value={password} onChange={e=>setPassword(e.target.value)} /><button className="interactive rounded-full bg-blue-600 px-4 py-2">Login</button></form>
}
