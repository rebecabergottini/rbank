import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="py-4" style={{ background: "rgba(11, 10, 12, 0.6)" }}>
      <Container className="d-flex flex-column flex-sm-row align-items-center justify-content-center text-center">
        <h5 className="mr-3 mb-0 m-1">Legal Notice</h5>
        <h5 className="mr-3 mb-0 m-1">Cookies</h5>
        <h5 className="mr-3 mb-0 m-1">Personal Data</h5>
        <h5 className="mr-3 mb-0 m-1">Legal Reports</h5>
        <h5 className="mr-3 mb-0 m-1">Services</h5>
        <h5 className="mb-0">Payment Services</h5>
      </Container>
    </footer>
  );
};

export default Footer;
