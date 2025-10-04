import React, { useState } from 'react';
import { 
  X, 
  User, 
  Calendar, 
  AlertCircle, 
  Target, 
  Phone, 
  Mail, 
  MessageCircle, 
  Video,
  ThumbsUp, 
  ThumbsDown, 
  Trash2,
  ExternalLink
} from 'lucide-react';
import { WEALTH_SEGMENTS } from '../data/mockData';
import CRMIntegration from './CRMIntegration';

const FrontOfficeInsightDetails = ({ insight, onClose }) => {
  const [showCRMIntegration, setShowCRMIntegration] = useState(false);
  const [selectedCRM, setSelectedCRM] = useState('');
  const [feedback, setFeedback] = useState('');

  const wealthSegment = WEALTH_SEGMENTS[insight.client?.wealthSegment];

  const handleCRMClick = (crmType) => {
    setSelectedCRM(crmType);
    setShowCRMIntegration(true);
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
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={onClose}
      >
        {/* Front Office Insight Details Window */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            width: '95%',
            maxWidth: '1200px',
            height: '95%',
            maxHeight: '900px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div style={{
            padding: '1.5rem 2rem',
            borderBottom: '2px solid var(--ej-gray-200)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'linear-gradient(135deg, var(--ej-primary) 0%, var(--ej-secondary) 100%)',
            color: 'white',
            borderRadius: '12px 12px 0 0'
          }}>
            <div>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                margin: '0 0 0.25rem 0'
              }}>
                Front Office Insight Details
              </h2>
              <p style={{
                fontSize: '1.1rem',
                margin: 0,
                opacity: 0.9
              }}>
                {insight.category} • {insight.title}
              </p>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            >
              <X size={24} color="white" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div style={{
            flex: 1,
            overflow: 'auto',
            padding: '2rem'
          }}>
            <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
              {/* Left Column */}
              <div>
                {/* Insight Information */}
                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--ej-gray-200)',
                  borderRadius: '12px',
                  backgroundColor: 'var(--ej-gray-50)',
                  marginBottom: '1.5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--ej-primary)',
                    margin: '0 0 1rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Target size={20} />
                    Insight Information
                  </h3>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--ej-gray-600)' }}>
                        Insight Name
                      </label>
                      <p style={{ margin: '0.25rem 0 0 0', fontWeight: '600' }}>{insight.title}</p>
                    </div>
                    
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--ej-gray-600)' }}>
                        Insight Priority
                      </label>
                      <span style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        backgroundColor: insight.priority === 'Critical' ? 'var(--ej-error)' :
                                       insight.priority === 'High' ? 'var(--ej-warning)' :
                                       insight.priority === 'Medium' ? 'var(--ej-secondary)' : 'var(--ej-success)',
                        color: 'white',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        marginTop: '0.25rem'
                      }}>
                        {insight.priority}
                      </span>
                    </div>
                    
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--ej-gray-600)' }}>
                        Insight Created Date
                      </label>
                      <p style={{ margin: '0.25rem 0 0 0', fontWeight: '500' }}>{insight.createdDate}</p>
                    </div>
                    
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--ej-gray-600)' }}>
                        Insight Expiry Date
                      </label>
                      <p style={{ margin: '0.25rem 0 0 0', fontWeight: '500' }}>{insight.expiryDate}</p>
                    </div>
                    
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--ej-gray-600)' }}>
                        Insight Source
                      </label>
                      <p style={{ margin: '0.25rem 0 0 0', fontWeight: '500' }}>{insight.source}</p>
                    </div>
                    
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--ej-gray-600)' }}>
                        Insight Logic
                      </label>
                      <p style={{ margin: '0.25rem 0 0 0', fontWeight: '500' }}>{insight.logic}</p>
                    </div>
                    
                    <div style={{ gridColumn: 'span 2' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--ej-gray-600)' }}>
                        Model/Rule Name
                      </label>
                      <p style={{ margin: '0.25rem 0 0 0', fontWeight: '500', fontSize: '0.9rem' }}>{insight.modelRuleName}</p>
                    </div>
                    
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--ej-gray-600)' }}>
                        Next Best Action
                      </label>
                      <span style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        backgroundColor: insight.nextBestAction === 'Yes' ? 'var(--ej-success)' : 'var(--ej-gray-400)',
                        color: 'white',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        marginTop: '0.25rem'
                      }}>
                        {insight.nextBestAction}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Client Information */}
                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--ej-gray-200)',
                  borderRadius: '12px',
                  backgroundColor: 'white',
                  marginBottom: '1.5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--ej-primary)',
                    margin: '0 0 1rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <User size={20} />
                    Client Information
                  </h3>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--ej-gray-600)' }}>
                        Client Name
                      </label>
                      <p style={{ margin: '0.25rem 0 0 0', fontWeight: '600' }}>{insight.client?.name}</p>
                    </div>
                    
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--ej-gray-600)' }}>
                        Client Risk Profile
                      </label>
                      <p style={{ margin: '0.25rem 0 0 0', fontWeight: '500' }}>{insight.client?.riskProfile}</p>
                    </div>
                    
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--ej-gray-600)' }}>
                        Portfolio Value
                      </label>
                      <p style={{ margin: '0.25rem 0 0 0', fontWeight: '600', color: 'var(--ej-success)' }}>
                        {insight.client?.aum}
                      </p>
                    </div>
                    
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--ej-gray-600)' }}>
                        Wealth Segment
                      </label>
                      {wealthSegment && (
                        <span style={{
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          backgroundColor: 'var(--ej-secondary)',
                          color: 'white',
                          borderRadius: '12px',
                          fontSize: '0.8rem',
                          fontWeight: '500',
                          marginTop: '0.25rem'
                        }}>
                          {wealthSegment.label}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                {/* Insight Details */}
                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--ej-gray-200)',
                  borderRadius: '12px',
                  backgroundColor: 'white',
                  marginBottom: '1.5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--ej-primary)',
                    margin: '0 0 1rem 0'
                  }}>
                    Insight Details
                  </h3>
                  <div style={{
                    padding: '1rem',
                    backgroundColor: 'var(--ej-gray-50)',
                    borderRadius: '8px',
                    borderLeft: '4px solid var(--ej-accent)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: 'var(--ej-gray-800)'
                  }}>
                    {insight.insightText}
                  </div>
                </div>

                {/* Insight Reasoning */}
                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--ej-gray-200)',
                  borderRadius: '12px',
                  backgroundColor: 'var(--ej-gray-50)',
                  marginBottom: '1.5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--ej-primary)',
                    margin: '0 0 1rem 0'
                  }}>
                    Insight Reasoning
                  </h3>
                  <div style={{
                    padding: '1rem',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid var(--ej-gray-200)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: 'var(--ej-gray-800)'
                  }}>
                    {insight.reasoning}
                  </div>
                </div>

                {/* Opportunities */}
                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--ej-gray-200)',
                  borderRadius: '12px',
                  backgroundColor: 'white',
                  marginBottom: '1.5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--ej-success)',
                    margin: '0 0 1rem 0'
                  }}>
                    Opportunities
                  </h3>
                  <div style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(16, 185, 129, 0.05)',
                    borderRadius: '8px',
                    borderLeft: '4px solid var(--ej-success)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: 'var(--ej-gray-800)'
                  }}>
                    {insight.opportunities}
                  </div>
                </div>
              </div>
            </div>

            {/* Integration and Actions Section */}
            <div className="grid grid-cols-2" style={{ gap: '2rem', marginTop: '2rem' }}>
              {/* CRM Integration */}
              <div style={{
                padding: '1.5rem',
                border: '1px solid var(--ej-gray-200)',
                borderRadius: '12px',
                backgroundColor: 'white'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--ej-primary)',
                  margin: '0 0 1rem 0'
                }}>
                  Integrate the Insights and Opportunities to:
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {[
                    { name: 'Salesforce', color: '#00A1E0', icon: '🏢' },
                    { name: 'Redtail', color: '#C41E3A', icon: '📊' },
                    { name: 'Wealthbox', color: '#4CAF50', icon: '💼' },
                    { name: 'JUMP', color: '#FF6B35', icon: '📅' }
                  ].map(crm => (
                    <button
                      key={crm.name}
                      onClick={() => handleCRMClick(crm.name)}
                      style={{
                        padding: '0.75rem',
                        border: `2px solid ${crm.color}`,
                        borderRadius: '8px',
                        backgroundColor: 'white',
                        color: crm.color,
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = crm.color;
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'white';
                        e.target.style.color = crm.color;
                      }}
                    >
                      <span>{crm.icon}</span>
                      {crm.name}
                      <ExternalLink size={16} />
                    </button>
                  ))}
                </div>

                {/* Connect with Client */}
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--ej-primary)',
                  margin: '1.5rem 0 1rem 0'
                }}>
                  Connect with Client
                </h4>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {[
                    { name: 'EDJ Call', icon: Phone, color: 'var(--ej-primary)' },
                    { name: 'EDJ Email', icon: Mail, color: 'var(--ej-secondary)' },
                    { name: 'EDJ Meeting Scheduler', icon: Calendar, color: 'var(--ej-accent)' },
                    { name: 'EDJ Chat', icon: MessageCircle, color: 'var(--ej-success)' }
                  ].map(action => (
                    <button
                      key={action.name}
                      style={{
                        padding: '0.75rem',
                        border: `1px solid ${action.color}`,
                        borderRadius: '8px',
                        backgroundColor: action.color,
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'translateY(-1px)'}
                      onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                      <action.icon size={16} />
                      {action.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Feedback Section */}
              <div style={{
                padding: '1.5rem',
                border: '1px solid var(--ej-gray-200)',
                borderRadius: '12px',
                backgroundColor: 'white'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--ej-primary)',
                  margin: '0 0 1rem 0'
                }}>
                  Provide Feedback
                </h3>
                
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                  <button
                    style={{
                      padding: '0.75rem',
                      border: '1px solid var(--ej-success)',
                      borderRadius: '8px',
                      backgroundColor: 'var(--ej-success)',
                      color: 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    <ThumbsUp size={16} />
                    Helpful
                  </button>
                  
                  <button
                    style={{
                      padding: '0.75rem',
                      border: '1px solid var(--ej-warning)',
                      borderRadius: '8px',
                      backgroundColor: 'var(--ej-warning)',
                      color: 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    <ThumbsDown size={16} />
                    Not Helpful
                  </button>
                  
                  <button
                    style={{
                      padding: '0.75rem',
                      border: '1px solid var(--ej-error)',
                      borderRadius: '8px',
                      backgroundColor: 'var(--ej-error)',
                      color: 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
                
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Provide detailed feedback on this insight..."
                  style={{
                    width: '100%',
                    minHeight: '100px',
                    padding: '0.75rem',
                    border: '1px solid var(--ej-gray-300)',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    resize: 'vertical',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CRM Integration Modal */}
      {showCRMIntegration && (
        <CRMIntegration
          crmType={selectedCRM}
          insight={insight}
          onClose={() => setShowCRMIntegration(false)}
        />
      )}
    </>
  );
};

export default FrontOfficeInsightDetails;