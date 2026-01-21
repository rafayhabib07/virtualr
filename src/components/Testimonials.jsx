import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl lg:text-6xl sm:text-4xl text-center tracking-wide my-10 lg:my-20">
        What Prople Are Saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full lg:w-1/3 sm:w-1/2 px-4 py-2">
            <div className="bg-neutral text-md roundrd-md border p-6 border-neutral-800 font-thin hover:bg-gradient-to-r from-orange-to-400 to-orange-700 text-white-100 font-bold transition">
              <p >{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  src={testimonial.image}
                  alt={testimonial.user}
                  className="w-12 h-12 rounded-full mr-6 border border-neutral-300"
                />
                <div>
                    <h6>{testimonial.user}</h6>
                    <span className="text-sm font-normal italic text-neutral-600 hover:text-white">{testimonial.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
