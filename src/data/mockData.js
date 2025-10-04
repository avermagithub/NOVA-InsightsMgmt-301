// Wealth Segments Definition
export const WEALTH_SEGMENTS = {
  UHNW: { label: 'UHNW', range: '$10M+ AUM', fullName: 'Ultra High Net Worth' },
  HNW: { label: 'HNW', range: '$1-$10M AUM', fullName: 'High Net Worth' },
  AFFLUENT: { label: 'Affluent', range: '$500k-$1M AUM', fullName: 'Affluent' },
  MASS_AFFLUENT: { label: 'Mass Affluent', range: '$100k-$500k AUM', fullName: 'Mass Affluent' },
  EMERGING_WEALTH: { label: 'Emerging Wealth', range: '$25k-$100k AUM', fullName: 'Emerging Wealth' }
};

// User Roles
export const USER_ROLES = [
  'National Leader',
  'Regional Leader', 
  'Field Manager',
  'Financial Advisor',
  'Client Success Manager',
  'Business Services',
  'Legal/Compliance'
];

// Dummy RIA Firm
export const RIA_FIRM = {
  name: "Sterling Wealth Partners",
  type: "Independent RIA",
  aum: "$2.8B",
  advisors: 45,
  clients: 1250,
  founded: 2008,
  headquarters: "Chicago, IL",
  specialties: ["Wealth Management", "Retirement Planning", "Estate Planning", "Investment Management"]
};

