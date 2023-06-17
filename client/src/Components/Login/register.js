import React from 'react';

export default function Registration() {
    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-md-5'>
                    <div>
                        <input type='text' placeholder='name' className='form-control' />
                        <input type='text' placeholder='email' className='form-control' />
                        <input type='text' placeholder='password' className='form-control' />
                        <input type='text' placeholder='confirm password' className='form-control' />
                    </div>
                </div>
            </div>
        </div>
    )
}
