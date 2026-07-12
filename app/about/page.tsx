import Image from "next/image";

const statistics = [
  {
    value: "25+",
    label: "Years in Business",
  },
  {
    value: "300+",
    label: "Happy Clients",
  },
  {
    value: "12",
    label: "Cities Served",
  },
];

const serviceCities = [
  "Willow Glen",
  "Palo Alto",
  "Sunnyvale",
  "Santa Clara",
  "Los Gatos",
  "Menlo Park",
  "Los Altos",
  "Cupertino",
  "Evergreen",
  "San Jose",
  "Saratoga",
  "Redwood City",
];


export default function AboutPage() {
  return (
    <main className="bg-cyan-50 text-[#034646]">
      <section className="px-6 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold sm:text-4xl">
            About Us
          </h1>

          {/* About Section */}
          <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            {/* Left Side - Text */}
            <div className="space-y-8 text-center lg:text-left">
              <p className="max-w-2xl text-base leading-7 sm:text-lg">
                <strong>M&R Cleaning Services & Handyman</strong> is a family-owned
                business founded by Marco and Ruth, hardworking Latino immigrants
                who have proudly served the Bay Area for over 25+ years. Through
                dedication, honesty, and attention to detail, they have built
                lasting relationships with countless homeowners and businesses who
                trust them for dependable cleaning and handyman services.
              </p>

              <p className="max-w-2xl text-base leading-7 sm:text-lg">
                Guided by strong Christian values, Marco and Ruth believe in
                treating every customer with respect, dignity, and care. Their
                commitment to quality workmanship and exceptional customer service
                has earned them the trust of many satisfied clients and referrals
                throughout the community.
              </p>

              <p className="max-w-2xl text-base leading-7 sm:text-lg">
                Whether you need routine cleaning, a deep clean, move-in or
                move-out services, or reliable handyman work, M&R Cleaning
                Services & Handyman is dedicated to helping keep your home or
                business clean, safe, and well maintained.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/about.jpg"
                alt="Marco and Ruth providing cleaning services"
                width={600}
                height={700}
                className="rounded-lg object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

 {/* Statistics Section */}
      <section className="bg-[#FFCB80] px-6 py-10 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {statistics.map((statistic) => (
            <div
              key={statistic.label}
              className="flex min-h-40 flex-col items-center justify-center bg-white px-6 py-8 text-center"
            >
              <p className="text-4xl font-bold text-black">
                {statistic.value}
              </p>

              <p className="mt-4 text-base font-medium uppercase text-black sm:text-lg">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Coverage Heading */}
      <section className="px-6 py-12 text-center sm:px-8 lg:px-16">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Service Coverage
        </h2>

        <p className="mt-4 text-base sm:text-lg">
          Proudly serving communities throughout the Bay Area.
        </p>
      </section>

      {/* Service Coverage Area */}
      <section
        className="bg-cover bg-center px-6 py-16 sm:px-8 lg:px-16 lg:py-24"
        style={{
          backgroundImage: "url('/images/overhead.jpg')",
        }}
      >
        <div className="mx-auto max-w-4xl rounded-3xl bg-white px-6 py-10 shadow-xl sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 text-center sm:grid-cols-2">
            {serviceCities.map((city) => (
              <p
                key={city}
                className="text-lg font-bold text-black sm:text-xl"
              >
                {city}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}