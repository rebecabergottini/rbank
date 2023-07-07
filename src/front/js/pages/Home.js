import React from "react";

import {
  Business,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  CardDeal,
  Hero,
} from "../component/index.js";
import Dashboard from "./Dashboard.js";

const Home = () => (
  <div className="bg-dark text-white w-full overflow-hidden">
    <div className="container">
      <Navbar />
    </div>

    <div className="bg-dark">
      <div className="container">
        <Hero />
      </div>
    </div>
    <div className="bg-dark">
      <div className="container">
        <Stats />
        <Business />
        <Testimonials />
        <CardDeal />
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;
