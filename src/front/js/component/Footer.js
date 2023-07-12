import React from "react";
import logo from "../../img/logo.png"
import social from "../../img/social.png"


const Footer = () => {
  return (
    <div className="footer section_padding">
      <div className="footer-top">
        <div className="centered-content">
          <img src={logo} alt="logo" /><br></br>
          <p>A new way to make the payments easy, reliable and secure</p>
        </div>
        </div>
        <div className="footer-top-links">
          <div className="footer-top-links-1">
            <h4>Useful Links</h4>
            <a>Content</a>
            <a>How it Works</a>
            <a>Create</a>
            <a>Explore</a>
            <a>Terms & Services</a>
          </div>
          <div className="footer-top-links-1">
            <h4>Community</h4>
            <a>Help Center</a>
            <a>Partners</a>
            <a>Suggestions</a>
            <a>Blog</a>
            <a>Newsletters</a>
          </div>
          <div className="footer-top-links-1">
            <h4>Partner</h4>
            <a>Our Partner</a>
            <a>Become a Partner</a>
          </div>
        </div>
      <hr />
      <div className="footer-bottom">
        <p>Copyright C 2023 RBank. All Rights Reserved.</p>
        <div className="footer-bottom-icon" >
          <img src={social} alt="instagram" style={{width: "168px", marginBottom: "15px"}} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
