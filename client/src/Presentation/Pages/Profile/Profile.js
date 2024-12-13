import Navbar from '../../Components/Navbar/Navbar';
import './Profile.css';

import Banner from '../../Components/Banner/Banner';
import AboutTag from '../../Components/AboutTag/AboutTag';
import About from '../../Components/About/About';
import CampsPosts from '../../Components/CampsPosts/CampsPosts';
import People from '../../Components/People/People';

const Profile = () => {
    return (
        <div>
            <Navbar />
            <Banner/>
            <AboutTag/>
            <About/>
            <CampsPosts/>
            <People/>
        </div>
    )
}


export default Profile;