"use client";
// Librairies
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "@/public/assets/about.jpg";

// MAIN FUNCTION
export default function About() {
  return (
    <div
      id='about'
      className='w-full md:h-screen p-2 flex items-center py-24'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Empowering Businesses with Web3</h2>
          <p className='py-2 text-gray-800'>
            Blockchain & Star is a forward-thinking US tech company
            dedicated to transforming the way businesses leverage
            blockchain and web3 technologies. With a strong focus on
            innovation and customization, we offer a range of services
            that help organizations harness the power of decentralized
            technologies to solve real-world challenges.
          </p>
          <p className='py-2 text-gray-800'>
            Our expertise spans across multiple areas, including the
            development of bespoke software solutions, business
            intelligence, data science consulting, and blockchain
            integration. We build secure, scalable applications, from
            back-end infrastructures to mobile-responsive front-end
            interfaces. Whether it’s creating decentralized
            applications (dApps) or integrating blockchain in
            traditional systems, we bring your vision to life.
          </p>
          <p className='py-2 text-gray-800'>
            Founded by Antoine Delamare, a certified blockchain
            developer with a specialization in smart contract
            development and decentralized technologies, Blockchain &
            Star provides consulting and training services to help
            companies navigate the complex world of web3. Our team is
            passionate about unlocking the full potential of
            blockchain, offering solutions in areas such as supply
            chain optimization, digital identity, and decentralized
            finance (DeFi).
          </p>
          <p className='py-2 text-gray-800'>
            Let us partner with you to develop robust, future-proof
            solutions that drive your business forward. Explore how
            our blockchain expertise can streamline processes, reduce
            costs, and create new opportunities for growth.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-800 underline cursor-pointer'>
              Check out some of our latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image
            src={AboutImg}
            className='rounded-xl'
            alt='Blockchain & Star - About section'
            loading='lazy'
          />
        </div>
      </div>
    </div>
  );
}
