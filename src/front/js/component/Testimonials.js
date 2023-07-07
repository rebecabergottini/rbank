import React from "react";
import QuoteCards from "../component/QuoteCards.js";

const Testimonials = () => {
  const testimonials = [
    // Aquí puedes agregar tus testimonios o importarlos desde algún otro archivo
    {
      id: "1",
      text: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Herman Jensen",

      title: "Founder & Leader",
    },
    {
      id: "2",
      text: "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Steve Mark",
      title: "Founder & Leader",
    },
    {
      id: "3",
      text: "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Kenn Gallagher",
      title: "Founder & Leader",
    },
  ];

  return (
    <div className="testi section_padding">
      <div className="testi-text">
        <h1>What People are saying about us</h1>
        <p>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="testi-quote">
        {testimonials.map((card) => (
          <QuoteCards
            key={card.id}
            title={card.title}
            text={card.text}
            name={card.name}
            image={card.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
