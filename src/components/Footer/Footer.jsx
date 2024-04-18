export default function Footer() {
  return (
    <footer
      className="border-y text-white text-center"
      style={{ backgroundColor: "#F0F8FF " }}
    >
      <div className="max-w-6xl mx-auto my-8 p-8 bg-white rounded-lg shadow-lg ">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button className="bg-blue-900 text-white font-semibold px-9 py-1 rounded-md my-2 hover:underline">
            Send Message
          </button>
        </form>
      </div>
    </footer>
  );
}
