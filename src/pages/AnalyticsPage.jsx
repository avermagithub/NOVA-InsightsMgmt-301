import React from 'react';
import { BarChart3, TrendingUp, PieChart, Activity, Target } from 'lucide-react';
import { INSIGHT_EXAMPLES } from '../data/insightExamples';

const AnalyticsPage = ({ selectedRole }) => {
  // Calculate analytics from insight examples
  const totalInsights = INSIGHT_EXAMPLES.length;
  
  // Insights by type
  const insightsByType = INSIGHT_EXAMPLES.reduce((acc, insight) => {
    acc[insight.insight] = (acc[insight.insight] || 0) + 1;
    return acc;
  }, {});

  // Insights by priority
  const insightsByPriority = INSIGHT_EXAMPLES.reduce((acc, insight) => {
    const priority = insight.priority || 'Medium';
    acc[priority] = (acc[priority] || 0) + 1;
    return acc;
  }, {});

  // Client wealth segment distribution
  const clientsByWealth = INSIGHT_EXAMPLES.reduce((acc, insight) => {
    const segment = insight.client?.wealthSegment || 'Unknown';
    acc[segment] = (acc[segment] || 0) + 1;
    return acc;
  }, {});

  const priorityColors = {
    'Critical': 'var(--ej-error)',
    'High': 'var(--ej-warning)', 
    'Medium': 'var(--ej-secondary)',
    'Low': 'var(--ej-success)'
  };

  const wealthSegmentLabels = {
    'UHNW': 'Ultra High Net Worth',
    'HNW': 'High Net Worth',
    'AFFLUENT': 'Affluent',
    'MASS_AFFLUENT': 'Mass Affluent',
    'EMERGING_WEALTH': 'Emerging Wealth'
  };

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1 className="page-title">Insight Analytics</h1>
        <p className="page-subtitle">
          Comprehensive analytics and performance metrics for investment product insights
        </p>
      </div>

      <div className="grid grid-cols-1" style={{ gap: '2rem' }}>
        {/* Key Metrics Overview */}
        <div className="grid grid-cols-4">
          <div className="card">
            <div className="card-content" style={{ textAlign: 'center' }}>
              <Target size={32} style={{ color: 'var(--ej-primary)', margin: '0 auto 1rem' }} />
              <h3 style={{ color: 'var(--ej-primary)', fontSize: '2rem', margin: '0 0 0.5rem' }}>
                {totalInsights}
              </h3>
              <p style={{ color: 'var(--ej-gray-600)', margin: 0 }}>Total Insights</p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content" style={{ textAlign: 'center' }}>
              <Activity size={32} style={{ color: 'var(--ej-accent)', margin: '0 auto 1rem' }} />
              <h3 style={{ color: 'var(--ej-accent)', fontSize: '2rem', margin: '0 0 0.5rem' }}>
                6
              </h3>
              <p style={{ color: 'var(--ej-gray-600)', margin: 0 }}>Insight Categories</p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content" style={{ textAlign: 'center' }}>
              <TrendingUp size={32} style={{ color: 'var(--ej-success)', margin: '0 auto 1rem' }} />
              <h3 style={{ color: 'var(--ej-success)', fontSize: '2rem', margin: '0 0 0.5rem' }}>
                87%
              </h3>
              <p style={{ color: 'var(--ej-gray-600)', margin: 0 }}>Implementation Rate</p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content" style={{ textAlign: 'center' }}>
              <BarChart3 size={32} style={{ color: 'var(--ej-secondary)', margin: '0 auto 1rem' }} />
              <h3 style={{ color: 'var(--ej-secondary)', fontSize: '2rem', margin: '0 0 0.5rem' }}>
                94%
              </h3>
              <p style={{ color: 'var(--ej-gray-600)', margin: 0 }}>Advisor Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Insights by Investment Type */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <PieChart size={20} style={{ marginRight: '0.5rem' }} />
              Insights by Investment Type
            </h3>
            <p className="card-subtitle">Distribution of insights across investment product categories</p>
          </div>
          <div className="card-content">
            <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {Object.entries(insightsByType).map(([type, count]) => (
                    <div key={type} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1rem',
                      background: 'var(--ej-gray-50)',
                      borderRadius: '8px',
                      borderLeft: '4px solid var(--ej-secondary)'
                    }}>
                      <span style={{ fontWeight: '500' }}>{type}</span>
                      <span style={{ 
                        padding: '0.25rem 0.75rem',
                        background: 'var(--ej-secondary)',
                        color: 'white',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '600'
                      }}>
                        {count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ 
                  textAlign: 'center',
                  padding: '2rem',
                  background: 'var(--ej-gray-50)',
                  borderRadius: '12px'
                }}>
                  <h4 style={{ color: 'var(--ej-primary)', marginBottom: '1rem' }}>
                    Most Active Category
                  </h4>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--ej-accent)' }}>
                    {Object.keys(insightsByType)[0]}
                  </div>
                  <div style={{ color: 'var(--ej-gray-600)', marginTop: '0.5rem' }}>
                    {Math.round((Object.values(insightsByType)[0] / totalInsights) * 100)}% of all insights
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Priority Distribution and Client Segments */}
        <div className="grid grid-cols-2">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Insights by Priority Level</h3>
              <p className="card-subtitle">Risk and urgency distribution</p>
            </div>
            <div className="card-content">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {Object.entries(insightsByPriority).map(([priority, count]) => (
                  <div key={priority} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    background: 'var(--ej-gray-50)'
                  }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: priorityColors[priority] || 'var(--ej-gray-400)'
                    }}></div>
                    <span style={{ flex: 1, fontWeight: '500' }}>{priority}</span>
                    <span style={{ fontWeight: '600', color: 'var(--ej-primary)' }}>{count}</span>
                    <span style={{ 
                      fontSize: '0.8rem', 
                      color: 'var(--ej-gray-500)',
                      minWidth: '40px',
                      textAlign: 'right'
                    }}>
                      {Math.round((count / totalInsights) * 100)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Client Wealth Segments</h3>
              <p className="card-subtitle">Insights distribution by client segment</p>
            </div>
            <div className="card-content">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {Object.entries(clientsByWealth).map(([segment, count]) => (
                  <div key={segment} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    background: 'var(--ej-gray-50)'
                  }}>
                    <span style={{ flex: 1, fontWeight: '500' }}>
                      {wealthSegmentLabels[segment] || segment}
                    </span>
                    <span style={{ fontWeight: '600', color: 'var(--ej-success)' }}>{count}</span>
                    <span style={{ 
                      fontSize: '0.8rem', 
                      color: 'var(--ej-gray-500)',
                      minWidth: '40px',
                      textAlign: 'right'
                    }}>
                      {Math.round((count / totalInsights) * 100)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <BarChart3 size={20} style={{ marginRight: '0.5rem' }} />
              Insight Performance Metrics
            </h3>
            <p className="card-subtitle">Key performance indicators and business impact</p>
          </div>
          <div className="card-content">
            <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
              <div style={{
                padding: '1.5rem',
                background: 'var(--ej-gray-50)',
                borderRadius: '12px',
                textAlign: 'center',
                border: '2px solid var(--ej-success)'
              }}>
                <h4 style={{ color: 'var(--ej-success)', fontSize: '2.5rem', margin: '0 0 0.5rem' }}>
                  $2.4M
                </h4>
                <p style={{ margin: 0, fontWeight: '500' }}>Additional AUM Generated</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--ej-gray-600)', marginTop: '0.25rem' }}>
                  From implemented insights
                </p>
              </div>
              
              <div style={{
                padding: '1.5rem',
                background: 'var(--ej-gray-50)',
                borderRadius: '12px',
                textAlign: 'center',
                border: '2px solid var(--ej-primary)'
              }}>
                <h4 style={{ color: 'var(--ej-primary)', fontSize: '2.5rem', margin: '0 0 0.5rem' }}>
                  156
                </h4>
                <p style={{ margin: 0, fontWeight: '500' }}>Portfolio Optimizations</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--ej-gray-600)', marginTop: '0.25rem' }}>
                  Completed this quarter
                </p>
              </div>
              
              <div style={{
                padding: '1.5rem',
                background: 'var(--ej-gray-50)',
                borderRadius: '12px',
                textAlign: 'center',
                border: '2px solid var(--ej-accent)'
              }}>
                <h4 style={{ color: 'var(--ej-accent)', fontSize: '2.5rem', margin: '0 0 0.5rem' }}>
                  92%
                </h4>
                <p style={{ margin: 0, fontWeight: '500' }}>Client Satisfaction</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--ej-gray-600)', marginTop: '0.25rem' }}>
                  Post-insight implementation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;