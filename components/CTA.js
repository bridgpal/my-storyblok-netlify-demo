import { storyblokEditable } from "@storyblok/react";

const CTA = ({ blok }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {blok.headline || "Ready to Get Started?"}
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          {blok.subheadline || "Join thousands of businesses already using our platform to accelerate their growth and success."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            {blok.primary_button || "Start Free Trial"}
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
            {blok.secondary_button || "Contact Sales"}
          </button>
        </div>
        <p className="text-sm opacity-75 mt-6">
          {blok.disclaimer || "No credit card required • 14-day free trial • Cancel anytime"}
        </p>
      </div>
    </section>
  );
};

export default CTA;