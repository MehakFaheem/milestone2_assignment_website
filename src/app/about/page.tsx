import React from "react";

const About = () => {
    return (
        <div>
            <section className="about h-screen flex items-center justify-start bg-cover bg-center text-white px-10" style={{ backgroundImage: "url(about-bg.jpeg)" }}>
                <div className="bg-black bg-opacity-60 p-8 rounded-md max-w-lg">
                    <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">About Our Craft</h2>
                    <p className="leading-relaxed">
                        <span>
                            <b className="text-pink-400">
                                Welcome to Crockery Elegance, where artistry meets functionality!
                            </b>
                        </span>
                        <br />
                        At Crockery Elegance, we are passionate about bringing timeless designs and premium-quality tableware into your home. With a curated collection of crockery that blends traditional craftsmanship and modern aesthetics, we aim to make every meal a celebration.
                    </p>
                    {/* Stats Section */}
                    <div className="grid grid-cols-3 gap-4 mt-8">
                        <div className="text-center bg-white bg-opacity-10 p-4 rounded-lg hover:scale-105 transition transform duration-300">
                            <h3 className="text-2xl font-bold text-pink-300">10+</h3>
                            <p className="text-sm">Years of Craftsmanship</p>
                        </div>
                        <div className="text-center bg-white bg-opacity-10 p-4 rounded-lg hover:scale-105 transition transform duration-300">
                            <h3 className="text-2xl font-bold text-pink-300">500+</h3>
                            <p className="text-sm">Unique Designs</p>
                        </div>
                        <div className="text-center bg-white bg-opacity-10 p-4 rounded-lg hover:scale-105 transition transform duration-300">
                            <h3 className="text-2xl font-bold text-pink-300">1000+</h3>
                            <p className="text-sm">Happy Customers</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;