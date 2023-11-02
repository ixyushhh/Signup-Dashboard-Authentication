import React, { useState } from 'react'
import './signuppage.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signuppage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const navigate = useNavigate();

    const Signin = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
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
        toast.success('Sign Up Successful!', {
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
                    <header class="signup-header">
                        <h1>Welcome</h1>
                        <h3 className='font-semibold'>Sign Up</h3>
                    </header>

                    <main class="signup-body">
                        <form onSubmit={Signin}>
                           
                            <p>
                                <label for="Email">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} id="Email" type="email" placeholder="Enter you Email" required />
                            </p>
                            <p>
                                <label for="password">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="At Least 8 characters" required />
                            </p>
                            <p>
                                <label for="confirmPassword">Confirm Password</label>
                                <input onChange={(e) => setConfirm(e.target.value)} id="confirmPassword" type="password" placeholder="Confirm your password" required />
                            </p>
                            <p>
                                <input onClick={toggle} id="submit" type="submit" value="Register" />
                                <ToastContainer/>
                            </p>
                        </form>
                    </main>
                    <footer class="signup-footer">
                        <p>Already have an account? <Link to={'/'}>Login Here</Link></p>
                    </footer>
                </div>
                <div class="circle c1"></div>
                <div class="circle c2"></div>
            </div>
        </div>
    )
}

export default Signuppage