import { useLocation } from "react-router-dom";
import Header from "./common/Header";
import RequestList from "./RequestList";
import { morningOrAfternoonGreeting } from "../helpers/dateTimeHelper";

function Home() {
    const { state } = useLocation();
    return (
        <div>
            <h1>{morningOrAfternoonGreeting(new Date(), localStorage.getItem("username"))}</h1>
            <RequestList username={localStorage.getItem("username")}/>
        </div>
    );
}

export default Home;