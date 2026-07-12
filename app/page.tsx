import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-cyan-50">
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-16 lg:py-24">
        {/*Left Content*/}
        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-5xl" style={{ color: "#034646" }}>
              Professional Cleaning &amp; Handyman Services
            </h1>

            <p className="mx-auto max-w-xl text-lg leading-8 text-slate-700 md:mx-0" style={{ color: "#034646" }}>
              Reliable cleaning and handyman services for homes, apartments,
              and small businesses. Request a quote today and let us help keep
              your space clean, safe, and well-maintained.
            </p>
          </div>

          {/*Buttons*/}
          <div className="flex flex-col gap-10 sm:flex-row sm:justify-center md:justify-start">
            <Link
              href="/contact"
              className="border-2 border-slate-900 bg-teal-600 px-8 py-4 text-center text-lg font-bold text-white transition hover:bg-teal-700"
            >
              Get a Quote
            </Link>

            <Link
              href="/services"
              className="border-2 border-slate-900 bg-yellow-200 px-8 py-4 text-center text-lg font-bold text-slate-900 transition hover:bg-yellow-300"
            >
              View Services
            </Link>
          </div>
        </div>

        {/*Right Image Area*/}
        <div className="relative min-h-[360px] w-full">
          {/* Large Image */}
          <Image
            src="/images/home1.png"
            priority
            alt="Cleaning Service"
            width={800}
            height={600}
            className="ml-auto h-64 w-full max-w-xl object-cover md:h-80"
          />
       
          {/* Overlapping Image  */}
          <Image
            src="/images/home2.png"
            alt="Cleaning Service"
            width={500}
            height={400}
            className="absolute bottom-[-80px] left-10 h-40 w-4/5 max-w-sm object-cover shadow-xl md:h-48"
          />

        </div>
      </section>
    </main>
  );
}
