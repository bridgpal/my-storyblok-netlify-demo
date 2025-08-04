import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          {blok.headline || "Transform Your Business Today"}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
          {blok.subheadline || "Discover the power of innovation with our cutting-edge solutions designed to accelerate your growth and success."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            {blok.primary_button || "Get Started Free"}
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
            {blok.secondary_button || "Watch Demo"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;