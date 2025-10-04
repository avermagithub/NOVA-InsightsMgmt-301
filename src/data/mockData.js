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