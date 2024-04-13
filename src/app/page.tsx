"use client"

import Image from "next/image";
import img1 from '../app/images/peniel-logo.png'
import backgroundImage from './images/blue pc.jpeg'
import codingImg from '../app/images/explainingman.jpg'
import codingImg2 from '../app/images/transparent.png'
import {FaBars, FaTimesCircle} from 'react-icons/fa'
import Description from "./description/page";
import BusinessAreas from "./businessAreas/page";
import { use, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Footer from "./footer/page";

export default function Home() {

  const [isNavbarOpen, setIsNavbarOPen] = useState(true)  
  const [isOPtionsOpen, setIsOPtionsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)


  const handleNavbar = () => {
    setIsNavbarOPen(true)
    setIsOPtionsOpen(false)
  }

  const handleOptions = () => {
    setIsNavbarOPen(false)
    setIsOPtionsOpen(true)
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
  
    // Observe all image elements (adjust selector as needed)
    const imageElements = document.querySelectorAll('.your-image-class');
    imageElements.forEach((image) => observer.observe(image));
  
    // Cleanup on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-white slide-in">


      {isNavbarOpen && (
      <div className='flex flex-row justify-between shadow-grey-700 shadow-sm slide-in slide-out'>

        <div className="flex mx-5 my-8">
          <Image src={img1} alt="image" />
        </div>
        <div className="mx-5 my-8">
          <p className="text-5xl text-black transition duration-300 [transition-timing-function:cubic-bezier(0.7, 0, 0.6, 2)] hover:transform hover:scale-150" onClick={handleOptions}><FaBars /></p>
        </div>
      </div>
      )}
      {isOPtionsOpen && (
      <div className="flex flex-col lg:flex-row lg:justify-between lg:w-[99%] lg:mx-auto py-20 px-10 shadow-grey-700 shadow-sm slide-in">
        <Image src={img1} alt="image" className="mb-5 mx-auto lg:mx-0"/>
          <Link href='/'><p className="text-black text-2xl font-bold mb-2">Home</p></Link>
         <Link href='/about'> <p className="text-black text-2xl font-bold mb-2">About Us</p></Link>
          <p className="text-black text-2xl font-bold mb-2">Business Areas</p>
          <p className="text-black text-2xl font-bold mb-2">Blog</p>
         <Link href= '/contact'> <p className="text-black text-2xl font-bold mb-2">Contact</p></Link>
          <p className="text-black text-3xl flex transition duration-300 [transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)] hover:transform hover:scale-110" onClick={handleNavbar}><span className="text-2xl text-blue-600 font-bold mr-3">Close</span> <FaTimesCircle /></p>
        </div>
        )}

      <div className="flex flex-row justify- w-[90%] mx-auto my-40 bg-img bg-cover bg-no-repeat" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="flex flex-col w-1/2 pt-20">
        <p className="text-black text-3xl text-center font-bold mb-4"> PENIEL SOFTWARE SOLUTIONS</p>
        <p className="text-black text-6xl text-center font-black">We create innovative and valuable business software solutions that give client satisfaction.</p>
        </div>
        <div className="w-1/2">
          <Image src={codingImg} alt="image" width={200}  className="absolute z-10"/>
          <Image src={codingImg2} alt="image"  width={100} layout="responsive"/>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center">
        <div className='xl:w-[50%] pr-10 bg-blue-400 py-8 shadow-xl shadow-grey-200 slide-in-left'>
          <p className=" text-center lg:text-right text-black text-2xl font-bold mb-2">Vision:</p>
          <p className="text-black text-center text-right w-[65%] float-right text-3xl font-bold">Empowering clients with sustainable competitive advantage by providing innovative business software solutions and excellent services within cost effective bottom-line.</p>
        </div>

        <div className="xl:w-[50%] pl-10 py-8 shadow-xl shadow-grey-700 slide-in-right">
          <p className="text-blue-600 text-2xl font-bold mb-2">Mission:</p>
          <p className="text-blue-600 w-[55%] text-3xl font-bold">To provide first rate and highly reliable software solutions that ease client’s daily computable tasks with utmost attention to satisfaction.</p>
        </div>
      </div>
      <Description />
      <BusinessAreas />
      <Footer />
    </div>
  );
}
