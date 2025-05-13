import axios from "axios";
import { useLocation } from "react-router-dom";
import { isAdmin } from "../helpers/PermissionHelper";
import { useState } from "react";
function Profile () {

    const location = useLocation();
    const usernameProp = location.state?.username;
    const [ username, setUsername ] = useState('');
    const [ role, setRole ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ bio, setBio ] = useState('');
    const [ profilePic, setProfilePic ] = useState(null);

    axios.post("http://localhost:7001/api/users/viewProfile", {
        "username": usernameProp !== "" && usernameProp !== undefined ? usernameProp : localStorage.getItem("username"),
    }).then(res => {
        const response = res.data.data;
        if (response) {
            setFirstName(response.firstName);
            setLastName(response.lastName);
            setRole(response.role);
            setUsername(response.username);
            setBio(response.bio);
        }
    }).catch(error => {
        console.error("Error in getting the data", error);
    });

    function handleSubmit() {
        axios.post("http://localhost:7001/api/users/editProfile", {
            "username": username,
            
        })
    }

    return (
        <div>
            <h1>{username}</h1>
            <form onSubmit={handleSubmit}>
                <h3>Profile Picture: <input type="file" name="profulePic"/></h3>
                <h3>First Name: <input type="text" name="firstName" value={firstName} onChange={e=>setFirstName(e.target.value)}/></h3>
                <h3>Last Name: <input type="text" name="lastName" value={lastName} onChange={e=>setLastName(e.target.value)}/></h3>
                <h3>Username: <input type="text" name="username" value={username} onChange={e=>setUsername(e.target.value)}/></h3>
                <h3>Role: 
                    <select id="role" readOnly={!isAdmin() ? true : false} onChange={e=>setRole(e.target.value)} value={role}>
                        <option></option>
                        <option value="user">User</option>
                        <option value="manager">Manager</option>
                        <option value="admin">Admin</option>
                    </select>
                </h3>
                <h3>Bio: <textarea type="text" name="content" rows="4" cols="50" value={bio} onChange={e=>setBio(e.target.value)}/></h3>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default Profile;