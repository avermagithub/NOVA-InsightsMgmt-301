import React, { useState } from 'react';
import { X, Eye, User, TrendingUp, AlertCircle, Calendar } from 'lucide-react';
import { CLIENTS } from '../data/mockData';
import { INSIGHT_EXAMPLES } from '../data/insightExamples';

const ClientInsightsModal = ({ isOpen, onClose }) => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [showClientDetails, setShowClientDetails] = useState(false);

  if (!isOpen) return null;

  // Get all clients that have insights
  const clientsWithInsights = CLIENTS.filter(client => 
    INSIGHT_EXAMPLES.some(insight => insight.client?.id === client.id)
  );

  // Get insights for a specific client
  const getClientInsights = (clientId) => {
    return INSIGHT_EXAMPLES.filter(insight => insight.client?.id === clientId);
  };

  const handleClientClick = (client) => {
    setSelectedClient(client);
    setShowClientDetails(true);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return '#ef4444';
      case 'High': return '#f59e0b';
      case 'Medium': return '#10b981';
      case 'Low': return '#6b7280';
      default: return '#6b7280';
    }
  };

  const getWealthSegmentColor = (segment) => {
    switch (segment) {
      case 'UHNW': return '#8b5cf6';
      case 'HNW': return '#3b82f6';
      case 'Affluent': return '#10b981';
      case 'Mass Affluent': return '#f59e0b';
      case 'Emerging Wealth': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <>
      {/* Backdrop */}
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
        {/* Modal Content */}
        <div 
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            width: '90vw',
            maxWidth: '1200px',
            height: '85vh',
            position: 'relative',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            overflow: 'hidden'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div style={{
            padding: '1.5rem 2rem',
            borderBottom: '1px solid var(--ej-gray-200)',
            background: 'var(--ej-primary)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '600' }}>
                {showClientDetails ? `${selectedClient?.name} - Insights Dashboard` : 'Client Insights'}
              </h2>
              <p style={{ margin: '0.5rem 0 0', opacity: 0.9, fontSize: '0.9rem' }}>
                {showClientDetails 
                  ? `Comprehensive insights for ${selectedClient?.name} (${selectedClient?.wealthSegment})`
                  : `${clientsWithInsights.length} clients with active insights across all categories`
                }
              </p>
            </div>
            <button 
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal Body */}
          <div style={{ 
            padding: '2rem', 
            height: 'calc(85vh - 100px)', 
            overflow: 'auto' 
          }}>
            {!showClientDetails ? (
              // Client Selection View
              <>
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ 
                    color: 'var(--ej-primary)', 
                    marginBottom: '1rem',
                    fontSize: '1.25rem',
                    fontWeight: '600'
                  }}>
                    Select a Client to View Their Insights
                  </h3>
                  <p style={{ color: 'var(--ej-gray-600)', marginBottom: '1.5rem' }}>
                    Click on any client box below to view their personalized insights and opportunities
                  </p>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {clientsWithInsights.map(client => {
                    const clientInsights = getClientInsights(client.id);
                    return (
                      <div
                        key={client.id}
                        onClick={() => handleClientClick(client)}
                        style={{
                          border: '1px solid var(--ej-gray-200)',
                          borderRadius: '12px',
                          padding: '1.5rem',
                          background: 'var(--ej-white)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                          e.target.style.borderColor = 'var(--ej-gold)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                          e.target.style.borderColor = 'var(--ej-gray-200)';
                        }}
                      >
                        {/* Client Header */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                          <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: getWealthSegmentColor(client.wealthSegment),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '1.25rem',
                            fontWeight: '600'
                          }}>
                            {client.name?.split(' ').map(n => n[0]).join('').substring(0, 2)}
                          </div>
                          <div style={{ flex: 1 }}>
                            <h4 style={{ 
                              margin: '0 0 0.25rem', 
                              color: 'var(--ej-primary)',
                              fontSize: '1.1rem',
                              fontWeight: '600'
                            }}>
                              {client.name}
                            </h4>
                            <div style={{
                              background: getWealthSegmentColor(client.wealthSegment),
                              color: 'white',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '16px',
                              fontSize: '0.75rem',
                              fontWeight: '600',
                              display: 'inline-block'
                            }}>
                              {client.wealthSegment}
                            </div>
                          </div>
                        </div>

                        {/* Client Details */}
                        <div style={{ 
                          display: 'grid', 
                          gridTemplateColumns: '1fr 1fr', 
                          gap: '0.75rem',
                          marginBottom: '1rem',
                          fontSize: '0.875rem'
                        }}>
                          <div>
                            <span style={{ color: 'var(--ej-gray-500)', fontWeight: '500' }}>Age: </span>
                            <span style={{ color: 'var(--ej-primary)' }}>{client.age}</span>
                          </div>
                          <div>
                            <span style={{ color: 'var(--ej-gray-500)', fontWeight: '500' }}>AUM: </span>
                            <span style={{ color: 'var(--ej-primary)', fontWeight: '600' }}>{client.aum}</span>
                          </div>
                          <div>
                            <span style={{ color: 'var(--ej-gray-500)', fontWeight: '500' }}>Risk: </span>
                            <span style={{ color: 'var(--ej-primary)' }}>{client.riskProfile}</span>
                          </div>
                          <div>
                            <span style={{ color: 'var(--ej-gray-500)', fontWeight: '500' }}>Location: </span>
                            <span style={{ color: 'var(--ej-primary)' }}>{client.location}</span>
                          </div>
                        </div>

                        {/* Insights Summary */}
                        <div style={{
                          background: 'var(--ej-gray-50)',
                          border: '1px solid var(--ej-gray-200)',
                          borderRadius: '8px',
                          padding: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <Eye size={16} color="var(--ej-gold)" />
                          <span style={{ 
                            fontSize: '0.875rem', 
                            fontWeight: '600',
                            color: 'var(--ej-primary)'
                          }}>
                            {clientInsights.length} Active Insights
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              // Individual Client Insights View
              <>
                {/* Back Button */}
                <div style={{ marginBottom: '2rem' }}>
                  <button
                    onClick={() => setShowClientDetails(false)}
                    style={{
                      background: 'var(--ej-gray-200)',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: 'var(--ej-primary)'
                    }}
                  >
                    ← Back to Client List
                  </button>
                </div>

                {/* Client Summary */}
                <div style={{
                  background: 'var(--ej-gray-50)',
                  border: '1px solid var(--ej-gray-200)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: getWealthSegmentColor(selectedClient?.wealthSegment),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: '600'
                    }}>
                      {selectedClient?.name?.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </div>
                    <div>
                      <h3 style={{ 
                        margin: '0 0 0.5rem', 
                        color: 'var(--ej-primary)',
                        fontSize: '1.5rem'
                      }}>
                        {selectedClient?.name}
                      </h3>
                      <p style={{ margin: 0, color: 'var(--ej-gray-600)' }}>
                        {selectedClient?.occupation}
                      </p>
                    </div>
                  </div>

                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '1rem',
                    fontSize: '0.875rem'
                  }}>
                    <div>
                      <span style={{ color: 'var(--ej-gray-500)', fontWeight: '500' }}>Wealth Segment: </span>
                      <span style={{ 
                        background: getWealthSegmentColor(selectedClient?.wealthSegment),
                        color: 'white',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        marginLeft: '0.5rem'
                      }}>
                        {selectedClient?.wealthSegment}
                      </span>
                    </div>
                    <div>
                      <span style={{ color: 'var(--ej-gray-500)', fontWeight: '500' }}>AUM: </span>
                      <span style={{ color: 'var(--ej-primary)', fontWeight: '600' }}>{selectedClient?.aum}</span>
                    </div>
                    <div>
                      <span style={{ color: 'var(--ej-gray-500)', fontWeight: '500' }}>Age: </span>
                      <span style={{ color: 'var(--ej-primary)' }}>{selectedClient?.age}</span>
                    </div>
                    <div>
                      <span style={{ color: 'var(--ej-gray-500)', fontWeight: '500' }}>Risk Profile: </span>
                      <span style={{ color: 'var(--ej-primary)' }}>{selectedClient?.riskProfile}</span>
                    </div>
                  </div>
                </div>

                {/* Client Insights */}
                <div>
                  <h3 style={{ 
                    color: 'var(--ej-primary)', 
                    marginBottom: '1.5rem',
                    fontSize: '1.25rem',
                    fontWeight: '600'
                  }}>
                    Active Insights ({getClientInsights(selectedClient?.id).length})
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {getClientInsights(selectedClient?.id).map((insight, index) => (
                      <div
                        key={insight.id}
                        style={{
                          border: '1px solid var(--ej-gray-200)',
                          borderRadius: '12px',
                          padding: '1.5rem',
                          background: 'var(--ej-white)',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}
                      >
                        {/* Insight Header */}
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'flex-start',
                          marginBottom: '1rem' 
                        }}>
                          <div>
                            <h4 style={{ 
                              margin: '0 0 0.5rem', 
                              color: 'var(--ej-primary)',
                              fontSize: '1.1rem',
                              fontWeight: '600'
                            }}>
                              {insight.title}
                            </h4>
                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                              <span style={{
                                background: 'var(--ej-gray-100)',
                                color: 'var(--ej-primary)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '12px',
                                fontSize: '0.75rem',
                                fontWeight: '600'
                              }}>
                                {insight.category}
                              </span>
                              <span style={{
                                background: getPriorityColor(insight.priority),
                                color: 'white',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '12px',
                                fontSize: '0.75rem',
                                fontWeight: '600'
                              }}>
                                {insight.priority}
                              </span>
                              <span style={{
                                color: 'var(--ej-gray-500)',
                                fontSize: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem'
                              }}>
                                <Calendar size={12} />
                                {insight.createdDate}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Insight Content */}
                        <p style={{ 
                          color: 'var(--ej-gray-700)', 
                          lineHeight: '1.6',
                          marginBottom: '1rem'
                        }}>
                          {insight.insightText}
                        </p>

                        {/* Opportunities */}
                        {insight.opportunities && (
                          <div style={{
                            background: 'var(--ej-gray-50)',
                            border: '1px solid var(--ej-gray-200)',
                            borderRadius: '8px',
                            padding: '1rem'
                          }}>
                            <h5 style={{ 
                              margin: '0 0 0.5rem', 
                              color: 'var(--ej-primary)',
                              fontSize: '0.9rem',
                              fontWeight: '600',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem'
                            }}>
                              <TrendingUp size={14} />
                              Opportunities
                            </h5>
                            <p style={{ 
                              margin: 0, 
                              color: 'var(--ej-gray-700)',
                              fontSize: '0.875rem',
                              lineHeight: '1.5'
                            }}>
                              {insight.opportunities}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientInsightsModal;