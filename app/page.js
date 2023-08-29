"use client"

import { useEffect, useState } from 'react';
import { getPosts } from './lib/getAllPost';
import { getCookie } from './lib/getCookie';
import { setCookie } from './lib/setCookie';


export default function Home() {
    const [cookie , myCookie] = useState('');
    console.log(cookie);
    const handleSetCookie = () => {
        setCookie()
    }
    const handleGetCookie = () => {
        let datagetCookie = getCookie().then((res)=>{
            myCookie(res)
        })
    }


    const [posts , setPosts] = useState([]);
    useEffect(()=>{

            let data = getPosts().then((res)=>{
                setPosts(res)
            })


    },[])


  return (
    <>
            <div className="row">
            <div className="col-4">
                <button className="btn btn-success" onClick={handleSetCookie}>setCookie</button>
            </div>
            <div className="col-6">
            <button className="btn btn-success" onClick={handleGetCookie}>getCookie</button>
            </div>
            </div>
            <div className="row">
               <p>cookie</p>
            </div>
            
    </>
        
  );
}
