// client/components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-stone-50 dark:bg-stone-950 text-black dark:text-white py-12 mt-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Section */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="flex items-center mb-4">
              <div className="relative h-12 w-12">
                <Image
                  src="/BattlerLogoLight.png"
                  alt="Logo"
                  className="absolute inset-0 h-full w-full transition-opacity duration-300 dark:opacity-0"
                  layout="fill"
                />
                <Image
                  src="/BattlerLogoDark.png"
                  alt="Logo"
                  className="absolute inset-0 h-full w-full transition-opacity duration-300 opacity-0 dark:opacity-100"
                  layout="fill"
                />
              </div>
              <span className="ml-3 text-xl font-bold">UMINEKO-API</span>
            </div>
            <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed est non elit aliquam iaculis ac faucibus ipsum. Vivamus facilisis risus nec justo imperdiet, nec maximus orci dapibus. Nunc at.
            </p>
            <p>Contact Us: info@uminekoapi.com</p>
          </div>

          <div className="lg:w-1/3 mb-8 lg:mb-0 lg:text-center">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="text-stone-600 dark:text-stone-300">
            <li className="mb-2 transition-colors duration-300 hover:text-black dark:hover:text-white"><Link href="/">Home</Link></li>
              <li className="mb-2 transition-colors duration-300 hover:text-black dark:hover:text-white"><Link href="/sitemap">SiteMap</Link></li>
              <li className="mb-2 transition-colors duration-300 hover:text-black dark:hover:text-white"><Link href="/faqs">FAQs</Link></li>
              <li className="mb-2 transition-colors duration-300 hover:text-black dark:hover:text-white"><Link href="/docs">Documentation</Link></li>
              <li className="mb-2 transition-colors duration-300 hover:text-black dark:hover:text-white"><a href="https://github.com/antbalanzategui/UminekoAPI" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li className="mb-2 transition-colors duration-300 hover:text-black dark:hover:text-white"><a href="https://www.reddit.com/r/umineko/" target="_blank" rel="noopener noreferrer">Reddit</a></li>
            </ul>
          </div>

          {/* Stay in Touch */}
          <div className="lg:w-1/3">
            <h3 className="font-semibold mb-4">Stay in Touch</h3>
            <p className="mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form>
              <input type="email" placeholder="Enter your email address" className="w-full p-2 mb-4 border border-stone-300 dark:border-stone-700 rounded-md" />
              <Button variant="outline" className="w-full bg-amber-400 dark:bg-amber-500 px-8 py-1.5 hover:bg-stone-50 border-stone-200 dark:border-stone-800 dark:hover:bg-stone-950">
              Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-stone-200 dark:border-stone-700 pt-8 text-center">
          <p>&copy; 2024 UMINEKO-API. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4 text-stone-600 dark:text-stone-300">
            <Link href="/terms-of-service" className="mb-2 transition-colors duration-300 hover:text-black dark:hover:text-white">Terms of Service</Link>
            <Link href="/privacy-policy" className="mb-2 transition-colors duration-300 hover:text-black dark:hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
