import React from 'react';
import { UserCheck, Building2, TrendingUp, Users } from 'lucide-react';
import { FINANCIAL_ADVISORS, RIA_FIRM } from '../data/mockData';

const AdvisorsPage = ({ selectedRole }) => {
  return (
    <div className="fade-in">
      <div className="page-header">
        <h1 className="page-title">Financial Advisors</h1>
        <p className="page-subtitle">
          Professional financial advisors managing client relationships and portfolios
        </p>
      </div>

      <div className="grid grid-cols-1" style={{ gap: '2rem' }}>
        {/* RIA Firm Information */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <Building2 size={20} style={{ marginRight: '0.5rem' }} />
              {RIA_FIRM.name}
            </h3>
            <p className="card-subtitle">{RIA_FIRM.type} • Founded {RIA_FIRM.founded}</p>
          </div>
          <div className="card-content">
            <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
              <div>
                <div style={{ marginBottom: '1rem' }}>
                  <strong>Assets Under Management:</strong> {RIA_FIRM.aum}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <strong>Total Advisors:</strong> {RIA_FIRM.advisors}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <strong>Total Clients:</strong> {RIA_FIRM.clients}
                </div>
                <div>
                  <strong>Headquarters:</strong> {RIA_FIRM.headquarters}
                </div>
              </div>
              <div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Specialties:</strong>
                </div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {RIA_FIRM.specialties.map((specialty, index) => (
                    <li key={index} style={{ 
                      padding: '0.25rem 0.5rem',
                      background: 'var(--ej-secondary)',
                      color: 'white',
                      borderRadius: '4px',
                      fontSize: '0.85rem',
                      marginBottom: '0.25rem',
                      display: 'inline-block',
                      marginRight: '0.5rem'
                    }}>
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Advisor Statistics */}
        <div className="grid grid-cols-3">
          <div className="card">
            <div className="card-content" style={{ textAlign: 'center' }}>
              <UserCheck size={32} style={{ color: 'var(--ej-primary)', margin: '0 auto 1rem' }} />
              <h3 style={{ color: 'var(--ej-primary)', fontSize: '2rem', margin: '0 0 0.5rem' }}>
                {FINANCIAL_ADVISORS.length}
              </h3>
              <p style={{ color: 'var(--ej-gray-600)', margin: 0 }}>Active Advisors</p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content" style={{ textAlign: 'center' }}>
              <TrendingUp size={32} style={{ color: 'var(--ej-success)', margin: '0 auto 1rem' }} />
              <h3 style={{ color: 'var(--ej-success)', fontSize: '2rem', margin: '0 0 0.5rem' }}>
                $1.28B
              </h3>
              <p style={{ color: 'var(--ej-gray-600)', margin: 0 }}>Combined AUM</p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content" style={{ textAlign: 'center' }}>
              <Users size={32} style={{ color: 'var(--ej-accent)', margin: '0 auto 1rem' }} />
              <h3 style={{ color: 'var(--ej-accent)', fontSize: '2rem', margin: '0 0 0.5rem' }}>
                446
              </h3>
              <p style={{ color: 'var(--ej-gray-600)', margin: 0 }}>Total Clients Served</p>
            </div>
          </div>
        </div>

        {/* Individual Advisors */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Financial Advisor Directory</h3>
            <p className="card-subtitle">Professional profiles and performance metrics</p>
          </div>
          <div className="card-content">
            <div className="grid grid-cols-1" style={{ gap: '1.5rem' }}>
              {FINANCIAL_ADVISORS.map((advisor) => (
                <div key={advisor.id} style={{
                  padding: '1.5rem',
                  border: '1px solid var(--ej-gray-200)',
                  borderRadius: '12px',
                  background: 'var(--ej-white)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <h4 style={{ 
                        color: 'var(--ej-primary)', 
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        margin: '0 0 0.25rem' 
                      }}>
                        {advisor.name}
                      </h4>
                      <p style={{ 
                        color: 'var(--ej-gray-600)', 
                        margin: '0 0 0.75rem',
                        fontStyle: 'italic'
                      }}>
                        {advisor.firm}
                      </p>
                    </div>
                    <div style={{
                      padding: '0.5rem 1rem',
                      background: 'var(--ej-accent)',
                      color: 'white',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {advisor.experience} Years Experience
                    </div>
                  </div>

                  <div className="grid grid-cols-3" style={{ gap: '1.5rem', marginBottom: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--ej-gray-500)', marginBottom: '0.25rem' }}>
                        Assets Under Management
                      </div>
                      <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--ej-success)' }}>
                        {advisor.aum}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--ej-gray-500)', marginBottom: '0.25rem' }}>
                        Client Count
                      </div>
                      <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--ej-primary)' }}>
                        {advisor.clientCount}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--ej-gray-500)', marginBottom: '0.25rem' }}>
                        Location
                      </div>
                      <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--ej-gray-700)' }}>
                        {advisor.location}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>
                      Specialties:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {advisor.specialties.map((specialty, index) => (
                        <span key={index} style={{
                          padding: '0.25rem 0.75rem',
                          background: 'var(--ej-gray-100)',
                          color: 'var(--ej-gray-700)',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: '500'
                        }}>
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorsPage;