import Navbar from '../../Components/Navbar/Navbar';
import './Home.css';
import HomeNav from '../../Components/HomeNav/HomeNav';
import Posts from '../../Components/Posts/Posts';
import { useState } from 'react';
import Camps from '../../Components/Camps/Camps';
import Peoples from '../../Components/Peoples/Peoples';
const Home = () => {
    const [curstate, setCurstate] = useState("Posts");
    const navlist = ["Posts", "Camps & Events", "Peoples & Organizations"];
    
    return (
        <div className="root">
            <Navbar statelocation="home"/>
             
            <HomeNav st={setCurstate} navlist={navlist}/>
            {curstate === "Posts" ? <Posts/> : (curstate === "Camps & Events" ? <Camps/> : (curstate === "Peoples & Organizations" ? <Peoples/> : <h1>404</h1>))}

            {/* <h1>Home</h1> */}
        </div>
    );
}

export default Home;