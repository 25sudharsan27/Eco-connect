import Navbar from '../../Components/Navbar/Navbar';
import HomeNav from '../../Components/HomeNav/HomeNav';
import Posts from '../../Components/Posts/Posts';
import { useState } from 'react';

import General from '../../Components/General/General';
import Camps from '../../Components/ConnectionCamps/ConnectionCamps';
const Home = () => {
    const [curstate, setCurstate] = useState("General");
    const navlist = ["General", "Camps & Events"];
    
    return (
        <div className="root">
            <Navbar statelocation="home"/>
             
            <HomeNav st={setCurstate} navlist={navlist}/>

            {/* {curstate === "Posts" ? <Posts/> : (curstate === "Camps & Events" ? <Camps/> : (curstate === "Peoples & Organizations" ? <Peoples/> : <h1>404</h1>))} */}
            {curstate === "General" ? <General/> : (curstate === "Camps & Events" ? <Camps/> : <h1>404</h1>)}
            {/* <h1>Home</h1> */}
        </div>
    );
}

export default Home;