// Financial Advisors
export const FINANCIAL_ADVISORS = [
  {
    id: 'fa001',
    name: 'Michael Chen, CFP®',
    firm: 'Sterling Wealth Partners',
    experience: 12,
    specialties: ['High Net Worth Planning', 'Alternative Investments'],
    aum: '$285M',
    clientCount: 78,
    location: 'Chicago, IL'
  },
  {
    id: 'fa002',
    name: 'Sarah Rodriguez, CFA',
    firm: 'Sterling Wealth Partners',
    experience: 8,
    specialties: ['Portfolio Management', 'ESG Investing'],
    aum: '$156M',
    clientCount: 62,
    location: 'Milwaukee, WI'
  },
  {
    id: 'fa003',
    name: 'David Thompson, ChFC®',
    firm: 'Sterling Wealth Partners',
    experience: 15,
    specialties: ['Retirement Planning', 'Tax Strategy'],
    aum: '$312M',
    clientCount: 89,
    location: 'Indianapolis, IN'
  },
  {
    id: 'fa004',
    name: 'Jennifer Liu, CFP®',
    firm: 'Sterling Wealth Partners',
    experience: 6,
    specialties: ['Young Professionals', 'Technology Sector'],
    aum: '$98M',
    clientCount: 145,
    location: 'Chicago, IL'
  },
  {
    id: 'fa005',
    name: 'Robert Miller, CPA/PFS',
    firm: 'Sterling Wealth Partners',
    experience: 20,
    specialties: ['Tax Planning', 'Business Owners'],
    aum: '$425M',
    clientCount: 72,
    location: 'Detroit, MI'
  },
  
  // Additional Advisors specializing in Annuities and Retirement Planning
  {
    id: 'fa006',
    name: 'Catherine Johnson, CFP®',
    firm: 'Sterling Wealth Partners',
    experience: 18,
    specialties: ['Retirement Income Planning', 'Annuities', 'Long-term Care'],
    aum: '$235M',
    clientCount: 58,
    location: 'Chicago, IL'
  },
  {
    id: 'fa007',
    name: 'William Thompson, ChFC®',
    firm: 'Sterling Wealth Partners',
    experience: 22,
    specialties: ['Insurance Products', 'Fixed Annuities', 'Estate Planning'],
    aum: '$298M',
    clientCount: 64,
    location: 'Indianapolis, IN'
  },
  
  // RMD and Retirement Planning Specialists
  {
    id: 'fa008',
    name: 'Margaret Stewart, CFP®, CPA',
    firm: 'Sterling Wealth Partners',
    experience: 25,
    specialties: ['RMD Planning', 'Tax Strategy', 'Retirement Distribution Planning'],
    aum: '$315M',
    clientCount: 52,
    location: 'Chicago, IL'
  },
  {
    id: 'fa009',
    name: 'Thomas Richardson, ChFC®',
    firm: 'Sterling Wealth Partners',
    experience: 19,
    specialties: ['RMD Compliance', 'IRA Management', 'Charitable Distribution Strategies'],
    aum: '$287M',
    clientCount: 48,
    location: 'Milwaukee, WI'
  },
  
  // Banking Products & Services Specialists
  {
    id: 'fa010',
    name: 'Jennifer Martinez, CAMS®',
    firm: 'Sterling Wealth Partners',
    experience: 14,
    specialties: ['Banking Solutions', 'Credit Optimization', 'Cash Management'],
    aum: '$245M',
    clientCount: 82,
    location: 'Chicago, IL'
  },
  {
    id: 'fa011',
    name: 'David Thompson, CFP®',
    firm: 'Sterling Wealth Partners',
    experience: 18,
    specialties: ['Mortgage Planning', 'HELOC Strategies', 'Business Banking'],
    aum: '$312M',
    clientCount: 67,
    location: 'Detroit, MI'
  },
  {
    id: 'fa012',
    name: 'Lisa Chang, CPA®',
    firm: 'Sterling Wealth Partners',
    experience: 16,
    specialties: ['Certificate of Deposits', 'Money Market Optimization', 'Banking Relationship Management'],
    aum: '$278M',
    clientCount: 71,
    location: 'Minneapolis, MN'
  },
  
  // CRM & Client Relationship Management Specialists
  {
    id: 'fa013',
    name: 'Rachel Anderson, CFP®',
    firm: 'Sterling Wealth Partners',
    experience: 12,
    specialties: ['Client Engagement', 'Digital Communications', 'Relationship Management'],
    aum: '$265M',
    clientCount: 89,
    location: 'Chicago, IL'
  },
  {
    id: 'fa014',
    name: 'Michael Foster, ChFC®',
    firm: 'Sterling Wealth Partners',
    experience: 15,
    specialties: ['CRM Systems', 'Client Experience', 'Communication Strategy'],
    aum: '$298M',
    clientCount: 76,
    location: 'Milwaukee, WI'
  },
  {
    id: 'fa015',
    name: 'Catherine Williams, CFP®',
    firm: 'Sterling Wealth Partners',
    experience: 20,
    specialties: ['High-Touch Service', 'Client Retention', 'Personalized Communications'],
    aum: '$385M',
    clientCount: 62,
    location: 'Detroit, MI'
  },
  
  // Account Performance Specialists
  {
    id: 'fa016',
    name: 'Alexander Mitchell, CFA®',
    firm: 'Sterling Wealth Partners',
    experience: 14,
    specialties: ['Performance Analysis', 'Benchmark Comparison', 'Risk Attribution'],
    aum: '$425M',
    clientCount: 85,
    location: 'Chicago, IL'
  },
  {
    id: 'fa017',
    name: 'Victoria Chen, CFP®, CAIA®',
    firm: 'Sterling Wealth Partners',
    experience: 11,
    specialties: ['Portfolio Analytics', 'Fund Research', 'Performance Reporting'],
    aum: '$315M',
    clientCount: 94,
    location: 'Indianapolis, IN'
  },
  {
    id: 'fa018',
    name: 'Marcus Thompson, CPA/PFS, CFA®',
    firm: 'Sterling Wealth Partners',
    experience: 16,
    specialties: ['Investment Analysis', 'Concentration Management', 'Performance Optimization'],
    aum: '$465M',
    clientCount: 78,
    location: 'Milwaukee, WI'
  },
  
  // Insurance Planning Specialists
  {
    id: 'fa019',
    name: 'Benjamin Walsh, CLU®, ChFC®',
    firm: 'Sterling Wealth Partners',
    experience: 18,
    specialties: ['Insurance Planning', 'Estate Planning', 'Risk Management'],
    aum: '$385M',
    clientCount: 92,
    location: 'Chicago, IL'
  },
  {
    id: 'fa020',
    name: 'Amanda Rodriguez, CFP®, CLU®',
    firm: 'Sterling Wealth Partners',
    experience: 13,
    specialties: ['Life Insurance', 'Long Term Care Planning', 'Business Insurance'],
    aum: '$295M',
    clientCount: 87,
    location: 'Milwaukee, WI'
  },
  {
    id: 'fa021',
    name: 'Christopher Chen, ChFC®, LTCP®',
    firm: 'Sterling Wealth Partners',
    experience: 15,
    specialties: ['Disability Insurance', 'Long Term Care Insurance', 'Insurance Portfolio Review'],
    aum: '$325M',
    clientCount: 89,
    location: 'Indianapolis, IN'
  }
];

