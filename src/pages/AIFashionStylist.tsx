import React from 'react';
import { Link } from 'react-router-dom';
import FashionRecommendationBox from '../FashionRecommendationBox';

const AIFashionStylist: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-3 md:p-6 bg-gradient-to-r from-slate-900/95 to-purple-900/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <Link
            to="/"
            className="text-lg md:text-2xl font-bold text-white hover:text-purple-300 transition-colors order-1 sm:order-1"
          >
            🤖 AI Fashion
          </Link>
          <Link
            to="/"
            className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-3 md:px-6 py-2 md:py-3 rounded-full hover:bg-white/20 transition-all duration-300 text-xs md:text-base order-2 sm:order-2 whitespace-nowrap"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content - Increased top padding significantly for mobile */}
      <div className="pt-32 md:pt-36 pb-16 md:pb-20 px-3 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              AI Fashion
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Stylist
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto px-2 md:px-4">
              Get personalized fashion recommendations powered by advanced AI algorithms. 
              Choose your preferences and discover your perfect style.
            </p>
          </div>

          {/* AI Fashion Box */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl md:rounded-3xl p-3 md:p-8 lg:p-12 shadow-2xl">
            <FashionRecommendationBox />
          </div>

          {/* How It Works */}
          <div className="mt-16 md:mt-20 text-center">
            <h2 className="text-xl md:text-4xl font-bold text-white mb-8 md:mb-12 px-2 md:px-4">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-2 md:px-4">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 mx-auto">
                  <span className="text-lg md:text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-4">Select Preferences</h3>
                <p className="text-gray-400 text-xs md:text-base">
                  Choose your gender, style, occasion, and season preferences
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 mx-auto">
                  <span className="text-lg md:text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-4">AI Analysis</h3>
                <p className="text-gray-400 text-xs md:text-base">
                  Our AI analyzes your choices and preferences in real-time
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 mx-auto">
                  <span className="text-lg md:text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-4">Get Recommendations</h3>
                <p className="text-gray-400 text-xs md:text-base">
                  Receive personalized outfit suggestions with AI insights
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 md:mt-20 text-center px-2 md:px-4">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg border border-purple-500/30 rounded-2xl md:rounded-3xl p-6 md:p-12">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Ready to Discover Your Style?
              </h2>
              <p className="text-sm md:text-lg text-gray-300 mb-6 md:mb-8">
                Start exploring fashion recommendations tailored just for you
              </p>
              <Link
                to="/"
                className="inline-block bg-white text-purple-900 px-5 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-sm md:text-base"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFashionStylist;
