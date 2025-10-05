import React, { useState } from 'react';
import { Search, Filter, TrendingUp, Users, PieChart, Shield, FileCheck, CreditCard, MessageSquare, BarChart3, GraduationCap, Target, Calendar, Calculator, Eye, DollarSign, Briefcase, Monitor, Activity, UserCheck } from 'lucide-react';
import { INSIGHT_CATEGORY_GROUPINGS, INSIGHT_CATEGORIES_BY_GROUP, INSIGHT_EXAMPLES } from '../data/insightExamples';
import FrontOfficeInsights from '../components/FrontOfficeInsights';

const EnhancedInsightsPage = ({ selectedRole }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrouping, setSelectedGrouping] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showFrontOfficeInsights, setShowFrontOfficeInsights] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAllInsights, setShowAllInsights] = useState(false);
  const [showInsightsByCategory, setShowInsightsByCategory] = useState(true);

  const getIconComponent = (iconName) => {
    const icons = {
      TrendingUp,
      Users,
      PieChart,
      Shield,
      FileCheck,
      CreditCard,
      MessageSquare,
      BarChart3,
      GraduationCap,
      Target,
      Calendar,
      Calculator,
      Eye,
      DollarSign,
      Briefcase,
      Monitor,
      Activity,
      UserCheck
    };
    return icons[iconName] || TrendingUp;
  };

  const handleCategoryClick = (category) => {
    if (category.id === 'investment_products' || category.id === 'banking_products' || category.id === 'crm' || category.id === 'account_performance' || category.id === 'insurance_planning' || category.id === 'education_planning' || category.id === 'sbl' || category.id === 'financial_planning' || category.id === 'retirement_planning' || category.id === 'estate_planning' || category.id === 'trust_planning' || category.id === 'tax_planning' || category.id === 'client_360' || category.id === 'cash' || category.id === 'events' || category.id === 'referrals' || category.id === 'business_owners' || category.id === 'wire_transfers' || category.id === 'portfolio_management' || category.id === 'trading' || category.id === 'advisory_service' || category.id === 'investment_proposal' || category.id === 'investment_research' || category.id === 'client_reporting' || category.id === 'life_events' || category.id === 'client_portal_engagement' || category.id === 'advisor_client_engagement' || category.id === 'client_surveys' || category.id === 'client_onboarding') {
      setSelectedCategory(category);
      setShowFrontOfficeInsights(true);
    }
  };

  // Filter insights based on search term and priority
  const getFilteredInsights = () => {
    return INSIGHT_EXAMPLES.filter(insight => {
      const matchesSearch = searchTerm === '' || 
        insight.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        insight.insightText?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        insight.client?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        insight.advisor?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        insight.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        insight.insight?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesPriority = selectedPriority === '' || insight.priority === selectedPriority;
      const matchesStatus = selectedStatus === '' || insight.status === selectedStatus;
      
      return matchesSearch && matchesPriority && matchesStatus;
    });
  };

  // Group insights by category
  const getInsightsByCategory = () => {
    const filteredInsights = getFilteredInsights();
    const grouped = {};
    
    filteredInsights.forEach(insight => {
      const category = insight.category || 'Uncategorized';
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(insight);
    });
    
    return grouped;
  };

  // Helper function to get example insights for each category
  const getCategoryExampleInsight = (categoryName) => {
    const categoryInsights = INSIGHT_EXAMPLES.filter(insight => insight.category === categoryName);
    return categoryInsights.length > 0 ? categoryInsights[0] : null;
  };

  // Business benefits mapping for categories
  const getCategoryBusinessBenefits = (categoryId) => {
    const benefitsMap = {
      'investment_products': '+2.8% performance, $6,200 tax savings, $2,800 cost reduction',
      'banking_products': '$65,000 lifetime mortgage savings, +4.5% APY improvements', 
      'crm': '$18.5M growth potential, 87% engagement scores',
      'account_performance': '$14.2M additional client returns, +24% advisor adoption',
      'insurance_planning': '$12,950 surrender penalty avoidance, +2.8% performance improvement',
      'education_planning': '$27,500 penalty prevention, 22-37% tax bracket optimization',
      'sbl': '$8,400 fee reduction, $2,900 cash drag elimination',
      'financial_planning': '$2.5M+ Annual ROI Potential per advisor',
      'retirement_planning': '$27,500 penalty prevention, Social Security optimization',
      'estate_planning': '$4,200 tax-loss harvesting, estate tax minimization',
      'trust_planning': 'Advanced trust strategies, wealth transfer optimization',
      'tax_planning': '$6,200 tax savings, +3.2% sector rotation alpha',
      'client_360': 'Comprehensive client intelligence, relationship monitoring',
      'cash': '$2,900 cash drag elimination, liquidity optimization',
      'events': 'Client event planning, educational program optimization',
      'referrals': '$390M AUM potential identification, 78% conversion likelihood',
      'business_owners': '$18.5M growth potential, business advisory services',
      'wire_transfers': '$200K-$600K operational savings, compliance monitoring',
      'portfolio_management': '$8,400 fee reduction, performance optimization',
      'trading': '$4,200 tax-loss harvesting, trade execution optimization',
      'advisory_service': '$2.5M+ Annual ROI, service expansion opportunities',
      'investment_proposal': 'Investment proposal optimization, conversion enhancement',
      'investment_research': 'Research distribution analytics, client engagement insights',
      'client_reporting': 'Reporting optimization, performance analytics enhancement',
      'life_events': 'Life event detection, proactive outreach optimization',
      'client_portal_engagement': 'Digital engagement analytics, portal optimization',
      'advisor_client_engagement': 'Relationship analytics, communication optimization',
      'client_surveys': 'Satisfaction measurement, service improvement insights',
      'client_onboarding': 'Onboarding optimization, compliance processing',
      'risk_management': '$200K-$600K penalty avoidance, 92% early detection rate',
      'compliance': '95% compliance vs 78% industry, zero penalties achieved'
    };
    return benefitsMap[categoryId] || 'Operational efficiency and performance optimization';
  };

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1 className="page-title">
          Welcome to EDJ Insights & Opportunities Management
        </h1>
        <p className="page-subtitle" style={{ marginBottom: '1.5rem' }}>
          Empowering Financial Advisors, Middle Office Support Teams, Back Office Support Teams, Field Leaders, Regional and National Field Management Teams, Advisor Recruitment Teams, Home Office Teams with AI Powered Insights and Opportunities
        </p>
      </div>

      {/* Comprehensive Insight Category Overview */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-header">
          <h3 className="card-title">Platform Overview: Insight Categories & Business Impact</h3>
          <p className="card-subtitle">
            Comprehensive guide to our {Object.values(INSIGHT_CATEGORIES_BY_GROUP).flat().length} insight categories across {INSIGHT_CATEGORY_GROUPINGS.length} business function groups, delivering measurable ROI and operational excellence
          </p>
        </div>
        <div className="card-content" style={{ padding: '2rem' }}>
          {INSIGHT_CATEGORY_GROUPINGS.map((group) => (
            <div key={group.id} style={{ marginBottom: '3rem' }}>
              {/* Group Header */}
              <div style={{ 
                background: 'linear-gradient(135deg, var(--ej-primary) 0%, var(--ej-gray-800) 100%)',
                color: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                marginBottom: '1.5rem'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 0.5rem' }}>
                  {group.name}
                </h3>
                <p style={{ fontSize: '1rem', opacity: '0.9', margin: 0 }}>
                  {group.description}
                </p>
              </div>

              {/* Categories in this Group */}
              <div style={{ display: 'grid', gap: '2rem' }}>
                {INSIGHT_CATEGORIES_BY_GROUP[group.id]?.map((category) => {
                  const IconComponent = getIconComponent(category.icon);
                  const exampleInsight = getCategoryExampleInsight(category.name);
                  const businessBenefits = getCategoryBusinessBenefits(category.id);

                  return (
                    <div key={category.id} style={{
                      border: '1px solid var(--ej-gray-200)',
                      borderRadius: '12px',
                      padding: '1.5rem',
                      background: 'var(--ej-white)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                      transition: 'all 0.2s ease'
                    }}>
                      {/* Category Header */}
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: 'var(--ej-primary)',
                          color: 'white',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <IconComponent size={24} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ 
                            color: 'var(--ej-primary)', 
                            fontSize: '1.25rem', 
                            fontWeight: '600',
                            margin: '0 0 0.5rem'
                          }}>
                            {category.name}
                            <span style={{
                              background: 'var(--ej-gold)',
                              color: 'var(--ej-primary)',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '20px',
                              fontSize: '0.8rem',
                              fontWeight: '600',
                              marginLeft: '1rem'
                            }}>
                              {category.totalInsights} Insights
                            </span>
                          </h4>
                          <p style={{ 
                            color: 'var(--ej-gray-600)', 
                            fontSize: '1rem',
                            margin: '0',
                            lineHeight: '1.5'
                          }}>
                            {category.description}
                          </p>
                        </div>
                      </div>

                      {/* Example Insight */}
                      {exampleInsight && (
                        <div style={{
                          background: 'var(--ej-gray-50)',
                          border: '1px solid var(--ej-gray-200)',
                          borderRadius: '8px',
                          padding: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <h5 style={{
                            color: 'var(--ej-primary)',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            margin: '0 0 0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}>
                            <Eye size={16} />
                            Example Insight: {exampleInsight.title}
                          </h5>
                          <p style={{
                            color: 'var(--ej-gray-700)',
                            fontSize: '0.85rem',
                            margin: '0',
                            lineHeight: '1.4'
                          }}>
                            {exampleInsight.insightText?.substring(0, 200) + (exampleInsight.insightText?.length > 200 ? '...' : '')}
                          </p>
                        </div>
                      )}

                      {/* Business Benefits */}
                      <div style={{
                        background: 'linear-gradient(135deg, var(--ej-gold) 0%, #FFD700 100%)',
                        color: 'var(--ej-primary)',
                        borderRadius: '8px',
                        padding: '1rem'
                      }}>
                        <h5 style={{
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          margin: '0 0 0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <TrendingUp size={16} />
                          Business Benefits
                        </h5>
                        <p style={{
                          fontSize: '0.85rem',
                          margin: '0',
                          lineHeight: '1.4',
                          fontWeight: '500'
                        }}>
                          {businessBenefits}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compact Horizontal Search and Filter Controls */}
      <div className="compact-filter-bar" style={{ 
        marginBottom: '2rem',
        background: 'var(--ej-white)',
        border: '1px solid var(--ej-gray-200)',
        borderRadius: '12px',
        padding: '1rem',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {/* Search Dropdown */}
          <div style={{ flex: '2', minWidth: '300px' }}>
            <div style={{ position: 'relative' }}>
              <Search 
                size={18} 
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
                placeholder="Search Insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.6rem 0.6rem 0.6rem 2.25rem',
                  border: '1px solid var(--ej-gray-300)',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  backgroundColor: 'var(--ej-gray-50)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--ej-primary)';
                  e.target.style.backgroundColor = 'white';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--ej-gray-300)';
                  e.target.style.backgroundColor = 'var(--ej-gray-50)';
                }}
              />
            </div>
          </div>

          {/* Category Grouping Dropdown */}
          <div style={{ minWidth: '200px' }}>
            <select
              value={selectedGrouping}
              onChange={(e) => {
                setSelectedGrouping(e.target.value);
                setShowAllInsights(false);
                if (e.target.value === '') {
                  setShowInsightsByCategory(true);
                } else {
                  setShowInsightsByCategory(false);
                }
              }}
              style={{
                width: '100%',
                padding: '0.6rem',
                border: '1px solid var(--ej-gray-300)',
                borderRadius: '8px',
                fontSize: '0.875rem',
                backgroundColor: 'var(--ej-gray-50)',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="">Insight Category Grouping</option>
              {INSIGHT_CATEGORY_GROUPINGS.map(group => (
                <option key={group.id} value={group.id}>{group.name}</option>
              ))}
            </select>
          </div>

          {/* Priority Dropdown */}
          <div style={{ minWidth: '150px' }}>
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem',
                border: '1px solid var(--ej-gray-300)',
                borderRadius: '8px',
                fontSize: '0.875rem',
                backgroundColor: 'var(--ej-gray-50)',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="">Insight Priority</option>
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          {/* Status Dropdown */}
          <div style={{ minWidth: '150px' }}>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem',
                border: '1px solid var(--ej-gray-300)',
                borderRadius: '8px',
                fontSize: '0.875rem',
                backgroundColor: 'var(--ej-gray-50)',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="">Insight Status</option>
              <option value="Existing">Existing</option>
              <option value="New">New</option>
              <option value="Logged to CRM">Logged to CRM</option>
            </select>
          </div>

          {/* Clear Filters Button */}
          {(searchTerm || selectedGrouping || selectedPriority || selectedStatus) && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedGrouping('');
                setSelectedPriority('');
                setSelectedStatus('');
                setShowInsightsByCategory(true);
              }}
              style={{
                padding: '0.6rem 1rem',
                background: 'var(--ej-gray-200)',
                border: '1px solid var(--ej-gray-300)',
                borderRadius: '8px',
                fontSize: '0.875rem',
                cursor: 'pointer',
                color: 'var(--ej-gray-700)',
                fontWeight: '500',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--ej-gray-300)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'var(--ej-gray-200)';
              }}
            >
              Clear All
            </button>
          )}
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

      {/* All Insights Grouped by Category - Default Home View */}
      {showInsightsByCategory && !showFrontOfficeInsights && (
        <div>
          {Object.entries(getInsightsByCategory()).map(([categoryName, insights]) => (
            <div key={categoryName} className="card" style={{ marginBottom: '2rem' }}>
              <div className="card-header">
                <h3 className="card-title" style={{ 
                  color: 'var(--ej-primary)', 
                  fontSize: '1.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  {(() => {
                    const categoryConfig = Object.values(INSIGHT_CATEGORIES_BY_GROUP)
                      .flat()
                      .find(cat => cat.name === categoryName || cat.id === categoryName.toLowerCase().replace(/\s+/g, '_'));
                    
                    if (categoryConfig) {
                      const IconComponent = getIconComponent(categoryConfig.icon);
                      return <IconComponent size={20} />;
                    }
                    return null;
                  })()}
                  {categoryName} ({insights.length} insights)
                </h3>
                <p className="card-subtitle">
                  {(() => {
                    const categoryConfig = Object.values(INSIGHT_CATEGORIES_BY_GROUP)
                      .flat()
                      .find(cat => cat.name === categoryName || cat.id === categoryName.toLowerCase().replace(/\s+/g, '_'));
                    return categoryConfig?.description || `${categoryName} insights and recommendations`;
                  })()}
                </p>
              </div>
              <div className="card-content">
                <div style={{ 
                  display: 'grid', 
                  gap: '1rem',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
                }}>
                  {insights.slice(0, 6).map((insight, index) => (
                    <div 
                      key={insight.id} 
                      style={{
                        padding: '1.25rem',
                        border: '1px solid var(--ej-gray-200)',
                        borderRadius: '8px',
                        background: 'var(--ej-white)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        position: 'relative'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--ej-primary)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--ej-gray-200)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      onClick={() => {
                        const category = Object.values(INSIGHT_CATEGORIES_BY_GROUP)
                          .flat()
                          .find(cat => cat.name === categoryName);
                        if (category) {
                          setSelectedCategory(category);
                          setShowFrontOfficeInsights(true);
                          setShowInsightsByCategory(false);
                        }
                      }}
                    >
                      <div style={{ marginBottom: '0.75rem' }}>
                        <h4 style={{ 
                          color: 'var(--ej-primary)', 
                          margin: '0 0 0.5rem 0',
                          fontSize: '1rem',
                          fontWeight: '600',
                          lineHeight: 1.3
                        }}>
                          {insight.title}
                        </h4>
                        <p style={{ 
                          color: 'var(--ej-gray-600)', 
                          margin: '0 0 0.5rem 0',
                          fontSize: '0.85rem'
                        }}>
                          {insight.client?.name} • {insight.advisor?.name}
                        </p>
                      </div>
                      
                      <p style={{ 
                        color: 'var(--ej-gray-700)', 
                        margin: '0 0 1rem 0',
                        fontSize: '0.9rem',
                        lineHeight: 1.4,
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical'
                      }}>
                        {insight.insightText}
                      </p>
                      
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        marginTop: 'auto'
                      }}>
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
                        <span style={{
                          color: 'var(--ej-primary)',
                          fontSize: '0.8rem',
                          fontWeight: '500'
                        }}>
                          View Details →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {insights.length > 6 && (
                  <div style={{ 
                    textAlign: 'center', 
                    marginTop: '1.5rem',
                    padding: '1rem',
                    borderTop: '1px solid var(--ej-gray-200)'
                  }}>
                    <button
                      onClick={() => {
                        const category = Object.values(INSIGHT_CATEGORIES_BY_GROUP)
                          .flat()
                          .find(cat => cat.name === categoryName);
                        if (category) {
                          setSelectedCategory(category);
                          setShowFrontOfficeInsights(true);
                          setShowInsightsByCategory(false);
                        }
                      }}
                      style={{
                        padding: '0.75rem 1.5rem',
                        background: 'var(--ej-accent)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.background = 'var(--ej-primary)'}
                      onMouseLeave={(e) => e.target.style.background = 'var(--ej-accent)'}
                    >
                      View All {insights.length} {categoryName} Insights
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {Object.keys(getInsightsByCategory()).length === 0 && (
            <div className="card">
              <div className="card-content" style={{ textAlign: 'center', padding: '3rem' }}>
                <Filter size={48} style={{ color: 'var(--ej-gray-400)', marginBottom: '1rem' }} />
                <h3 style={{ color: 'var(--ej-gray-600)', marginBottom: '0.5rem' }}>
                  No Insights Found
                </h3>
                <p style={{ color: 'var(--ej-gray-500)' }}>
                  Try adjusting your search criteria or filters
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Default View when no grouping selected */}
      {!selectedGrouping && !showInsightsByCategory && (
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
          onClose={() => {
            setShowFrontOfficeInsights(false);
            setShowInsightsByCategory(true);
          }}
        />
      )}
    </div>
  );
};

export default EnhancedInsightsPage;