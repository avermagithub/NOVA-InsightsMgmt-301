import React, { useState } from 'react';
import { Search, Filter, TrendingUp, Users, PieChart, Shield, FileCheck, CreditCard } from 'lucide-react';
import { INSIGHT_CATEGORY_GROUPINGS, INSIGHT_CATEGORIES_BY_GROUP, INSIGHT_EXAMPLES } from '../data/insightExamples';
import FrontOfficeInsights from '../components/FrontOfficeInsights';

const EnhancedInsightsPage = ({ selectedRole }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrouping, setSelectedGrouping] = useState('front_office');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showFrontOfficeInsights, setShowFrontOfficeInsights] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAllInsights, setShowAllInsights] = useState(true);

  const getIconComponent = (iconName) => {
    const icons = {
      TrendingUp,
      Users,
      PieChart,
      Shield,
      FileCheck,
      CreditCard
    };
    return icons[iconName] || TrendingUp;
  };

  const handleCategoryClick = (category) => {
    if (category.id === 'investment_products' || category.id === 'banking_products') {
      setSelectedCategory(category);
      setShowFrontOfficeInsights(true);
    }
  };

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1 className="page-title">Insights Dashboard</h1>
        <p className="page-subtitle">
          Advanced insights and opportunities across all business functions
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-content">
          <div className="grid grid-cols-2" style={{ gap: '1.5rem', alignItems: 'end' }}>
            {/* Search Box */}
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '0.9rem', 
                fontWeight: '500', 
                color: 'var(--ej-gray-700)', 
                marginBottom: '0.5rem' 
              }}>
                Search Insights
              </label>
              <div style={{ position: 'relative' }}>
                <Search 
                  size={20} 
                  style={{ 
                    position: 'absolute', 
                    left: '12px', 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    color: 'var(--ej-gray-400)' 
                  }} 
                />
                <input
                  type="text"
                  placeholder="Search by client name, insight type, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                    border: '1px solid var(--ej-gray-300)',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--ej-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--ej-gray-300)'}
                />
              </div>
            </div>

            {/* Filter Controls */}
            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '0.9rem', 
                fontWeight: '500', 
                color: 'var(--ej-gray-700)', 
                marginBottom: '0.5rem' 
              }}>
                Insight Category Grouping
              </label>
              <select
                value={selectedGrouping}
                onChange={(e) => {
                  setSelectedGrouping(e.target.value);
                  setShowAllInsights(false);
                }}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid var(--ej-gray-300)',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  backgroundColor: 'white',
                  outline: 'none'
                }}
              >
                <option value="">All Category Groups</option>
                {INSIGHT_CATEGORY_GROUPINGS.map(group => (
                  <option key={group.id} value={group.id}>{group.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '0.9rem', 
                fontWeight: '500', 
                color: 'var(--ej-gray-700)', 
                marginBottom: '0.5rem' 
              }}>
                Insight Priority
              </label>
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid var(--ej-gray-300)',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  backgroundColor: 'white',
                  outline: 'none'
                }}
              >
                <option value="">All Priorities</option>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '0.9rem', 
                fontWeight: '500', 
                color: 'var(--ej-gray-700)', 
                marginBottom: '0.5rem' 
              }}>
                Insight Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid var(--ej-gray-300)',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  backgroundColor: 'white',
                  outline: 'none'
                }}
              >
                <option value="">All Status</option>
                <option value="Existing">Existing</option>
                <option value="New">New</option>
                <option value="Logged to CRM">Logged to CRM</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Category Groups Display */}
      {selectedGrouping && !showAllInsights && (
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              {INSIGHT_CATEGORY_GROUPINGS.find(g => g.id === selectedGrouping)?.name} Categories
            </h3>
            <p className="card-subtitle">
              {INSIGHT_CATEGORY_GROUPINGS.find(g => g.id === selectedGrouping)?.description}
            </p>
          </div>
          <div className="card-content">
            <div className="grid grid-cols-3" style={{ gap: '1.5rem' }}>
              {INSIGHT_CATEGORIES_BY_GROUP[selectedGrouping]?.map(category => {
                const IconComponent = getIconComponent(category.icon);
                return (
                  <div
                    key={category.id}
                    onClick={() => handleCategoryClick(category)}
                    style={{
                      padding: '1.5rem',
                      border: '1px solid var(--ej-gray-200)',
                      borderRadius: '12px',
                      background: 'var(--ej-white)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      textAlign: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = 'var(--ej-primary)';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = 'var(--ej-gray-200)';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'var(--ej-primary)',
                      color: 'white',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem'
                    }}>
                      <IconComponent size={28} />
                    </div>
                    <h4 style={{ 
                      color: 'var(--ej-primary)', 
                      fontSize: '1.1rem', 
                      fontWeight: '600',
                      margin: '0 0 0.5rem'
                    }}>
                      {category.name}
                    </h4>
                    <p style={{ 
                      color: 'var(--ej-gray-600)', 
                      fontSize: '0.85rem',
                      margin: '0 0 1rem',
                      lineHeight: 1.4
                    }}>
                      {category.description}
                    </p>
                    <div style={{
                      padding: '0.5rem 1rem',
                      background: 'var(--ej-accent)',
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      display: 'inline-block'
                    }}>
                      {category.totalInsights} Insights
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* All Insights View */}
      {showAllInsights && selectedGrouping === 'front_office' && (
        <div className="card" style={{ marginBottom: '2rem' }}>
          <div className="card-header">
            <h3 className="card-title">All Investment Product Insights</h3>
            <p className="card-subtitle">
              Complete overview of client investment opportunities and recommendations
            </p>
          </div>
          <div className="card-content">
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <button
                onClick={() => setShowAllInsights(false)}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'var(--ej-primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
              >
                Browse by Category
              </button>
              <button
                onClick={() => {
                  setSelectedCategory(INSIGHT_CATEGORIES_BY_GROUP['front_office'][0]);
                  setShowFrontOfficeInsights(true);
                }}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'var(--ej-secondary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
              >
                View Detailed Insights
              </button>
            </div>
            
            {/* Import and use the original InsightCategory component */}
            <div style={{ 
              background: 'var(--ej-gray-50)', 
              padding: '1.5rem', 
              borderRadius: '8px',
              border: '1px solid var(--ej-gray-200)'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ color: 'var(--ej-primary)', marginBottom: '0.5rem' }}>
                  Quick Access: Investment Products Overview
                </h4>
                <p style={{ color: 'var(--ej-gray-600)', fontSize: '0.9rem' }}>
                  Here's a preview of our investment insights. For full functionality including CRM integration, 
                  use "View Detailed Insights" above.
                </p>
              </div>
              
              {/* Show preview of insights */}
              <div style={{ 
                maxHeight: '400px', 
                overflow: 'auto',
                background: 'white',
                padding: '1rem',
                borderRadius: '6px'
              }}>
                {INSIGHT_EXAMPLES.slice(0, 5).map((insight, index) => (
                  <div key={insight.id} style={{
                    padding: '1rem',
                    borderBottom: index < 4 ? '1px solid var(--ej-gray-200)' : 'none',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    setSelectedCategory(INSIGHT_CATEGORIES_BY_GROUP['front_office'][0]);
                    setShowFrontOfficeInsights(true);
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1 }}>
                        <h5 style={{ 
                          color: 'var(--ej-primary)', 
                          margin: '0 0 0.5rem 0',
                          fontSize: '1rem',
                          fontWeight: '600'
                        }}>
                          {insight.title}
                        </h5>
                        <p style={{ 
                          color: 'var(--ej-gray-600)', 
                          margin: '0 0 0.5rem 0',
                          fontSize: '0.85rem'
                        }}>
                          {insight.insight} • {insight.client?.name}
                        </p>
                        <p style={{ 
                          color: 'var(--ej-gray-700)', 
                          margin: 0,
                          fontSize: '0.8rem',
                          lineHeight: 1.4,
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical'
                        }}>
                          {insight.insightText}
                        </p>
                      </div>
                      <div style={{ marginLeft: '1rem' }}>
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: insight.priority === 'Critical' ? 'var(--ej-error)' :
                                         insight.priority === 'High' ? 'var(--ej-warning)' :
                                         insight.priority === 'Medium' ? 'var(--ej-secondary)' : 'var(--ej-success)',
                          color: 'white',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          {insight.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                <div style={{ 
                  textAlign: 'center', 
                  padding: '1rem',
                  borderTop: '1px solid var(--ej-gray-200)',
                  marginTop: '1rem'
                }}>
                  <button
                    onClick={() => {
                      setSelectedCategory(INSIGHT_CATEGORIES_BY_GROUP['front_office'][0]);
                      setShowFrontOfficeInsights(true);
                    }}
                    style={{
                      padding: '0.75rem 1.5rem',
                      background: 'var(--ej-accent)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    View All {INSIGHT_EXAMPLES.length} Insights with Full Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Default View when no grouping selected */}
      {!selectedGrouping && (
        <div className="card">
          <div className="card-content" style={{ textAlign: 'center', padding: '3rem' }}>
            <Filter size={48} style={{ color: 'var(--ej-gray-400)', marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--ej-gray-600)', marginBottom: '0.5rem' }}>
              Select an Insight Category Grouping
            </h3>
            <p style={{ color: 'var(--ej-gray-500)' }}>
              Choose a category grouping from the dropdown above to view available insight categories
            </p>
          </div>
        </div>
      )}

      {/* Front Office Insights Modal */}
      {showFrontOfficeInsights && selectedCategory && (
        <FrontOfficeInsights
          category={selectedCategory}
          onClose={() => setShowFrontOfficeInsights(false)}
        />
      )}
    </div>
  );
};

export default EnhancedInsightsPage;