import React from "react";

const Footer = () => {
  return (
    <div className="footer section_padding">
      <div className="footer-top">
        <div className="footer-top-heading">
          <img src="" alt="logo" />
          <p>A new way to make the payments easy, reliable and secure</p>
        </div>
        <div className="footer-top-links">
          <div className="footer-top-links-1">
            <h4>Useful Links</h4>
            <a href="">Content</a>
            <a href="">How it Works</a>
            <a href="">Create</a>
            <a href="">Explore</a>
            <a href="">Terms & Services</a>
          </div>
          <div className="footer-top-links-1">
            <h4>Community</h4>
            <a href="">Help Center</a>
            <a href="">Partners</a>
            <a href="">Suggestions</a>
            <a href="">Blog</a>
            <a href="">Newsletters</a>
          </div>
          <div className="footer-top-links-1">
            <h4>Partner</h4>
            <a href="">Our Partner</a>
            <a href="">Become a Partner</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>Copyright C 2023 RBank. All Rights Reserved.</p>
        <div className="footer-bottom-icon">
          <img src="" alt="instagram" />
          <img src="" alt="facebook" />
          <img src="" alt="twitter" />
          <img src="" alt="linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
