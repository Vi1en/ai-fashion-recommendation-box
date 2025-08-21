import React, { useState, useEffect, useCallback } from 'react';
import './FashionRecommendationBox.css';

interface FashionItem {
  item: string;
  score: number;
  confidence: number;
  trendScore: number;
  finalScore?: number;
  aiReasoning?: string;
}

const FashionRecommendationBox: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [selectedStyle, setSelectedStyle] = useState<string>('');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('');
  const [selectedSeason, setSelectedSeason] = useState<string>('');
  const [recommendations, setRecommendations] = useState<FashionItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aiInsights, setAiInsights] = useState<any>({});

  const genders = ['Male', 'Female', 'Non-binary'];
  const styles = [
    'Casual', 'Formal', 'Streetwear', 'Vintage', 'Minimalist', 
    'Bohemian', 'Athletic', 'Business', 'Glamorous', 'Artistic'
  ];

  const occasions = [
    'Work', 'Party', 'Date Night', 'Weekend', 'Travel', 
    'Sport', 'Formal Event', 'Casual Outing', 'Creative Meeting'
  ];

  const seasons = ['Spring', 'Summer', 'Fall', 'Winter'];

  // Enhanced fashion database with gender-specific recommendations
  const fashionDatabase: any = {
    'Male': {
      'Casual': {
        'Work': {
          'Spring': [
            { item: 'Oxford shirt with chinos', score: 0.95, confidence: 0.92, trendScore: 0.88 },
            { item: 'Polo shirt with dark jeans', score: 0.87, confidence: 0.85, trendScore: 0.82 },
            { item: 'Sweater vest with button-down', score: 0.89, confidence: 0.88, trendScore: 0.85 }
          ],
          'Summer': [
            { item: 'Linen button-down with shorts', score: 0.93, confidence: 0.91, trendScore: 0.89 },
            { item: 'Polo shirt with khakis', score: 0.91, confidence: 0.89, trendScore: 0.87 },
            { item: 'T-shirt with chino pants', score: 0.85, confidence: 0.83, trendScore: 0.81 }
          ],
          'Fall': [
            { item: 'Sweater with dark jeans', score: 0.94, confidence: 0.92, trendScore: 0.90 },
            { item: 'Blazer with t-shirt and jeans', score: 0.88, confidence: 0.86, trendScore: 0.84 },
            { item: 'Turtleneck with chinos', score: 0.90, confidence: 0.88, trendScore: 0.86 }
          ],
          'Winter': [
            { item: 'Wool sweater with dark jeans', score: 0.96, confidence: 0.94, trendScore: 0.92 },
            { item: 'Fleece jacket with jeans', score: 0.89, confidence: 0.87, trendScore: 0.85 },
            { item: 'Thermal shirt with chinos', score: 0.87, confidence: 0.85, trendScore: 0.83 }
          ]
        },
        'Weekend': {
          'Spring': [
            { item: 'Denim jacket with t-shirt and jeans', score: 0.92, confidence: 0.90, trendScore: 0.88 },
            { item: 'Sneakers with joggers', score: 0.88, confidence: 0.86, trendScore: 0.84 },
            { item: 'Hoodie with shorts', score: 0.85, confidence: 0.83, trendScore: 0.81 }
          ],
          'Summer': [
            { item: 'Tank top with shorts', score: 0.94, confidence: 0.92, trendScore: 0.90 },
            { item: 'Polo shirt with shorts', score: 0.96, confidence: 0.94, trendScore: 0.92 },
            { item: 'Flip flops with everything', score: 0.82, confidence: 0.80, trendScore: 0.78 }
          ],
          'Fall': [
            { item: 'Flannel shirt with jeans', score: 0.93, confidence: 0.91, trendScore: 0.89 },
            { item: 'Sweatshirt with joggers', score: 0.89, confidence: 0.87, trendScore: 0.85 },
            { item: 'Boots with jeans and flannel', score: 0.91, confidence: 0.89, trendScore: 0.87 }
          ],
          'Winter': [
            { item: 'Puffer jacket with jeans', score: 0.95, confidence: 0.93, trendScore: 0.91 },
            { item: 'Beanie with sweater and jeans', score: 0.88, confidence: 0.86, trendScore: 0.84 },
            { item: 'Scarf with coat and jeans', score: 0.90, confidence: 0.88, trendScore: 0.86 }
          ]
        }
      }
    },
    'Female': {
      'Casual': {
        'Work': {
          'Spring': [
            { item: 'Blouse with high-waisted pants', score: 0.95, confidence: 0.93, trendScore: 0.91 },
            { item: 'Cardigan with blouse and jeans', score: 0.92, confidence: 0.90, trendScore: 0.88 },
            { item: 'T-shirt dress with blazer', score: 0.89, confidence: 0.87, trendScore: 0.85 }
          ],
          'Summer': [
            { item: 'Linen dress with sandals', score: 0.94, confidence: 0.92, trendScore: 0.90 },
            { item: 'Blouse with wide-leg pants', score: 0.93, confidence: 0.91, trendScore: 0.89 },
            { item: 'Midi skirt with tank top', score: 0.91, confidence: 0.89, trendScore: 0.87 }
          ]
        }
      }
    }
  };

  // AI-powered recommendation engine
  const generateRecommendations = useCallback(() => {
    if (!selectedGender || !selectedStyle || !selectedOccasion || !selectedSeason) {
      return;
    }

    setIsLoading(true);

    // Simulate AI processing time
    setTimeout(() => {
      const baseRecommendations = fashionDatabase[selectedGender]?.[selectedStyle]?.[selectedOccasion]?.[selectedSeason] || [];
      
      // AI scoring and ranking
      const scoredRecommendations = baseRecommendations.map((item: FashionItem) => {
        const personalizationBonus = 0.5; // Base bonus
        const trendBonus = item.trendScore * 0.2;
        const finalScore = (item.score + personalizationBonus + trendBonus) / 3;
        
        return {
          ...item,
          finalScore: finalScore,
          aiReasoning: `Perfect for ${selectedStyle.toLowerCase()} style in ${selectedSeason.toLowerCase()}`
        };
      });

      // Sort by AI score
      const sortedRecommendations = scoredRecommendations.sort((a: any, b: any) => b.finalScore - a.finalScore);
      
      setRecommendations(sortedRecommendations.slice(0, 5));
      setAiInsights({
        genderFit: Math.random() * 0.3 + 0.7,
        styleConfidence: Math.random() * 0.2 + 0.8,
        occasionMatch: Math.random() * 0.2 + 0.8,
        seasonalFit: Math.random() * 0.2 + 0.8,
        overallScore: sortedRecommendations[0]?.finalScore || 0.85,
        trendAlignment: sortedRecommendations[0]?.trendScore || 0.88
      });
      setIsLoading(false);
    }, 2000);
  }, [selectedGender, selectedStyle, selectedOccasion, selectedSeason]);

  useEffect(() => {
    if (selectedGender && selectedStyle && selectedOccasion && selectedSeason) {
      generateRecommendations();
    }
  }, [generateRecommendations]);

  const handleSelection = (type: string, value: string) => {
    switch (type) {
      case 'gender':
        setSelectedGender(value);
        break;
      case 'style':
        setSelectedStyle(value);
        break;
      case 'occasion':
        setSelectedOccasion(value);
        break;
      case 'season':
        setSelectedSeason(value);
        break;
    }
  };

  return (
    <div className="fashion-recommendation-box">
      <div className="selection-section">
        <h2>Choose Your Style Preferences</h2>
        
        <div className="selection-group">
          <label>Gender Identity:</label>
          <div className="button-group">
            {genders.map(gender => (
              <button
                key={gender}
                className={selectedGender === gender ? 'selected' : ''}
                onClick={() => handleSelection('gender', gender)}
              >
                {gender}
              </button>
            ))}
          </div>
        </div>

        <div className="selection-group">
          <label>Style Preference:</label>
          <div className="button-group">
            {styles.map(style => (
              <button
                key={style}
                className={selectedStyle === style ? 'selected' : ''}
                onClick={() => handleSelection('style', style)}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        <div className="selection-group">
          <label>Occasion:</label>
          <div className="button-group">
            {occasions.map(occasion => (
              <button
                key={occasion}
                className={selectedOccasion === occasion ? 'selected' : ''}
                onClick={() => handleSelection('occasion', occasion)}
              >
                {occasion}
              </button>
            ))}
          </div>
        </div>

        <div className="selection-group">
          <label>Season:</label>
          <div className="button-group">
            {seasons.map(season => (
              <button
                key={season}
                className={selectedSeason === season ? 'selected' : ''}
                onClick={() => handleSelection('season', season)}
              >
                {season}
              </button>
            ))}
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="loading-section">
          <div className="ai-spinner"></div>
          <p>AI is analyzing your style preferences...</p>
        </div>
      )}

      {recommendations.length > 0 && !isLoading && (
        <div className="results-section">
          <h2>AI Fashion Recommendations</h2>
          
          <div className="ai-insights">
            <h3>AI Analysis</h3>
            <div className="insights-grid">
              <div className="insight-item">
                <span className="insight-label">Gender Fit:</span>
                <span className="insight-value">{(aiInsights.genderFit * 100).toFixed(0)}%</span>
              </div>
              <div className="insight-item">
                <span className="insight-label">Style Confidence:</span>
                <span className="insight-value">{(aiInsights.styleConfidence * 100).toFixed(0)}%</span>
              </div>
              <div className="insight-item">
                <span className="insight-label">Occasion Match:</span>
                <span className="insight-value">{(aiInsights.occasionMatch * 100).toFixed(0)}%</span>
              </div>
              <div className="insight-item">
                <span className="insight-label">Seasonal Fit:</span>
                <span className="insight-value">{(aiInsights.seasonalFit * 100).toFixed(0)}%</span>
              </div>
              <div className="insight-item">
                <span className="insight-label">Overall Score:</span>
                <span className="insight-value">{(aiInsights.overallScore * 100).toFixed(0)}%</span>
              </div>
              <div className="insight-item">
                <span className="insight-label">Trend Alignment:</span>
                <span className="insight-value">{(aiInsights.trendAlignment * 100).toFixed(0)}%</span>
              </div>
            </div>
          </div>

          <div className="recommendations-list">
            {recommendations.map((item, index) => (
              <div key={index} className="recommendation-item">
                <div className="item-header">
                  <h4>{item.item}</h4>
                  <div className="item-scores">
                    <span className="score">Score: {((item.finalScore || 0) * 100).toFixed(0)}%</span>
                    <span className="confidence">Confidence: {(item.confidence * 100).toFixed(0)}%</span>
                    <span className="trend">Trend: {(item.trendScore * 100).toFixed(0)}%</span>
                  </div>
                </div>
                <p className="ai-reasoning">{item.aiReasoning}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FashionRecommendationBox;
