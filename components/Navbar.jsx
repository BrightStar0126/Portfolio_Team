// Librairies
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {
  BsTwitterX,
  BsFillPersonLinesFill,
  BsPersonFill,
} from "react-icons/bs";

// Components
import NavLogo from "../public/assets/blockchain-cie-logo.png";

// MAIN FUNCTION
export default function Navbar() {
  // STATES
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  // METHODES
  const handleNav = () => {
    setNav(!nav);
  };

  // ComponentDidMount
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "bg-[#ecf0f3] fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "bg-[#ecf0f3] fixed w-full h-20 z-[100]"
      }>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          {/* <Image
            src={NavLogo}
            width={200}
            height='auto'
            alt='Blockchain & Cie - Logo'
            loading='lazy'
            className='cursor-pointer object-cover'
          /> */}
          <p className='text-[#5651e5] font-extrabold text-lg text-center'>Blockchain<br />Star</p>
        </Link>

        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Home
              </li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                About
              </li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Skills
              </li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Projects
              </li>
            </Link>

            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Contact
              </li>
            </Link>
          </ul>

          {/* Hamburger Icon */}
          <div
            onClick={handleNav}
            className='md:hidden cursor-pointer'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-5 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-5 ease-in duration-500"
          }>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <Image
                  onClick={handleNav}
                  src={NavLogo}
                  width={150}
                  height='auto'
                  alt='Blockchain & Cie - Logo'
                  loading='lazy'
                  className='object-cover'
                />
              </Link>

              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>

            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&apos;s build the future of Web3 together
              </p>
            </div>
          </div>
          <div className='flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-sm'>
                  Projects
                </li>
              </Link>

              <Link href='/#contact'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            {/* FOOTER */}
            <div className='pt-10'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&apos;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  onClick={() => setNav(false)}
                  href='https://www.linkedin.com/company/blockchain-cie/'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  onClick={() => setNav(false)}
                  href='https://x.com/blockchain_cie'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsTwitterX />
                  </div>
                </a>
                <Link onClick={() => setNav(false)} href='/#contact'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </Link>

                {/* <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
