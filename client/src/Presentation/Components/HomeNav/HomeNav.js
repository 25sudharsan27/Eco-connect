import './HomeNav.css';



const HomeNav = () => {

    return (
        <div className="home-nav">
            <div className="campspostsnavbar">
                <div className="campspostsnavbar-item">
                    <a href="/camps" id="homenav-posts" className="camps-posts">Posts</a>
                </div>
                <div id="homenav-line" className="campspostsnavbar-item">
                    <a href="/posts" id="homenav-posts" className="camps-posts">Campaings and Events</a>
                </div>
            </div>
        </div>
    );
}

export default HomeNav;