import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, TrendingUp, Mail, Video, Phone, FileText, MessageCircle, Eye, Users } from 'lucide-react';

const Sidebar = ({ navigationItems, onClientInsightsClick }) => {
  const location = useLocation();
  const [selectedBusinessBenefit, setSelectedBusinessBenefit] = useState('');

  const businessBenefitsData = {
    'Front Office': {
      title: 'Front Office Benefits ($2M+ Annual Impact)',
      benefits: [
        'Investment Products: +2.8% performance, $6,200 tax savings, $2,800 cost reduction',
        'Annuities: $12,950 surrender penalty avoidance, +2.8% performance improvement',
        'RMD Management: $27,500 penalty prevention, 22-37% tax bracket optimization',
        'Banking Products: $65,000 lifetime mortgage savings, +4.5% APY improvements',
        'Portfolio Management: $8,400 fee reduction, $2,900 cash drag elimination',
        'Trading: $4,200 tax-loss harvesting, +3.2% sector rotation alpha'
      ]
    },
    'Middle Office': {
      title: 'Middle Office Benefits ($800K+ Annual Savings)',
      benefits: [
        'Trade Settlement: $200K-$600K operational savings, 45-70% delay reduction',
        'Risk Management: $200K-$600K penalty avoidance, 92% early detection rate',
        'Performance Attribution: $14.2M additional client returns, +24% advisor adoption'
      ]
    },
    'Back Office': {
      title: 'Back Office Benefits ($180K+ Cost Avoidance)',
      benefits: [
        'Accounting: $156,000 duplicate payment prevention, $24,000 late fee savings',
        'Regulatory: 95% compliance vs 78% industry, zero penalties achieved'
      ]
    },
    'Field Management': {
      title: 'Field Management Benefits (Efficiency Multipliers)',
      benefits: [
        'Advisor Segmentation: $18.5M growth potential, 87% engagement scores',
        'Succession Planning: 18-36 month advance planning, 25-96% engagement rates'
      ]
    },
    'Field Leader Management': {
      title: 'Field Leader Management (Leadership ROI)',
      benefits: [
        'Performance Attribution: 2.8x-5.3x coaching ROI multipliers',
        'Advisor Retention: 95% retention during market turbulence'
      ]
    },
    'Advisor Recruitment': {
      title: 'Advisor Recruitment (Growth Strategy)',
      benefits: [
        'Intelligence System: 78% conversion likelihood, 92% persona alignment',
        'Market Opportunity: $390M AUM potential identification'
      ]
    },
    'Overall': {
      title: 'Total Business Impact Summary',
      benefits: [
        '$2.5M+ Annual ROI Potential per advisor/field manager',
        '85% Operational Efficiency improvement across all functions',
        '95% Compliance Rate vs 78% industry average',
        'Cost Avoidance: $200K-$600K annual operational savings',
        'Performance Enhancement: +2.8% to +18% return improvements'
      ]
    }
  };

  const edjAISolutions = [
    { name: 'EDJ Email', icon: Mail },
    { name: 'EDJ Meeting', icon: Video },
    { name: 'EDJ Call', icon: Phone },
    { name: 'EDJ Briefings', icon: FileText },
    { name: 'EDJ Chatbot', icon: MessageCircle },
    { name: 'EDJ Insight Panel', icon: Eye }
  ];

  return (
    <aside className="sidebar">
      <nav>
        <ul className="nav-menu">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.id} className="nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  <Icon className="nav-icon" size={20} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Client Insights Button */}
      <div className="sidebar-section" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--ej-gray-200)' }}>
        <div style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <button
            onClick={onClientInsightsClick}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.875rem 1rem',
              background: 'var(--ej-primary)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--ej-gray-800)';
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'var(--ej-primary)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }}
          >
            <Users size={18} />
            <span>Client Insights</span>
          </button>
        </div>
      </div>

      {/* Business Benefits Section */}
      <div className="sidebar-section" style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--ej-gray-200)' }}>
        <h4 style={{ 
          color: 'var(--ej-primary)', 
          fontSize: '1rem', 
          fontWeight: '600', 
          marginBottom: '1rem',
          paddingLeft: '1.5rem'
        }}>
          Insight Business Benefits
        </h4>
        
        <div style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <select
            value={selectedBusinessBenefit}
            onChange={(e) => setSelectedBusinessBenefit(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid var(--ej-gray-300)',
              borderRadius: '8px',
              fontSize: '0.875rem',
              backgroundColor: 'var(--ej-white)',
              outline: 'none',
              cursor: 'pointer',
              color: 'var(--ej-primary)',
              fontWeight: '500',
              marginBottom: '1rem'
            }}
          >
            <option value="">Business Benefits:</option>
            <option value="Front Office">Front Office</option>
            <option value="Middle Office">Middle Office</option>
            <option value="Back Office">Back Office</option>
            <option value="Field Management">Field Management</option>
            <option value="Field Leader Management">Field Leader Management</option>
            <option value="Advisor Recruitment">Advisor Recruitment</option>
            <option value="Overall">Overall</option>
          </select>

          {selectedBusinessBenefit && businessBenefitsData[selectedBusinessBenefit] && (
            <div style={{
              background: 'var(--ej-gray-50)',
              border: '1px solid var(--ej-gray-200)',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem'
            }}>
              <h5 style={{
                color: 'var(--ej-primary)',
                fontSize: '0.875rem',
                fontWeight: '600',
                marginBottom: '0.75rem',
                lineHeight: '1.4'
              }}>
                {businessBenefitsData[selectedBusinessBenefit].title}
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {businessBenefitsData[selectedBusinessBenefit].benefits.map((benefit, index) => (
                  <li key={index} style={{
                    fontSize: '0.8rem',
                    color: 'var(--ej-gray-700)',
                    marginBottom: '0.5rem',
                    lineHeight: '1.3',
                    paddingLeft: '1rem',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '0.1rem',
                      color: 'var(--ej-gold)',
                      fontWeight: 'bold'
                    }}>
                      #
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* EDJ AI Solutions Section */}
      <div className="sidebar-section" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--ej-gray-200)' }}>
        <h4 style={{ 
          color: 'var(--ej-primary)', 
          fontSize: '1rem', 
          fontWeight: '600', 
          marginBottom: '1rem',
          paddingLeft: '1.5rem'
        }}>
          Links to <span style={{ color: 'var(--ej-gold)' }}>EDJ</span> AI Solutions
        </h4>
        
        <div style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          {edjAISolutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.75rem',
                  marginBottom: '0.5rem',
                  border: '1px solid var(--ej-gray-200)',
                  borderRadius: '8px',
                  backgroundColor: 'var(--ej-white)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: 'var(--ej-primary)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'var(--ej-gold)';
                  e.target.style.backgroundColor = 'var(--ej-gray-50)';
                  e.target.style.transform = 'translateX(2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'var(--ej-gray-200)';
                  e.target.style.backgroundColor = 'var(--ej-white)';
                  e.target.style.transform = 'translateX(0)';
                }}
                onClick={() => {
                  // Placeholder for future navigation functionality
                  console.log(`Navigating to ${solution.name}`);
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'var(--ej-gold)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '0.75rem'
                }}>
                  <Icon size={16} color="white" />
                </div>
                <span>{solution.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;