import { storyblokEditable } from "@storyblok/react";

const Tease = ({ blok }) => {
  return (
    <section className="py-24 bg-gray-900" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
          {blok.headline}
        </h2>
        {blok.subheadline && (
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {blok.subheadline}
          </p>
        )}
      </div>
    </section>
  );
};

export default Tease;