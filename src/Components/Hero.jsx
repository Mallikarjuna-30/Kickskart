import React from "react"

const Hero = () => {
    return (
        <div
            className="h-screen bg-cover bg-center relative flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeUp">
                    Step Into <span className="text-gray-300">Style</span>
                </h1>

                {/* Subtext */}
                <p className="text-gray-300 max-w-xl mx-auto mb-6 animate-fadeUp delay-200">
                    Discover premium sneakers crafted for comfort and performance.
                </p>

                {/* Button */}
                <a href="#products">
                    <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition animate-fadeUp delay-400">
                        Shop Now
                    </button>
                </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 text-white text-sm animate-bounce">
                ↓ Scroll
            </div>
        </div>
    )
}

export default Hero