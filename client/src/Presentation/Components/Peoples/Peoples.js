import message from '../../Images/message.svg';
import { useState } from 'react';
import like from '../../Images/like.png';
import comments from '../../Images/comments.png';
import './People.css';


const Peoples = () =>{
    const [showMessageBox, setShowMessageBox] = useState(false); // For toggling the message box visibility
        
     
      const toggleMessageBox = () => {
        setShowMessageBox(!showMessageBox); // Toggle message box visibility
      };


      const data = [
        { 
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            content: "Estoppel is a legal principle used in contracts to prevent someone from going back on their word or changing their position if it would unfairly harm someone who relied on that word or position.",
            title: "Pragmatic Project Consillium",
            likes: 10,
            comments: 5,
            address:"Ave, New York, NY 10003, USA",
            date: "10-12-2024"
        },
        {
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            content: "A contract breach occurs when a party fails to perform any term of the agreement without a legitimate legal excuse. The impacted party may seek remedies in the form of damages or contract termination.",
            title: "Contract Law Insights",
            likes: 20,
            address:"Zurich, Switzerland",
            comments: 15,
            date: "09-12-2024"
        },
        {
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            content: "The doctrine of promissory estoppel ensures that a promise made without a formal contract can still be enforced, especially when one party relies on it to their detriment.",
            title: "Estoppel in Business Transactions",
            likes: 30,
            address:"Ave, New York, NY 10003, USA",
            comments: 25,
            date: "08-12-2024"
        },
        {
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            content: "A force majeure clause in a contract allows parties to suspend or terminate their obligations due to unexpected events such as natural disasters or pandemics.",
            title: "Understanding Force Majeure Clauses",
            likes: 12,
            comments: 7,
            address:"Queens, NY, USA",
            date: "07-12-2024"
        },
        {
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            content: "In business, a non-compete agreement restricts employees from working with competitors for a certain period after leaving the company to protect proprietary information.",
            title: "Non-Compete Agreements Explained",
            likes: 40,
            address:"Noida, Uttar Pradesh, India",
            comments: 12,
            date: "06-12-2024"
        },
        {
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            content: "A memorandum of understanding (MOU) is an agreement between two or more parties that outlines the terms of a potential contract but is not legally binding unless formalized.",
            title: "What is an MOU?",
            likes: 25,
            address:"Tquiz, Islamabad, Pakistan",
            comments: 18,
            date: "05-12-2024"
        },
        { 
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            content: "Estoppel is a legal principle used in contracts to prevent someone from going back on their word or changing their position if it would unfairly harm someone who relied on that word or position.",
            title: "Pragmatic Project Consillium",
            likes: 10,
            comments: 5,
            address:"Ave, New York, NY 10003, USA",
            date: "10-12-2024"
        },
        {
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            content: "A contract breach occurs when a party fails to perform any term of the agreement without a legitimate legal excuse. The impacted party may seek remedies in the form of damages or contract termination.",
            title: "Contract Law Insights",
            likes: 20,
            address:"Zurich, Switzerland",
            comments: 15,
            date: "09-12-2024"
        },
        {
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            content: "The doctrine of promissory estoppel ensures that a promise made without a formal contract can still be enforced, especially when one party relies on it to their detriment.",
            title: "Estoppel in Business Transactions",
            likes: 30,
            address:"Ave, New York, NY 10003, USA",
            comments: 25,
            date: "08-12-2024"
        },
        {
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            content: "A force majeure clause in a contract allows parties to suspend or terminate their obligations due to unexpected events such as natural disasters or pandemics.",
            title: "Understanding Force Majeure Clauses",
            likes: 12,
            comments: 7,
            address:"Queens, NY, USA",
            date: "07-12-2024"
        },
        {
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            content: "In business, a non-compete agreement restricts employees from working with competitors for a certain period after leaving the company to protect proprietary information.",
            title: "Non-Compete Agreements Explained",
            likes: 40,
            address:"Noida, Uttar Pradesh, India",
            comments: 12,
            date: "06-12-2024"
        },
        {
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            content: "A memorandum of understanding (MOU) is an agreement between two or more parties that outlines the terms of a potential contract but is not legally binding unless formalized.",
            title: "What is an MOU?",
            likes: 25,
            address:"Tquiz, Islamabad, Pakistan",
            comments: 18,
            date: "05-12-2024"
        },
        { 
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            content: "Estoppel is a legal principle used in contracts to prevent someone from going back on their word or changing their position if it would unfairly harm someone who relied on that word or position.",
            title: "Pragmatic Project Consillium",
            likes: 10,
            comments: 5,
            address:"Ave, New York, NY 10003, USA",
            date: "10-12-2024"
        },
        {
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            content: "A contract breach occurs when a party fails to perform any term of the agreement without a legitimate legal excuse. The impacted party may seek remedies in the form of damages or contract termination.",
            title: "Contract Law Insights",
            likes: 20,
            address:"Zurich, Switzerland",
            comments: 15,
            date: "09-12-2024"
        },
        {
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            content: "The doctrine of promissory estoppel ensures that a promise made without a formal contract can still be enforced, especially when one party relies on it to their detriment.",
            title: "Estoppel in Business Transactions",
            likes: 30,
            address:"Ave, New York, NY 10003, USA",
            comments: 25,
            date: "08-12-2024"
        },
        {
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            content: "A force majeure clause in a contract allows parties to suspend or terminate their obligations due to unexpected events such as natural disasters or pandemics.",
            title: "Understanding Force Majeure Clauses",
            likes: 12,
            comments: 7,
            address:"Queens, NY, USA",
            date: "07-12-2024"
        },
        {
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            content: "In business, a non-compete agreement restricts employees from working with competitors for a certain period after leaving the company to protect proprietary information.",
            title: "Non-Compete Agreements Explained",
            likes: 40,
            address:"Noida, Uttar Pradesh, India",
            comments: 12,
            date: "06-12-2024"
        },
        {
            image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            content: "A memorandum of understanding (MOU) is an agreement between two or more parties that outlines the terms of a potential contract but is not legally binding unless formalized.",
            title: "What is an MOU?",
            likes: 25,
            address:"Tquiz, Islamabad, Pakistan",
            comments: 18,
            date: "05-12-2024"
        }
    ];
    return (
        <div className="home-post-container1">
            <div className="home-post-sidebar">
                <div id="homenav-line1" className="campspostsnavbar-item">
                        <a href="/camps" id="homenav-posts" className="camps-posts">Filters</a>
                </div>
            </div>
            <div id="home-post-cont" className={`home-post-container ${showMessageBox ? 'with-message-box' : ''}`}>
                {data.map((item, index) => {
                                    return (
                                        <div id="people-item" className="campspost-item" key={index}>
                                            <div id="people-top" className="campspost-top" >
                                                <img src={item.image} alt="campspost" className="peoples-img"/>
                                                <div  className="campspost-content" id="people-content" >
                                                    <h1 id='people-name' className="campspost-bottom-heading">{item.title}</h1>
                                                    <p id='people-address' className="campspost-bottom-date">{item.address}</p>
                                                    {/* <div className="campspost-content-2">
                                                        <p className="campspost-content-2-1">show more</p>
                                                        <div className="campspost-content-value">
                                                            <img src={like} alt="like" className="campspost-content-value-image"/>
                                                            <p className="campspost-content-value-1">{item.likes}</p>
                                                        </div>
                                                        <div className="campspost-content-value">
                                                            <img src={comments} alt="like" className="campspost-content-value-image"/>
                                                            <p className="campspost-content-value-1">{item.comments}</p>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div id="people-bot" className="campspost-bottom">
                                                <button id="people-btn1" className="home-post-btn">Connect</button>
                                                <button className="home-post-btn">Message</button>

                                            </div>
                                            
                                        </div>
                                    );
                                })}
            </div>
            <button className="floating-button" onClick={toggleMessageBox}><img src={message} className="float-btn-icon"/></button>
                    
                          {showMessageBox && (
                            <div className="home-message-bar">
                              {/* Message box content */}
                            </div>
                          )}
        </div>
    );
}

export default Peoples;