// Wealth Management Clients
export const CLIENTS = [
  // UHNW Clients
  {
    id: 'cl001',
    name: 'Thomas Garcia',
    wealthSegment: 'UHNW',
    aum: '$15.2M',
    age: 58,
    occupation: 'Technology Executive',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Wealth Preservation', 'Tax Optimization', 'Legacy Planning'],
    advisor: 'fa001',
    location: 'Chicago, IL'
  },
  {
    id: 'cl002',
    name: 'Elizabeth and James Morrison',
    wealthSegment: 'UHNW',
    aum: '$22.8M',
    age: 65,
    occupation: 'Retired Business Owners',
    riskProfile: 'Conservative',
    objectives: ['Income Generation', 'Estate Planning', 'Philanthropy'],
    advisor: 'fa003',
    location: 'Lake Forest, IL'
  },
  
  // HNW Clients  
  {
    id: 'cl003',
    name: 'Amanda Foster',
    wealthSegment: 'HNW',
    aum: '$3.2M',
    age: 45,
    occupation: 'Surgeon',
    riskProfile: 'Moderate',
    objectives: ['Portfolio Growth', 'Education Funding', 'Retirement Planning'],
    advisor: 'fa002',
    location: 'Milwaukee, WI'
  },
  {
    id: 'cl004',
    name: 'Mark and Susan Patel',
    wealthSegment: 'HNW',
    aum: '$5.7M',
    age: 52,
    occupation: 'Investment Banker / Attorney',
    riskProfile: 'Aggressive',
    objectives: ['Alternative Investments', 'Tax Strategy', 'Wealth Accumulation'],
    advisor: 'fa001',
    location: 'Chicago, IL'
  },
  {
    id: 'cl005',
    name: 'Jennifer Walsh',
    wealthSegment: 'HNW',
    aum: '$2.1M',
    age: 41,
    occupation: 'Tech Entrepreneur',
    riskProfile: 'Aggressive',
    objectives: ['Growth Investing', 'Stock Options Management', 'Business Exit Planning'],
    advisor: 'fa004',
    location: 'Chicago, IL'
  },
  
  // Affluent Clients
  {
    id: 'cl006',
    name: 'Kevin Roberts',
    wealthSegment: 'AFFLUENT',
    aum: '$750K',
    age: 39,
    occupation: 'Marketing Director',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Home Purchase', 'Retirement Saving', 'Investment Growth'],
    advisor: 'fa004',
    location: 'Indianapolis, IN'
  },
  {
    id: 'cl007',
    name: 'Maria Santos',
    wealthSegment: 'AFFLUENT',
    aum: '$850K',
    age: 47,
    occupation: 'Healthcare Administrator',
    riskProfile: 'Moderate',
    objectives: ['Education Funding', 'Retirement Planning', 'Emergency Fund'],
    advisor: 'fa002',
    location: 'Milwaukee, WI'
  },
  
  // Mass Affluent Clients
  {
    id: 'cl008',
    name: 'Daniel Kim',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$325K',
    age: 34,
    occupation: 'Software Engineer',
    riskProfile: 'Aggressive',
    objectives: ['401k Optimization', 'Home Down Payment', 'Investment Learning'],
    advisor: 'fa004',
    location: 'Chicago, IL'
  },
  {
    id: 'cl009',
    name: 'Lisa Johnson',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$275K',
    age: 42,
    occupation: 'Teacher',
    riskProfile: 'Conservative',
    objectives: ['Retirement Security', 'Pension Optimization', 'Healthcare Planning'],
    advisor: 'fa003',
    location: 'Detroit, MI'
  },
  
  // Emerging Wealth Clients
  {
    id: 'cl010',
    name: 'Alex Martinez',
    wealthSegment: 'EMERGING_WEALTH',
    aum: '$75K',
    age: 28,
    occupation: 'Financial Analyst',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Emergency Fund', 'First Home', 'Career Development'],
    advisor: 'fa004',
    location: 'Chicago, IL'
  },
  {
    id: 'cl011',
    name: 'Rachel Green',
    wealthSegment: 'EMERGING_WEALTH',
    aum: '$45K',
    age: 26,
    occupation: 'Marketing Coordinator',
    riskProfile: 'Moderate',
    objectives: ['Student Loan Payoff', 'Emergency Savings', 'Investment Start'],
    advisor: 'fa004',
    location: 'Milwaukee, WI'
  },
  
  // Additional Clients for Annuities Focus
  {
    id: 'cl012',
    name: 'Harold and Margaret Wilson',
    wealthSegment: 'HNW',
    aum: '$4.2M',
    age: 68,
    occupation: 'Retired Manufacturing Executive / Retired Teacher',
    riskProfile: 'Conservative',
    objectives: ['Income Generation', 'Principal Protection', 'Long-term Care Planning'],
    advisor: 'fa003',
    location: 'Detroit, MI'
  },
  {
    id: 'cl013',
    name: 'Patricia Davis',
    wealthSegment: 'AFFLUENT',
    aum: '$950K',
    age: 61,
    occupation: 'Retired Government Employee',
    riskProfile: 'Conservative',
    objectives: ['Guaranteed Income', 'Healthcare Costs', 'Estate Planning'],
    advisor: 'fa005',
    location: 'Indianapolis, IN'
  },
  {
    id: 'cl014',
    name: 'Charles and Linda Brown',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$385K',
    age: 63,
    occupation: 'Retired Police Officer / Retired Nurse',
    riskProfile: 'Conservative',
    objectives: ['Pension Supplement', 'Medical Expenses', 'Fixed Income'],
    advisor: 'fa003',
    location: 'Milwaukee, WI'
  },
  {
    id: 'cl015',
    name: 'George Anderson',
    wealthSegment: 'AFFLUENT',
    aum: '$720K',
    age: 59,
    occupation: 'Insurance Executive',
    riskProfile: 'Moderate Conservative',
    objectives: ['Pre-retirement Planning', 'Income Bridge', 'Tax Deferral'],
    advisor: 'fa005',
    location: 'Chicago, IL'
  },
  {
    id: 'cl016',
    name: 'Dorothy Taylor',
    wealthSegment: 'HNW',
    aum: '$1.8M',
    age: 72,
    occupation: 'Retired Real Estate Developer',
    riskProfile: 'Conservative',
    objectives: ['Legacy Protection', 'Nursing Home Insurance', 'Family Support'],
    advisor: 'fa001',
    location: 'Lake Forest, IL'
  },
  
  // Additional Clients for RMD Focus
  {
    id: 'cl017',
    name: 'Frank and Marie Williams',
    wealthSegment: 'HNW',
    aum: '$2.3M',
    age: 74,
    occupation: 'Retired Corporate Executives',
    riskProfile: 'Conservative',
    objectives: ['RMD Compliance', 'Tax Minimization', 'Estate Planning'],
    advisor: 'fa008',
    location: 'Evanston, IL'
  },
  {
    id: 'cl018',
    name: 'Robert Mitchell',
    wealthSegment: 'AFFLUENT',
    aum: '$890K',
    age: 76,
    occupation: 'Retired Engineering Manager',
    riskProfile: 'Moderate Conservative',
    objectives: ['RMD Optimization', 'Healthcare Costs', 'Charitable Giving'],
    advisor: 'fa008',
    location: 'Grand Rapids, MI'
  },
  {
    id: 'cl019',
    name: 'Eleanor Campbell',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$450K',
    age: 73,
    occupation: 'Retired School Administrator',
    riskProfile: 'Conservative',
    objectives: ['RMD Management', 'Social Security Optimization', 'Long-term Care Planning'],
    advisor: 'fa009',
    location: 'Madison, WI'
  },
  {
    id: 'cl020',
    name: 'Richard and Joyce Thompson',
    wealthSegment: 'HNW',
    aum: '$1.6M',
    age: 71,
    occupation: 'Retired Small Business Owners',
    riskProfile: 'Moderate',
    objectives: ['RMD Planning', 'Business Exit Tax Strategy', 'Grandchildren Education'],
    advisor: 'fa009',
    location: 'Bloomington, IN'
  },
  {
    id: 'cl021',
    name: 'William Carson',
    wealthSegment: 'AFFLUENT',
    aum: '$675K',
    age: 78,
    occupation: 'Retired Federal Employee',
    riskProfile: 'Conservative',
    objectives: ['Late RMD Compliance', 'Pension Coordination', 'Medical Expenses'],
    advisor: 'fa008',
    location: 'Springfield, IL'
  },

  // Banking Products & Services Clients
  {
    id: 'cl022',
    name: 'Amanda Foster',
    wealthSegment: 'HNW',
    aum: '$2.8M',
    age: 42,
    occupation: 'Corporate Attorney',
    riskProfile: 'Aggressive',
    objectives: ['Credit Optimization', 'Cash Flow Management', 'Home Equity Utilization'],
    advisor: 'fa010',
    location: 'Chicago, IL'
  },
  {
    id: 'cl023',
    name: 'Marcus and Diana Brooks',
    wealthSegment: 'AFFLUENT',
    aum: '$785K',
    age: 51,
    occupation: 'Small Business Owners',
    riskProfile: 'Moderate',
    objectives: ['Business Banking Integration', 'Mortgage Optimization', 'Cash Management'],
    advisor: 'fa011',
    location: 'Detroit, MI'
  },
  {
    id: 'cl024',
    name: 'Patricia Nguyen',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$325K',
    age: 38,
    occupation: 'Software Engineer',
    riskProfile: 'Moderate Aggressive',
    objectives: ['CD Strategies', 'Money Market Optimization', 'Debit Card Rewards'],
    advisor: 'fa012',
    location: 'Minneapolis, MN'
  },
  {
    id: 'cl025',
    name: 'Kevin Rodriguez',
    wealthSegment: 'EMERGING_WEALTH',
    aum: '$85K',
    age: 29,
    occupation: 'Marketing Manager',
    riskProfile: 'Aggressive',
    objectives: ['Credit Building', 'Banking Relationship', 'Auto Loan Optimization'],
    advisor: 'fa010',
    location: 'Chicago, IL'
  },
  {
    id: 'cl026',
    name: 'Janet and Robert Kim',
    wealthSegment: 'HNW',
    aum: '$4.2M',
    age: 55,
    occupation: 'Healthcare Executives',
    riskProfile: 'Moderate',
    objectives: ['HELOC Strategy', 'Premium Banking', 'Investment Property Financing'],
    advisor: 'fa011',
    location: 'Detroit, MI'
  },
  {
    id: 'cl027',
    name: 'Christopher Davis',
    wealthSegment: 'AFFLUENT',
    aum: '$950K',
    age: 46,
    occupation: 'Real Estate Developer',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Construction Loans', 'Business Banking', 'Cash Flow Optimization'],
    advisor: 'fa011',
    location: 'Milwaukee, WI'
  },
  {
    id: 'cl028',
    name: 'Michelle Turner',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$215K',
    age: 34,
    occupation: 'Physician Resident',
    riskProfile: 'Moderate',
    objectives: ['Student Loan Management', 'Credit Enhancement', 'Banking Optimization'],
    advisor: 'fa010',
    location: 'Chicago, IL'
  },

  // CRM & Client Relationship Management Clients
  {
    id: 'cl029',
    name: 'Victoria Harrison',
    wealthSegment: 'HNW',
    aum: '$3.8M',
    age: 52,
    occupation: 'Corporate Executive',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Communication Preferences', 'Digital Engagement', 'Personalized Service'],
    advisor: 'fa013',
    location: 'Chicago, IL'
  },
  {
    id: 'cl030', 
    name: 'Steven and Barbara Chen',
    wealthSegment: 'AFFLUENT',
    aum: '$750K',
    age: 58,
    occupation: 'Retired Teachers',
    riskProfile: 'Conservative',
    objectives: ['Regular Communication', 'Educational Content', 'Simplified Interactions'],
    advisor: 'fa014',
    location: 'Milwaukee, WI'
  },
  {
    id: 'cl031',
    name: 'Daniel Rodriguez',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$385K',
    age: 41,
    occupation: 'IT Director',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Technology Integration', 'Digital-First Communication', 'Efficient Interactions'],
    advisor: 'fa013',
    location: 'Chicago, IL'
  },
  {
    id: 'cl032',
    name: 'Grace Thompson',
    wealthSegment: 'EMERGING_WEALTH',
    aum: '$95K',
    age: 32,
    occupation: 'Marketing Director',
    riskProfile: 'Aggressive',
    objectives: ['Social Media Engagement', 'Modern Communication', 'Flexible Scheduling'],
    advisor: 'fa014',
    location: 'Milwaukee, WI'
  },
  {
    id: 'cl033',
    name: 'Robert and Susan Miller',
    wealthSegment: 'UHNW',
    aum: '$12.5M',
    age: 64,
    occupation: 'Business Owners',
    riskProfile: 'Moderate',
    objectives: ['High-Touch Service', 'Personal Attention', 'Traditional Communication'],
    advisor: 'fa015',
    location: 'Detroit, MI'
  },
  {
    id: 'cl034',
    name: 'Jennifer Liu',
    wealthSegment: 'HNW',
    aum: '$2.2M',
    age: 45,
    occupation: 'Physician',
    riskProfile: 'Moderate',
    objectives: ['Efficient Communication', 'Time-Sensitive Updates', 'Professional Coordination'],
    advisor: 'fa015',
    location: 'Detroit, MI'
  },
  {
    id: 'cl035',
    name: 'Alexander Davis',
    wealthSegment: 'AFFLUENT',
    aum: '$650K',
    age: 29,
    occupation: 'Tech Entrepreneur',
    riskProfile: 'Aggressive',
    objectives: ['Digital Innovation', 'Real-Time Updates', 'Mobile-First Experience'],
    advisor: 'fa013',
    location: 'Chicago, IL'
  },

  // Account Performance-Focused Clients
  {
    id: 'cl036',
    name: 'Jonathan Mitchell',
    wealthSegment: 'UHNW',
    aum: '$15.2M',
    age: 58,
    occupation: 'Investment Executive',
    riskProfile: 'Moderate',
    objectives: ['Performance Tracking', 'Benchmark Comparison', 'Risk Management'],
    advisor: 'fa016',
    location: 'Chicago, IL'
  },
  {
    id: 'cl037',
    name: 'Patricia Chen',
    wealthSegment: 'HNW',
    aum: '$3.8M',
    age: 52,
    occupation: 'Financial Consultant',
    riskProfile: 'Conservative',
    objectives: ['Consistent Performance', 'Diversification', 'Risk Control'],
    advisor: 'fa017',
    location: 'Indianapolis, IN'
  },
  {
    id: 'cl038',
    name: 'Marcus Rodriguez',
    wealthSegment: 'HNW',
    aum: '$2.4M',
    age: 45,
    occupation: 'Portfolio Manager',
    riskProfile: 'Aggressive',
    objectives: ['Alpha Generation', 'Active Management', 'Performance Attribution'],
    advisor: 'fa018',
    location: 'Milwaukee, WI'
  },
  {
    id: 'cl039',
    name: 'Elizabeth Thompson',
    wealthSegment: 'AFFLUENT',
    aum: '$785K',
    age: 41,
    occupation: 'Corporate Finance Director',
    riskProfile: 'Moderate',
    objectives: ['Performance Monitoring', 'Cost Efficiency', 'Strategic Rebalancing'],
    advisor: 'fa016',
    location: 'Chicago, IL'
  },
  {
    id: 'cl040',
    name: 'David Foster',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$325K',
    age: 38,
    occupation: 'Investment Analyst',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Performance Optimization', 'Fund Selection', 'Benchmark Tracking'],
    advisor: 'fa017',
    location: 'Indianapolis, IN'
  },
  {
    id: 'cl041',
    name: 'Sarah Williams',
    wealthSegment: 'AFFLUENT',
    aum: '$925K',
    age: 49,
    occupation: 'Risk Manager',
    riskProfile: 'Conservative Moderate',
    objectives: ['Risk Assessment', 'Performance Analysis', 'Position Monitoring'],
    advisor: 'fa018',
    location: 'Milwaukee, WI'
  },
  {
    id: 'cl042',
    name: 'Robert Anderson',
    wealthSegment: 'HNW',
    aum: '$4.7M',
    age: 56,
    occupation: 'Wealth Management Executive',
    riskProfile: 'Moderate',
    objectives: ['Institutional Quality', 'Performance Attribution', 'Strategic Allocation'],
    advisor: 'fa016',
    location: 'Chicago, IL'
  },
  {
    id: 'cl043',
    name: 'Michelle Davis',
    wealthSegment: 'EMERGING_WEALTH',
    aum: '$85K',
    age: 32,
    occupation: 'Financial Advisor',
    riskProfile: 'Aggressive',
    objectives: ['Growth Maximization', 'Performance Tracking', 'Learning Opportunities'],
    advisor: 'fa017',
    location: 'Indianapolis, IN'
  },

  // Insurance Planning-Focused Clients
  {
    id: 'cl044',
    name: 'James Mitchell',
    wealthSegment: 'HNW',
    aum: '$2.8M',
    age: 45,
    occupation: 'Medical Doctor',
    riskProfile: 'Conservative Moderate',
    objectives: ['Income Protection', 'Estate Planning', 'Risk Management'],
    advisor: 'fa019',
    location: 'Chicago, IL'
  },
  {
    id: 'cl045',
    name: 'Linda Thompson',
    wealthSegment: 'AFFLUENT',
    aum: '$750K',
    age: 52,
    occupation: 'Business Owner',
    riskProfile: 'Moderate',
    objectives: ['Business Succession', 'Key Person Insurance', 'Wealth Transfer'],
    advisor: 'fa020',
    location: 'Milwaukee, WI'
  },
  {
    id: 'cl046',
    name: 'Thomas Rodriguez',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$385K',
    age: 38,
    occupation: 'Engineering Manager',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Family Protection', 'Disability Coverage', 'College Funding'],
    advisor: 'fa021',
    location: 'Indianapolis, IN'
  },
  {
    id: 'cl047',
    name: 'Carol Williams',
    wealthSegment: 'UHNW',
    aum: '$12.5M',
    age: 62,
    occupation: 'Retired Executive',
    riskProfile: 'Conservative',
    objectives: ['Long Term Care Planning', 'Legacy Preservation', 'Healthcare Security'],
    advisor: 'fa019',
    location: 'Chicago, IL'
  },
  {
    id: 'cl048',
    name: 'Daniel Foster',
    wealthSegment: 'HNW',
    aum: '$1.9M',
    age: 41,
    occupation: 'Technology Executive',
    riskProfile: 'Aggressive',
    objectives: ['Term Life Conversion', 'Universal Life Strategy', 'Tax Efficiency'],
    advisor: 'fa020',
    location: 'Milwaukee, WI'
  },
  {
    id: 'cl049',
    name: 'Patricia Chen',
    wealthSegment: 'AFFLUENT',
    aum: '$625K',
    age: 55,
    occupation: 'Healthcare Administrator',
    riskProfile: 'Conservative Moderate',
    objectives: ['Long Term Care Insurance', 'Retirement Security', 'Healthcare Planning'],
    advisor: 'fa021',
    location: 'Indianapolis, IN'
  },
  {
    id: 'cl050',
    name: 'Michael Anderson',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$295K',
    age: 34,
    occupation: 'Sales Manager',
    riskProfile: 'Moderate',
    objectives: ['Income Replacement', 'Mortgage Protection', 'Family Security'],
    advisor: 'fa019',
    location: 'Chicago, IL'
  },
  {
    id: 'cl051',
    name: 'Jennifer Davis',
    wealthSegment: 'EMERGING_WEALTH',
    aum: '$95K',
    age: 29,
    occupation: 'Marketing Professional',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Basic Life Insurance', 'Disability Protection', 'Career Development'],
    advisor: 'fa020',
    location: 'Milwaukee, WI'
  }
];

