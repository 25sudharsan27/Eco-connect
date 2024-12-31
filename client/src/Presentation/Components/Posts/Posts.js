import './Posts.css';
import React, { useState } from 'react';
import like from '../../Images/like1.svg';
import comments from '../../Images/comments.svg';

const Posts = () => {
    const data = [
        {
            "image": "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            "content": "My journey into the world of finance started about a year ago, driven by nothing more than curiosity—an eagerness to understand how investments and markets work. Over the past year, I've been learning through books and online resources, and clearing the Investor Certification Examination conducted by SEBI and NISM has been a validating step in this process. This achievement has given me more confidence and authority in a field I’m deeply passionate about. There’s still a long way to go, but I’m truly excited for what’s ahead.",
            "title": "Pragmatic Project Consillium",
            "likes": 10,
            "comments": 5,
            "date": "10-12-2024",
            "volunteer": 27,
            "comments_data": [
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User123",
                    "date": "10-12-2024",
                    "content": "This is a comment"
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User124",
                    "date": "10-12-2024",
                    "content": "This is another comment"
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User125",
                    "date": "10-12-2024",
                    "content": "Interesting post!"
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User126",
                    "date": "10-12-2024",
                    "content": "I like this topic."
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User127",
                    "date": "10-12-2024",
                    "content": "Great read!"
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User123",
                    "date": "10-12-2024",
                    "content": "This is a comment"
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User124",
                    "date": "10-12-2024",
                    "content": "This is another comment"
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User125",
                    "date": "10-12-2024",
                    "content": "Interesting post!"
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User126",
                    "date": "10-12-2024",
                    "content": "I like this topic."
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User127",
                    "date": "10-12-2024",
                    "content": "Great read!"
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User123",
                    "date": "10-12-2024",
                    "content": "This is a comment"
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User124",
                    "date": "10-12-2024",
                    "content": "This is another comment"
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User125",
                    "date": "10-12-2024",
                    "content": "Interesting post!"
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User126",
                    "date": "10-12-2024",
                    "content": "I like this topic."
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User127",
                    "date": "10-12-2024",
                    "content": "Great read!"
                }
            ]
        },
        {
            "image": "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            "content": "A contract breach occurs when a party fails to perform any term of the agreement without a legitimate legal excuse. The impacted party may seek remedies in the form of damages or contract termination.",
            "title": "Contract Law Insights",
            "likes": 20,
            "comments": 15,
            "date": "09-12-2024",
            "volunteer": 27,
            "comments_data": [
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User128",
                    "date": "09-12-2024",
                    "content": "This is a great explanation!"
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User129",
                    "date": "09-12-2024",
                    "content": "Very informative, thanks!"
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User130",
                    "date": "09-12-2024",
                    "content": "Could you clarify the difference between breach of contract and force majeure?"
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User131",
                    "date": "09-12-2024",
                    "content": "Nice post, learned a lot."
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User132",
                    "date": "09-12-2024",
                    "content": "I appreciate the insights provided."
                }
            ]
        },
        {
            "image": "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            "content": "The doctrine of promissory estoppel ensures that a promise made without a formal contract can still be enforced, especially when one party relies on it to their detriment.",
            "title": "Estoppel in Business Transactions",
            "likes": 30,
            "comments": 25,
            "date": "08-12-2024",
            "volunteer": 27,
            "comments_data": [
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User133",
                    "date": "08-12-2024",
                    "content": "Interesting topic. I need to read more about this."
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User134",
                    "date": "08-12-2024",
                    "content": "I didn't know this could be legally binding without a contract."
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User135",
                    "date": "08-12-2024",
                    "content": "Thanks for sharing this insight!"
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User136",
                    "date": "08-12-2024",
                    "content": "This is a key concept in contract law!"
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User137",
                    "date": "08-12-2024",
                    "content": "I never thought about estoppel this way."
                }
            ]
        },
        {
            "image": "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            "content": "A force majeure clause in a contract allows parties to suspend or terminate their obligations due to unexpected events such as natural disasters or pandemics.",
            "title": "Understanding Force Majeure Clauses",
            "likes": 12,
            "comments": 7,
            "date": "07-12-2024",
            "volunteer": 27,
            "comments_data": [
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User138",
                    "date": "07-12-2024",
                    "content": "Great explanation. This clause is crucial for risk management."
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User139",
                    "date": "07-12-2024",
                    "content": "I didn’t know this could cover pandemics."
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User140",
                    "date": "07-12-2024",
                    "content": "Force majeure is often misunderstood."
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User141",
                    "date": "07-12-2024",
                    "content": "Helpful post. Many contracts should consider this clause."
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User142",
                    "date": "07-12-2024",
                    "content": "This is an important legal concept, thanks for sharing."
                }
            ]
        },
        {
            "image": "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            "content": "In business, a non-compete agreement restricts employees from working with competitors for a certain period after leaving the company to protect proprietary information.",
            "title": "Non-Compete Agreements Explained",
            "likes": 40,
            "comments": 12,
            "date": "06-12-2024",
            "volunteer": 27,
            "comments_data": [
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User143",
                    "date": "06-12-2024",
                    "content": "A non-compete agreement can be quite restrictive but necessary for businesses."
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User144",
                    "date": "06-12-2024",
                    "content": "Interesting to see how this protects intellectual property."
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User145",
                    "date": "06-12-2024",
                    "content": "These agreements can sometimes be too broad."
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User146",
                    "date": "06-12-2024",
                    "content": "How enforceable are these agreements after employees leave?"
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User147",
                    "date": "06-12-2024",
                    "content": "It's important to make sure they are reasonable and fair."
                }
            ]
        },
        {
            "image": "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
            "content": "A memorandum of understanding (MOU) is an agreement between two or more parties that outlines the terms of a potential contract but is not legally binding unless formalized.",
            "title": "What is an MOU?",
            "likes": 25,
            "comments": 18,
            "date": "05-12-2024",
            "volunteer": 27,
            "comments_data": [
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User148",
                    "date": "05-12-2024",
                    "content": "This is a helpful definition of an MOU."
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User149",
                    "date": "05-12-2024",
                    "content": "Can an MOU be enforced if both parties act on it?"
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User150",
                    "date": "05-12-2024",
                    "content": "This is useful for understanding how businesses engage."
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User151",
                    "date": "05-12-2024",
                    "content": "I’ve seen MOUs used in many startup collaborations."
                },
                {
                    "image": "https://www.w3schools.com/howto/img_avatar.png",
                    "name": "User152",
                    "date": "05-12-2024",
                    "content": "MOUs are often a precursor to a formal contract."
                }
            ]
        }
    ]
    const [expandedPosts, setExpandedPosts] = useState({}); // For expanding post content
  const [expandedComments, setExpandedComments] = useState({}); // For controlling the number of comments shown

  const toggleContent = (index) => {
    setExpandedPosts((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleComments = (index) => {
    setExpandedComments((prev) => ({ ...prev, [index]: prev[index] ? prev[index] + 5 : 5 }));
  };

  return (
    <div className="home-post-container">
      {data.map((item, index) => (
        <div className="home-post-item" key={index}>
          <div className="home-post-top">
            <div className="home-post-user">
              <img src="https://www.w3schools.com/howto/img_avatar.png" className="home-post-user-image" alt="user" />
              <h1 className="home-post-username">User123</h1>
            </div>
            <button className="home-post-btn">Follow</button>
          </div>
          <img src={item.image} className="home-post-image" alt="post" />
          <div className="home-post-bottom">
            <h1 className="home-post-date">{item.date}</h1>
            <div className="home-post-details">
              <div>
                <h1 className="home-post-title">{item.title}</h1>
                
              </div>
            </div>

            <p className="home-post-content">
              {expandedPosts[index] ? item.content : `${item.content.substring(0, 400)}...`}
            </p>
            <div className="home-post-show-more1">
                <button onClick={() => toggleContent(index)} className="home-post-show-more">
                {expandedPosts[index] ? "Show Less" : "Show More"}
                </button>
                <div className="home-post-info">
                    <div className="home-post-likes">
                        <img src={like} className="home-post-like-icon" alt="like" />
                        <h1>{item.likes}</h1>
                    </div>
                    <div className="home-post-likes">
                    <img src={comments} className="home-post-like-icon" alt="like" />
                    <h1>{item.comments}</h1>
                        
                    </div>
                    
                </div>
            </div>

            

            <div className="home-post-comments-container">
              {expandedComments[index] > 0 && (
                item.comments_data.slice(0, expandedComments[index]).map((comment, idx) => (
                  <div className="home-post-comment" key={idx}>
                    <div className="home-post-comment-content">
                      <img src={comment.image} className="home-post-comment-image" alt="user" />
                      <h1 className="home-post-comment-username">{comment.name}</h1>
                      <h1 className="home-post-comment-date">{comment.date}</h1>
                    </div>
                    <p className="home-post-comment-text">{comment.content}</p>
                  </div>
                ))
              )}
            </div>
            <button onClick={() => toggleComments(index)} className="home-post-show-more">
                  {expandedComments[index]  ?  "Show comments" :"Show comments"}
                </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;