import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./common/Header";

function Home() {
    const { state } = useLocation();
    return (
        <div>
            <h1>Home for {localStorage.getItem("username")}</h1>
        </div>
    );
}

export default Home;