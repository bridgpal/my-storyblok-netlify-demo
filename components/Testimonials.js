import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Testimonials = ({ blok }) => {
  return (
    <section className="py-24 bg-gray-900" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            {blok.headline || "What Our Customers Say"}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {blok.subheadline || "Join thousands of satisfied customers who have transformed their business with our solutions."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blok.testimonials?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          )) || (
            <>
              <div className="bg-gray-800 p-8 border border-gray-700">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">"This solution completely transformed how we operate. The results exceeded our expectations and the support team is incredible."</p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-blue-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    JS
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">John Smith</p>
                    <p className="text-gray-400">CEO, TechCorp</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-8 border border-gray-700">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">"Amazing product with outstanding customer service. We saw immediate improvements in our workflow and productivity."</p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-green-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    MJ
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">Maria Johnson</p>
                    <p className="text-gray-400">Director, InnovateLab</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-8 border border-gray-700">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">"The best investment we've made for our business. Simple to use, powerful features, and excellent ROI."</p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-purple-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    DW
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">David Wilson</p>
                    <p className="text-gray-400">Founder, StartupXYZ</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;