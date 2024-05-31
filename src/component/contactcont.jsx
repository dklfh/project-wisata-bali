import Navbar from "./navbar";
import background from "../img/contact-bg.jpg";
import Footer from "./footer";

function contactcont() {
  return (
    <section className="bg-black-bg font-ibmflexmono w-screen h-screen text-white">
      <div className="bg-black text-white">
        <Navbar />
        <section
          class="bg-cover bg-center w-screen h-screen items-center justify-center flex relative"
          style={{
            maskImage: `linear-gradient(
        to top,
        rgba(255, 0, 0, 0) 0%,
        rgb(69, 211, 22) 12.5%,
        rgb(65, 22, 221) 87.5%,
        rgba(20, 225, 222, 0) 100%
            )`,
            backgroundImage: `url(${background})`,
          }}
        >
          <div class="absolute inset-0 bg-black opacity-30"></div>
          <h1 class="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-2xl md:text-4xl font-ibmflexmono text-center">
            Contact Us
          </h1>
        </section>
        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Get In Touch</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            We are here to help you. Reach out to us via any of the following
            methods.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
            <div className="p-4 shadow-lg rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold">Call Us</h3>
              <p className="text-gray-300 mt-2">+62 89 723 408 961</p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold">Email Us</h3>
              <p className="text-gray-300 mt-2">GogoBali@gmail.com</p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold">Visit Us</h3>
              <p className="text-gray-300 mt-2">Denpasar,Bali,Indonesia</p>
            </div>
          </div>
        </section>
        <section className="bg-gray-900 py-12 px-4">
          <h2 className="text-2xl font-bold text-center">Send Us A Message</h2>
          <form className="max-w-2xl mx-auto mt-8 space-y-8">
            <div>
              <label htmlFor="name" className="block text-gray-300 font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 p-3 border border-gray-600 rounded-lg shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-3 border border-gray-600 rounded-lg shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 font-bold"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full mt-2 p-3 border border-gray-600 rounded-lg shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-3 rounded-lg shadow-lg hover:bg-button-bg transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>
        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-8">
            <div className="p-4 border rounded-lg shadow-md bg-gray-800 hover:bg-gray-700 transition transform hover:scale-100 scale-90">
              <h3 className="text-xl font-bold">What is GoGoBali?</h3>
              <p className="mt-2 text-gray-300">
                GoGoBali is a website that provides complete information about
                various tourist attractions in Bali, including popular
                destinations, hidden attractions, things to do, and travel tips.
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-md bg-gray-800 hover:bg-gray-700 transition transform hover:scale-100 scale-90 mt-4">
              <h3 className="text-xl font-bold">
                Does GoGoBali provide travel guides for each destination?
              </h3>
              <p className="mt-2 text-gray-300">
              Yes, every destination on GoGoBali is equipped with a tourist guide which includes important information such as address, opening hours, ticket prices and visiting tips.
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-md bg-gray-800 hover:bg-gray-700 transition transform hover:scale-100 scale-90  mt-4">
              <h3 className="text-xl font-bold">
              Can I leave a review about a place I visited via GoGoBali?
              </h3>
              <p className="mt-2 text-gray-300">
              Yes, we really appreciate user reviews. You can provide reviews and ratings on the destination pages you visit.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </section>
  );
}

export default contactcont;