// Investment Products Insight Category
export const INVESTMENT_PRODUCTS_CATEGORY = {
  grouping: 'Front Office',
  name: 'Investment Products',
  description: 'These Insights help Financial Advisor identify right Investment Products for Client\'s Portfolio.',
  displayLabel: 'These Insights help Financial Advisor identify right Investment Products for Client\'s Portfolio.'
};

// Investment Product Insights
export const INVESTMENT_INSIGHTS = [
  {
    id: 'ip001',
    name: 'Stocks',
    purpose: 'Identify the right stocks',
    category: 'Investment Products'
  },
  {
    id: 'ip002', 
    name: 'Bonds',
    purpose: 'Identify the right bonds',
    category: 'Investment Products'
  },
  {
    id: 'ip003',
    name: 'Mutual Funds',
    purpose: 'Identify the right Mutual Funds', 
    category: 'Investment Products'
  },
  {
    id: 'ip004',
    name: 'ETFs',
    purpose: 'Identify the right ETFs',
    category: 'Investment Products'
  },
  {
    id: 'ip005',
    name: 'Alternative Investments',
    purpose: 'Provide access to Private Markets',
    category: 'Investment Products'
  },
  {
    id: 'ip006',
    name: 'Specialized Strategies',
    purpose: 'Specialized Strategies',
    category: 'Investment Products'
  },
  {
    id: 'ip007',
    name: 'Annuities',
    purpose: 'Guide Clients on Annuities for Income and Protection',
    category: 'Investment Products'
  },
  {
    id: 'ip008',
    name: 'RMD',
    purpose: 'Guide Clients on RMD Compliance and Optimization',
    category: 'Investment Products'
  }
];

