import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  UserCheck, 
  Crown, 
  BarChart3, 
  ChevronDown,
  Building2
} from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ClientInsightsModal from './components/ClientInsightsModal';
import InsightsPage from './pages/InsightsPage';
import EnhancedInsightsPage from './pages/EnhancedInsightsPage';
import ClientsPage from './pages/ClientsPage';
import AdvisorsPage from './pages/AdvisorsPage';
import FieldLeadersPage from './pages/FieldLeadersPage';
import AnalyticsPage from './pages/AnalyticsPage';
import { USER_ROLES } from './data/mockData';

const App = () => {
  const [selectedRole, setSelectedRole] = useState('Financial Advisor');
  const [showClientInsights, setShowClientInsights] = useState(false);
  
  const navigationItems = [
    {
      id: 'insights',
      label: 'Insights',
      icon: TrendingUp,
      path: '/insights'
    },
    {
      id: 'clients',
      label: 'Clients', 
      icon: Users,
      path: '/clients'
    },
    {
      id: 'advisors',
      label: 'Financial Advisors',
      icon: UserCheck,
      path: '/advisors'
    },
    {
      id: 'leaders',
      label: 'Field Leaders',
      icon: Crown,
      path: '/leaders'
    },
    {
      id: 'analytics',
      label: 'Insight Analytics',
      icon: BarChart3,
      path: '/analytics'
    }
  ];

  return (
    <div className="app">
      <Header 
        selectedRole={selectedRole}
        onRoleChange={setSelectedRole}
        userRoles={USER_ROLES}
      />
      
      <div className="main-layout">
        <Sidebar 
          navigationItems={navigationItems} 
          onClientInsightsClick={() => setShowClientInsights(true)}
        />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/insights" replace />} />
            <Route path="/insights" element={<EnhancedInsightsPage selectedRole={selectedRole} />} />
            <Route path="/clients" element={<ClientsPage selectedRole={selectedRole} />} />
            <Route path="/advisors" element={<AdvisorsPage selectedRole={selectedRole} />} />
            <Route path="/leaders" element={<FieldLeadersPage selectedRole={selectedRole} />} />
            <Route path="/analytics" element={<AnalyticsPage selectedRole={selectedRole} />} />
          </Routes>
        </main>
      </div>

      {/* Client Insights Modal */}
      <ClientInsightsModal 
        isOpen={showClientInsights}
        onClose={() => setShowClientInsights(false)}
      />
    </div>
  );
};

export default App;