// Librairie
import Head from "next/head";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function PrivacyPolicy() {
  // Rendu JSX
  return (
    <>
      <Head>
        <title>
          Blockchain & Star | Fullstack Blockchain Development Company
          | Marcos Ming
        </title>
        <meta
          name='description'
          content='Blockchain & Star is specializing in building (and occasionally designing) exceptional decentralized digital experiences using web3/blockchain technologies.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div
        id='privacy'
        className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Privacy Policy
        </h2>
        <div className='my-4 p-4 w-full flex justify-between items-center col-span-3 lg:col-span-2 h-full shadow-xl shadow-gray-400 rounded-xl'>
          <h2 className='text-center'>Blockchain & Star.</h2>
          <div className='flex'>
            <Link
              href='https://www.linkedin.com/company/blockchain-cie/'
              target='_blank'
              rel='noreferrer'>
              <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </Link>
          </div>
        </div>

        <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 sm:block'>
          {/* INFORMATION WE COLLECT */}
          <h3 className='text-xl tracking-widest uppercase'>
            Information We Collect
          </h3>
          <div className='py-6'>
            <p>
              We may collect personal information that you voluntarily
              provide to us when you contact us through our website or
              by email. This information may include your name, email
              address, phone number, and any other information you
              choose to provide.
            </p>
          </div>
          {/* HOW WE USE YOUR INFORMATION */}
          <h3 className='text-xl tracking-widest uppercase'>
            How We Use Your Information
          </h3>
          <div className='py-6'>
            <p>
              We may use the information we collect from you to
              respond to your inquiries, provide customer support,
              improve our website and services, and communicate with
              you about our products and services.
            </p>
          </div>
          {/* DISCLOSURE OF YOUR INFORMATION */}
          <h3 className='text-xl tracking-widest uppercase'>
            Disclosure of Your Information
          </h3>
          <div className='py-6'>
            <p>
              We may disclose your personal information to third-party
              service providers who assist us in operating our
              website, conducting our business, or servicing you. We
              may also disclose your information when we believe
              release is appropriate to comply with the law, enforce
              our site policies, or protect ours or others&apos;
              rights, property, or safety.
            </p>
          </div>
          {/* CONSENT */}
          <h3 className='text-xl tracking-widest uppercase'>
            Consent
          </h3>
          <div className='py-6'>
            <p>
              By using our website or contacting us, you consent to
              our Privacy Policy and agree to its terms.
            </p>
          </div>
          {/* CHANGES TO OUR PRIVACY POLICY */}
          <h3 className='text-xl tracking-widest uppercase'>
            Changes to Our Privacy Policy
          </h3>
          <div className='py-6'>
            <p>
              We may update our Privacy Policy from time to time. We
              will notify you of any changes by posting the new
              Privacy Policy on this page. You are advised to review
              this Privacy Policy periodically for any changes.
            </p>
          </div>
          {/* CONTACT US */}
          <h3 className='text-xl tracking-widest uppercase'>
            Contact Us
          </h3>
          <div className='py-6'>
            <p>
              If you have any questions about our Privacy Policy,
              please contact us.
            </p>
          </div>
        </div>
        <div className='flex justify-center py-6'>
          <div className='flex flex-col items-center'>
            <p>
              &copy; <strong> Blockchain & Star.</strong> | All Rights
              Reserved. | Last updated: {new Date().getFullYear()}
            </p>
          </div>
        </div>
        {/* BACK PAGE */}
        <div className='flex justify-center py-6'>
          <Link href='#privacy'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                className='text-[#5651e5]'
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
