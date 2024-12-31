import Navbar from '../../Components/Navbar/Navbar';
import './Home.css';
import HomeNav from '../../Components/HomeNav/HomeNav';
import Posts from '../../Components/Posts/Posts';

const Home = () => {
    return (
        <div className="root">
            <Navbar/>
            <HomeNav/>
            <Posts/>
            {/* <h1>Home</h1> */}
        </div>
    );
}

export default Home;