import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }) => {
  return (
    <section className="py-24 bg-gray-50" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-6">
        {blok.headline && (
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">{blok.headline}</h2>
            {blok.subheadline && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{blok.subheadline}</p>
            )}
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blok.columns.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;