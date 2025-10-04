import React, { useState } from 'react';
import { X, AlertTriangle, Target, CheckCircle } from 'lucide-react';
import { INSIGHT_EXAMPLES } from '../data/insightExamples';
import FrontOfficeInsightDetails from './FrontOfficeInsightDetails';

const FrontOfficeInsights = ({ category, onClose }) => {
  const [selectedInsight, setSelectedInsight] = useState(null);
  const [showInsightDetails, setShowInsightDetails] = useState(false);

  // Filter insights for selected category and sort by priority
  const categoryName = category?.id === 'banking_products' ? 'Banking Products & Services' : 'Investment Products';
  const categoryInsights = INSIGHT_EXAMPLES.filter(insight => 
    insight.category === categoryName
  );

  // Group insights by priority
  const insightsByPriority = {
    Critical: categoryInsights.filter(insight => insight.priority === 'Critical'),
    High: categoryInsights.filter(insight => insight.priority === 'High'),
    Medium: categoryInsights.filter(insight => insight.priority === 'Medium'),
    Low: categoryInsights.filter(insight => insight.priority === 'Low')
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return '#ef4444';
      case 'High': return '#f59e0b';
      case 'Medium': return '#0066cc';
      case 'Low': return '#10b981';
      default: return '#6b7280';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'Critical': return <AlertTriangle size={16} />;
      case 'High': return <Target size={16} />;
      case 'Medium': return <CheckCircle size={16} />;
      case 'Low': return <CheckCircle size={16} />;
      default: return <CheckCircle size={16} />;
    }
  };

  const handleInsightClick = (insight) => {
    setSelectedInsight(insight);
    setShowInsightDetails(true);
  };

  return (
    <>
      {/* Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={onClose}
      >
        {/* Front Office Insights Window */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            width: '90%',
            maxWidth: '1000px',
            height: '90%',
            maxHeight: '800px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div style={{
            padding: '1.5rem 2rem',
            borderBottom: '1px solid var(--ej-gray-200)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--ej-gray-50)',
            borderRadius: '12px 12px 0 0'
          }}>
            <div>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: '600',
                color: 'var(--ej-primary)',
                margin: '0 2rem 0 0',
                display: 'inline'
              }}>
                Front Office Insights
              </h2>
              <span style={{
                fontSize: '1.75rem',
                fontWeight: '600',
                color: 'var(--ej-secondary)',
                margin: 0
              }}>
                {category.name}
              </span>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--ej-gray-200)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <X size={24} color="var(--ej-gray-600)" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div style={{
            flex: 1,
            overflow: 'auto',
            padding: '1.5rem 2rem'
          }}>
            {Object.entries(insightsByPriority).map(([priority, insights]) => {
              if (insights.length === 0) return null;
              
              return (
                <div key={priority} style={{ marginBottom: '2rem' }}>
                  {/* Priority Section Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem',
                    padding: '0.75rem 1rem',
                    backgroundColor: getPriorityColor(priority) + '10',
                    borderRadius: '8px',
                    borderLeft: `4px solid ${getPriorityColor(priority)}`
                  }}>
                    <div style={{ color: getPriorityColor(priority) }}>
                      {getPriorityIcon(priority)}
                    </div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: getPriorityColor(priority),
                      margin: 0
                    }}>
                      {priority} Priority
                    </h3>
                    <span style={{
                      fontSize: '0.9rem',
                      color: 'var(--ej-gray-600)',
                      fontWeight: '500'
                    }}>
                      ({insights.length} insights)
                    </span>
                  </div>

                  {/* Insights List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {insights.map((insight) => (
                      <div
                        key={insight.id}
                        onClick={() => handleInsightClick(insight)}
                        style={{
                          padding: '1.25rem',
                          border: '1px solid var(--ej-gray-200)',
                          borderRadius: '8px',
                          backgroundColor: 'white',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          borderLeft: `4px solid ${getPriorityColor(priority)}`
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.borderColor = getPriorityColor(priority);
                          e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                          e.target.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.borderColor = 'var(--ej-gray-200)';
                          e.target.style.boxShadow = 'none';
                          e.target.style.transform = 'translateY(0)';
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <div style={{ flex: 1 }}>
                            <h4 style={{
                              fontSize: '1.1rem',
                              fontWeight: '600',
                              color: 'var(--ej-primary)',
                              margin: '0 0 0.5rem 0'
                            }}>
                              {insight.title}
                            </h4>
                            <p style={{
                              fontSize: '0.9rem',
                              color: 'var(--ej-gray-600)',
                              margin: '0 0 0.75rem 0',
                              fontStyle: 'italic'
                            }}>
                              {insight.insight} • {insight.client?.name}
                            </p>
                            <p style={{
                              fontSize: '0.85rem',
                              color: 'var(--ej-gray-700)',
                              margin: 0,
                              lineHeight: 1.4,
                              overflow: 'hidden',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical'
                            }}>
                              {insight.insightText}
                            </p>
                          </div>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginLeft: '1rem',
                            flexShrink: 0
                          }}>
                            <span style={{
                              padding: '0.25rem 0.75rem',
                              backgroundColor: insight.status === 'New' ? 'var(--ej-success)' : 
                                             insight.status === 'Existing' ? 'var(--ej-warning)' : 'var(--ej-secondary)',
                              color: 'white',
                              borderRadius: '12px',
                              fontSize: '0.75rem',
                              fontWeight: '500'
                            }}>
                              {insight.status}
                            </span>
                            <span style={{
                              padding: '0.25rem 0.75rem',
                              backgroundColor: getPriorityColor(priority),
                              color: 'white',
                              borderRadius: '12px',
                              fontSize: '0.75rem',
                              fontWeight: '500',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.25rem'
                            }}>
                              {getPriorityIcon(priority)}
                              {priority}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Front Office Insight Details Modal */}
      {showInsightDetails && selectedInsight && (
        <FrontOfficeInsightDetails
          insight={selectedInsight}
          onClose={() => setShowInsightDetails(false)}
        />
      )}
    </>
  );
};

export default FrontOfficeInsights;