import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {blok.headline}
          </h2>
          {blok.subheadline && (
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {blok.subheadline}
            </p>
          )}
          {blok.button_text && (
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              {blok.button_text}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Teaser;