// Banking Products & Services Insight Category
export const BANKING_PRODUCTS_CATEGORY = {
  grouping: 'Front Office',
  name: 'Banking Products & Services',
  description: 'These Insights help Financial Advisor to guide the client with regard to Banking Products and Services.',
  displayLabel: 'These Insights help Financial Advisor to guide the client with regard to Banking Products and Services.'
};

// Banking Products Insights
export const BANKING_INSIGHTS = [
  {
    id: 'bp001',
    name: 'Credit Card Optimization & Management',
    purpose: 'Credit Card Optimization & Management',
    category: 'Banking Products & Services'
  },
  {
    id: 'bp002',
    name: 'Debit Card Security & Rewards',
    purpose: 'Debit Card Security & Rewards',
    category: 'Banking Products & Services'
  },
  {
    id: 'bp003',
    name: 'Money Market Account Optimization',
    purpose: 'Money Market Account Optimization',
    category: 'Banking Products & Services'
  },
  {
    id: 'bp004',
    name: 'Mortgage & Home Equity Solutions',
    purpose: 'Mortgage & Home Equity Solutions',
    category: 'Banking Products & Services'
  },
  {
    id: 'bp005',
    name: 'Certificate of Deposit (CD) Strategies',
    purpose: 'Certificate of Deposit (CD) Strategies',
    category: 'Banking Products & Services'
  },
  {
    id: 'bp006',
    name: 'Business Banking Integration',
    purpose: 'Business Banking Integration',
    category: 'Banking Products & Services'
  },
  {
    id: 'bp007',
    name: 'Automobile Loans',
    purpose: 'Automobile Loans',
    category: 'Banking Products & Services'
  }
];

