import { storyblokEditable } from "@storyblok/react";

const CTA = ({ blok }) => {
  return (
    <section className="py-24 bg-blue-600 text-white" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          {blok.headline || "Ready to Get Started?"}
        </h2>
        <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          {blok.subheadline || "Join thousands of businesses already using our platform to accelerate their growth and success."}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-white text-blue-600 px-10 py-4 font-bold text-lg hover:bg-gray-100 transition-colors">
            {blok.primary_button || "Start Free Trial"}
          </button>
          <button className="border-2 border-white text-white px-10 py-4 font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
            {blok.secondary_button || "Contact Sales"}
          </button>
        </div>
        <p className="text-sm text-blue-200 mt-8">
          {blok.disclaimer || "No credit card required • 14-day free trial • Cancel anytime"}
        </p>
      </div>
    </section>
  );
};

export default CTA;