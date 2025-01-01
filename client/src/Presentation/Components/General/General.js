import './General.css';
import { useState } from 'react';
import message from '../../Images/message.svg';


const General = () =>{
    const [showMessageBox, setShowMessageBox] = useState(false); // For toggling the message box visibility


    const toggleMessageBox = () => {
        setShowMessageBox(!showMessageBox); // Toggle message box visibility
      };

    const data = [
        {
            name: "John Doe",
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            tagline:"#NGO", 
            location:"Noida, Uttar Pradesh, India",

        },
        {
            name: "John Doe",
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            tagline:"#NGO", 
            location:"Noida, Uttar Pradesh, India",


        },
        {
            name: "John Doe",
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            tagline:"#NGO", 
            location:"Noida, Uttar Pradesh, India",


        },
        {
            name: "John Doe",
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            tagline:"#NGO", 
            location:"Noida, Uttar Pradesh, India",


        },
        {
            name: "John Doe",
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            tagline:"#NGO", 
            location:"Noida, Uttar Pradesh, India",


        },
        {
            name: "John Doe",
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            tagline:"#NGO", 
            location:"Noida, Uttar Pradesh, India",


        },
        {
            name: "John Doe",
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            tagline:"#NGO", 
            location:"Noida, Uttar Pradesh, India",


        },
        {
            name: "John Doe",
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            tagline:"#NGO", 
            location:"Noida, Uttar Pradesh, India",


        },
        {
            name: "John Doe",
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            tagline:"#NGO", 
            location:"Noida, Uttar Pradesh, India",


        },
        {
            name: "John Doe",
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            tagline:"#NGO", 
            location:"Noida, Uttar Pradesh, India",


        },
        {
            name: "John Doe",
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            tagline:"#NGO", 
            location:"Noida, Uttar Pradesh, India",


        },
        {
            name: "John Doe",
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            tagline:"#NGO", 
            location:"Noida, Uttar Pradesh, India",


        },
        {
            name: "John Doe",
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            tagline:"#NGO", 
            location:"Noida, Uttar Pradesh, India",


        },
        {
            name: "John Doe",
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            tagline:"#NGO", 
            location:"Noida, Uttar Pradesh, India",


        },
        {
            name: "John Doe",
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            tagline:"#NGO", 
            location:"Noida, Uttar Pradesh, India",


        },
        {
            name: "John Doe",
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            tagline:"#NGO", 
            location:"Noida, Uttar Pradesh, India",


        },
        


    ]
    const [sideNav, setSideNav] = useState("Pending");

    const handleClick = (navItem) => {
      setSideNav(navItem); // Update the side navigation state
    };
  
    return (
      <div className="home-post-container1">
        <div className="home-post-sidebar">
          <div id="homenav-line1" className="campspostsnavbar-item">
            <a onClick={() => handleClick("Pending")} id="homenav-posts" className="camps-posts">Pending</a>
            <a onClick={() => handleClick("Connections")} id="homenav-posts" className="camps-posts">Connections</a>
          </div>
        </div>
  
        <div id="home-post-cont" className={`home-post-container ${showMessageBox ? 'with-message-box' : ''} general-cont`}>
          {
            sideNav === "Pending" &&
            data.map((item, index) => (
              <div className="general-item" key={index}>
                <div className="general-top">
                  <img src={item.image} alt="campspost" className="general-image" />
                  <div className="general-content">
                    <h1 id="general-heading" className="campspost-bottom-heading">{item.name}</h1>
                    <p className="campspost-content">{item.location}</p>
                  </div>
                </div>
                <div className="general-bottom">
                  <button className="home-post-btn">Connect</button>
                  <button className="home-post-btn general-reject-btn">Reject</button>
                </div>
              </div>
            ))
          }
  
          {
            sideNav === "Connections" &&
            data.map((item, index) => (
              <div className="general-item" key={index}>
                <div className="general-top">
                  <img src={item.image} alt="campspost" className="general-image" />
                  <div className="general-content">
                    <h1 id="general-heading" className="campspost-bottom-heading">{item.name}</h1>
                    <p className="campspost-content">{item.location}</p>
                  </div>
                </div>
                <div className="general-bottom">
                  <button className="home-post-btn connections-message-btn">Message</button>
                  <button className="home-post-btn general-reject-btn">Remove</button>
                </div>
              </div>
            ))
          }
        </div>
  
        <button className="floating-button" onClick={toggleMessageBox}>
          <img src={message} className="float-btn-icon" alt="message-icon" />
        </button>
  
        {showMessageBox && (
          <div className="home-message-bar">
            {/* Message box content */}
          </div>
        )}
      </div>
    );
  };
  
  export default General;