import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200" {...storyblokEditable(blok)}>
    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{blok.name}</h3>
    {blok.description && (
      <p className="text-gray-600 leading-relaxed">{blok.description}</p>
    )}
  </div>
);

export default Feature;