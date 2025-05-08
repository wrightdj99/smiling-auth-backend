import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Header() {
    const navigate = useNavigate();
    function logout() {
        localStorage.clear();
        navigate("/login");
    }

    return (
        <div>
            <h1>Smiling Friends</h1>
            <button onClick={logout.bind(this)}>Logout</button>
            <Link to={"/profile"} state={{username: localStorage.getItem("username")}}>Profile test</Link>
            <hr/>
        </div>
    );
}

export default Header;