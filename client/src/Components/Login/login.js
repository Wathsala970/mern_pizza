import React, { useState, useEffect } from 'react';

export default function Login(){

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    

    return(
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5 text-left'>
                    <h3 className='text-center'>Login</h3>
                    <div className='input'>

                        <input 
                        type='text' 
                        placeholder='email' 
                        className='form-control' 
                        value={email}
                        required
                        onChange={(e)=>{setemail(e.target.value)}}
                        />

                        <input 
                        type='text' 
                        placeholder='password' 
                        className='form-control' 
                        value={password}
                        required
                        onChange={(e)=>{setpassword(e.target.value)}}
                        />

                        <button className='btn'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
  