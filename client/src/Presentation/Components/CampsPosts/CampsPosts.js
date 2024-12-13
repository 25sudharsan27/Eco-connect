import './CampsPosts.css';
import like from '../../Images/like.png';
import comments from '../../Images/comments.png';


const data = [
    { 
        image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
        content: "Estoppel is a legal principle used in contracts to prevent someone from going back on their word or changing their position if it would unfairly harm someone who relied on that word or position.",
        title: "Pragmatic Project Consillium",
        likes: 10,
        comments: 5,
        date: "10-12-2024"
    },
    {
        image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
        content: "A contract breach occurs when a party fails to perform any term of the agreement without a legitimate legal excuse. The impacted party may seek remedies in the form of damages or contract termination.",
        title: "Contract Law Insights",
        likes: 20,
        comments: 15,
        date: "09-12-2024"
    },
    {
        image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
        content: "The doctrine of promissory estoppel ensures that a promise made without a formal contract can still be enforced, especially when one party relies on it to their detriment.",
        title: "Estoppel in Business Transactions",
        likes: 30,
        comments: 25,
        date: "08-12-2024"
    },
    {
        image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
        content: "A force majeure clause in a contract allows parties to suspend or terminate their obligations due to unexpected events such as natural disasters or pandemics.",
        title: "Understanding Force Majeure Clauses",
        likes: 12,
        comments: 7,
        date: "07-12-2024"
    },
    {
        image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
        content: "In business, a non-compete agreement restricts employees from working with competitors for a certain period after leaving the company to protect proprietary information.",
        title: "Non-Compete Agreements Explained",
        likes: 40,
        comments: 12,
        date: "06-12-2024"
    },
    {
        image: "https://www.youngisthan.in/wp-content/uploads/2018/10/ngo-970x582.jpg",
        content: "A memorandum of understanding (MOU) is an agreement between two or more parties that outlines the terms of a potential contract but is not legally binding unless formalized.",
        title: "What is an MOU?",
        likes: 25,
        comments: 18,
        date: "05-12-2024"
    }
];

const CampsPosts = () => {
    return (
        <div className="campspostscontainer">
            <div className="campspostsnavbar">
                <div className="campspostsnavbar-item">
                    <a href="/camps" className="camps-posts">Camps</a>
                    <h1 className="camps-posts-btn">+</h1>
                </div>
                <div className="campspostsnavbar-item">
                    <a href="/posts" className="camps-posts">Posts</a>
                    <h1 className="camps-posts-btn">+</h1>
                </div>
            </div>
            <div className="campspostpage">
                {data.map((item, index) => {
                    return (
                        <div className="campspost-item" key={index}>
                            <div className="campspost-top">
                                <img src={item.image} alt="campspost" className="campspost-image"/>
                                <div className="campspost-content">
                                    <p className="campspost-content-1">{(item.content.length>100) ?  (item.content.substring(0,100)) :item.content}</p>
                                    <div className="campspost-content-2">
                                        <p className="campspost-content-2-1">show more</p>
                                        <div className="campspost-content-value">
                                            <img src={like} alt="like" className="campspost-content-value-image"/>
                                            <p className="campspost-content-value-1">{item.likes}</p>
                                        </div>
                                        <div className="campspost-content-value">
                                            <img src={comments} alt="like" className="campspost-content-value-image"/>
                                            <p className="campspost-content-value-1">{item.comments}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="campspost-bottom">
                                <h1 className="campspost-bottom-heading">{item.title}</h1>
                                <p className="campspost-bottom-date">{new Date(item.date.split('-').reverse().join('-')).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                            </div>
                            
                        </div>
                    );
                })}
                <div className="campspost-footer">
                                <a href="#" className="campspost-readmore">Read More</a>
                            </div>
            </div>
        </div>
    )
}


export default CampsPosts;