import React, { useState } from 'react';

const OfferSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setEmail('');
  };

  return (
    <section className="w-full bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50/30 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-stone-800 mb-6 leading-tight">
              Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-stone-600 font-medium">20% OFF</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl">on your first purchase</span>
            </h2>
            <p className="text-lg text-stone-600 font-light max-w-lg mx-auto lg:mx-0">
              Join our exclusive community and unlock premium furniture collections with special member pricing.
            </p>
          </div>

          {/* Right Content - Form */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full h-14 px-6 text-stone-800 bg-white/90 backdrop-blur-sm border border-stone-200/60 rounded-xl placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400/50 focus:border-stone-400/50 transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-gradient-to-r from-stone-500 to-amber-600/80 hover:from-stone-600 hover:to-amber-700/80 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-stone-400/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'CLAIM YOUR DISCOUNT'
                )}
              </button>
            </form>
            <p className="text-xs text-stone-500 mt-4 text-center">
              By signing up, you agree to receive marketing emails. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;