import React from 'react';
import { TrendingUp } from 'lucide-react';
import InsightCategory from '../components/InsightCategory';
import { INVESTMENT_PRODUCTS_CATEGORY, INVESTMENT_INSIGHTS, BUSINESS_BENEFITS } from '../data/mockData';
import { INSIGHT_EXAMPLES } from '../data/insightExamples';

const InsightsPage = ({ selectedRole }) => {
  return (
    <div className="fade-in">
      <div className="page-header">
        <h1 className="page-title">Investment Product Insights</h1>
        <p className="page-subtitle">
          Comprehensive insights to help Financial Advisors identify the right investment products for client portfolios
        </p>
      </div>

      <div className="insights-container">
        <InsightCategory 
          category={INVESTMENT_PRODUCTS_CATEGORY}
          insights={INVESTMENT_INSIGHTS}
          examples={INSIGHT_EXAMPLES}
          businessBenefits={BUSINESS_BENEFITS}
          selectedRole={selectedRole}
        />
      </div>
    </div>
  );
};

export default InsightsPage;