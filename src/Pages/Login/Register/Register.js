import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login')
    }
    if(user){
        navigate('/home')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        if(agree){
            createUserWithEmailAndPassword(email, password);
        }
        
    }
    return (
        <div className='register-form'>
            <h2 className='text-center text-primary p-3'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email' required/>
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input onClick={() =>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'text-primary':'text-danger'} htmlFor="terms">Accept Terms And Conditions</label>
                <input disabled={!agree} className='btn btn-primary w-50 mx-auto mt-2' type="submit" value="Register" />
            </form>
            <p>Already have an account? <span className='login text-danger' onClick={navigateLogin}>Please login</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;