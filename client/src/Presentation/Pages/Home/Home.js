import Navbar from '../../Components/Navbar/Navbar';
import './Home.css';
import HomeNav from '../../Components/HomeNav/HomeNav';
import Posts from '../../Components/Posts/Posts';
import { useState } from 'react';
import Camps from '../../Components/Camps/Camps';
import Peoples from '../../Components/Peoples/Peoples';
const Home = () => {
    const [curstate, setCurstate] = useState("posts");
    
    
    return (
        <div className="root">
            <Navbar statelocation="home"/>
             
            <HomeNav st={setCurstate}/>
            {curstate === "posts" ? <Posts/> : (curstate === "camps" ? <Camps/> : (curstate === "people" ? <Peoples/> : <h1>404</h1>))}

            {/* <h1>Home</h1> */}
        </div>
    );
}

export default Home;