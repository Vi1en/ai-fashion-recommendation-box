import React from 'react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            🤖 AI Fashion Recommendation Box
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Get intelligent, personalized fashion recommendations powered by AI
          </p>
          <div className="space-x-4">
            <Link
              to="/ai-fashion-stylist"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Try AI Fashion Stylist
            </Link>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Recommendations</h3>
              <p className="text-white/80">AI-powered outfit suggestions based on your style preferences</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-white mb-2">Machine Learning</h3>
              <p className="text-white/80">Advanced algorithms that learn from your choices</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-2">Responsive Design</h3>
              <p className="text-white/80">Works perfectly on all devices and screen sizes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
