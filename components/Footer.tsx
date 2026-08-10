import { FaFacebookSquare } from "react-icons/fa";
import { FaMicrosoft, FaPhone} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-teal-600 text-white">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex flex-col items-center gap-3 text-center">

          <h3 className="text-lg font-semibold">
            M&R Cleaning Services & Handyman
          </h3>

          <h4 className="mt-2 font-semibold">
            Got questions?
          </h4>
          <div className="flex flex-col items-center gap-1">
            <a
              href="tel:+14084390839"
              className="flex items-center gap-2 hover:underline"
            >
              <FaPhone className="text-sm" />
              (408) 439-0839
            </a>

            <a
              href="tel:+16507044639"
              className="flex items-center gap-2 hover:underline"
            >
              <FaPhone className="text-sm" />
              (650) 704-4639
            </a>
          </div>

          <div className="mt-2 text-sm">
            <p>Monday - Saturday: 8:00 AM - 5:00 PM</p>
            <p>Sunday: Closed</p>
          </div>

          <a
            href="mailto:marcoandruth@outlook.com"
            className="flex items-center gap-2 hover:underline"
          >
            <FaMicrosoft className="text-xl" />
            marcoandruth@outlook.com
          </a>

          <a
            href="https://www.facebook.com/people/MR-Cleaning-Services-and-Handyman/61574263725747/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaFacebookSquare className="text-xl" />
            Our Facebook Page
          </a>

          <p className="text-sm text-white/80">
            © 2026 M&R Cleaning Services & Handyman. All rights reserved.
          </p>

        </div>
        
      </div>
    </footer>
  );
}