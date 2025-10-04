import React from 'react';
import { Package, TrendingUp } from 'lucide-react';
import InsightItem from './InsightItem';

const InsightCategory = ({ category, insights, examples, businessBenefits, selectedRole }) => {
  // Group examples by insight type
  const examplesByInsight = examples.reduce((acc, example) => {
    if (!acc[example.insight]) {
      acc[example.insight] = [];
    }
    acc[example.insight].push(example);
    return acc;
  }, {});

  return (
    <div className="insight-category">
      {/* Category Header */}
      <div className="category-header">
        <div className="category-icon">
          <Package size={24} />
        </div>
        <div className="category-info">
          <h3>{category.name}</h3>
          <p><strong>Grouping:</strong> {category.grouping}</p>
          <p>{category.description}</p>
        </div>
      </div>

      {/* Business Benefits Section */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-header">
          <h3 className="card-title">Business Benefits</h3>
          <p className="card-subtitle">Key advantages of Investment Products insights</p>
        </div>
        <div className="card-content">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {businessBenefits.map((benefit, index) => (
              <li key={index} style={{ 
                marginBottom: '0.75rem',
                padding: '0.75rem',
                background: 'var(--ej-gray-50)',
                borderRadius: '6px',
                borderLeft: '3px solid var(--ej-secondary)'
              }}>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Insights Section */}
      <div className="insights-grid">
        {insights.map((insight) => {
          const insightExamples = examplesByInsight[insight.name] || [];
          
          return (
            <div key={insight.id} className="insight-section" style={{ marginBottom: '3rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: '1.5rem',
                padding: '1rem',
                background: 'var(--ej-white)',
                borderRadius: '8px',
                borderLeft: '4px solid var(--ej-accent)'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: 'var(--ej-accent)',
                  color: 'var(--ej-white)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 style={{ 
                    color: 'var(--ej-primary)',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    margin: '0 0 0.25rem 0'
                  }}>
                    {insight.name}
                  </h4>
                  <p style={{ 
                    color: 'var(--ej-gray-600)',
                    fontSize: '0.9rem',
                    margin: 0,
                    fontStyle: 'italic'
                  }}>
                    {insight.purpose}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1" style={{ gap: '1rem' }}>
                {insightExamples.map((example) => (
                  <InsightItem 
                    key={example.id}
                    example={example}
                    selectedRole={selectedRole}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InsightCategory;