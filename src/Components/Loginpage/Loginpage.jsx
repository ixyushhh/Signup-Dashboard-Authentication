import React, { useState } from 'react'
import './loginpage.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Loginpage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                navigate("/dashboard");
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const toggle = () => {
        toast.success('Login Successful!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <div className='body'>
            <div class="outer-box">
                <div class="inner-box">
                    <header class="signin-header">
                        <h1>Sign In</h1>
                        <p>It just takes 30 seconds.</p>
                    </header>

                    <main class="signin-body">
                        <form onSubmit={login}>
                            <p>
                                <label for="yourname">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} id="email" type="text" placeholder="Enter your registered email" required />
                            </p>

                            <p>
                                <label for="password">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="At Least 8 characters" required />
                            </p>
                            <span className='flex text-xs justify-between pt-0'>
                                <p className='flex text-center gap-0 p-0 m-0'>
                                    <input type='checkbox' className='w-5 h-5' />
                                    <h5>Remember me</h5>
                                </p>
                                <h5>
                                    Forgot Password?
                                </h5>
                            </span>
                            <p>
                                <input onClick={toggle} id="submit" type="submit" value="Login" />
                                <ToastContainer />
                            </p>
                        </form>
                    </main>
                    <footer class="signin-footer">
                        <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
                    </footer>
                </div>
                <div class="circle c1"></div>
                <div class="circle c2"></div>
            </div>
        </div>
    )
}

export default Loginpage