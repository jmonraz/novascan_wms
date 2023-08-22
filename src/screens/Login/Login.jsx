import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

// CSS
import style from "./Login.module.css";

const Login = ({ handleLogin, loginError }) => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true);

        // simulate asynchronous action (e.g., API call) for 4 seconds
        setTimeout(() => {
            setIsLoading(false);
            handleLogin(username, password);
            navigate('/Home/Dashboard')
        }, 2500);
    };

    return (
        <>
            <div className={style["login-container"]}>
                <p className={style["login-title"]}>NovaScan</p>
                <form onSubmit={handleSubmit}>
                    <Input placeholder="Username" value={username} onChange={handleUsernameChange} required />
                    <Input placeholder="Password" value={password} type="password" onChange={handlePasswordChange} required />
                    {loginError && <p className={style["login-error"]}>Invalid username or password</p>}
                    <Button type="submit">Login</Button>
                </form>
                {isLoading && (
                    <div className={style["loading-overlay"]}>
                        <div className={style["loading-circle"]}>

                        </div>
                        <p>Loading...</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default Login;