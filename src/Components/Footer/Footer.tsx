"use client";
import LogoImg from '../../assets/harirams_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
  BsYoutube
} from "react-icons/bs";
import {faPhone,faEnvelope,faLocationDot} from "@fortawesome/free-solid-svg-icons";
export function FooterSection() {
  return (
    <div container className="bg-[#f9f9f9] px-20 py-10 ">
      {/* Top Section */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Logo & Description */}
        <div>
          <img src={LogoImg} alt="Hemhalayaah Logo" className="h-16 mb-4" />
          <p className="text-gray-600 text-sm">
            Each room features plush bedding, high-quality linens, and a selection of amenities to ensure a restful night’s sleep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-black underline">Quick Links</h4>
          <FooterLinkGroup col >
            <FooterLink href="#" className='text-black'>Rooms & Tariff</FooterLink>
            <FooterLink href="#" className='text-black'>Dining</FooterLink>
            <FooterLink href="#" className='text-black'>About Us</FooterLink>
            <FooterLink href="#" className='text-black'>Gallery</FooterLink>
          </FooterLinkGroup>
        </div>

        {/* Guest Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-black underline">Guest Services</h4>
          <FooterLinkGroup col>
            <FooterLink href="#" className='text-black'>24/7 Front Desk</FooterLink>
            <FooterLink href="#" className='text-black'>Room Service</FooterLink>
            <FooterLink href="#" className='text-black'>Free Wi-Fi</FooterLink>
            <FooterLink href="#" className='text-black'>Parking</FooterLink>
          </FooterLinkGroup>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-black underline">Contact Us</h4>
          <p className="text-md text-gray-600"><FontAwesomeIcon icon={faPhone} /> +91 98765 43210</p> <br/>
          <p className="text-md text-gray-600"><FontAwesomeIcon icon={faEnvelope} /> hemhalayaah@gmail.com</p><br/>
          <p className="text-md text-gray-600"><FontAwesomeIcon icon={faLocationDot} /> Pollachi, Tamil Nadu</p><br/>
        </div>
      </div>
      
<FooterDivider className="w-full block my-6 border-gray-500" />

      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full">
        <FooterCopyright href="#" by="Stellar Solutions" year={2025} />
        <div className="mt-4 flex space-x-6 md:mt-0">
          <FooterIcon href="#" icon={BsFacebook} />
          <FooterIcon href="#" icon={BsInstagram} />
          <FooterIcon href="#" icon={BsYoutube} />
        </div>
      </div>
      
    </div>
  );
}
