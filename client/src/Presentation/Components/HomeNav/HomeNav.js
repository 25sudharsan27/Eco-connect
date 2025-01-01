import './HomeNav.css';

const HomeNav = ({ st ,navlist}) => {

    const handleClick = (e) => {
        console.log("hi");
        st(e);
    }
    const list = navlist;
    return (
        <div className="home-nav">
            <div id="home-nav-container" className="campspostsnavbar">
                {list.map((item,index)=>
                    
                        <div onClick={() => handleClick(item)} id="homenav-camps" className="campspostsnavbar-item">
                            <button id="camps-post-nav" className="camps-posts">{item}</button>
                        </div>
                    )
                }
                
            </div>
        </div>
    );
}

export default HomeNav;
