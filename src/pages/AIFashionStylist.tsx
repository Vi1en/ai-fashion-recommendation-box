import React from 'react';
import { Link } from 'react-router-dom';
import FashionRecommendationBox from '../FashionRecommendationBox';

const AIFashionStylist: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors mb-6"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">
            🤖 AI Fashion Stylist
          </h1>
          <p className="text-xl text-white/90">
            Get personalized fashion recommendations powered by AI
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <FashionRecommendationBox />
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">1️⃣</div>
              <h3 className="text-lg font-semibold text-white mb-2">Select Preferences</h3>
              <p className="text-white/80">Choose your gender, style, occasion, and season</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">2️⃣</div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Analysis</h3>
              <p className="text-white/80">Our AI analyzes your choices and preferences</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">3️⃣</div>
              <h3 className="text-lg font-semibold text-white mb-2">Get Recommendations</h3>
              <p className="text-white/80">Receive personalized outfit suggestions with AI insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFashionStylist;
