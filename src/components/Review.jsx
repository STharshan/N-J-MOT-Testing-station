import React from 'react';

const reviews = [
  {
    text: "My car recently broke down in Manchester, Neil and Jen were able to arrange someone to tow the vehicle to their garage. Work was carried out which wasn't easy and my car was returned with all work completed to a high standard. Thank you so much.",
    name: "Emma Spruell",
    aos: "fade-up",
    delay: 0,
  },
  {
    text: "Took my bmw in for an interim service, change the ignition coils, and to change the lambda sensor. Diagnostic done and I was advised I didn't need one, money saved. All other jobs done professionally and with care. My car is now driving like a new car. This garage is more than a 5☆ and are totally honest. I would highly recommend",
    name: "Stephen Clarke",
    aos: "fade-down",
    delay: 100,
  },
  {
    text: "What an absolute find this place is, fitted my own parts for me at a very reasonable price. I've been a taxi driver for 12 years and been to many garages, some rip offs but definitely not these guys. I will most definitely return here in future. Neil and team are fantastic. Thanks again N and J",
    name: "Leanne Williams",
    aos: "fade-up",
    delay: 200,
  },
  {
    text: "Went for my mot this morning couldn't believe how hasstle free it was thanks guys wonderful service.",
    name: "Pat Swain",
    aos: "fade-down",
    delay: 300,
  },
  {
    text: "Really friendly place and pleasant people. Good reliable honest garage. Having been a mechanic for many years and now not on the spanners anymore I don't take my car anywhere else! Highly recommended. Thanks n&j",
    name: "Ad Gray",
    aos: "fade-up",
    delay: 400,
  },
  {
    text: "Had my MOT done here today. Great customer service with friendly staff. Fab location and easy to get to. Genuine and don't try to rip you off! Thanks!",
    name: "Jenny Gore",
    aos: "fade-down",
    delay: 500,
  },
];

const StarRating = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 fill-current text-yellow-400"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ review, index }) => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-[#084298] transition-all duration-300 hover:shadow-lg hover:shadow-[#084298]/20 flex flex-col h-full overflow-hidden">
      {/* Bottom Right Gradient */}
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-tl from-[#084298]/20 via-[#D70C09]/10 to-transparent blur-2xl rounded-full pointer-events-none" />

      <div className="relative z-10">
        <StarRating />
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 flex-grow">
          "{review.text}"
        </p>
        <div className="flex items-center gap-3 mt-auto">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#084298] to-[#D70C09] flex items-center justify-center text-white font-semibold text-sm md:text-base">
            {review.name.charAt(0)}
          </div>
          <div>
            <p className="text-white font-semibold text-sm md:text-base">
              {review.name}
            </p>
            <p className="text-gray-400 text-xs md:text-sm">Verified Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#020617] to-[#020617] overflow-hidden"
      id="testimonials"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)]/10 blur-3xl rounded-full" />

      {/* Background Image */}
      {/* <div
          className="absolute inset-0 bg-center bg-no-repeat opacity-100"
          style={{
            backgroundImage: "url('logo.png')",
            backgroundSize: "contain", // makes it zoom out instead of cover
          }}
        ></div> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Customers Love
            <br />
            Our Service
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Real customers, real results with honest and reliable service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <TestimonialCard key={index} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;