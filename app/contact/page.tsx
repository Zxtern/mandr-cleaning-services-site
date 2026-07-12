export default function ContactUsPage() {
  return (
    <main className="bg-cyan-50 text-[#034646]">
      {/* Header */}
      <section className="px-6 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold sm:text-4xl">Contact Us</h1>

          <p className="mt-4 max-w-2xl text-base leading-7 sm:text-lg">
            Ready to get started? Fill out the form below with your contact information and a brief description of the services you need. 
            We&apos;ll review your request and get back to you with a personalized, no-obligation quote as soon as possible. 
            We look forward to helping you keep your space clean, safe, and well-maintained!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#FFCB80] px-6 py-10 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[2fr_1.2fr]">
          {/* Form Card */}
          <div className="bg-white px-6 py-8 sm:px-10">
            <h2 className="mb-6 text-2xl font-bold">
              Request a Quote
            </h2>

            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium">
                    Full Name *
                  </label>
                  <input className="w-full border-2 border-gray-300 px-3 py-2" />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Email Address *
                  </label>
                  <input className="w-full border-2 border-gray-300 px-3 py-2" />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Phone Number
                  </label>
                  <input className="w-full border-2 border-gray-300 px-3 py-2" />
                </div>

                <div>
                  {/* TODO: TO edit the dropdown for confirmed service options */}
                  <label className="mb-2 block font-medium">
                    Service Needed
                  </label>
                  <select className="w-full border-2 border-gray-300 px-3 py-2">
                    <option value="">Select a service</option>
                    <option value="regular">Regular Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="post-construction">Post-Construction Cleaning</option>
                    <option value="move-in-out">Move In / Move Out</option>
                    <option value="monthly">Monthly Cleaning</option>
                    <option value="handyman">Handyman Works</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Message *
                </label>
                <textarea className="h-28 w-full border-2 border-gray-300 px-3 py-2" />
              </div>

              <button
                type="submit"
                className="bg-yellow-200 px-8 py-3 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side Info Cards */}
          <div className="space-y-6">
            <div className="bg-white px-6 py-6">
              <h2 className="mb-3 text-xl font-bold">Contact Information</h2>

              <p className="text-sm uppercase tracking-wide">Phone</p>
              <a href="tel:(408) 439-0839" className="block font-bold hover:underline">
                (408) 439 - 0839
              </a>
              <a href="tel:(650) 704-4639" className="block font-bold hover:underline">
                (650) 704 - 4639
              </a>
  
              <p className="mt-4 text-sm uppercase tracking-wide">Email</p>
              <a href="mailto:marcoandruth1@outlook.com" className="font-bold hover:underline">
                marcoandruth1@outlook.com
              </a>
            </div>

            <div className="bg-white px-6 py-6">
              <h2 className="mb-6 text-xl font-bold">Business Hours</h2>

              <div className="flex justify-between gap-6 text-sm">
                <p>Monday - Saturday</p>
                <p>8:00AM - 5:00PM</p>
              </div>

              <div className="mt-6 flex justify-between gap-6 text-sm">
                <p>Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}