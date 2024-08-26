import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../LoginSignUp/LoginSignUp.css'

const LoginSignup = () => {
  return (
    <div className='wrapper  bg-dark d-flex align-items-center justify-content-center w-100'>
        <div className='login '>
        <h1 className='mb-3'>LOGIN FORM</h1>
        <form className='needs-validation'>
        <div className="form-group was-validated mb-2">
            <label htmlFor="Email" className='form-label'>
                Email address
            </label>
            <input type="email" className='form-control' required />
            <div className="invalid-feedback">
                please Enter your Email address
            </div>
        </div>

        <div className="form-group was-validated mb-2">
            <label htmlFor="password" className='form-label'>
                password
            </label>
            <input type="password" className='form-control'required />
            <div className="invalid-feedback">
                please Enter your password
            </div>
        </div>

        <div className="form-group form-check mb-2">
            <label htmlFor="checkbox" className='form-ckeck-label p-3' >
                remember me
            </label>
            <input type="checkbox" className='form-ckeck-input' />
        </div>

        <button type='submit' className='btn btn-success w-100 mt-2'>Sign In</button>
        </form>

    </div>

    </div>
  )
}

export default LoginSignup