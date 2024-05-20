import { useState, useMemo, useRef, useEffect } from 'react';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import './index.css';
import Orbs from '../Orbs/orbs';

const REGISTER_URL = '/api/user/';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const navigate = useNavigate();

    const errRef = useRef();

    useEffect(() => {
        setErrMsg('');
    }, [email, password])


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(REGISTER_URL, 
                JSON.stringify({ name, email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            // console.log(response.data);
            navigate('/login');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('User Already Exists');
            } else {
                setErrMsg('Registration Failed');
            }
        }
    };
    const orbsMemo = useMemo(()=>{
        return <Orbs/>
      }, [])

    return (
        <div>
            {orbsMemo}
        <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor = "name">Name:</label>
                <input
                    type="name"
                    id="name"
                    onChange={(e)=> setName(e.target.value)}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />

                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an Account?<br />
                <span className="line">
                    <a href="/login">Login</a>
                </span>
            </p>
        </section>
        </div>
    );
};

export default Register;
