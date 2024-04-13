export default function Description() {
    return (
        <div className="flex flex-col lg:flex-row my-40 justify-center">
            <div className="xl:w-[30%] px-4 slide-in" >
                <div className="rounded-full bg-blue-500 h-96 w-96 float-right flex items-center shadow-xl shadow-grey-700"> 
                    <p className="text-center text-6xl font-black">Peniel Software Solutions</p>
                </div>
            </div>
            <div className="xl:w-[70%] pl-10 shadow-grey-700 shadow-lg py-10">
                <p className="text-4xl text-black font-bold mb-8">Who are we?</p>
                <p className="text-2xl w-[80%] font-semibold text-gray-500 slide-out">We are a software solutions company driven by customer’s satisfaction. Our core values of Friendship, Respect,
                    Innovation, Quality, and Sustainability help us create lasting bonds with our clients. This enables us take their
                    businesses as ours. Simply put, we are our customers ally in business success.
                    We create innovative and valuable business software solutions that give client satisfaction. We provide first rate and
                    highly reliable software solutions that make clients’ daily business tasks easy with utmost attention to satisfaction
                    while empowering clients with sustainable competitive advantage by providing innovative solutions and excellent
                    services in a cost effective manner.</p>
            </div>
        </div>
    )
}