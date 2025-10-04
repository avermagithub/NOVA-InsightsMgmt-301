import React from 'react';
import { Crown, Users, TrendingUp, Target } from 'lucide-react';

const FieldLeadersPage = ({ selectedRole }) => {
  const fieldLeaders = [
    {
      id: 'fl001',
      name: 'Patricia Williams',
      role: 'Regional Leader - Midwest',
      region: 'Midwest Region',
      advisorsManaged: 45,
      totalAUM: '$1.8B',
      officesManaged: 12,
      experience: 18,
      specialties: ['Leadership Development', 'Market Expansion', 'Advisor Recruitment'],
      location: 'Chicago, IL',
      performance: {
        advisorRetention: '94%',
        newAdvisorHires: 8,
        aumGrowth: '+12.3%',
        clientSatisfaction: '4.8/5'
      }
    },
    {
      id: 'fl002',
      name: 'James Rodriguez',
      role: 'Field Manager - North Division',
      region: 'Northern Illinois',
      advisorsManaged: 22,
      totalAUM: '$850M',
      officesManaged: 6,
      experience: 12,
      specialties: ['Advisor Coaching', 'Business Development', 'Client Retention'],
      location: 'Milwaukee, WI',
      performance: {
        advisorRetention: '91%',
        newAdvisorHires: 4,
        aumGrowth: '+8.7%',
        clientSatisfaction: '4.6/5'
      }
    },
    {
      id: 'fl003',
      name: 'Dr. Sarah Chen',
      role: 'National Leader - Investment Strategy',
      region: 'National',
      advisorsManaged: 150,
      totalAUM: '$4.2B',
      officesManaged: 35,
      experience: 22,
      specialties: ['Investment Research', 'Portfolio Strategy', 'Risk Management'],
      location: 'Chicago, IL',
      performance: {
        advisorRetention: '96%',
        newAdvisorHires: 18,
        aumGrowth: '+15.2%',
        clientSatisfaction: '4.9/5'
      }
    }
  ];

  const leadershipMetrics = [
    {
      title: 'Total Advisors Managed',
      value: '217',
      icon: Users,
      color: 'var(--ej-primary)'
    },
    {
      title: 'Combined AUM Oversight',
      value: '$6.85B',
      icon: TrendingUp,
      color: 'var(--ej-success)'
    },
    {
      title: 'Total Offices',
      value: '53',
      icon: Target,
      color: 'var(--ej-accent)'
    }
  ];

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1 className="page-title">Field Leaders</h1>
        <p className="page-subtitle">
          Regional and national leadership overseeing advisor networks and business development
        </p>
      </div>

      <div className="grid grid-cols-1" style={{ gap: '2rem' }}>
        {/* Leadership Metrics */}
        <div className="grid grid-cols-3">
          {leadershipMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <Icon size={32} style={{ color: metric.color, margin: '0 auto 1rem' }} />
                  <h3 style={{ color: metric.color, fontSize: '2rem', margin: '0 0 0.5rem' }}>
                    {metric.value}
                  </h3>
                  <p style={{ color: 'var(--ej-gray-600)', margin: 0 }}>{metric.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Field Leaders Directory */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Leadership Directory</h3>
            <p className="card-subtitle">Regional and national field leadership team</p>
          </div>
          <div className="card-content">
            <div className="grid grid-cols-1" style={{ gap: '2rem' }}>
              {fieldLeaders.map((leader) => (
                <div key={leader.id} style={{
                  padding: '2rem',
                  border: '1px solid var(--ej-gray-200)',
                  borderRadius: '12px',
                  background: 'var(--ej-white)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.08)'
                }}>
                  {/* Leader Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'var(--ej-primary)',
                        color: 'white',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 'bold'
                      }}>
                        <Crown size={28} />
                      </div>
                      <div>
                        <h4 style={{ 
                          color: 'var(--ej-primary)', 
                          fontSize: '1.4rem',
                          fontWeight: '600',
                          margin: '0 0 0.25rem' 
                        }}>
                          {leader.name}
                        </h4>
                        <p style={{ 
                          color: 'var(--ej-gray-600)', 
                          margin: '0 0 0.25rem',
                          fontSize: '1rem',
                          fontWeight: '500'
                        }}>
                          {leader.role}
                        </p>
                        <p style={{ 
                          color: 'var(--ej-gray-500)', 
                          margin: 0,
                          fontSize: '0.9rem'
                        }}>
                          {leader.region} • {leader.experience} Years Experience
                        </p>
                      </div>
                    </div>
                    <div style={{
                      padding: '0.5rem 1rem',
                      background: 'var(--ej-accent)',
                      color: 'white',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {leader.location}
                    </div>
                  </div>

                  {/* Leadership Stats */}
                  <div className="grid grid-cols-4" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--ej-gray-500)', marginBottom: '0.25rem' }}>
                        Advisors Managed
                      </div>
                      <div style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--ej-primary)' }}>
                        {leader.advisorsManaged}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--ej-gray-500)', marginBottom: '0.25rem' }}>
                        Total AUM
                      </div>
                      <div style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--ej-success)' }}>
                        {leader.totalAUM}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--ej-gray-500)', marginBottom: '0.25rem' }}>
                        Offices Managed
                      </div>
                      <div style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--ej-secondary)' }}>
                        {leader.officesManaged}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--ej-gray-500)', marginBottom: '0.25rem' }}>
                        Experience
                      </div>
                      <div style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--ej-accent)' }}>
                        {leader.experience}y
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ color: 'var(--ej-primary)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                      Performance Metrics
                    </h5>
                    <div className="grid grid-cols-4" style={{ gap: '1rem' }}>
                      <div style={{
                        padding: '0.75rem',
                        background: 'var(--ej-gray-50)',
                        borderRadius: '8px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--ej-success)' }}>
                          {leader.performance.advisorRetention}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--ej-gray-600)' }}>
                          Advisor Retention
                        </div>
                      </div>
                      <div style={{
                        padding: '0.75rem',
                        background: 'var(--ej-gray-50)',
                        borderRadius: '8px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--ej-primary)' }}>
                          {leader.performance.newAdvisorHires}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--ej-gray-600)' }}>
                          New Hires (YTD)
                        </div>
                      </div>
                      <div style={{
                        padding: '0.75rem',
                        background: 'var(--ej-gray-50)',
                        borderRadius: '8px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--ej-success)' }}>
                          {leader.performance.aumGrowth}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--ej-gray-600)' }}>
                          AUM Growth
                        </div>
                      </div>
                      <div style={{
                        padding: '0.75rem',
                        background: 'var(--ej-gray-50)',
                        borderRadius: '8px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--ej-accent)' }}>
                          {leader.performance.clientSatisfaction}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--ej-gray-600)' }}>
                          Client Satisfaction
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>
                      Leadership Specialties:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {leader.specialties.map((specialty, index) => (
                        <span key={index} style={{
                          padding: '0.25rem 0.75rem',
                          background: 'var(--ej-secondary)',
                          color: 'white',
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

export default FieldLeadersPage;