// Business Benefits for Investment Products
export const BUSINESS_BENEFITS = [
  'Market Timing Intelligence: Real-time analysis of market conditions and sector rotation opportunities.',
  'Client Suitability Matching: Sophisticated algorithms matching investment products to client risk profiles and objectives.',
  'Alternative Investment Access: Comprehensive coverage of private markets and institutional-quality investments.',
  'Cost Optimization: Expense ratio analysis and fee reduction opportunities across all asset classes.',
  'Tax Efficiency: Tax-loss harvesting, municipal bonds, and tax-advantaged investment strategies.',
  'Performance Attribution: Detailed analysis of fund manager performance and style consistency.',
  'Risk Management: Concentration risk alerts, correlation analysis, and diversification optimization.'
];

// Business Benefits for Banking Products & Services
export const BANKING_BUSINESS_BENEFITS = [
  'Comprehensive Product Coverage: All major banking products with realistic scenarios and current market rates',
  'Dynamic Financial Calculations: Real-time interest rate comparisons, savings calculations, and ROI projections',
  'Smart Priority Management: High priority for time-sensitive opportunities, medium/low for optimization strategies',
  'Value Potential Ranges: Potential per insight based on financial impact significance',
  'Market-Current Data: Updates with realistic current interest rates, credit terms, and banking product features'
];

