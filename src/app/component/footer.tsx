import React from 'react';
import { FaLinkedin, FaGithubSquare, FaFacebook } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600">
      <footer className="text-gray-200 body-font w-full">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <Image src={require("../public/logo.pgp.jpeg")} alt="portfolio" width={50} height={50} className="w-12 h-12 rounded-full shadow-lg" />
            <span className="ml-3 text-2xl font-semibold">My Portfolio</span>
          </a>
          <p className="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">
            © 2024 Muhammad Osama Gabol
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link target="_blank" href="https://www.linkedin.com/in/muhammad-osama-gabol-a0688328b" className="text-gray-200 hover:text-blue-300">
              <FaLinkedin className="text-3xl mx-2 transition duration-300 ease-in-out transform hover:scale-110" />
            </Link>

            <a className="text-gray-200 hover:text-purple-300 mx-2" href="https://github.com/Muhammad-Osama-BalocH">
              <FaGithubSquare className="text-3xl transition duration-300 ease-in-out transform hover:scale-110" />
            </a>

            <a className="text-gray-200 hover:text-blue-300 mx-2" href="https://www.facebook.com/profile.php?id=100021606721345">
              <FaFacebook className="text-3xl transition duration-300 ease-in-out transform hover:scale-110" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;


