"use client"

import Image from "next/image"
import Link from "next/link"
import { FaTimesCircle } from "react-icons/fa"
import { useState } from "react"
import img1 from '../images/peniel-logo.png'

export default function Contact() {

    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState('');
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name: inputName, value } = event.target;
      switch (inputName) {
        case 'name':
          setName(value);
          break;
        case 'number':
          setNumber(value);
          break;
        case 'email':
          setEmail(value);
          break;
        case 'message':
          setMessage(value);
          break;
        default:
          break;
      }
    };
  
    const generateMailtoLink = () => {
      const subject = encodeURIComponent(`Message from ${name}`);
      const body = encodeURIComponent(message); // Basic encoding for message
      const mailtoLink = `mailto:inisammie5@gmail.com?subject=${subject}&body=${body}` // Replace with recipient email
      return mailtoLink;
    };
  

    return(
        <div className="bg-white text-black pb-10">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:w-[99%] lg:mx-auto py-20  pr-20">
        <Image src={img1} alt="image" />
          <Link href='/'><p className="text-black text-2xl font-bold">Home</p></Link>
         <Link href='/about'> <p className="text-black text-2xl font-bold">About Us</p></Link>
          <p className="text-black text-2xl font-bold">Business Areas</p>
          <p className="text-black text-2xl font-bold">Blog</p>
         <Link href= '/contact'> <p className="text-black text-2xl font-bold">Contact</p></Link>
        </div>
        <p className="text-6xl text-center font-black my-20">Contact</p>

        <div className=" w-full flex justify-center flex-col xl:flex-row">

          <div className="w-[85%] mx-auto xl:mx-0 bg-blue-100 flex items-center justify-center px-4 xl:w-[30%]">
            <p className="text-left text-3xl font-bold w-[80%] py-10 xl:w-[50%]">Send us an email, and we would respond as soon as we get it.</p>
          </div>

    <form className="flex flex-col justify-center w-[95%] xl:w-auto pr-4 min-w-[30%] mt-20 xl:mt-0">
        <div className="flex flex-col xl:w-[100%] pl-10">
      <div className="mb-4">
        <label htmlFor="name" className="block text-black text-xl font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-grey-400 focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="number" className="block text-black text-xl font-bold mb-2">
          Phone number
        </label>
        <input
          type="tel"
          id="number"
          name="number"
          value={number}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-grey-400 focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-black text-xl font-bold mb-2">
          Email (Optional)
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      </div>
      <div className="flex w-[100%] pl-10">
      <div className="mb-4">
        <label htmlFor="message" className="block text-black text-xl font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      </div>
      <button type="button" onClick={() => window.location.href = generateMailtoLink()} className="bg-blue-400 px-4 py-4 rounded-lg w-40 ml-10 font-bold">
        Send Email
      </button>
    </form>
    </div>
        </div>
    )
}