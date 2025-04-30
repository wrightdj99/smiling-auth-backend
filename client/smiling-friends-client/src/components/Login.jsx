import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit() {
        axios.post("http://localhost:7001/api/auth/login", {
            "username": username,
            "password": password,
        }).then(res => {
            if (res.data.token) {
                const token = res.data.token;
                localStorage.setItem("jsonWebToken", token);
                navigate('/', { state: { username: username, token: token }});
            }
        }).catch(error => {
            console.error("Error in posting the data");
        });
    }

    return (
        <div>
            <h1>Login</h1>
            <hr/>
            <h2>Username: <input type="text" onChange={e=>setUsername(e.target.value)} id="username"/></h2>
            <h2>Password: <input type="password" onChange={e=>setPassword(e.target.value)} id="password"/></h2>
            <button onClick={handleSubmit.bind(this)}>Submit</button>
        </div>
    );
}

export default Login;