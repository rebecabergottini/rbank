import React from "react";
import FeedbackCard from "./FeedbackCard.js";

const Testimonials = () => {
  const testimonials = [
    // Aquí puedes agregar tus testimonios o importarlos desde algún otro archivo
    { id: 1, name: "John Doe", text: "Lorem ipsum dolor sit amet." },
    { id: 2, name: "Jane Smith", text: "Consectetur adipiscing elit." },
  ];

  return (
    <section
      id="clients"
      className="sm:py-16 py-6 flex-col relative flex justify-center items-center"
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className="font-poppins font-semibold xs:text-48 text-40 text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className="font-poppins font-normal text-dimWhite text-18 leading-[30.8px] text-left max-w-[450px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {testimonials.map((testimonial) => (
          <FeedbackCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
