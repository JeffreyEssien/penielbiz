"use client"

import Image from "next/image"
import groupimg from '../images/groupexplain.jpg'
import Link from "next/link"
import img1 from '../images/peniel-logo.png'
import { useState } from "react"
import Footer from "../footer/page"

export default function About() {

        const [isExpanded, setIsExpanded] = useState(false);
      
        const toggleContent = () => {
          setIsExpanded(!isExpanded);
        };

    return(
        <div className="bg-white text-black">
              <div className="bg-white text-black pb-10">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:w-[99%] lg:mx-auto px-10 py-20  pr-20">
        <Image src={img1} alt="image" className="mb-5 mx-auto lg:mx-0"/>
          <Link href='/'><p className="text-black text-2xl font-bold">Home</p></Link>
         <Link href='/about'> <p className="text-black text-2xl font-bold">About Us</p></Link>
          <p className="text-black text-2xl font-bold">Business Areas</p>
          <p className="text-black text-2xl font-bold">Blog</p>
         <Link href= '/contact'> <p className="text-black text-2xl font-bold">Contact</p></Link>
        </div>
        <p className="text-6xl text-center font-black my-20">About Us</p>
        </div>

        <div className="bg-blue-500 py-20 px-5 flex flex-col lg:flex-row lg:justify-between w-full shadow-grey-700 shadow-lg mb-20">
            <div className="bg-white px-10 xl:w-[30%]">  <p className="text-black">Image</p>
             </div>
  <div className="float-right xl:w-[65%]">
    <p className="text-white text-3xl font-bold mb-10 w-[80%]">Driving Sustainable Business Growth: A Commitment to Innovation, Reliability, and Value</p>
    <p className="text-white text-2xl w-[80%] ">
      We are a software solutions company driven by a relentless pursuit of customer satisfaction. Our core values – Friendship, Respect, Innovation, Quality, and Sustainability – are more than just words; they guide us in building lasting partnerships with our clients. We don't just create software; we become invested partners, viewing your success as our own. Our team combines innovative thinking with exceptional technical expertise to deliver high-value, custom-tailored business solutions that solve your specific challenges and unlock new opportunities. We prioritize client satisfaction by ensuring exceptional reliability, user-friendly interfaces that feel intuitive, and meticulous attention to detail at every stage.  Beyond immediate needs, we empower our clients with a sustainable competitive edge through cutting-edge solutions that adapt to evolving market demands. We don't just deliver software; we equip you with the tools and knowledge to thrive in the long run. This commitment extends to cost-effectiveness, ensuring exceptional value for your investment. We believe in open communication and transparent collaboration, keeping you informed throughout the entire development process.
    </p>
  </div>
</div>

        <div className="flex flex-col lg:flex-row mt-20 text-black shadow-lg">
            <div className="xl:w-[40%] xl:pl-20 xl:ml-40 text-center">
                <p className="text-2xl font-bold mb-2 xl:text-left">OUR VISION</p>
                <p className="text-xl font-medium mb-10 xl:text-left">Empowering clients with sustainable competitive advantage by providing innovative business software solutions and excellent services within cost effective bottom-line.</p>
            </div>
            <div className="xl:w-[40%] xl:mx-20 text-center">
                <p className="text-2xl font-bold mb-2 xl:text-left">OUR MISSION</p>
                <p className="text-xl font-medium xl:text-left">To provide first rate and highly reliable software solutions that ease client’s daily computable tasks with utmost attention to satisfaction.</p>
            </div>
        </div>

        <div className="flex flex-col w-full justify-center my-10  ">
            <p className="text-center text-6xl my-10 font-bold w-[30%] mx-auto mb-10 text-black">Our Core Values</p>
            <div className="flex flex-col xl:flex-row mb-10">
                <div className="bg-white flex flex-col xl:w-[35%] justify-center px-4 shadow-grey-600 shadow-lg mx-auto py-10 rounded-lg hover:bg-blue-400 hover:text-white">
                    <p className="text-center  text-3xl font-bold mb-3">Friendship</p>
                    <p className="text-center xl:text-left xl:w-[60%] mx-auto text-xl">Friendship fosters open communication and a collaborative spirit, just like with friends. This translates to building trust with clients, leading to long-term partnerships focused on understanding their needs and delivering successful software solutions.</p>
                </div>
                <div className="bg-white flex flex-col xl:w-[35%] justify-center px-4 shadow-grey-600 shadow-lg mx-auto py-10 rounded-lg hover:bg-blue-400 hover:text-white">
                    <p className="text-center text-3xl font-bold mb-3">Respect</p>
                    <p className="text-center xl:text-left xl:w-[60%] mx-auto text-xl">Respect values diverse perspectives and fosters open dialogue, mirroring collaboration with valued friends. This translates to respecting client needs, leading to tailored software solutions and a mutually beneficial partnership.</p>
                </div>
            </div>
            <div className="flex flex-col xl:flex-row my-10">
                <div className="bg-white flex flex-col xl:w-[35%] justify-center px-4 shadow-grey-600 shadow-lg mx-auto py-10 rounded-lg hover:bg-blue-400 hover:text-white">
                    <p className="text-center text-3xl font-bold mb-3">Innovation</p>
                    <p className="text-center xl:text-left xl:w-[60%] mx-auto text-xl">Innovation thrives on a culture of exploration and pushing boundaries, just like friends exploring new ideas. This translates to developing cutting-edge solutions for clients, staying ahead of trends, and creating a competitive advantage.</p>
                </div>
                <div className="bg-white flex flex-col xl:w-[35%] justify-center px-4 shadow-grey-600 shadow-lg mx-auto py-10 rounded-lg hover:bg-blue-400 hover:text-white">
                    <p className="text-center text-3xl font-bold mb-3">Sustainability</p>
                    <p className="text-center xl:text-left xl:w-[60%] mx-auto text-xl">Sustainability prioritizes long-term solutions and responsible practices, like valuing friendships over time. This translates to developing software with a long lifespan, minimizing environmental impact, and empowering clients for lasting success.</p>
                </div>
            </div>
        </div>
       <Footer />
     </div>
    )
}