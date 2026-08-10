"use client";

import { FormEvent, useState } from "react";

export default function ContactUsPage() {

const [status, setStatus] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);
const [isError, setIsError] = useState(false);

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  setIsSubmitting(true);
  setStatus("");

  const form = event.currentTarget;
  const formData = new FormData(form);

  const data = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Unable to send message");
    }
    setIsError(false);
    setStatus("Thank you! Your quote request has been sent.");
    form.reset();
  } catch {
    setIsError(true);
    setStatus(
      "We could not send your request. Please try again or contact us directly."
    );
  } finally {
    setIsSubmitting(false);
  }
}

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

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    name="fullName"
                    required 
                    className="w-full border-2 border-gray-300 px-3 py-2"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full border-2 border-gray-300 px-3 py-2" 
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    className="w-full border-2 border-gray-300 px-3 py-2" 
                    />
                </div>

                <div>
                  {/* TODO: TO edit the dropdown for confirmed service options */}
                  <label className="mb-2 block font-medium">
                    Service Needed
                  </label>
                  <select 
                    name="service" 
                    className="w-full border-2 border-gray-300 px-3 py-2"
                  >
                    <option value="">Select a service</option>
                    <option value="regular">Regular Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="post-construction">Post-Construction Cleaning</option>
                    <option value="move-in-out">Move In / Move Out</option>
                    <option value="monthly">Monthly Cleaning</option>
                    <option value="handyman">Handyman Works</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Message *
                </label>
                <textarea name="message" required className="h-28 w-full border-2 border-gray-300 px-3 py-2" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-yellow-200 px-8 py-3 font-semibold"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {status && (
                <p
                  className={`rounded-md px-4 py-3 font-medium text-white ${
                    isError ? "bg-red-600" : "bg-green-600"
                  }`}
                >
                  {isError ? "✕ " : "✓ "}
                  {status}
                </p>
              )}
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
                marcoandruth@outlook.com
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