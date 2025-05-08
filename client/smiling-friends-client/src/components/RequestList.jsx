import { useEffect, useState } from "react";
import axios from "axios";
import Request from "./Request";
function RequestList({username}) {

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            const res = await axios.get("http://localhost:7001/api/requests/viewRequests", {
                params: { username }
            }).then(result => setRequests(result.data.data));
        }
        fetchRequests();
    }, [username]);
    console.log(requests);
    return (
        <div>
            <h2>Testing for {username}</h2>
            <div>
                {requests.map((request) => (
                    <Request key={request.title} username={username} createdAt={request.createdAt} content={request.content} title={request.title}></Request>
                ))}
            </div>
        </div>
    );
}

export default RequestList;