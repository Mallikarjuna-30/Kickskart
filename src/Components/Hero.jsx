import React, { useEffect } from "react"
import { useState } from "react"
const images = [
    "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1200"
]
const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            )
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">

            {/* Images */}
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt="hero"
                    className={`absolute w-[90%] h-[80%] object-cover rounded-2xl transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

            {/* Dark Overlay */}
            {/* <div className="absolute inset-0 bg-black/50"></div> */}

            {/* Content */}
            <div className="relative z-10 text-center text-black px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                    Step Into Style
                </h1>

                <p className="mb-6 text-black">
                    Discover premium sneakers for every occasion
                </p>

                <a href="#products">
                    <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                        Shop Now
                    </button>
                </a>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 flex gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"
                            }`}
                    ></div>
                ))}
            </div>

        </div>
    )
}

export default Hero