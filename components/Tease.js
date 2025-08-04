import { storyblokEditable } from "@storyblok/react";

const Tease = ({ blok }) => {
  return (
    <section className="py-20 bg-white" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          {blok.headline}
        </h2>
        {blok.subheadline && (
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {blok.subheadline}
          </p>
        )}
      </div>
    </section>
  );
};

export default Tease;