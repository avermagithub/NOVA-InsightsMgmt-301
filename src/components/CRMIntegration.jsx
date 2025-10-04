import React from 'react';
import { X, User, Building, Calendar, DollarSign, FileText, Activity } from 'lucide-react';

const CRMIntegration = ({ crmType, insight, onClose }) => {
  const getCRMStyles = () => {
    switch (crmType) {
      case 'Salesforce':
        return {
          primary: '#00A1E0',
          secondary: '#0176D3',
          background: '#F3F2F2',
          accent: '#FF6B35'
        };
      case 'Redtail':
        return {
          primary: '#C41E3A',
          secondary: '#8B1538',
          background: '#F8F9FA',
          accent: '#28A745'
        };
      case 'Wealthbox':
        return {
          primary: '#4CAF50',
          secondary: '#388E3C',
          background: '#FAFAFA',
          accent: '#FF9800'
        };
      case 'JUMP':
        return {
          primary: '#FF6B35',
          secondary: '#E55A2B',
          background: '#FFF8F6',
          accent: '#2196F3'
        };
      default:
        return {
          primary: '#003366',
          secondary: '#0066cc',
          background: '#F8FAFC',
          accent: '#FF6B35'
        };
    }
  };

  const styles = getCRMStyles();

  const renderSalesforce = () => (
    <div style={{ display: 'flex', height: '100%' }}>
      {/* Salesforce Sidebar */}
      <div style={{
        width: '250px',
        background: styles.primary,
        color: 'white',
        padding: '1rem'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', margin: '0 0 1rem 0' }}>🏢 Salesforce</h3>
          <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Sales Cloud</div>
        </div>
        
        <nav style={{ fontSize: '0.9rem' }}>
          <div style={{ padding: '0.5rem 0', borderLeft: '3px solid white', paddingLeft: '1rem', marginBottom: '0.5rem' }}>
            <User size={16} style={{ marginRight: '0.5rem', display: 'inline' }} />
            Contacts
          </div>
          <div style={{ padding: '0.5rem 0', paddingLeft: '1rem', marginBottom: '0.5rem', opacity: 0.7 }}>
            <Building size={16} style={{ marginRight: '0.5rem', display: 'inline' }} />
            Accounts
          </div>
          <div style={{ padding: '0.5rem 0', paddingLeft: '1rem', marginBottom: '0.5rem', opacity: 0.7 }}>
            <Activity size={16} style={{ marginRight: '0.5rem', display: 'inline' }} />
            Opportunities
          </div>
        </nav>
      </div>

      {/* Salesforce Main Content */}
      <div style={{ flex: 1, background: 'white', overflow: 'auto' }}>
        {/* Salesforce Header */}
        <div style={{
          background: styles.background,
          padding: '1rem 2rem',
          borderBottom: '1px solid #E5E5E5'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: styles.secondary,
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}>
              {insight.client?.name?.charAt(0)}
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#333' }}>{insight.client?.name}</h2>
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Contact • {insight.client?.occupation}</p>
            </div>
          </div>
        </div>

        {/* Salesforce Tabs */}
        <div style={{ borderBottom: '1px solid #E5E5E5' }}>
          <div style={{ display: 'flex', padding: '0 2rem' }}>
            <div style={{
              padding: '1rem 1.5rem',
              borderBottom: `3px solid ${styles.primary}`,
              color: styles.primary,
              fontWeight: '600'
            }}>
              Details
            </div>
            <div style={{ padding: '1rem 1.5rem', color: '#666' }}>Activity</div>
            <div style={{ padding: '1rem 1.5rem', color: '#666' }}>Related</div>
          </div>
        </div>

        {/* Salesforce Content */}
        <div style={{ padding: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h3 style={{ color: '#333', marginBottom: '1rem' }}>Contact Information</h3>
              <div style={{ background: '#F9F9F9', padding: '1rem', borderRadius: '4px' }}>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong>Name:</strong> {insight.client?.name}
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong>Portfolio Value:</strong> {insight.client?.aum}
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong>Risk Profile:</strong> {insight.client?.riskProfile}
                </div>
                <div>
                  <strong>Location:</strong> {insight.client?.location}
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ color: '#333', marginBottom: '1rem' }}>Edward Jones Insight</h3>
              <div style={{
                background: '#E8F4FD',
                border: `1px solid ${styles.primary}`,
                padding: '1rem',
                borderRadius: '4px'
              }}>
                <h4 style={{ color: styles.primary, margin: '0 0 0.5rem 0' }}>{insight.title}</h4>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.5, margin: '0 0 1rem 0' }}>
                  {insight.insightText}
                </p>
                <div style={{
                  background: 'white',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.85rem'
                }}>
                  <strong>Opportunities:</strong> {insight.opportunities}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRedtail = () => (
    <div style={{ height: '100%', background: 'white' }}>
      {/* Redtail Header */}
      <div style={{
        background: styles.primary,
        color: 'white',
        padding: '0.75rem 2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem'
      }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>📊 Redtail CRM</div>
        <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem' }}>
          <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}>
            Client Management
          </span>
          <span style={{ opacity: 0.8 }}>Activities</span>
          <span style={{ opacity: 0.8 }}>Reports</span>
        </nav>
      </div>

      <div style={{ padding: '2rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: styles.primary, margin: '0 0 0.5rem 0' }}>Client Profile: {insight.client?.name}</h2>
          <div style={{ color: '#666', fontSize: '0.9rem' }}>
            Last Updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem' }}>
          <div>
            <div style={{
              border: '1px solid #DDD',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '1rem'
            }}>
              <div style={{
                background: styles.background,
                padding: '0.75rem 1rem',
                borderBottom: '1px solid #DDD',
                fontWeight: '600'
              }}>
                Client Details
              </div>
              <div style={{ padding: '1rem' }}>
                <div style={{ marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                  <div style={{ color: '#666', fontSize: '0.8rem' }}>AUM</div>
                  <div style={{ fontWeight: '600' }}>{insight.client?.aum}</div>
                </div>
                <div style={{ marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                  <div style={{ color: '#666', fontSize: '0.8rem' }}>Risk Tolerance</div>
                  <div>{insight.client?.riskProfile}</div>
                </div>
                <div style={{ fontSize: '0.9rem' }}>
                  <div style={{ color: '#666', fontSize: '0.8rem' }}>Occupation</div>
                  <div>{insight.client?.occupation}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style={{
              border: '1px solid #DDD',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <div style={{
                background: styles.accent + '20',
                padding: '0.75rem 1rem',
                borderBottom: '1px solid #DDD',
                fontWeight: '600',
                color: styles.accent
              }}>
                Edward Jones Investment Insight
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h4 style={{ color: styles.primary, margin: '0 0 1rem 0' }}>{insight.title}</h4>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>
                    Priority: {insight.priority} | Source: {insight.source}
                  </div>
                  <p style={{ lineHeight: 1.6, margin: 0 }}>
                    {insight.insightText}
                  </p>
                </div>
                <div style={{
                  background: '#F8F9FA',
                  padding: '1rem',
                  borderRadius: '4px',
                  borderLeft: `4px solid ${styles.accent}`
                }}>
                  <div style={{ fontWeight: '600', marginBottom: '0.5rem', color: styles.accent }}>
                    Action Items:
                  </div>
                  <div style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                    {insight.opportunities}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWealthbox = () => (
    <div style={{ height: '100%', background: styles.background }}>
      {/* Wealthbox Header */}
      <div style={{
        background: 'white',
        borderBottom: '1px solid #E0E0E0',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontSize: '1.3rem', color: styles.primary, fontWeight: 'bold' }}>
            💼 Wealthbox
          </div>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>CRM</div>
        </div>
        <div style={{ fontSize: '0.85rem', color: '#666' }}>
          {insight.client?.name} Profile
        </div>
      </div>

      <div style={{ padding: '1.5rem 2rem' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: styles.primary,
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.4rem',
              fontWeight: 'bold'
            }}>
              {insight.client?.name?.charAt(0)}
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.4rem', color: '#333' }}>{insight.client?.name}</h2>
              <div style={{ color: '#666', fontSize: '0.9rem' }}>{insight.client?.occupation}</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
          <div>
            <div style={{
              background: 'white',
              border: '1px solid #E0E0E0',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: styles.primary }}>Portfolio Summary</h3>
              <div style={{ fontSize: '0.9rem', lineHeight: 2 }}>
                <div><strong>Total AUM:</strong> {insight.client?.aum}</div>
                <div><strong>Risk Profile:</strong> {insight.client?.riskProfile}</div>
                <div><strong>Age:</strong> {insight.client?.age}</div>
                <div><strong>Location:</strong> {insight.client?.location}</div>
              </div>
            </div>
          </div>

          <div>
            <div style={{
              background: 'white',
              border: '1px solid #E0E0E0',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: styles.accent
                }}></div>
                <h3 style={{ margin: 0, color: styles.primary }}>Investment Opportunity Alert</h3>
              </div>
              
              <div style={{
                background: '#F0F8F0',
                border: '1px solid #C8E6C9',
                borderRadius: '6px',
                padding: '1rem',
                marginBottom: '1rem'
              }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: styles.accent }}>{insight.title}</h4>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.75rem' }}>
                  Generated: {insight.createdDate} | Expires: {insight.expiryDate}
                </div>
                <p style={{ margin: '0 0 1rem 0', lineHeight: 1.5, fontSize: '0.9rem' }}>
                  {insight.insightText}
                </p>
                
                <div style={{
                  background: 'white',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  border: '1px solid #E0E0E0'
                }}>
                  <div style={{ fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                    Recommended Actions:
                  </div>
                  <div style={{ fontSize: '0.85rem', lineHeight: 1.4 }}>
                    {insight.opportunities}
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button style={{
                  background: styles.primary,
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}>
                  Schedule Meeting
                </button>
                <button style={{
                  background: 'white',
                  color: styles.primary,
                  border: `1px solid ${styles.primary}`,
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}>
                  Add to Tasks
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderJUMP = () => (
    <div style={{ height: '100%', background: 'white' }}>
      {/* JUMP Header */}
      <div style={{
        background: `linear-gradient(135deg, ${styles.primary} 0%, ${styles.secondary} 100%)`,
        color: 'white',
        padding: '1rem 2rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>📅 JUMP</div>
          <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Meeting Preparation Platform</div>
        </div>
      </div>

      <div style={{ padding: '2rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: styles.primary, margin: '0 0 0.5rem 0' }}>
            Client Meeting Preparation: {insight.client?.name}
          </h2>
          <div style={{ color: '#666', fontSize: '0.9rem' }}>
            Scheduled Meeting Prep • {new Date().toLocaleDateString()}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <div style={{
              border: '2px solid #F0F0F0',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{ color: styles.primary, margin: '0 0 1rem 0' }}>Client Overview</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.9rem' }}>
                <div>
                  <div style={{ color: '#666', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Portfolio Value</div>
                  <div style={{ fontWeight: '600', color: styles.accent }}>{insight.client?.aum}</div>
                </div>
                <div>
                  <div style={{ color: '#666', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Risk Profile</div>
                  <div style={{ fontWeight: '500' }}>{insight.client?.riskProfile}</div>
                </div>
                <div>
                  <div style={{ color: '#666', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Age</div>
                  <div style={{ fontWeight: '500' }}>{insight.client?.age}</div>
                </div>
                <div>
                  <div style={{ color: '#666', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Occupation</div>
                  <div style={{ fontWeight: '500' }}>{insight.client?.occupation}</div>
                </div>
              </div>
            </div>

            <div style={{
              border: '2px solid #F0F0F0',
              borderRadius: '12px',
              padding: '1.5rem'
            }}>
              <h3 style={{ color: styles.primary, margin: '0 0 1rem 0' }}>Meeting Objectives</h3>
              <div style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                {insight.client?.objectives?.map((objective, index) => (
                  <div key={index} style={{
                    padding: '0.5rem 0',
                    borderBottom: index < insight.client.objectives.length - 1 ? '1px solid #F0F0F0' : 'none'
                  }}>
                    <span style={{ marginRight: '0.5rem', color: styles.accent }}>•</span>
                    {objective}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div style={{
              background: `linear-gradient(135deg, ${styles.primary}15 0%, ${styles.accent}15 100%)`,
              border: `2px solid ${styles.primary}`,
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: styles.accent,
                  animation: 'pulse 2s infinite'
                }}></div>
                <h3 style={{ color: styles.primary, margin: 0 }}>Key Discussion Point</h3>
              </div>
              
              <h4 style={{ color: styles.secondary, margin: '0 0 0.75rem 0' }}>{insight.title}</h4>
              <p style={{ margin: '0 0 1rem 0', lineHeight: 1.5, fontSize: '0.9rem' }}>
                {insight.insightText}
              </p>
              
              <div style={{
                background: 'white',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid #E0E0E0'
              }}>
                <div style={{ fontWeight: '600', marginBottom: '0.5rem', color: styles.primary }}>
                  Talking Points & Action Items:
                </div>
                <div style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
                  {insight.opportunities}
                </div>
              </div>
            </div>

            <div style={{
              background: '#F8F9FA',
              border: '1px solid #E0E0E0',
              borderRadius: '8px',
              padding: '1rem'
            }}>
              <h4 style={{ margin: '0 0 0.75rem 0', color: styles.primary }}>Meeting Tools</h4>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{
                  background: styles.primary,
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.8rem'
                }}>
                  Portfolio Analysis
                </span>
                <span style={{
                  background: styles.accent,
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.8rem'
                }}>
                  Market Update
                </span>
                <span style={{
                  background: '#28A745',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.8rem'
                }}>
                  Action Plan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCRMContent = () => {
    switch (crmType) {
      case 'Salesforce':
        return renderSalesforce();
      case 'Redtail':
        return renderRedtail();
      case 'Wealthbox':
        return renderWealthbox();
      case 'JUMP':
        return renderJUMP();
      default:
        return <div>CRM Integration Coming Soon</div>;
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '95%',
          maxWidth: '1400px',
          height: '90%',
          maxHeight: '900px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.5)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* CRM Window Header */}
        <div style={{
          background: styles.primary,
          color: 'white',
          padding: '0.75rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '1.1rem',
          fontWeight: '600'
        }}>
          <span>{crmType} CRM Integration</span>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '4px',
              color: 'white'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* CRM Content */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          {renderCRMContent()}
        </div>
      </div>
    </div>
  );
};

export default CRMIntegration;