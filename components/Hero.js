import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
  return (
    <section className="bg-gray-900 text-white py-32" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight text-white">
          {blok.headline || "Transform Your Business Today"}
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
          {blok.subheadline || "Discover the power of innovation with our cutting-edge solutions designed to accelerate your growth and success."}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-blue-600 text-white px-10 py-4 text-lg font-semibold hover:bg-blue-700 transition-colors">
            {blok.primary_button || "Get Started Free"}
          </button>
          <button className="border-2 border-gray-600 text-gray-300 px-10 py-4 text-lg font-semibold hover:border-gray-500 hover:text-white transition-colors">
            {blok.secondary_button || "Watch Demo"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;