// CRM Insight Category
export const CRM_CATEGORY = {
  grouping: 'Front Office',
  name: 'CRM',
  description: 'These Insights help Financial Advisors help mature their relationships with Clients and Prospects',
  displayLabel: 'These Insights help Financial Advisors help mature their relationships with Clients and Prospects'
};

// CRM Insights
export const CRM_INSIGHTS = [
  {
    id: 'crm001',
    name: 'Client Emails',
    purpose: 'Have meaningful and relevant number of digital interactions with the client through emails',
    category: 'CRM'
  },
  {
    id: 'crm002',
    name: 'Client Meeting',
    purpose: 'Have meaningful and relevant number of digital interactions with the client through meetings',
    category: 'CRM'
  },
  {
    id: 'crm003',
    name: 'Client Calls',
    purpose: 'Have meaningful and relevant number of digital interactions with the client through calls',
    category: 'CRM'
  },
  {
    id: 'crm004',
    name: 'Client Chats',
    purpose: 'Have meaningful and relevant number of digital interactions with the client through chats',
    category: 'CRM'
  },
  {
    id: 'crm005',
    name: 'Client Conferences',
    purpose: 'Have meaningful and relevant number of digital interactions with the client through conferences',
    category: 'CRM'
  }
];

// Business Benefits for CRM
export const CRM_BUSINESS_BENEFITS = [
  'Response Rates Optimization: Improved response rates across all communication channels',
  'Engagement Improvements: Better engagement through proper channel selection and personalization',
  'Efficiency Gains: Reduction in follow-up attempts and time-to-resolution improvements',
  'Satisfaction Scores: Higher client satisfaction and increased referrals from engaged clients',
  'Better Retention Rates: Enhanced client retention through personalized communication strategies'
];

