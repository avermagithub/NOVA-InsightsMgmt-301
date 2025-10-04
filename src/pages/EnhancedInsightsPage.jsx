import React, { useState } from 'react';
import { Search, Filter, TrendingUp, Users, PieChart, Shield, FileCheck } from 'lucide-react';
import { INSIGHT_CATEGORY_GROUPINGS, INSIGHT_CATEGORIES_BY_GROUP } from '../data/insightExamples';
import FrontOfficeInsights from '../components/FrontOfficeInsights';

const EnhancedInsightsPage = ({ selectedRole }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrouping, setSelectedGrouping] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showFrontOfficeInsights, setShowFrontOfficeInsights] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getIconComponent = (iconName) => {
    const icons = {
      TrendingUp,
      Users,
      PieChart,
      Shield,
      FileCheck
    };
    return icons[iconName] || TrendingUp;
  };

  const handleCategoryClick = (category) => {
    if (category.id === 'investment_products') {
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
                onChange={(e) => setSelectedGrouping(e.target.value)}
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
      {selectedGrouping && (
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