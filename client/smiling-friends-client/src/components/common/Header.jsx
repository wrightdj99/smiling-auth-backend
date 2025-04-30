import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
            <hr/>
        </div>
    );
}

export default Header;