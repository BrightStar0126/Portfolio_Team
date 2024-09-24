"use client";
// Librairies
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitterX, BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

// Components
import { Loader } from "./UI/Loader/Loader";
import ContactImg from "../public/assets/contact.jpg";

// MAIN FUNCTION
export default function Contact() {
  // STATES
  // State 1 - isLoading
  const [isLoading, setIsLoading] = useState(false);
  // State 2 : formData
  const [form, setForm] = useState({
    senderName: "",
    phone: "",
    senderEmail: "",
    subject: "",
    message: "",
  });
  // State 3 - useRouter()
  const routeur = useRouter();

  // METHODES
  // Méthode 1 : handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  // Méthode 2 : handleSubmit
  // FONCTION D'ENVOI DE FORMULAIRE
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mise à jour du formulaire
    const { senderName, phone, senderEmail, subject, message } = form;
    // Vérification pour savoir si les champs sont tous remplis
    if (
      !senderName ||
      !phone ||
      !senderEmail ||
      !subject ||
      !message
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      // Initialisation de la transaction
      setIsLoading(true);
      // Envoyez les données au serveur d'action
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      console.log("Formulaire : ", form);

      if (response.ok) {
        toast.success(
          "Your email message has been sent successfully"
        );
        console.log("Email sent successfully : ", form);
        routeur.push("/"); // retour Page accueil
      } else {
        const responseData = await response.json();
        console.error("Failed to send email : ", responseData);
        toast.error(
          `Erreur lors de l'envoi du mail : `,
          responseData
        );
      }
      setForm({
        senderName: "",
        phone: "",
        senderEmail: "",
        subject: "",
        message: "",
      });
      setIsLoading(false); // retour à setIsLoading(false)
    } catch (error) {
      // Erreur lors de la transaction
      setIsLoading(false);
      console.error(error);
      toast.error(`Erreur lors de l'envoi du formulaire.`);
    }
  };

  // JSX
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-24 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='Blockchain & Star - Your web3 trusted partner'
                  loading='lazy'
                />
              </div>
              <div>
                <h2 className='py-2'>Blockchain & Star</h2>
                <p>Blockchain Innovation Company</p>
                <p className='py-4'>
                  Available for full remote freelance positions.
                  <br />
                  Contact us and let&apos;s talk.
                </p>
              </div>
            </div>
          </div>

          {/* right */}
          <div
            id='contact-form'
            className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div>
              <div className='p-4'>
                <h2 className='uppercase pt-8 text-xl text-center'>
                  Connect With Us
                </h2>
                <div className='flex flex-col justify-between py-4'>
                  {/*Mail*/}
                  <div className='p-4 flex flex-col items-center'>
                    <Link href='mailto:Contact<contact@blockchain-cie.com>'>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                      </div>
                    </Link>
                    <span className='py-2 text-center'>
                      contact@blockchain-cie.com
                    </span>
                  </div>
                  {/* Linkedin */}
                  <div className='p-4 flex flex-col items-center'>
                    <Link
                      href='https://www.linkedin.com/company/blockchain-cie/'
                      target='_blank'
                      rel='noreferrer'>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                      </div>
                    </Link>
                    <span className='py-2 text-center'>Linkedin</span>
                  </div>
                  {/* Twitter */}
                  <div className='p-4 flex flex-col items-center'>
                    <Link
                      href='https://x.com/blockchain_cie'
                      target='_blank'
                      rel='noreferrer'>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsTwitterX />
                      </div>
                    </Link>
                    <span className='py-2 text-center'>
                      &quot;X&quot;
                    </span>
                  </div>

                  {/* <Link href='/resume'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsFillPersonLinesFill />
                    </div>
                  </Link> */}
                </div>
              </div>

              {/* <form
                onSubmit={handleSubmit}
                encType='multipart/form-data'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label
                      htmlFor='senderName'
                      className='uppercase text-sm py-2'>
                      Name
                    </label>
                    <input
                      id='senderName'
                      name='senderName'
                      type='text'
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      placeholder='Your name'
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label
                      htmlFor='phone'
                      className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      id='phone'
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      name='phone'
                      type='text'
                      placeholder='Your phone'
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label
                    htmlFor='senderEmail'
                    className='uppercase text-sm py-2'>
                    Email
                  </label>
                  <input
                    id='senderEmail'
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    name='senderEmail'
                    type='email'
                    placeholder='Your email'
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label
                    htmlFor='subject'
                    className='uppercase text-sm py-2'>
                    Subject
                  </label>
                  <input
                    id='subject'
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    name='subject'
                    type='text'
                    placeholder='Your subject'
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label
                    htmlFor='message'
                    className='uppercase text-sm py-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                    type='text'
                    onChange={handleChange}
                    placeholder='Your message'
                    required></textarea>
                </div>
                <button
                  className='w-full p-4 text-gray-100 mt-4'
                  disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form> */}
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className='flex justify-center py-6'>
          <div className='flex flex-col items-center'>
            <p>
              &copy; {new Date().getFullYear()} |
              <strong> Blockchain & Star.</strong> | All Rights
              Reserved.
            </p>
            <div className='flex mt-2 text-[#5651e5]'>
              <Link
                className='mr-4 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                href='/privacy'>
                Privacy Policy
              </Link>

              {/* <Link
                className='mr-4 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                href='/legal-notice'>
                Legal Notice
              </Link> */}
            </div>
          </div>
        </div>
        {/* BACK PAGE */}
        <div className='flex justify-center py-6'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                className='text-[#5651e5]'
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
