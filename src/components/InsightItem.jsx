import React from 'react';
import { User, Briefcase, AlertTriangle, CheckCircle, Target } from 'lucide-react';
import { WEALTH_SEGMENTS } from '../data/mockData';

const InsightItem = ({ example, selectedRole }) => {
  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'critical':
        return 'var(--ej-error)';
      case 'high':
        return 'var(--ej-warning)';
      case 'medium':
        return 'var(--ej-secondary)';
      case 'low':
        return 'var(--ej-success)';
      default:
        return 'var(--ej-gray-400)';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'critical':
        return <AlertTriangle size={16} />;
      case 'high':
        return <Target size={16} />;
      case 'medium':
        return <CheckCircle size={16} />;
      case 'low':
        return <CheckCircle size={16} />;
      default:
        return <CheckCircle size={16} />;
    }
  };

  const wealthSegment = WEALTH_SEGMENTS[example.client?.wealthSegment];

  return (
    <div className="insight-item">
      <div className="insight-header">
        <div style={{ flex: 1 }}>
          <h4 className="insight-title">{example.title}</h4>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            marginTop: '0.25rem'
          }}>
            <span className="insight-purpose">
              Insight Type: {example.insight}
            </span>
            {example.priority && (
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px',
                background: getPriorityColor(example.priority),
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: '500'
              }}>
                {getPriorityIcon(example.priority)}
                {example.priority}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="insight-content">
        <div className="insight-text">
          <strong>Insight:</strong> {example.insightText}
        </div>
        
        <div className="opportunities-section">
          <div className="opportunities-title">
            <CheckCircle size={16} style={{ color: 'var(--ej-success)' }} />
            Opportunities
          </div>
          <div className="opportunities-text">
            {example.opportunities}
          </div>
        </div>
      </div>

      <div className="client-advisor-info">
        <div className="client-info">
          <h4>
            <User size={16} />
            Client Information
          </h4>
          <div><strong>Name:</strong> {example.client?.name}</div>
          <div><strong>AUM:</strong> {example.client?.aum}</div>
          <div><strong>Age:</strong> {example.client?.age}</div>
          <div><strong>Occupation:</strong> {example.client?.occupation}</div>
          <div><strong>Risk Profile:</strong> {example.client?.riskProfile}</div>
          <div><strong>Location:</strong> {example.client?.location}</div>
          {wealthSegment && (
            <div className="wealth-segment">
              {wealthSegment.label} ({wealthSegment.range})
            </div>
          )}
          {example.client?.objectives && (
            <div style={{ marginTop: '0.5rem' }}>
              <strong>Objectives:</strong>
              <div style={{ fontSize: '0.8rem', color: 'var(--ej-gray-600)', marginTop: '0.25rem' }}>
                {example.client.objectives.join(', ')}
              </div>
            </div>
          )}
        </div>

        <div className="advisor-info">
          <h4>
            <Briefcase size={16} />
            Financial Advisor
          </h4>
          <div><strong>Name:</strong> {example.advisor?.name}</div>
          <div><strong>Firm:</strong> {example.advisor?.firm}</div>
          <div><strong>Experience:</strong> {example.advisor?.experience} years</div>
          <div><strong>AUM:</strong> {example.advisor?.aum}</div>
          <div><strong>Clients:</strong> {example.advisor?.clientCount}</div>
          <div><strong>Location:</strong> {example.advisor?.location}</div>
          {example.advisor?.specialties && (
            <div style={{ marginTop: '0.5rem' }}>
              <strong>Specialties:</strong>
              <div style={{ fontSize: '0.8rem', color: 'var(--ej-gray-600)', marginTop: '0.25rem' }}>
                {example.advisor.specialties.join(', ')}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsightItem;