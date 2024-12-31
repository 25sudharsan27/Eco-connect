import './AboutTag.css';
import address from '../../Images/address.svg';
import phone from '../../Images/phone.svg';

const AboutTag = () => {

    return (
        <div style={{display:'flex',flexDirection:"column",position:"relative"}}>
        <div className="about-tag">
            
            <div className="about-tag2">
                
                <div className="about-tag-left1">
                    
                    <div className="about-tag-left">
                        <div className="about-tag-username">
                            <div className="about-profile-pic">
                                <img className="about-profile-p" src="https://www.w3schools.com/howto/img_avatar.png" alt="profile-pic" />
                            </div>
                            <h1 className="about-comp-name">COMPANY NAME</h1>
                            <h1 className="about-tag-name">#Tagline</h1>
                        </div>
                        <div className="about-tag-btn">
                        <button className="about-tag-bt">Join</button>
                        <button className="about-tag-bt">Message</button>
                        <button className="about-tag-bt">Follow</button>
                        </div>
                    </div>
                    
                </div>
                
                <div className="about-tag-right">
                    <div className="ab1">
                        <img className="about-tag-address-img" src={address} alt="map" />
                    <div className="about-tag-address">
                        <h1 className="about-tag-city">Dindigul</h1>
                        <h1 className="about-tag-state" >Tamil Nadu</h1>
                        <h1 id="about-tag-country" className="about-tag-country">India</h1>
                    </div>
                    </div>
                    <div className="ab1">
                        <img className="about-tag-address-img" src={phone} alt="map" />

                        <div className="about-ph-no">
                            <h1 id="about-tag-ph-no" className="about-tag-ph-no">+91 1234567890</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-decoration-cont1">
            <div className="about-decoration-cont" >

            </div>
            </div>
        </div>
    )
}

export default AboutTag;