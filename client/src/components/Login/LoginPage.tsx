import {FC, useState} from 'react';
import './LoginPage.css'
import axios from "axios";
import {useAppDispatch} from "../../hooks/redux.ts";
import {setIsAuthorized} from "../../store/reducers/userReducer.ts";
import {fetchAllTodos} from "../../store/action-creators/fetchAllTodos.ts";

const LoginPage: FC = () => {
    const dispatch = useAppDispatch();

    const [loginName, setLoginName] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const [registerName, setRegisterName] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                username: loginName,
                password: loginPassword,
            })

            const {token} = response.data

            if(token) {
                dispatch(setIsAuthorized(true))
                dispatch(fetchAllTodos(token))
                localStorage.setItem('token', token)
            }

        } catch (e){
            console.log(e);
        }

    }

    const handleRegistration = async () => {
        try {
            const response = await axios.post('http://localhost:3000/auth/registration', {
                username: registerName,
                password: registerPassword,
            })

            console.log(response);

        } catch (e){
            console.log(e);
        }
    }


    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h2>Login</h2>
                <input className="input-field" type="text" placeholder="Enter your username" value={loginName} onChange={e => setLoginName(e.target.value)}/>
                <input className="input-field" type="password" placeholder="Enter your password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)}/>
                <button onClick={handleLogin} className="submit-button">Login</button>
            </div>

            <div className="form-wrapper">
                <h2>Registration</h2>
                <input className="input-field" type="text" placeholder="Enter your username" value={registerName} onChange={e => setRegisterName(e.target.value)}/>
                <input className="input-field" type="password" placeholder="Enter your password" value={registerPassword} onChange={e => setRegisterPassword(e.target.value)}/>
                <button onClick={handleRegistration} className="submit-button">Register</button>
            </div>
        </div>
    );
};

export default LoginPage;
