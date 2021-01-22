import React from "react";
import { Link } from 'react-router-dom'

function Home() {
    return <div>Hey, this is Homepage!, go to <Link to="/dashboard">Dashboard</Link></div>;
}

export default Home;
