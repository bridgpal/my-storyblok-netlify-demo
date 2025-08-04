import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => (
  <div className="bg-gray-700 p-8 border border-gray-600" {...storyblokEditable(blok)}>
    <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-8">
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{blok.name}</h3>
    {blok.description && (
      <p className="text-gray-300 text-lg leading-relaxed">{blok.description}</p>
    )}
  </div>
);

export default Feature;