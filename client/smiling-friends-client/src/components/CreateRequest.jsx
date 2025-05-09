import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function CreateRequest() {
    const location = useLocation();
    const [ username, setUsername ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('')
    const data = location;
    useEffect(() => {
        if (location.state) {
            setUsername(location.state.username);
        } else {
            setUsername(localStorage.getItem("username"));
        }
    });
    function handleSubmit() {
        axios.post("http://localhost:7001/api/requests/createRequest", {
            "username": username,
            "title": title,
            "content": content
        }).then(res => {
            alert("It's done");
        }).catch(error => {
            console.error(error);
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Create Smile Request</h1>
                <h3>Author: <input type="text" name="author" readOnly={true} value={username}/></h3>
                <h3>Title: <input type="text" name="title" onChange={(event)=>setTitle(event.target.value)}/></h3>
                <h3>Content: <textarea type="text" name="content" rows="4" cols="50" onChange={(event)=>setContent(event.target.value)}/></h3>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default CreateRequest;