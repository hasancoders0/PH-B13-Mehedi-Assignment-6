import React from 'react';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
const Footer = () => {
    return (
        <footer className="bg-[#0b1220] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Logo + Description */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white">DigiTools</h2>
            <p className="mt-4 text-sm text-gray-400 max-w-sm">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Templates</a></li>
              <li><a href="#" className="hover:text-white">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Social */}
        <div className="mt-10 flex items-center justify-between flex-col sm:flex-row gap-6">
          
          <div className="flex gap-4">
          <div className="w-10 h-10 p-2 rounded-full bg-white flex items-center justify-center hover:bg-white/20 cursor-pointer">
            <img src={instagram} alt="instagram" />
          </div>

          <div className="w-10 h-10 p-2 rounded-full bg-white flex items-center justify-center hover:bg-white/20 cursor-pointer">
            <img src={facebook} alt="facebook" />
          </div>

          <div className="w-10 h-10 p-2 rounded-full bg-white flex items-center justify-center hover:bg-white/20 cursor-pointer">
            <img src={twitter} alt="twitter" />
          </div>
          </div>

          {/* Bottom Links */}
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6 text-sm text-gray-500 text-center sm:text-left">
          © 2026 Digitools. All rights reserved.
        </div>

      </div>
    </footer>
    );
};

export default Footer;