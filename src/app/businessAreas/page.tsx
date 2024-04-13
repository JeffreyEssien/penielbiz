import Image from "next/image"
import image1 from '../images/4.jpeg'
import image2 from '../images/Gemini_Generated_Image (1).jpeg'
import image3 from '../images/Gemini_Generated_Image (2).jpeg'
import image4 from '../images/Gemini_Generated_Image (3).jpeg'
import image5 from '../images/Gemini_Generated_Image.jpeg'

export default function BusinessAreas() {
    return(
        <div>
            <p className="text-black font-bold text-5xl text-center my-10">Business Areas</p>
            <div className="flex flex-col lg:flex-row gap-10 px-20">
                <div className="flex flex-col justify-center hover:scale-110 transition duration-300 ease-in-out">
                    <p className="text-black text-center text-4xl font-bold my-4">Software Automation</p>
                    <Image src={image1} alt="image" className="rounded-xl hover:transform" />
                </div>
                <div className="flex flex-col justify-center hover:scale-110 transition duration-300 ease-in-out">
                    <p className="text-black text-center text-4xl font-bold my-4">e-Government Solutions</p>
                    <Image src={image2} alt="image" className="rounded-xl"/>
                </div>
                <div className="flex flex-col justify-center hover:scale-110 transition duration-300 ease-in-out">
                    <p className="text-black text-center text-4xl font-bold my-4 ">e-Commerce Application Development</p>
                    <Image src={image3} alt="image" className="rounded-xl"/>
                </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-20 px-20 py-10 my-4">

                <div className="flex flex-col justify-center hover:scale-110 transition duration-300 ease-in-out">
                    <p className="text-black text-center text-4xl font-bold my-4">Professional Website Development</p>
                    <Image src={image4} alt="image" className="rounded-xl"/>
                </div>
                <div className="flex flex-col justify-center hover:scale-110 transition duration-300 ease-in-out">
                    <p className="text-black text-center text-4xl font-bold my-4">Custom Software Development</p>
                    <Image src={image5} alt="image" className="rounded-xl"/>
                </div>
            </div>
        </div>
    )
}