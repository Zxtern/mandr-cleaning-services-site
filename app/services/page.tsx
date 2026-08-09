import Link from "next/link";

const services = [
  {
    title: "Regular Cleaning",
    description:
      "Keep your home fresh and comfortable with routine cleaning services designed to maintain a clean living space.",
    items: [
      "Bathrooms",
      "Kitchen",
      "Dusting",
      "Vacuuming",
      "Floor sanitation",
    ],
  },
  {
    title: "Deep Cleaning",
    description:
      "A detailed top-to-bottom cleaning that focuses on areas often missed during regular cleaning.",
    items: [
      "Bathroom exhaust fans",
      "Bathroom light fixtures",
      "Baseboards",
      "Toilets, tubs & showers",
      "Kitchen cabinets (exterior)",
      "Sofas",
      "Linen changes",
      "Window blinds",
      "Laundry",
    ],
  },
  {
    title: "Post-Construction Cleaning",
    description:
      "We'll remove construction dust and debris so your newly renovated space is clean, safe, and move-in ready.",
    items: [
      "Construction dust removal",
      "Vacuuming",
      "Floor sanitation",
      "Kitchen cleaning",
      "Bathroom cleaning",
      "Final detail cleaning",
    ],
  },
  {
    title: "Move In / Move Out",
    description:
      "Whether you're moving in or out, we'll thoroughly clean the property to leave it spotless.",
    items: [
      "Kitchen cleaning",
      "Bathroom sanitization",
      "Cabinets & drawers",
      "Baseboards",
      "Vacuuming & mopping",
    ],
  },
  {
    title: "Recurring Cleaning",
    description:
      "Enjoy a consistently clean home with scheduled cleaning visits that fit your lifestyle.",
    items: [
      "Weekly",
      "Bi-weekly",
      "Monthly",
      "Customized schedules",
    ],
  },
  {
    title: "Handyman Services",
    description:
      "Reliable handyman services for everyday home maintenance and repair projects.",
    items: [
      "General repairs",
      "Home maintenance",
      "Fixture installation",
      "Small improvement projects",
    ],
  },
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
              key={service.title}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold">
                {service.title}
              </h2>

              <p className="mt-3 text-left text-gray-700">
                {service.description}
              </p>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-left">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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