import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">


        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">InKind</h2>
          <p className="text-gray-400">
            Bridging the gap between generosity and need by connecting donors with trusted NGOs.
          </p>
        </div>


        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/donate" className="hover:text-white">Donate</Link></li>
            <li><Link to="/#FAQ" className="hover:text-white">FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="mailto: prosperojo2@gmail.com">Email: support@inkind.org </a></li>
            <li> <a href="tel: +2348131694341">Phone: +234 813 169 4341 </a></li>
            <li>Location: Lagos, Nigeria</li>
          </ul>
        </div>


        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} InKind. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
