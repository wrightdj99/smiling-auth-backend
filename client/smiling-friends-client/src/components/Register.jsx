import { useState } from "react";
import axios from 'axios';

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    function handleSubmit () {
        axios.post("http://localhost:7001/api/auth/register", {
            "username": username,
            "password": password,
            "role": role,
        }).then(res => {
            console.log(res.data);
        }).catch(error => {
            console.error("Error in posting the data");
        });
    }

    return (
        <div>
            <h1>Register</h1>
            <hr/>
            <h2>Username: <input type="text" onChange={e=>setUsername(e.target.value)} id="username"/></h2>
            <h2>Password: <input type="password" onChange={e=>setPassword(e.target.value)} id="password"/></h2>
            <h2>Role: 
                <select id="role" onChange={e=>setRole(e.target.value)}>
                    <option></option>
                    <option value="user">User</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                </select>
            </h2>
            <button onClick={handleSubmit.bind(this)}>Submit</button>
        </div>
    );
}

export default Register;