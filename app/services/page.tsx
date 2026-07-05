import Link from "next/link";

const services = [
  "Regular Cleaning",
  "Deep Cleaning",
  "Post-Construction Cleaning",
  "Move In / Move Out",
  "Monthly Cleaning",
  "Handyman Works",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-cyan-50 text-[#034646]">
      {/* Page Header */}
      <section className="px-6 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold sm:text-4xl">Our Services</h1>

          <p className="mt-4 max-w-2xl text-base leading-7 sm:text-lg">
            As a family-owned business, we take pride in providing dependable cleaning and handyman services with honest pricing, quality 
            work, and attention to detail. We treat every home as if it were our own and strive to exceed our customers&apos; expectations. 
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-[#FFCB80] px-6 py-10 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service}
              className="flex min-h-36 items-start justify-center bg-white px-6 py-6 text-center sm:min-h-40"
            >
              <h2 className="text-xl font-bold sm:text-2xl">{service}</h2>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="px-6 py-14 text-center sm:px-8 lg:px-16">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Need a Custom Solution?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-7 sm:text-lg">
          Every property has unique needs. If you&apos;re looking for a service that&apos;s not listed or would like a personalized quote,
          we&apos;re here to help. Contact us today to discuss your project, and we&apos;ll work with you to find the right solution.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block border-2 border-[#034646] bg-yellow-200 px-8 py-3 font-bold text-[#034646] transition hover:bg-yellow-300"
        >
          Get a Quote
        </Link>
      </section>
    </main>
  );
}