// Account Performance Insight Category
export const ACCOUNT_PERFORMANCE_CATEGORY = {
  grouping: 'Front Office',
  name: 'Account Performance',
  description: 'These Insights help Financial Advisor to view and act on key Account performance changes vs their target benchmark and client specific risk and goals. These Insights also help with Concentrated positions, small fund positions, unusual inflows and outflows, Morningstar upgrades or downgrades, notable fund performance, SMA Strategies, Overlapping strategies, Notable changes on guidance from Investment council.',
  displayLabel: 'These Insights help Financial Advisor to view and act on key Account performance changes'
};

// Account Performance Insights
export const ACCOUNT_PERFORMANCE_INSIGHTS = [
  {
    id: 'ap001',
    name: 'Performance vs target benchmarks',
    purpose: 'Performance vs their target benchmarks',
    category: 'Account Performance'
  },
  {
    id: 'ap002',
    name: 'Concentrated Positions',
    purpose: 'Concentrated Positions',
    category: 'Account Performance'
  },
  {
    id: 'ap003',
    name: 'Performance Attribution Analysis',
    purpose: 'What is working or hurting performance in the opposite direction',
    category: 'Account Performance'
  },
  {
    id: 'ap004',
    name: 'Small Fund Positions',
    purpose: 'Small fund positions',
    category: 'Account Performance'
  },
  {
    id: 'ap005',
    name: 'Morningstar Upgrade/Downgrades',
    purpose: 'Morningstar Upgrade/Downgrades',
    category: 'Account Performance'
  },
  {
    id: 'ap006',
    name: 'Overlapping and/or Stale Strategies',
    purpose: 'Overlapping and/or Stale Strategies',
    category: 'Account Performance'
  },
  {
    id: 'ap007',
    name: 'Unusual Inflow/Outflows',
    purpose: 'Unusual Inflow/Outflows',
    category: 'Account Performance'
  },
  {
    id: 'ap008',
    name: 'Notable Fund Performance',
    purpose: 'Notable Fund Performance',
    category: 'Account Performance'
  },
  {
    id: 'ap009',
    name: 'Chief Investment Office Guidance Changes',
    purpose: 'Notable changes on guidance from Chief Investment Office',
    category: 'Account Performance'
  }
];

// Business Benefits for Account Performance
export const ACCOUNT_PERFORMANCE_BUSINESS_BENEFITS = [
  'Real-time Performance Monitoring: Against benchmarks and client goals',
  'Proactive Risk Identification: Concentration risks and portfolio optimization opportunities',
  'Enhanced Client Communication: Through performance attribution analysis',
  'Timely Action Alerts: On fund rating changes and strategy overlaps',
  'Improved Client Retention: Through superior performance tracking and explanation'
];

// Insurance Planning Insight Category
export const INSURANCE_PLANNING_CATEGORY = {
  grouping: 'Front Office',
  name: 'Insurance Planning',
  description: 'These Insights help Financial Advisor to suggest insurance products for the client',
  displayLabel: 'These Insights help Financial Advisor to suggest insurance products for the client'
};

// Insurance Planning Insights
export const INSURANCE_PLANNING_INSIGHTS = [
  {
    id: 'ip001',
    name: 'Term Life',
    purpose: 'Term Life',
    category: 'Insurance Planning'
  },
  {
    id: 'ip002',
    name: 'Whole Life',
    purpose: 'Whole Life',
    category: 'Insurance Planning'
  },
  {
    id: 'ip003',
    name: 'Universal Life',
    purpose: 'Universal Life',
    category: 'Insurance Planning'
  },
  {
    id: 'ip004',
    name: 'Long Term Care',
    purpose: 'Long Term Care',
    category: 'Insurance Planning'
  },
  {
    id: 'ip005',
    name: 'Disability',
    purpose: 'Disability',
    category: 'Insurance Planning'
  }
];

// Business Benefits for Insurance Planning
export const INSURANCE_PLANNING_BUSINESS_BENEFITS = [
  'Comprehensive Risk Assessment: Insurance needs analysis for client protection',
  'Proactive Coverage Gap Identification: Optimization opportunities for existing policies',
  'Enhanced Financial Security: Appropriate insurance recommendations for client protection',
  'Revenue Diversification: Insurance product sales and commission opportunities',
  'Improved Client Retention: Holistic financial planning approach with risk management'
];