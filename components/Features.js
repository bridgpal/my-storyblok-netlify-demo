import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Features = ({ blok }) => {
  return (
    <section className="py-20 bg-gray-50" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {blok.headline || "Why Choose Us"}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {blok.subheadline || "Discover the features that make us the preferred choice for thousands of businesses worldwide."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blok.features?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          )) || (
            <>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
                <p className="text-gray-600">Experience blazing-fast performance that keeps your users engaged and your business moving forward.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Secure & Reliable</h3>
                <p className="text-gray-600">Built with enterprise-grade security and 99.9% uptime guarantee to keep your data safe and accessible.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
                <p className="text-gray-600">Intuitive interface designed for everyone, from beginners to experts. Get started in minutes, not hours.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;