import React from "react";

function Testimonials() {
  const testimonialsData = [
    {
        name: "Anna S.",
        role: "Travel Enthusiast",
        text: "A trip to Ubud was an amazing experience! We were greeted with warm hospitality and stunning views of the rice fields. Our tour guide was very knowledgeable and helpful. Will definitely come back again!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s",
        link: "#",
      },
      {
        name: "John D.",
        role: "Adventure Seeker",
        text: "Kuta Beach is the perfect place for surfing. The waves were great and the sunset views were incredible! I highly recommend this place for anyone who loves beaches and surfing.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s",
        link: "#",
      },
      {
        name: "Maria R.",
        role: "Food Lover",
        text: "Culinary in Bali really pampers the taste buds. From suckling pig to betutu chicken, everything is delicious! My culinary experience in Bali was unforgettable and I will definitely be back to sample more.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s",
        link: "#",
      },
  ];

  return (
    <section id="testimonies" className="py-20 bg-black-bg shadow-2xl" >
      <div className="max-w-6xl mx-auto px-8 md:px-10 lg:px-20 xl:px-0"  style={{
            maskImage: `linear-gradient(
        to top,
        rgba(255, 0, 0, 0) 0%,
        rgb(69, 211, 22) 12.5%,
        rgb(65, 22, 221) 87.5%,
        rgba(20, 225, 222, 0) 100%
            )`,
          }}>
        <div className="text-center mb-12 space-y-5 md:mb-16">
          <h1 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Testimonials from tourist
          </h1>
          <p className="text-sm text-gray-100 ">
            We are very happy to hear positive experiences from tourists who
            have visited various tourist destinations in Bali through our
            services. Below are some reviews from customers who have enjoyed the
            beauty and uniqueness of Bali.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="relative group text-sm leading-6">
              <div className="absolute transition rounded-lg opacity-0 -inset-1 bg-gradient-to-r from-orange-500 to-red-500 blur-sm duration-300 group-hover:opacity-75 group-hover:duration-200"></div>
              <a
                href={testimonial.link}
                className="relative block p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    className="w-12 h-12 bg-center bg-cover border rounded-full"
                    alt={testimonial.name}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-md">{testimonial.role}</p>
                  </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">
                  {testimonial.text}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
