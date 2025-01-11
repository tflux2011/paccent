const ContactSection = () => (
  <section id="contact" className="py-20 bg-amber-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">Phone Numbers:</h4>
                <p className="text-gray-600">+234(0)7088886966</p>
                <p className="text-gray-600">+234(0)7064620359</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Email Addresses:</h4>
                <p className="text-gray-600">info@pacecenturyminers.com</p>
                <p className="text-gray-600">pacecentminers@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Office Address:</h4>
                <p className="text-gray-600">
                  Suite 207, The Capital Hub Building,
                  <br />
                  Plot 272, Mabushi, FCT- Abuja,
                  <br />
                  Nigeria
                </p>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-700 focus:border-amber-700"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-700 focus:border-amber-700"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-700 focus:border-amber-700 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default ContactSection;
