export default function Footer() {
  return (
    <footer className="bg-teal-600 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center gap-3 text-center">

          <h3 className="text-lg font-semibold">
            M&R Cleaning Services & Handyman
          </h3>

          <a
            href="mailto:info@example.com"
            className="hover:underline"
          >
            marcoandruth@outlook.com
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Facebook
          </a>

          <p className="text-sm text-white/80">
            © 2026 M&R Cleaning Services & Handyman. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}