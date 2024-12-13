import './Navbar.css';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.navbar') && !event.target.closest('.dropdown1')) {
                setShowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className="navbar">
                <h1 className="navbar-logo">EcoConnect</h1>
                <div className="navbar-right">
                    <a className="navbar-links" href="/">Home</a>
                    <a className="navbar-links" href="/profile">Profile</a>
                    <a className="navbar-links" href="/connect">Connections</a>
                    <a className="navbar-links" href="/settings">Settings</a>
                    <div onClick={() => setShowMenu(!showMenu)} className="profile-pic">
                        <img className="profile-pic-img" src="https://www.w3schools.com/howto/img_avatar.png" alt="profile-pic" />
                    </div>
                </div>
            </div>

            {showMenu && (
                <div className="dropdown1">
                    <div className="dropdown">
                        <a className="dropdown-links" href="#">Help</a>
                        <div className="dropdown-content-line"></div>
                        <h1 className="dropdown-link-heading">Camps & Events</h1>
                        <a className="dropdown-links" href="#">View Camps</a>
                        <a className="dropdown-links" href="#">Create Camp</a>
                        <a className="dropdown-links" href="#">Join Requests</a>
                        <div className="dropdown-content-line"></div>
                        <h1 className="dropdown-link-heading">Posts</h1>
                        <a className="dropdown-links" href="#">View Posts</a>
                        <a className="dropdown-links" href="#">Create Post</a>
                        <a className="dropdown-links" href="#">Logout</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
