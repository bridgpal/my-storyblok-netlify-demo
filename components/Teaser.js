import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <section className="py-24 bg-gray-800" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            {blok.headline}
          </h2>
          {blok.subheadline && (
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              {blok.subheadline}
            </p>
          )}
          {blok.button_text && (
            <button className="bg-blue-600 text-white px-10 py-4 font-bold text-lg hover:bg-blue-700 transition-colors">
              {blok.button_text}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Teaser;