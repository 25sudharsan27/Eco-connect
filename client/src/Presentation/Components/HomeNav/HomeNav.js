import './HomeNav.css';

const HomeNav = ({ st }) => {

    const handleClick = (e) => {
        console.log("hi");
        st(e);
    }

    return (
        <div className="home-nav">
            <div id="home-nav-container" className="campspostsnavbar">
                <div onClick={() => handleClick("posts")} id="homenav-posts" className="campspostsnavbar-item">
                    <button id="camps-post-nav" className="camps-posts">Posts</button>
                </div>
                <div onClick={() => handleClick("camps")} id="homenav-camps" className="campspostsnavbar-item">
                    <button id="camps-post-nav" className="camps-posts">Campaigns and Events</button>
                </div>
                <div onClick={() => handleClick("people")} id="homenav-camps" className="campspostsnavbar-item">
                    <button id="camps-post-nav" className="camps-posts">Peoples & Organizations</button>
                </div>
            </div>
        </div>
    );
}

export default HomeNav;
