import axios from "axios";
import { useLocation } from "react-router-dom";

function Profile () {

    const location = useLocation();
    const username = location.state.username;
    axios.post("http://localhost:7001/api/users/profile", {
        "username": username,
    }).then(res => {
        console.log(res);
    }).catch(error => {
        console.error("Error in getting the data", error);
    });
    return (
        <h1>Profile for {username}</h1>

    );
}

export default Profile;