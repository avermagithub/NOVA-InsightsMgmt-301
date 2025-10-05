import React, { useState } from 'react';
import { Users, TrendingUp, DollarSign, Search, Eye, Calendar, AlertCircle } from 'lucide-react';
import { CLIENTS, WEALTH_SEGMENTS } from '../data/mockData';
import { INSIGHT_EXAMPLES } from '../data/insightExamples';

const ClientsPage = ({ selectedRole }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWealthSegment, setSelectedWealthSegment] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  const [showClientInsights, setShowClientInsights] = useState(false);

  // Get all clients that have insights
  const clientsWithInsights = CLIENTS.filter(client => 
    INSIGHT_EXAMPLES.some(insight => insight.client?.id === client.id)
  );

  // Get insights for a specific client
  const getClientInsights = (clientId) => {
    return INSIGHT_EXAMPLES.filter(insight => insight.client?.id === clientId);
  };

  // Filter clients based on search and wealth segment
  const filteredClients = clientsWithInsights.filter(client => {
    const matchesSearch = searchTerm === '' || 
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.occupation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSegment = selectedWealthSegment === '' || client.wealthSegment === selectedWealthSegment;
    
    return matchesSearch && matchesSegment;
  });

  // Group filtered clients by wealth segment
  const clientsBySegment = filteredClients.reduce((acc, client) => {
    if (!acc[client.wealthSegment]) {
      acc[client.wealthSegment] = [];
    }
    acc[client.wealthSegment].push(client);
    return acc;
  }, {});

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

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return '#ef4444';
      case 'High': return '#f59e0b';
      case 'Medium': return '#10b981';
      case 'Low': return '#6b7280';
      default: return '#6b7280';
    }
  };

  const handleClientClick = (client) => {
    setSelectedClient(client);
    setShowClientInsights(true);
  };

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1 className="page-title">Client Insights Dashboard</h1>
        <p className="page-subtitle">
          Comprehensive insights and opportunities for {clientsWithInsights.length} clients across all wealth segments
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-content" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Search Box */}
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
                  placeholder="Search clients by name, occupation, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.75rem 0.75rem 2.5rem',
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

            {/* Wealth Segment Filter */}
            <div style={{ minWidth: '200px' }}>
              <select
                value={selectedWealthSegment}
                onChange={(e) => setSelectedWealthSegment(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid var(--ej-gray-300)',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  backgroundColor: 'var(--ej-gray-50)',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="">All Wealth Segments</option>
                {Object.entries(WEALTH_SEGMENTS).map(([key, segment]) => (
                  <option key={key} value={key}>{segment.fullName}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            {(searchTerm || selectedWealthSegment) && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedWealthSegment('');
                }}
                style={{
                  padding: '0.75rem 1rem',
                  background: 'var(--ej-gray-200)',
                  border: '1px solid var(--ej-gray-300)',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  color: 'var(--ej-gray-700)',
                  fontWeight: '500'
                }}
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Statistics - Compact Horizontal Layout */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-content" style={{ padding: '1.5rem' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            {/* Clients with Insights */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: '1', minWidth: '180px' }}>
              <Users size={24} style={{ color: 'var(--ej-primary)' }} />
              <div>
                <div style={{ color: 'var(--ej-primary)', fontSize: '1.5rem', fontWeight: '700', lineHeight: '1.2' }}>
                  {filteredClients.length}
                </div>
                <div style={{ color: 'var(--ej-gray-600)', fontSize: '0.8rem', fontWeight: '500' }}>
                  Clients with Insights
                </div>
              </div>
            </div>

            {/* Total Insights */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: '1', minWidth: '140px' }}>
              <Eye size={24} style={{ color: 'var(--ej-gold)' }} />
              <div>
                <div style={{ color: 'var(--ej-gold)', fontSize: '1.5rem', fontWeight: '700', lineHeight: '1.2' }}>
                  {filteredClients.reduce((total, client) => total + getClientInsights(client.id).length, 0)}
                </div>
                <div style={{ color: 'var(--ej-gray-600)', fontSize: '0.8rem', fontWeight: '500' }}>
                  Total Insights
                </div>
              </div>
            </div>

            {/* High Priority */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: '1', minWidth: '130px' }}>
              <AlertCircle size={24} style={{ color: 'var(--ej-error)' }} />
              <div>
                <div style={{ color: 'var(--ej-error)', fontSize: '1.5rem', fontWeight: '700', lineHeight: '1.2' }}>
                  {filteredClients.reduce((total, client) => {
                    const insights = getClientInsights(client.id);
                    return total + insights.filter(insight => insight.priority === 'Critical' || insight.priority === 'High').length;
                  }, 0)}
                </div>
                <div style={{ color: 'var(--ej-gray-600)', fontSize: '0.8rem', fontWeight: '500' }}>
                  High Priority
                </div>
              </div>
            </div>

            {/* Active Segments */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: '1', minWidth: '140px' }}>
              <TrendingUp size={24} style={{ color: 'var(--ej-success)' }} />
              <div>
                <div style={{ color: 'var(--ej-success)', fontSize: '1.5rem', fontWeight: '700', lineHeight: '1.2' }}>
                  {Object.keys(clientsBySegment).length}
                </div>
                <div style={{ color: 'var(--ej-gray-600)', fontSize: '0.8rem', fontWeight: '500' }}>
                  Active Segments
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Insights Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '1.5rem'
      }}>
        {filteredClients.map(client => {
          const clientInsights = getClientInsights(client.id);
          const highPriorityInsights = clientInsights.filter(insight => 
            insight.priority === 'Critical' || insight.priority === 'High'
          );
          
          return (
            <div
              key={client.id}
              onClick={() => handleClientClick(client)}
              className="card"
              style={{
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: 'var(--ej-white)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div className="card-content" style={{ padding: '1.5rem' }}>
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
                  <div style={{ gridColumn: 'span 2' }}>
                    <span style={{ color: 'var(--ej-gray-500)', fontWeight: '500' }}>Risk: </span>
                    <span style={{ color: 'var(--ej-primary)' }}>{client.riskProfile}</span>
                  </div>
                </div>

                {/* Insights Summary */}
                <div style={{
                  background: 'var(--ej-gray-50)',
                  border: '1px solid var(--ej-gray-200)',
                  borderRadius: '8px',
                  padding: '1rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.75rem'
                  }}>
                    <span style={{ 
                      fontSize: '0.875rem', 
                      fontWeight: '600',
                      color: 'var(--ej-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <Eye size={16} />
                      {clientInsights.length} Active Insights
                    </span>
                    {highPriorityInsights.length > 0 && (
                      <span style={{
                        background: 'var(--ej-error)',
                        color: 'white',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        {highPriorityInsights.length} High Priority
                      </span>
                    )}
                  </div>
                  
                  {/* Recent Insights Preview */}
                  {clientInsights.slice(0, 2).map((insight, index) => (
                    <div key={index} style={{
                      fontSize: '0.8rem',
                      color: 'var(--ej-gray-700)',
                      marginBottom: index < 1 ? '0.5rem' : 0,
                      padding: '0.5rem',
                      background: 'white',
                      borderRadius: '6px',
                      border: '1px solid var(--ej-gray-200)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{
                          background: getPriorityColor(insight.priority),
                          color: 'white',
                          padding: '0.125rem 0.5rem',
                          borderRadius: '8px',
                          fontSize: '0.7rem',
                          fontWeight: '600'
                        }}>
                          {insight.priority}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--ej-gray-500)' }}>
                          {insight.category}
                        </span>
                      </div>
                      <div style={{ fontWeight: '500', color: 'var(--ej-primary)' }}>
                        {insight.title}
                      </div>
                    </div>
                  ))}
                  
                  {clientInsights.length > 2 && (
                    <div style={{
                      textAlign: 'center',
                      marginTop: '0.75rem',
                      fontSize: '0.8rem',
                      color: 'var(--ej-gray-500)',
                      fontStyle: 'italic'
                    }}>
                      +{clientInsights.length - 2} more insights
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredClients.length === 0 && (
        <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <Users size={48} style={{ color: 'var(--ej-gray-400)', margin: '0 auto 1rem' }} />
          <h3 style={{ color: 'var(--ej-gray-600)', marginBottom: '0.5rem' }}>
            No Clients Found
          </h3>
          <p style={{ color: 'var(--ej-gray-500)' }}>
            Try adjusting your search criteria or filters
          </p>
        </div>
      )}

      {/* Individual Client Insights Modal */}
      {showClientInsights && selectedClient && (
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
          onClick={() => setShowClientInsights(false)}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              width: '90vw',
              maxWidth: '1000px',
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
                  {selectedClient?.name} - Insights Dashboard
                </h2>
                <p style={{ margin: '0.5rem 0 0', opacity: 0.9, fontSize: '0.9rem' }}>
                  Comprehensive insights for {selectedClient?.wealthSegment} client
                </p>
              </div>
              <button 
                onClick={() => setShowClientInsights(false)}
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
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ 
              padding: '2rem', 
              height: 'calc(85vh - 100px)', 
              overflow: 'auto' 
            }}>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientsPage;