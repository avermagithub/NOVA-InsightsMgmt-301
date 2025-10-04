import React from 'react';
import { Users, TrendingUp, DollarSign } from 'lucide-react';
import { CLIENTS, WEALTH_SEGMENTS } from '../data/mockData';

const ClientsPage = ({ selectedRole }) => {
  // Group clients by wealth segment
  const clientsBySegment = CLIENTS.reduce((acc, client) => {
    if (!acc[client.wealthSegment]) {
      acc[client.wealthSegment] = [];
    }
    acc[client.wealthSegment].push(client);
    return acc;
  }, {});

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1 className="page-title">Client Portfolio</h1>
        <p className="page-subtitle">
          Comprehensive view of wealth management clients across all segments
        </p>
      </div>

      <div className="grid grid-cols-1" style={{ gap: '2rem' }}>
        {/* Client Statistics */}
        <div className="grid grid-cols-3">
          <div className="card">
            <div className="card-content" style={{ textAlign: 'center' }}>
              <Users size={32} style={{ color: 'var(--ej-primary)', margin: '0 auto 1rem' }} />
              <h3 style={{ color: 'var(--ej-primary)', fontSize: '2rem', margin: '0 0 0.5rem' }}>
                {CLIENTS.length}
              </h3>
              <p style={{ color: 'var(--ej-gray-600)', margin: 0 }}>Total Clients</p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content" style={{ textAlign: 'center' }}>
              <DollarSign size={32} style={{ color: 'var(--ej-success)', margin: '0 auto 1rem' }} />
              <h3 style={{ color: 'var(--ej-success)', fontSize: '2rem', margin: '0 0 0.5rem' }}>
                $52.7M
              </h3>
              <p style={{ color: 'var(--ej-gray-600)', margin: 0 }}>Total AUM</p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content" style={{ textAlign: 'center' }}>
              <TrendingUp size={32} style={{ color: 'var(--ej-accent)', margin: '0 auto 1rem' }} />
              <h3 style={{ color: 'var(--ej-accent)', fontSize: '2rem', margin: '0 0 0.5rem' }}>
                5
              </h3>
              <p style={{ color: 'var(--ej-gray-600)', margin: 0 }}>Wealth Segments</p>
            </div>
          </div>
        </div>

        {/* Clients by Wealth Segment */}
        {Object.entries(WEALTH_SEGMENTS).map(([segmentKey, segment]) => {
          const clients = clientsBySegment[segmentKey] || [];
          
          if (clients.length === 0) return null;
          
          return (
            <div key={segmentKey} className="card">
              <div className="card-header">
                <h3 className="card-title">{segment.fullName} Clients</h3>
                <p className="card-subtitle">{segment.range} • {clients.length} clients</p>
              </div>
              <div className="card-content">
                <div className="grid grid-cols-1" style={{ gap: '1rem' }}>
                  {clients.map((client) => (
                    <div key={client.id} style={{
                      padding: '1rem',
                      border: '1px solid var(--ej-gray-200)',
                      borderRadius: '8px',
                      background: 'var(--ej-gray-50)'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ color: 'var(--ej-primary)', margin: '0 0 0.5rem' }}>
                            {client.name}
                          </h4>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem', fontSize: '0.9rem' }}>
                            <div><strong>AUM:</strong> {client.aum}</div>
                            <div><strong>Age:</strong> {client.age}</div>
                            <div><strong>Occupation:</strong> {client.occupation}</div>
                            <div><strong>Risk Profile:</strong> {client.riskProfile}</div>
                            <div><strong>Location:</strong> {client.location}</div>
                          </div>
                          {client.objectives && (
                            <div style={{ marginTop: '0.5rem' }}>
                              <strong>Objectives:</strong> {client.objectives.join(', ')}
                            </div>
                          )}
                        </div>
                        <div className="wealth-segment" style={{ marginLeft: '1rem' }}>
                          {segment.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientsPage;