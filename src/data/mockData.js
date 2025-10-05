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
  },

  // Education Planning Specialists
  {
    id: 'fa022',
    name: 'Rebecca Martinez, CFP®, CES®',
    firm: 'Sterling Wealth Partners',
    experience: 12,
    specialties: ['Education Planning', '529 Plans', 'College Funding Strategies', 'Multi-Generational Planning'],
    aum: '$285M',
    clientCount: 76,
    location: 'Chicago, IL'
  },
  {
    id: 'fa023',
    name: 'Daniel Foster, ChFC®, CES®',
    firm: 'Sterling Wealth Partners',
    experience: 9,
    specialties: ['Education Savings', 'Tax-Advantaged Education Accounts', 'Student Loan Optimization', 'Graduate School Funding'],
    aum: '$198M',
    clientCount: 84,
    location: 'Milwaukee, WI'
  },
  {
    id: 'fa024',
    name: 'Ashley Thompson, CFP®, CES®',
    firm: 'Sterling Wealth Partners',
    experience: 14,
    specialties: ['529 Plan Management', 'Education Tax Strategies', 'Private School Funding', 'Professional School Planning'],
    aum: '$315M',
    clientCount: 67,
    location: 'Detroit, MI'
  },

  // Security Backed Lending (SBL) Specialists
  {
    id: 'fa025',
    name: 'Richard Walker, CFP®, CLS®',
    firm: 'Sterling Wealth Partners',
    experience: 16,
    specialties: ['Securities Backed Lending', 'Credit Strategy', 'Leverage Management', 'Liquidity Solutions'],
    aum: '$425M',
    clientCount: 72,
    location: 'Chicago, IL'
  },
  {
    id: 'fa026',
    name: 'Emily Rodriguez, CFA, CLS®',
    firm: 'Sterling Wealth Partners',
    experience: 11,
    specialties: ['SBL Portfolio Strategy', 'Credit Line Optimization', 'Alternative Financing', 'Risk Management'],
    aum: '$298M',
    clientCount: 68,
    location: 'Milwaukee, WI'
  },
  {
    id: 'fa027',
    name: 'Thomas Mitchell, ChFC®, CLS®',
    firm: 'Sterling Wealth Partners',
    experience: 13,
    specialties: ['SBL Debt Consolidation', 'Rate Optimization', 'Credit Analysis', 'Structured Lending'],
    aum: '$365M',
    clientCount: 79,
    location: 'Detroit, MI'
  },

  // Financial Planning Specialists
  {
    id: 'fa028',
    name: 'Sarah Peterson, CFP®, FPA®',
    firm: 'Sterling Wealth Partners',
    experience: 15,
    specialties: ['Comprehensive Financial Planning', 'Goal-Based Planning', 'Risk Profile Assessment', 'Investment Strategy'],
    aum: '$445M',
    clientCount: 83,
    location: 'Chicago, IL'
  },
  {
    id: 'fa029',
    name: 'Michael Chang, CFP®, CPA/PFS',
    firm: 'Sterling Wealth Partners',
    experience: 12,
    specialties: ['Financial Plan Development', 'Tax-Integrated Planning', 'Retirement Planning', 'Estate Coordination'],
    aum: '$312M',
    clientCount: 76,
    location: 'Milwaukee, WI'
  },
  {
    id: 'fa030',
    name: 'Jennifer Adams, CFP®, FPA®',
    firm: 'Sterling Wealth Partners',
    experience: 10,
    specialties: ['Financial Goal Setting', 'Life Planning', 'Investment Planning', 'Risk Management'],
    aum: '$278M',
    clientCount: 71,
    location: 'Indianapolis, IN'
  },

  // Retirement Planning Specialists
  {
    id: 'fa031',
    name: 'David Taylor, CFP®, QPA®',
    firm: 'Sterling Wealth Partners',
    experience: 18,
    specialties: ['401k Plan Design', 'Fiduciary Services', 'Plan Administration', 'Corporate Retirement Solutions'],
    aum: '$525M',
    clientCount: 89,
    location: 'Chicago, IL'
  },
  {
    id: 'fa032',
    name: 'Lisa Thompson, CPA, QPA®',
    firm: 'Sterling Wealth Partners',
    experience: 14,
    specialties: ['Plan Compliance', 'Retirement Plan Administration', 'Employee Education', 'Cost Analysis'],
    aum: '$398M',
    clientCount: 74,
    location: 'Milwaukee, WI'
  },
  {
    id: 'fa033',
    name: 'Robert Wilson, CFP®, QKA®',
    firm: 'Sterling Wealth Partners',
    experience: 16,
    specialties: ['Plan Implementation', 'State Mandate Compliance', 'Merger Integration', 'Fiduciary Oversight'],
    aum: '$467M',
    clientCount: 81,
    location: 'Detroit, MI'
  },
  // Estate Planning Specialists
  {
    id: 'fa034',
    name: 'Victoria Sterling, JD, CFP®, TEP',
    firm: 'Sterling Wealth Partners',
    experience: 18,
    specialties: ['Estate Tax Planning', 'Generation-Skipping Trusts', 'Charitable Legacy Planning', 'Family Governance'],
    aum: '$585M',
    clientCount: 52,
    location: 'Greenwich, CT'
  },
  {
    id: 'fa035',
    name: 'Charles Whitmore III, JD, CPA, CFP®',
    firm: 'Sterling Wealth Partners',
    experience: 22,
    specialties: ['Estate Planning', 'Business Succession', 'Trust Structures', 'Multi-generational Planning'],
    aum: '$678M',
    clientCount: 48,
    location: 'Manhattan, NY'
  },
  {
    id: 'fa036',
    name: 'Amanda Richardson, CFP®, ChFC®',
    firm: 'Sterling Wealth Partners',
    experience: 14,
    specialties: ['Basic Estate Planning', 'Guardian Protection', 'Life Insurance Planning', 'Professional Practice Protection'],
    aum: '$245M',
    clientCount: 89,
    location: 'Austin, TX'
  },
  // Trust Planning Specialists
  {
    id: 'fa037',
    name: 'Harrison Pemberton, JD, LLM, TEP',
    firm: 'Sterling Wealth Partners',
    experience: 25,
    specialties: ['Dynasty Trusts', 'Charitable Remainder Trusts', 'GRAT Strategies', 'Advanced Trust Planning'],
    aum: '$892M',
    clientCount: 35,
    location: 'Newport, RI'
  },
  {
    id: 'fa038',
    name: 'Margaret Thornton, JD, CFP®, CPA',
    firm: 'Sterling Wealth Partners',
    experience: 19,
    specialties: ['Revocable Trusts', 'Credit Shelter Trusts', 'Asset Protection', 'Testamentary Planning'],
    aum: '$456M',
    clientCount: 67,
    location: 'Miami, FL'
  },
  {
    id: 'fa039',
    name: 'Edward Hamilton, CFP®, ChFC®, TEP',
    firm: 'Sterling Wealth Partners',
    experience: 16,
    specialties: ['Living Trusts', 'Minor Protection Trusts', 'QTIP Trusts', 'Family Trust Planning'],
    aum: '$312M',
    clientCount: 78,
    location: 'Denver, CO'
  },
  // Tax Planning Specialists
  {
    id: 'fa040',
    name: 'Alexander Montgomery, CPA, CFP®, PFS',
    firm: 'Sterling Wealth Partners',
    experience: 21,
    specialties: ['Tax Loss Harvesting', 'Alternative Minimum Tax', 'High-Income Tax Strategies', 'Portfolio Tax Optimization'],
    aum: '$734M',
    clientCount: 43,
    location: 'Greenwich, CT'
  },
  {
    id: 'fa041',
    name: 'Stephanie Goldman, CPA, CFP®, MST',
    firm: 'Sterling Wealth Partners',
    experience: 17,
    specialties: ['Roth Conversions', 'Tax-Aware Portfolio Management', 'Municipal Bond Strategies', 'Tax Lot Optimization'],
    aum: '$521M',
    clientCount: 61,
    location: 'San Francisco, CA'
  },
  {
    id: 'fa042',
    name: 'Jonathan Davis, CPA, CFP®, ChFC®',
    firm: 'Sterling Wealth Partners',
    experience: 13,
    specialties: ['Basic Tax Planning', 'Retirement Tax Planning', 'Education Tax Credits', 'Tax Software Solutions'],
    aum: '$289M',
    clientCount: 94,
    location: 'Washington, DC'
  },
  // Client 360 & Competitive Intelligence Specialists
  {
    id: 'fa043',
    name: 'Catherine Blackwood, CFP®, CFA, CIMA®',
    firm: 'Sterling Wealth Partners',
    experience: 20,
    specialties: ['Competitive Analysis', 'Market Share Protection', 'Client Intelligence', 'Relationship Management'],
    aum: '$612M',
    clientCount: 56,
    location: 'New York, NY'
  },
  {
    id: 'fa044',
    name: 'Thomas Anderson, CFP®, ChFC®',
    firm: 'Sterling Wealth Partners',
    experience: 15,
    specialties: ['Account Monitoring', 'External Relationship Tracking', 'Client Profile Analysis', 'Investment Intelligence'],
    aum: '$387M',
    clientCount: 72,
    location: 'Atlanta, GA'
  },
  {
    id: 'fa045',
    name: 'Rachel Taylor, CFP®, CRPC®',
    firm: 'Sterling Wealth Partners',
    experience: 11,
    specialties: ['Market Intelligence', 'Young Professional Services', 'Account Tracking', 'Competitive Positioning'],
    aum: '$156M',
    clientCount: 118,
    location: 'Austin, TX'
  },
  // Cash Management Specialists
  {
    id: 'fa046',
    name: 'Alexander Hamilton, CFA, CFP®',
    firm: 'Sterling Wealth Partners',
    experience: 23,
    specialties: ['Cash Flow Management', 'Liquidity Optimization', 'Distribution Planning', 'Strategic Cash Allocation'],
    aum: '$845M',
    clientCount: 37,
    location: 'New York, NY'
  },
  {
    id: 'fa047',
    name: 'Victoria Sterling, CFP®, CPA',
    firm: 'Sterling Wealth Partners',
    experience: 18,
    specialties: ['Cash Management', 'Distribution Strategies', 'Withdrawal Planning', 'Liquidity Analysis'],
    aum: '$523M',
    clientCount: 68,
    location: 'Boston, MA'
  },
  {
    id: 'fa048',
    name: 'Christopher Davis, CFP®, ChFC®',
    firm: 'Sterling Wealth Partners',
    experience: 14,
    specialties: ['Basic Cash Planning', 'Distribution Tracking', 'Cash Reserve Management', 'Liquidity Planning'],
    aum: '$287M',
    clientCount: 92,
    location: 'Washington, DC'
  },
  // Event Management Specialists
  {
    id: 'fa049',
    name: 'Margaret Pemberton, CFP®, CPWA®',
    firm: 'Sterling Wealth Partners',
    experience: 26,
    specialties: ['Event Planning', 'Client Education', 'Seminar Management', 'Philanthropic Events'],
    aum: '$734M',
    clientCount: 41,
    location: 'Newport, RI'
  },
  {
    id: 'fa050',
    name: 'Harrison Thornton, CFP®, CFA',
    firm: 'Sterling Wealth Partners',
    experience: 21,
    specialties: ['Investment Conferences', 'Educational Webinars', 'Professional Networking', 'Market Analysis Events'],
    aum: '$612M',
    clientCount: 54,
    location: 'Chicago, IL'
  },
  {
    id: 'fa051',
    name: 'Catherine Montgomery, CFP®, ChFC®',
    firm: 'Sterling Wealth Partners',
    experience: 16,
    specialties: ['Executive Events', 'Young Professional Programs', 'Educational Series', 'Career Development Workshops'],
    aum: '$378M',
    clientCount: 76,
    location: 'Atlanta, GA'
  },
  // Referral Network Specialists
  {
    id: 'fa052',
    name: 'Alexander Pemberton, CFP®, CPWA®',
    firm: 'Sterling Wealth Partners',
    experience: 28,
    specialties: ['Board Network Development', 'Professional Network Analysis', 'Ultra-Wealthy Referrals', 'Community Connection Mapping'],
    aum: '$1.2B',
    clientCount: 24,
    location: 'Greenwich, CT'
  },
  {
    id: 'fa053',
    name: 'Victoria Blackwood, CFP®, CFA',
    firm: 'Sterling Wealth Partners',
    experience: 22,
    specialties: ['Alumni Network Targeting', 'Industry Association Leverage', 'Executive Referral Programs', 'Professional Network Analysis'],
    aum: '$687M',
    clientCount: 41,
    location: 'Boston, MA'
  },
  {
    id: 'fa054',
    name: 'Harrison Sterling III, CFP®, ChFC®',
    firm: 'Sterling Wealth Partners',
    experience: 19,
    specialties: ['Technology Network Referrals', 'Business Partner Programs', 'Community Engagement', 'Family Network Development'],
    aum: '$534M',
    clientCount: 58,
    location: 'San Francisco, CA'
  },
  // Business Owner Specialists  
  {
    id: 'fa055',
    name: 'Margaret Whitmore, JD, CFP®, CPA',
    firm: 'Sterling Wealth Partners',
    experience: 25,
    specialties: ['M&A Advisory', 'IPO Advisory', 'Succession Planning & Exit Planning', 'Private Equity Services'],
    aum: '$1.8B',
    clientCount: 18,
    location: 'New York, NY'
  },
  {
    id: 'fa056',
    name: 'Charles Hamilton IV, CFP®, CFA, MBA',
    firm: 'Sterling Wealth Partners',
    experience: 20,
    specialties: ['Business Growth Strategy', 'Acquisition Financing', 'Commercial Banking', 'Executive Compensation'],
    aum: '$892M',
    clientCount: 32,
    location: 'Austin, TX'
  },
  {
    id: 'fa057',
    name: 'Catherine Davis, CFP®, ChFC®, CPA',
    firm: 'Sterling Wealth Partners',
    experience: 17,
    specialties: ['Cash Flow Management', 'Commercial Lending', 'Treasury Management', 'Small Business Services'],
    aum: '$456M',
    clientCount: 67,
    location: 'Nashville, TN'
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
  },

  // Education Planning-Focused Clients
  {
    id: 'cl052',
    name: 'Robert Chen',
    wealthSegment: 'UHNW',
    aum: '$12.5M',
    age: 48,
    occupation: 'Technology CEO',
    riskProfile: 'Moderate Aggressive',
    objectives: ['529 Planning', 'Private School Funding', 'Graduate School Planning', 'Multi-Generational Education Planning'],
    advisor: 'fa022',
    location: 'Chicago, IL'
  },
  {
    id: 'cl053',
    name: 'Maria Rodriguez',
    wealthSegment: 'HNW',
    aum: '$2.8M',
    age: 42,
    occupation: 'Investment Banking VP',
    riskProfile: 'Aggressive',
    objectives: ['529 Optimization', 'Education Tax Credits', 'Coverdell ESA Planning', 'Professional School Funding'],
    advisor: 'fa023',
    location: 'Milwaukee, WI'
  },
  {
    id: 'cl054',
    name: 'James Patterson',
    wealthSegment: 'HNW',
    aum: '$4.2M',
    age: 45,
    occupation: 'Orthopedic Surgeon',
    riskProfile: 'Moderate',
    objectives: ['Medical School Funding', '529 Planning', 'UTMA/UGMA Strategies', 'Student Loan Optimization'],
    advisor: 'fa022',
    location: 'Indianapolis, IN'
  },
  {
    id: 'cl055',
    name: 'Lisa Thompson',
    wealthSegment: 'AFFLUENT',
    aum: '$750K',
    age: 38,
    occupation: 'Corporate Lawyer',
    riskProfile: 'Moderate Conservative',
    objectives: ['529 Planning', 'Private School Funding', 'Education Tax Strategies', 'Law School Planning'],
    advisor: 'fa024',
    location: 'Detroit, MI'
  },
  {
    id: 'cl056',
    name: 'David Kim',
    wealthSegment: 'AFFLUENT',
    aum: '$890K',
    age: 41,
    occupation: 'Engineering Manager',
    riskProfile: 'Moderate',
    objectives: ['529 Contributions', 'STEM Education Funding', 'Coverdell Planning', 'Graduate School Preparation'],
    advisor: 'fa023',
    location: 'Chicago, IL'
  },
  {
    id: 'cl057',
    name: 'Sarah Johnson',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$275K',
    age: 35,
    occupation: 'Healthcare Administrator',
    riskProfile: 'Moderate Aggressive',
    objectives: ['529 Savings', 'Education Tax Credits', 'Student Loan Planning', 'Healthcare Education Funding'],
    advisor: 'fa024',
    location: 'Milwaukee, WI'
  },
  {
    id: 'cl058',
    name: 'Michael Brown',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$325K',
    age: 37,
    occupation: 'Small Business Owner',
    riskProfile: 'Moderate',
    objectives: ['529 Planning', 'UTMA/UGMA Accounts', 'Business Education Funding', 'Private School Strategies'],
    advisor: 'fa022',
    location: 'Indianapolis, IN'
  },
  {
    id: 'cl059',
    name: 'Jennifer Wilson',
    wealthSegment: 'EMERGING_WEALTH',
    aum: '$85K',
    age: 32,
    occupation: 'Teacher',
    riskProfile: 'Conservative',
    objectives: ['Education Savings Start', '529 Basics', 'Teacher Loan Forgiveness', 'Education Tax Benefits'],
    advisor: 'fa024',
    location: 'Detroit, MI'
  },

  // Security Backed Lending (SBL) Focused Clients
  {
    id: 'cl060',
    name: 'Alexander Mitchell',
    wealthSegment: 'UHNW',
    aum: '$18.5M',
    age: 52,
    occupation: 'Private Equity Managing Director',
    riskProfile: 'Aggressive',
    objectives: ['SBL Leverage Strategy', 'Tax Optimization', 'Liquidity Access', 'Portfolio Concentration Management'],
    advisor: 'fa025',
    location: 'Chicago, IL'
  },
  {
    id: 'cl061',
    name: 'Victoria Chen',
    wealthSegment: 'UHNW',
    aum: '$14.2M',
    age: 47,
    occupation: 'Technology Entrepreneur',
    riskProfile: 'Moderate Aggressive',
    objectives: ['SBL Expansion', 'Asset Diversification', 'Tax Liquidity Planning', 'Growth Capital Access'],
    advisor: 'fa026',
    location: 'Milwaukee, WI'
  },
  {
    id: 'cl062',
    name: 'Marcus Thompson',
    wealthSegment: 'HNW',
    aum: '$5.8M',
    age: 49,
    occupation: 'Investment Banking Managing Director',
    riskProfile: 'Aggressive',
    objectives: ['SBL Debt Consolidation', 'Rate Optimization', 'Credit Line Expansion', 'Liquidity Management'],
    advisor: 'fa025',
    location: 'Indianapolis, IN'
  },
  {
    id: 'cl063',
    name: 'Rachel Anderson',
    wealthSegment: 'HNW',
    aum: '$3.2M',
    age: 44,
    occupation: 'Real Estate Developer',
    riskProfile: 'Moderate Aggressive',
    objectives: ['SBL New Opportunity', 'Development Financing', 'Portfolio Leverage', 'Tax Strategy'],
    advisor: 'fa027',
    location: 'Detroit, MI'
  },
  {
    id: 'cl064',
    name: 'Jonathan Davis',
    wealthSegment: 'AFFLUENT',
    aum: '$950K',
    age: 41,
    occupation: 'Hedge Fund Portfolio Manager',
    riskProfile: 'Aggressive',
    objectives: ['SBL Maturity Management', 'Leverage Optimization', 'Rollover Strategy', 'Alternative Financing'],
    advisor: 'fa026',
    location: 'Chicago, IL'
  },
  {
    id: 'cl065',
    name: 'Catherine Williams',
    wealthSegment: 'AFFLUENT',
    aum: '$725K',
    age: 38,
    occupation: 'Corporate Finance Director',
    riskProfile: 'Moderate',
    objectives: ['SBL Capacity Analysis', 'Interest Rate Management', 'Debt Optimization', 'Liquidity Planning'],
    advisor: 'fa027',
    location: 'Milwaukee, WI'
  },
  {
    id: 'cl066',
    name: 'Steven Johnson',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$425K',
    age: 36,
    occupation: 'Investment Advisor',
    riskProfile: 'Moderate Aggressive',
    objectives: ['SBL Introduction', 'Leverage Strategy', 'Tax Efficiency', 'Portfolio Enhancement'],
    advisor: 'fa025',
    location: 'Indianapolis, IN'
  },
  {
    id: 'cl067',
    name: 'Michelle Turner',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$385K',
    age: 34,
    occupation: 'Private Wealth Associate',
    riskProfile: 'Moderate',
    objectives: ['SBL Education', 'Credit Line Establishment', 'Risk Management', 'Opportunity Assessment'],
    advisor: 'fa027',
    location: 'Detroit, MI'
  },

  // Financial Planning-Focused Clients
  {
    id: 'cl068',
    name: 'Andrew Richardson',
    wealthSegment: 'UHNW',
    aum: '$16.8M',
    age: 55,
    occupation: 'Investment Management CEO',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Comprehensive Financial Planning', 'Goal-Based Investing', 'Legacy Planning', 'Tax Optimization'],
    advisor: 'fa028',
    location: 'Chicago, IL'
  },
  {
    id: 'cl069',
    name: 'Sophia Martinez',
    wealthSegment: 'HNW',
    aum: '$3.7M',
    age: 48,
    occupation: 'Corporate Executive',
    riskProfile: 'Moderate',
    objectives: ['Financial Plan Creation', 'Retirement Planning', 'Risk Profile Assessment', 'Investment Strategy'],
    advisor: 'fa029',
    location: 'Milwaukee, WI'
  },
  {
    id: 'cl070',
    name: 'William Foster',
    wealthSegment: 'HNW',
    aum: '$2.9M',
    age: 51,
    occupation: 'Medical Practice Owner',
    riskProfile: 'Moderate Conservative',
    objectives: ['Financial Goal Setting', 'Practice Succession Planning', 'Investment Diversification', 'Tax Planning'],
    advisor: 'fa030',
    location: 'Indianapolis, IN'
  },
  {
    id: 'cl071',
    name: 'Isabella Chen',
    wealthSegment: 'AFFLUENT',
    aum: '$825K',
    age: 43,
    occupation: 'Technology Director',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Financial Planning Process', 'Goal Achievement Strategy', 'Risk Management', 'Investment Planning'],
    advisor: 'fa028',
    location: 'Detroit, MI'
  },
  {
    id: 'cl072',
    name: 'Charles Wilson',
    wealthSegment: 'AFFLUENT',
    aum: '$695K',
    age: 46,
    occupation: 'Engineering Manager',
    riskProfile: 'Moderate',
    objectives: ['Comprehensive Planning', 'Time Horizon Assessment', 'Investment Allocation', 'Financial Goals'],
    advisor: 'fa029',
    location: 'Chicago, IL'
  },
  {
    id: 'cl073',
    name: 'Olivia Johnson',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$395K',
    age: 39,
    occupation: 'Marketing Director',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Financial Plan Development', 'Career Planning Integration', 'Investment Strategy', 'Goal Prioritization'],
    advisor: 'fa030',
    location: 'Milwaukee, WI'
  },
  {
    id: 'cl074',
    name: 'Benjamin Brown',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$285K',
    age: 35,
    occupation: 'Financial Analyst',
    riskProfile: 'Moderate',
    objectives: ['Financial Planning Basics', 'Goal Setting Framework', 'Risk Assessment', 'Investment Foundation'],
    advisor: 'fa028',
    location: 'Indianapolis, IN'
  },
  {
    id: 'cl075',
    name: 'Emma Davis',
    wealthSegment: 'EMERGING_WEALTH',
    aum: '$95K',
    age: 31,
    occupation: 'Healthcare Professional',
    riskProfile: 'Conservative',
    objectives: ['Financial Planning Introduction', 'Goal Establishment', 'Budget Integration', 'Investment Start'],
    advisor: 'fa030',
    location: 'Detroit, MI'
  },

  // Retirement Planning-Focused Clients
  {
    id: 'cl076',
    name: 'Nicholas Thompson',
    wealthSegment: 'UHNW',
    aum: '$22.1M',
    age: 58,
    occupation: 'Private Equity Founder',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Corporate Retirement Plans', 'Executive Benefits', 'Succession Planning', 'Employee Retirement Solutions'],
    advisor: 'fa031',
    location: 'Chicago, IL'
  },
  {
    id: 'cl077',
    name: 'Grace Rodriguez',
    wealthSegment: 'HNW',
    aum: '$4.8M',
    age: 52,
    occupation: 'Manufacturing CEO',
    riskProfile: 'Moderate',
    objectives: ['401k Plan Administration', 'Employee Benefits', 'Fiduciary Services', 'Plan Compliance'],
    advisor: 'fa032',
    location: 'Milwaukee, WI'
  },
  {
    id: 'cl078',
    name: 'Daniel Anderson',
    wealthSegment: 'HNW',
    aum: '$3.4M',
    age: 49,
    occupation: 'Healthcare System COO',
    riskProfile: 'Moderate Conservative',
    objectives: ['Retirement Plan Design', '403b Administration', 'Employee Education', 'Compliance Management'],
    advisor: 'fa033',
    location: 'Indianapolis, IN'
  },
  {
    id: 'cl079',
    name: 'Samantha Mitchell',
    wealthSegment: 'AFFLUENT',
    aum: '$925K',
    age: 46,
    occupation: 'Law Firm Partner',
    riskProfile: 'Moderate',
    objectives: ['Professional Practice Plans', 'Partner Retirement Benefits', 'Plan Administration', 'Fiduciary Oversight'],
    advisor: 'fa031',
    location: 'Detroit, MI'
  },
  {
    id: 'cl080',
    name: 'Ryan Garcia',
    wealthSegment: 'AFFLUENT',
    aum: '$785K',
    age: 44,
    occupation: 'Construction Company Owner',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Small Business 401k', 'Employee Retention', 'State Compliance', 'Cost Optimization'],
    advisor: 'fa032',
    location: 'Chicago, IL'
  },
  {
    id: 'cl081',
    name: 'Lauren White',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$465K',
    age: 41,
    occupation: 'Restaurant Chain Owner',
    riskProfile: 'Moderate',
    objectives: ['Multi-Location Plans', 'Employee Benefits', 'Compliance Solutions', 'Cost Management'],
    advisor: 'fa033',
    location: 'Milwaukee, WI'
  },
  {
    id: 'cl082',
    name: 'Kevin Martinez',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$385K',
    age: 38,
    occupation: 'Technology Startup Founder',
    riskProfile: 'Aggressive',
    objectives: ['Startup Retirement Plans', 'Employee Stock Options', 'Growth Company Benefits', 'Talent Retention'],
    advisor: 'fa031',
    location: 'Indianapolis, IN'
  },
  {
    id: 'cl083',
    name: 'Jessica Lee',
    wealthSegment: 'EMERGING_WEALTH',
    aum: '$125K',
    age: 33,
    occupation: 'HR Director',
    riskProfile: 'Conservative',
    objectives: ['HR Benefits Planning', 'Employee Education Programs', 'Compliance Support', 'Benefit Administration'],
    advisor: 'fa033',
    location: 'Detroit, MI'
  },
  // Estate Planning Clients
  {
    id: 'cl084',
    name: 'Margaret Wellington',
    wealthSegment: 'UHNW',
    aum: '$18.5M',
    age: 68,
    occupation: 'Retired Business Owner',
    riskProfile: 'Conservative',
    objectives: ['Estate Tax Mitigation', 'Generation-Skipping Planning', 'Charitable Legacy', 'Family Governance'],
    advisor: 'fa034',
    location: 'Greenwich, CT'
  },
  {
    id: 'cl085',
    name: 'Robert & Catherine Mitchell',
    wealthSegment: 'HNW',
    aum: '$4.2M',
    age: 62,
    occupation: 'Professional Couple',
    riskProfile: 'Moderate Conservative',
    objectives: ['Estate Planning', 'Trust Structures', 'Business Succession', 'Retirement Integration'],
    advisor: 'fa034',
    location: 'Scottsdale, AZ'
  },
  {
    id: 'cl086',
    name: 'Thomas Harrison III',
    wealthSegment: 'HNW',
    aum: '$6.8M',
    age: 55,
    occupation: 'Investment Banker',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Estate Liquidity', 'Trust Optimization', 'Charitable Planning', 'Multi-generational Wealth'],
    advisor: 'fa035',
    location: 'Manhattan, NY'
  },
  {
    id: 'cl087',
    name: 'David & Susan Chen',
    wealthSegment: 'AFFLUENT',
    aum: '$850K',
    age: 47,
    occupation: 'Medical Professionals',
    riskProfile: 'Moderate',
    objectives: ['Estate Planning Basics', 'Guardian Protection', 'Professional Practice Protection', 'Education Funding'],
    advisor: 'fa035',
    location: 'Palo Alto, CA'
  },
  {
    id: 'cl088',
    name: 'Jennifer & Mark Rodriguez',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$320K',
    age: 42,
    occupation: 'Corporate Executives',
    riskProfile: 'Moderate',
    objectives: ['Basic Estate Planning', 'Minor Protection', 'Life Insurance', 'Will & Testament'],
    advisor: 'fa036',
    location: 'Austin, TX'
  },
  // Trust Planning Clients
  {
    id: 'cl089',
    name: 'Eleanor Vanderbilt',
    wealthSegment: 'UHNW',
    aum: '$42M',
    age: 74,
    occupation: 'Trust Fund Beneficiary',
    riskProfile: 'Conservative',
    objectives: ['Dynasty Trusts', 'Generation-Skipping', 'Charitable Remainder Trusts', 'Family Governance'],
    advisor: 'fa037',
    location: 'Newport, RI'
  },
  {
    id: 'cl090',
    name: 'William & Elizabeth Ashford',
    wealthSegment: 'UHNW',
    aum: '$23M',
    age: 59,
    occupation: 'Technology Entrepreneurs',
    riskProfile: 'Moderate Conservative',
    objectives: ['Irrevocable Trusts', 'GRAT Strategies', 'Life Insurance Trusts', 'Charitable Lead Trusts'],
    advisor: 'fa037',
    location: 'Seattle, WA'
  },
  {
    id: 'cl091',
    name: 'Charles Montgomery',
    wealthSegment: 'HNW',
    aum: '$7.5M',
    age: 64,
    occupation: 'Real Estate Developer',
    riskProfile: 'Conservative',
    objectives: ['Revocable Trusts', 'Credit Shelter Trusts', 'Marital Trusts', 'Asset Protection'],
    advisor: 'fa038',
    location: 'Miami, FL'
  },
  {
    id: 'cl092',
    name: 'Patricia & George Hamilton',
    wealthSegment: 'HNW',
    aum: '$3.8M',
    age: 58,
    occupation: 'Healthcare Executives',
    riskProfile: 'Moderate',
    objectives: ['Trust Planning', 'Testamentary Trusts', 'Educational Trusts', 'Professional Practice Trusts'],
    advisor: 'fa038',
    location: 'Boston, MA'
  },
  {
    id: 'cl093',
    name: 'Richard & Laura Thompson',
    wealthSegment: 'AFFLUENT',
    aum: '$920K',
    age: 51,
    occupation: 'Professional Services',
    riskProfile: 'Moderate',
    objectives: ['Living Trusts', 'Minor Protection Trusts', 'QTIP Trusts', 'Family Protection'],
    advisor: 'fa039',
    location: 'Denver, CO'
  },
  // Tax Planning Clients
  {
    id: 'cl094',
    name: 'Alexander Carnegie',
    wealthSegment: 'UHNW',
    aum: '$35M',
    age: 52,
    occupation: 'Hedge Fund Manager',
    riskProfile: 'Aggressive',
    objectives: ['Tax Loss Harvesting', 'Alternative Minimum Tax', 'Charitable Tax Planning', 'Portfolio Tax Optimization'],
    advisor: 'fa040',
    location: 'Greenwich, CT'
  },
  {
    id: 'cl095',
    name: 'Victoria & James Sterling',
    wealthSegment: 'HNW',
    aum: '$8.2M',
    age: 56,
    occupation: 'Business Owners',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Roth Conversions', 'Business Tax Integration', 'Estate Tax Minimization', 'Multi-year Tax Planning'],
    advisor: 'fa040',
    location: 'Dallas, TX'
  },
  {
    id: 'cl096',
    name: 'Michael & Sarah Goldman',
    wealthSegment: 'HNW',
    aum: '$5.4M',
    age: 49,
    occupation: 'Investment Professionals',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Tax-Aware Portfolio Management', 'Municipal Bonds', 'Wash Sale Prevention', 'Tax Lot Optimization'],
    advisor: 'fa041',
    location: 'San Francisco, CA'
  },
  {
    id: 'cl097',
    name: 'Christopher & Amanda Davis',
    wealthSegment: 'AFFLUENT',
    aum: '$750K',
    age: 44,
    occupation: 'Technology Workers',
    riskProfile: 'Moderate',
    objectives: ['Tax Planning Strategies', 'Roth Planning', 'Asset Location', 'Tax Software Solutions'],
    advisor: 'fa041',
    location: 'Portland, OR'
  },
  {
    id: 'cl098',
    name: 'Daniel & Rebecca Martinez',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$285K',
    age: 38,
    occupation: 'Government Employees',
    riskProfile: 'Conservative',
    objectives: ['Basic Tax Planning', 'Retirement Tax Planning', 'Education Tax Credits', 'Personalized Tax Management'],
    advisor: 'fa042',
    location: 'Washington, DC'
  },
  // Client 360 Clients
  {
    id: 'cl099',
    name: 'Jonathan Blackstone',
    wealthSegment: 'UHNW',
    aum: '$28M',
    age: 61,
    occupation: 'Private Equity Executive',
    riskProfile: 'Aggressive',
    objectives: ['Competitive Analysis', 'Market Share Protection', 'Alternative Investments', 'External Account Monitoring'],
    advisor: 'fa043',
    location: 'New York, NY'
  },
  {
    id: 'cl100',
    name: 'Caroline & Robert Whitman',
    wealthSegment: 'HNW',
    aum: '$6.1M',
    age: 54,
    occupation: 'Investment Advisors',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Account Monitoring', 'Relationship Intelligence', 'Investment Tracking', 'Competitive Positioning'],
    advisor: 'fa043',
    location: 'Chicago, IL'
  },
  {
    id: 'cl101',
    name: 'Steven & Marie Johnson',
    wealthSegment: 'AFFLUENT',
    aum: '$680K',
    age: 46,
    occupation: 'Corporate Management',
    riskProfile: 'Moderate',
    objectives: ['External Account Analysis', 'Banking Relationship Monitoring', 'Investment Account Tracking', 'Financial Profile Updates'],
    advisor: 'fa044',
    location: 'Atlanta, GA'
  },
  {
    id: 'cl102',
    name: 'Kevin & Lisa Anderson',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$195K',
    age: 35,
    occupation: 'Young Professionals',
    riskProfile: 'Moderate',
    objectives: ['Account Monitoring', 'Investment Tracking', 'Relationship Management', 'Profile Analysis'],
    advisor: 'fa044',
    location: 'Phoenix, AZ'
  },
  {
    id: 'cl103',
    name: 'Brian & Nicole Taylor',
    wealthSegment: 'EMERGING_WEALTH',
    aum: '$85K',
    age: 29,
    occupation: 'Startup Employees',
    riskProfile: 'Aggressive',
    objectives: ['Market Share Monitoring', 'External Investment Tracking', 'Competitive Analysis', 'Account Intelligence'],
    advisor: 'fa045',
    location: 'Austin, TX'
  },
  // Cash Management Clients
  {
    id: 'cl104',
    name: 'Harrison Blackstone Jr.',
    wealthSegment: 'UHNW',
    aum: '$32M',
    age: 58,
    occupation: 'Investment Fund Manager',
    riskProfile: 'Aggressive',
    objectives: ['Cash Flow Optimization', 'Liquidity Management', 'Distribution Planning', 'Strategic Cash Allocation'],
    advisor: 'fa046',
    location: 'New York, NY'
  },
  {
    id: 'cl105',
    name: 'Victoria & James Sterling II',
    wealthSegment: 'HNW',
    aum: '$9.4M',
    age: 63,
    occupation: 'Retired Business Owners',
    riskProfile: 'Conservative',
    objectives: ['Cash Distribution Management', 'Withdrawal Planning', 'Income Generation', 'Liquidity Preservation'],
    advisor: 'fa046',
    location: 'Greenwich, CT'
  },
  {
    id: 'cl106',
    name: 'Michael & Sarah Thompson',
    wealthSegment: 'HNW',
    aum: '$4.8M',
    age: 54,
    occupation: 'Healthcare Executives',
    riskProfile: 'Moderate Conservative',
    objectives: ['Cash Balance Optimization', 'Distribution Timing', 'Emergency Liquidity', 'Cash Flow Planning'],
    advisor: 'fa047',
    location: 'Boston, MA'
  },
  {
    id: 'cl107',
    name: 'Christopher & Amanda Wilson',
    wealthSegment: 'AFFLUENT',
    aum: '$680K',
    age: 47,
    occupation: 'Technology Professionals',
    riskProfile: 'Moderate',
    objectives: ['Cash Management', 'Distribution Optimization', 'Liquidity Planning', 'Investment Cash Flow'],
    advisor: 'fa047',
    location: 'Seattle, WA'
  },
  {
    id: 'cl108',
    name: 'Daniel & Rebecca Martinez',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$295K',
    age: 39,
    occupation: 'Government Employees',
    riskProfile: 'Conservative',
    objectives: ['Basic Cash Planning', 'Distribution Tracking', 'Withdrawal Management', 'Cash Reserve Building'],
    advisor: 'fa048',
    location: 'Washington, DC'
  },
  // Event Planning Clients
  {
    id: 'cl109',
    name: 'Eleanor Vanderbilt II',
    wealthSegment: 'UHNW',
    aum: '$45M',
    age: 69,
    occupation: 'Philanthropist',
    riskProfile: 'Conservative',
    objectives: ['Educational Seminars', 'Charitable Events', 'Networking Opportunities', 'Legacy Planning Workshops'],
    advisor: 'fa049',
    location: 'Newport, RI'
  },
  {
    id: 'cl110',
    name: 'William & Elizabeth Carnegie',
    wealthSegment: 'UHNW',
    aum: '$26M',
    age: 61,
    occupation: 'Technology Entrepreneurs',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Investment Conferences', 'Technology Seminars', 'Entrepreneurship Events', 'Innovation Workshops'],
    advisor: 'fa049',
    location: 'San Francisco, CA'
  },
  {
    id: 'cl111',
    name: 'Charles & Margaret Whitmore',
    wealthSegment: 'HNW',
    aum: '$7.2M',
    age: 56,
    occupation: 'Investment Professionals',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Market Analysis Events', 'Investment Webinars', 'Professional Networking', 'Educational Series'],
    advisor: 'fa050',
    location: 'Chicago, IL'
  },
  {
    id: 'cl112',
    name: 'Patricia & George Hamilton Jr.',
    wealthSegment: 'HNW',
    aum: '$3.9M',
    age: 52,
    occupation: 'Medical Professionals',
    riskProfile: 'Moderate',
    objectives: ['Healthcare Seminars', 'Retirement Workshops', 'Tax Planning Events', 'Professional Development'],
    advisor: 'fa050',
    location: 'Dallas, TX'
  },
  {
    id: 'cl113',
    name: 'Richard & Laura Anderson',
    wealthSegment: 'AFFLUENT',
    aum: '$825K',
    age: 48,
    occupation: 'Corporate Executives',
    riskProfile: 'Moderate',
    objectives: ['Executive Seminars', 'Leadership Workshops', 'Financial Planning Events', 'Networking Opportunities'],
    advisor: 'fa051',
    location: 'Atlanta, GA'
  },
  {
    id: 'cl114',
    name: 'Steven & Marie Johnson Jr.',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$245K',
    age: 41,
    occupation: 'Young Professionals',
    riskProfile: 'Moderate',
    objectives: ['Young Professional Events', 'Educational Webinars', 'Career Development Workshops', 'Investment Seminars'],
    advisor: 'fa051',
    location: 'Denver, CO'
  },
  // Referrals Network Clients
  {
    id: 'cl115',
    name: 'Margaret Vanderbilt III',
    wealthSegment: 'UHNW',
    aum: '$48M',
    age: 72,
    occupation: 'Board Chair & Philanthropist',
    riskProfile: 'Conservative',
    objectives: ['Board Network Referrals', 'Professional Network Analysis', 'Community Connection Mapping', 'Alumni Network Targeting'],
    advisor: 'fa052',
    location: 'Greenwich, CT'
  },
  {
    id: 'cl116',
    name: 'Alexander Carnegie II',
    wealthSegment: 'UHNW',
    aum: '$35M',
    age: 67,
    occupation: 'Investment Fund Chairman',
    riskProfile: 'Moderate Conservative',
    objectives: ['Industry Association Leverage', 'Professional Network Analysis', 'Business Partner Programs', 'Board Connection Strategy'],
    advisor: 'fa052',
    location: 'New York, NY'
  },
  {
    id: 'cl117',
    name: 'Victoria & James Wellington',
    wealthSegment: 'HNW',
    aum: '$8.5M',
    age: 59,
    occupation: 'Corporate Executives',
    riskProfile: 'Moderate',
    objectives: ['Alumni Network Targeting', 'Professional Network Analysis', 'Community Connection Mapping', 'Neighborhood Network Development'],
    advisor: 'fa053',
    location: 'Boston, MA'
  },
  {
    id: 'cl118',
    name: 'Harrison & Elizabeth Montgomery',
    wealthSegment: 'HNW',
    aum: '$5.2M',
    age: 55,
    occupation: 'Healthcare Executives',
    riskProfile: 'Moderate',
    objectives: ['Professional Network Analysis', 'Industry Association Leverage', 'Community Connection Mapping', 'Family Network Opportunities'],
    advisor: 'fa053',
    location: 'Chicago, IL'
  },
  {
    id: 'cl119',
    name: 'Christopher & Amanda Sterling',
    wealthSegment: 'AFFLUENT',
    aum: '$750K',
    age: 48,
    occupation: 'Technology Executives',
    riskProfile: 'Moderate Aggressive',
    objectives: ['Alumni Network Targeting', 'Professional Network Analysis', 'Business Partner Programs', 'Industry Association Leverage'],
    advisor: 'fa054',
    location: 'San Francisco, CA'
  },
  {
    id: 'cl120',
    name: 'Daniel & Rebecca Hamilton',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$385K',
    age: 43,
    occupation: 'Community Leaders',
    riskProfile: 'Moderate',
    objectives: ['Community Connection Mapping', 'Neighborhood Network Development', 'Family Network Opportunities', 'Professional Network Analysis'],
    advisor: 'fa054',
    location: 'Atlanta, GA'
  },
  // Business Owner Clients
  {
    id: 'cl121',
    name: 'William Blackstone III',
    wealthSegment: 'UHNW',
    aum: '$62M',
    age: 58,
    occupation: 'Private Equity Founder',
    riskProfile: 'Aggressive',
    objectives: ['M&A Advisory', 'IPO Advisory', 'Succession Planning & Exit Planning', 'Executive Compensation'],
    advisor: 'fa055',
    location: 'New York, NY'
  },
  {
    id: 'cl122',
    name: 'Eleanor & Robert Thornton',
    wealthSegment: 'UHNW',
    aum: '$41M',
    age: 63,
    occupation: 'Manufacturing Business Owners',
    riskProfile: 'Moderate Conservative',
    objectives: ['Business Growth Strategy', 'Succession Planning & Exit Planning', 'Commercial Banking', 'Real Estate Finance'],
    advisor: 'fa055',
    location: 'Detroit, MI'
  },
  {
    id: 'cl123',
    name: 'Charles & Patricia Whitmore II',
    wealthSegment: 'HNW',
    aum: '$12.8M',
    age: 56,
    occupation: 'Technology Company Owners',
    riskProfile: 'Aggressive',
    objectives: ['Potential Acceleration in Revenue', 'Acquisition Financing', 'IPO Advisory', 'Executive Compensation'],
    advisor: 'fa056',
    location: 'Austin, TX'
  },
  {
    id: 'cl124',
    name: 'Michael & Sarah Davidson',
    wealthSegment: 'HNW',
    aum: '$7.4M',
    age: 52,
    occupation: 'Healthcare Practice Owners',
    riskProfile: 'Moderate',
    objectives: ['Cash Flow Management', 'Commercial Lending', 'Real Estate Finance', 'Succession Planning & Exit Planning'],
    advisor: 'fa056',
    location: 'Phoenix, AZ'
  },
  {
    id: 'cl125',
    name: 'Richard & Laura Thompson II',
    wealthSegment: 'AFFLUENT',
    aum: '$980K',
    age: 49,
    occupation: 'Restaurant Chain Owners',
    riskProfile: 'Moderate',
    objectives: ['Business Growth Strategy', 'Commercial Lending', 'Facilities Management', 'Treasury Management'],
    advisor: 'fa057',
    location: 'Nashville, TN'
  },
  {
    id: 'cl126',
    name: 'Steven & Jennifer Martinez II',
    wealthSegment: 'MASS_AFFLUENT',
    aum: '$425K',
    age: 44,
    occupation: 'Franchise Owners',
    riskProfile: 'Moderate',
    objectives: ['Potential Acceleration in Revenue', 'Commercial Banking', 'Cash Flow Management', 'Human Resources Finance'],
    advisor: 'fa057',
    location: 'Dallas, TX'
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

// Education Planning Insight Category
export const EDUCATION_PLANNING_CATEGORY = {
  grouping: 'Front Office',
  name: 'Education Planning',
  description: 'Give Advisor a view into Client\'s Education Planning',
  displayLabel: 'Give Advisor a view into Client\'s Education Planning'
};

// Education Planning Insights
export const EDUCATION_PLANNING_INSIGHTS = [
  {
    id: 'ep001',
    name: '529',
    purpose: '529',
    category: 'Education Planning'
  },
  {
    id: 'ep002', 
    name: 'Coverdell Education Savings Accounts',
    purpose: 'K-12 and college funding with investment flexibility',
    category: 'Education Planning'
  },
  {
    id: 'ep003',
    name: 'UTMA/UGMA Custodial Accounts',
    purpose: 'Flexible education funding with tax considerations',
    category: 'Education Planning'
  },
  {
    id: 'ep004',
    name: 'Education Tax Credits & Deductions',
    purpose: 'American Opportunity and Lifetime Learning Credit optimization',
    category: 'Education Planning'
  },
  {
    id: 'ep005',
    name: 'Student Loan Planning & Optimization',
    purpose: 'Existing debt management and future borrowing strategies',
    category: 'Education Planning'
  },
  {
    id: 'ep006',
    name: 'Private School Funding Strategies',
    purpose: 'K-12 education funding with grandparent involvement',
    category: 'Education Planning'
  },
  {
    id: 'ep007',
    name: 'Graduate School & Professional Funding',
    purpose: 'Medical, law, MBA, and professional program financing',
    category: 'Education Planning'
  }
];

// Business Benefits for Education Planning
export const EDUCATION_PLANNING_BUSINESS_BENEFITS = [
  'Additional annual impact through education planning optimization',
  'Average college cost savings per family through strategic planning',
  'Average annual education savings contributions via tax-advantaged accounts',
  'Improvement in education funding efficiency through multi-generational strategies'
];

// Security Backed Lending (SBL) Insight Category
export const SBL_CATEGORY = {
  grouping: 'Front Office',
  name: 'Security Backed Lending (SBL)',
  description: 'Security Backed Lending',
  displayLabel: 'Securities Backed Lending'
};

// SBL Insights
export const SBL_INSIGHTS = [
  {
    id: 'sbl001',
    name: 'SBL Maturity date approaching',
    purpose: 'SBL Maturity date approaching',
    category: 'Security Backed Lending (SBL)'
  },
  {
    id: 'sbl002',
    name: 'SBL Expansion Opportunity',
    purpose: 'SBL Expansion Opportunity',
    category: 'Security Backed Lending (SBL)'
  },
  {
    id: 'sbl003',
    name: 'SBL New Opportunity',
    purpose: 'SBL New Opportunity',
    category: 'Security Backed Lending (SBL)'
  },
  {
    id: 'sbl004',
    name: 'SBL Rollover into variable',
    purpose: 'SBL Rollover into variable',
    category: 'Security Backed Lending (SBL)'
  },
  {
    id: 'sbl005',
    name: 'SBL Debt consolidation',
    purpose: 'SBL Debt consolidation',
    category: 'Security Backed Lending (SBL)'
  }
];

// Business Benefits for SBL
export const SBL_BUSINESS_BENEFITS = [
  'Annual savings impact through SBL optimization',
  'Average annual interest savings per client through rate optimization',
  'Average additional borrowing capacity through expansion strategies',
  'Improvement in liquidity access efficiency through strategic SBL management',
  'Proactive SBL maturity monitoring and renewal optimization',
  'Strategic SBL capacity expansion based on portfolio appreciation',
  'New opportunity identification for tax liquidity and investments',
  'Variable rate management with refinancing alternatives',
  'Comprehensive debt consolidation analysis with rate savings',
  'Emergency liquidity planning with pre-approved facilities'
];

// Financial Planning Insight Category
export const FINANCIAL_PLANNING_CATEGORY = {
  grouping: 'Front Office',
  name: 'Financial Planning',
  description: 'These Insights help Financial Advisors to work with the Client or Prospect to create a Financial Plan with goals, investment risk profile and time horizon',
  displayLabel: 'These Insights help Financial Advisors to work with the Client or Prospect to create a Financial Plan with goals, investment risk profile and time horizon'
};

// Financial Planning Insights
export const FINANCIAL_PLANNING_INSIGHTS = [
  {
    id: 'fp001',
    name: 'Financial Plan',
    purpose: 'Goal Setting',
    category: 'Financial Planning'
  }
];

// Business Benefits for Financial Planning
export const FINANCIAL_PLANNING_BUSINESS_BENEFITS = [
  'Comprehensive goal-based planning approach for client financial success',
  'Enhanced client engagement through structured financial planning process',
  'Increased client retention through ongoing plan monitoring and updates',
  'Cross-selling opportunities through holistic financial needs analysis',
  'Improved client outcomes through risk-appropriate investment strategies'
];

// Retirement Planning Insight Category
export const RETIREMENT_PLANNING_CATEGORY = {
  grouping: 'Front Office',
  name: 'Retirement Planning',
  description: 'These Insights help Financial Advisor identify insights related to retirement planning needs of clients. The insights help with identifying the need of a Retirement plan, Low score from their party on current retirement plans, Plan administration and State mandated plans for employees',
  displayLabel: 'Retirement Planning'
};

// Retirement Planning Insights
export const RETIREMENT_PLANNING_INSIGHTS = [
  {
    id: 'rp001',
    name: 'Retirement Plan Administration',
    purpose: 'Retirement Plan Administration',
    category: 'Retirement Planning'
  },
  {
    id: 'rp002',
    name: 'Retirement Plan Low Score',
    purpose: 'Retirement Plan Low Score',
    category: 'Retirement Planning'
  },
  {
    id: 'rp003',
    name: 'Plan Design & Implementation',
    purpose: 'Plan design for 401(k), 403(b), profit sharing Plan',
    category: 'Retirement Planning'
  },
  {
    id: 'rp004',
    name: 'Plan Administration',
    purpose: 'Recordkeeping, compliance, reporting',
    category: 'Retirement Planning'
  },
  {
    id: 'rp005',
    name: 'Fiduciary Services',
    purpose: '3(21) and 3(38) fiduciary oversight',
    category: 'Retirement Planning'
  },
  {
    id: 'rp006',
    name: 'State Mandate Compliance',
    purpose: 'California, Oregon, Illinois Mandated requirements',
    category: 'Retirement Planning'
  },
  {
    id: 'rp007',
    name: 'Employee Education',
    purpose: 'Financial wellness, retirement readiness',
    category: 'Retirement Planning'
  },
  {
    id: 'rp008',
    name: 'Cost Analysis',
    purpose: 'Fee benchmarking and optimization',
    category: 'Retirement Planning'
  },
  {
    id: 'rp009',
    name: 'Compliance Management',
    purpose: 'Testing, audits, corrections',
    category: 'Retirement Planning'
  },
  {
    id: 'rp010',
    name: 'Merger Integration',
    purpose: 'Plan consolidation and transition services',
    category: 'Retirement Planning'
  }
];

// Business Benefits for Retirement Planning
export const RETIREMENT_PLANNING_BUSINESS_BENEFITS = [
  'Proactive retirement plan need identification and client outreach',
  'Enhanced plan administration services and business development opportunities',
  'Improved client retention through comprehensive retirement planning solutions',
  'Cross-selling opportunities for corporate retirement plan services',
  'Increased revenue through plan administration and fiduciary services'
];

// Estate Planning Insight Category
export const ESTATE_PLANNING_CATEGORY = {
  grouping: 'Front Office',
  name: 'Estate Planning',
  description: 'These Insights help Financial Advisor to identify insights around Estate planning needs for clients',
  displayLabel: 'These Insights help Financial Advisor to identify insights around Estate planning needs for clients'
};

// Estate Planning Insights
export const ESTATE_PLANNING_INSIGHTS = [
  {
    id: 'esp001',
    name: 'Estate Plan',
    purpose: 'Estate Plan',
    category: 'Estate Planning'
  },
  {
    id: 'esp002',
    name: 'Estate Plan Need Assessment',
    purpose: 'Basic estate planning need identification',
    category: 'Estate Planning'
  },
  {
    id: 'esp003',
    name: 'Trust Structure Optimization',
    purpose: 'Revocable and irrevocable trust strategies',
    category: 'Estate Planning'
  },
  {
    id: 'esp004',
    name: 'Generation-Skipping Tax Planning',
    purpose: 'Dynasty trusts and GST optimization',
    category: 'Estate Planning'
  },
  {
    id: 'esp005',
    name: 'Estate Tax Mitigation Strategy',
    purpose: 'GRATs, QPRTs, and advanced techniques',
    category: 'Estate Planning'
  },
  {
    id: 'esp006',
    name: 'Estate Liquidity Analysis',
    purpose: 'Life insurance and asset restructuring',
    category: 'Estate Planning'
  },
  {
    id: 'esp007',
    name: 'Charitable Legacy Planning',
    purpose: 'CRTs, CLTs, donor-advised funds, foundations',
    category: 'Estate Planning'
  },
  {
    id: 'esp008',
    name: 'Business Succession Integration',
    purpose: 'Buy-sell agreements, family partnerships',
    category: 'Estate Planning'
  },
  {
    id: 'esp009',
    name: 'Guardianship & Minor Protection',
    purpose: 'Minor protection trusts, educational funding',
    category: 'Estate Planning'
  },
  {
    id: 'esp010',
    name: 'Retirement Estate Integration',
    purpose: 'IRA/401(k) beneficiary optimization',
    category: 'Estate Planning'
  },
  {
    id: 'esp011',
    name: 'Multi-generational Wealth Strategy',
    purpose: 'Family governance and perpetual trusts',
    category: 'Estate Planning'
  }
];

// Business Benefits for Estate Planning
export const ESTATE_PLANNING_BUSINESS_BENEFITS = [
  'Proactive estate planning need identification and client outreach',
  'Enhanced wealth transfer and legacy planning advisory services',
  'Improved client retention through comprehensive estate planning solutions',
  'Cross-selling opportunities for trust services and tax planning products',
  'Deeper client relationships through multigenerational planning'
];

// Trust Planning Insight Category
export const TRUST_PLANNING_CATEGORY = {
  grouping: 'Front Office',
  name: 'Trust Planning',
  description: 'These Insights help Financial Advisor to help with Trust Planning needs. These Insights are related to various types of Trusts like Revocable trust, Irrevocable, Life Insurance Trust, Charitable Trust, Residual Trust, Qualified domestic trust',
  displayLabel: 'These Insights help Financial Advisor to help with Trust Planning needs'
};

// Trust Planning Insights
export const TRUST_PLANNING_INSIGHTS = [
  {
    id: 'tp001',
    name: 'Trust Plan',
    purpose: 'Trust Planning',
    category: 'Trust Planning'
  },
  {
    id: 'tp002',
    name: 'Revocable Trust',
    purpose: 'Trust Plan',
    category: 'Trust Planning'
  },
  {
    id: 'tp003',
    name: 'Irrevocable Trust',
    purpose: 'Irrevocable Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp004',
    name: 'Testamentary Trust',
    purpose: 'Testamentary Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp005',
    name: 'Grantor Retained Annuity Trust',
    purpose: 'Grantor Retained Annuity Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp006',
    name: 'Living/Intervivos Trust',
    purpose: 'Living/Intervivos Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp007',
    name: 'Generation Skipping Trust',
    purpose: 'Generation skipping trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp008',
    name: 'Marital Trust',
    purpose: 'Marital Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp009',
    name: 'Life Insurance Trust',
    purpose: 'Life Insurance Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp010',
    name: 'Charitable Remainder Unit Trust',
    purpose: 'Charitable Remainder Unit Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp011',
    name: 'Credit Shelter Trust',
    purpose: 'Credit Shelter Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp012',
    name: 'Residual Trust',
    purpose: 'Residual Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp013',
    name: 'Charitable Lead Annuity Trust',
    purpose: 'Charitable lead Annuity Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp014',
    name: 'Separate Property Trust',
    purpose: 'Separate property Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp015',
    name: 'Qualified Terminable Interest',
    purpose: 'Qualified Terminable Interest',
    category: 'Trust Planning'
  },
  {
    id: 'tp016',
    name: 'Charitable Lead Unit Trust',
    purpose: 'Charitable Lead Unit Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp017',
    name: 'Charitable Remainder Annuity',
    purpose: 'Charitable Remainder Annuity',
    category: 'Trust Planning'
  },
  {
    id: 'tp018',
    name: 'Grantor Retained Uni Trust',
    purpose: 'Grantor Retained Uni Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp019',
    name: 'Minor\'s Trust-2503 (B) Trust',
    purpose: 'Minor\'s Trust-2503 (B) Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp020',
    name: 'Educational Trust',
    purpose: 'Educational Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp021',
    name: 'Qualified Domestic Trust',
    purpose: 'Qualified Domestic Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp022',
    name: 'Minor\'s Trust-2503 (C) Trust',
    purpose: 'Minor\'s Trust-2503 (C) Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp023',
    name: 'RABBI\'S Trust',
    purpose: 'RABBI\'S Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp024',
    name: 'Grantor Retained Income Trust',
    purpose: 'Grantor Retained Income Trust',
    category: 'Trust Planning'
  },
  {
    id: 'tp025',
    name: 'Secular Trust',
    purpose: 'Secular Trust',
    category: 'Trust Planning'
  }
];

// Business Benefits for Trust Planning
export const TRUST_PLANNING_BUSINESS_BENEFITS = [
  'Comprehensive trust structure recommendations for wealth preservation',
  'Enhanced estate planning through sophisticated trust strategies',
  'Improved tax efficiency through strategic trust implementations',
  'Multi-generational wealth transfer optimization and legacy planning',
  'Increased fiduciary service revenue and deeper client relationships'
];

// Tax Planning Insight Category
export const TAX_PLANNING_CATEGORY = {
  grouping: 'Front Office',
  name: 'Tax Planning',
  description: 'These Insights help Financial Advisor to help the Clients around Tax Planning needs for their clients. These Insights are related to Tax planning strategies, Wash sale strategies, Tax loss harvesting and other things',
  displayLabel: 'These Insights help Financial Advisor to help the Clients around Tax Planning needs'
};

// Tax Planning Insights
export const TAX_PLANNING_INSIGHTS = [
  {
    id: 'txp001',
    name: 'Tax Loss Harvesting',
    purpose: 'Tax Loss Harvesting',
    category: 'Tax Planning'
  },
  {
    id: 'txp002',
    name: 'Tax Planning Strategies & Municipal Bonds',
    purpose: 'Tax Planning Strategies & Municipal Bonds',
    category: 'Tax Planning'
  },
  {
    id: 'txp003',
    name: 'Tax Planning Tools & Software Solutions',
    purpose: 'Tax Planning Tools & Software Solutions',
    category: 'Tax Planning'
  },
  {
    id: 'txp004',
    name: 'Personalized Tax Management Solutions',
    purpose: 'Personalized Tax Management Solutions',
    category: 'Tax Planning'
  },
  {
    id: 'txp005',
    name: 'Roth Conversion & Retirement Tax Planning',
    purpose: 'Roth Conversion & Retirement Tax Planning',
    category: 'Tax Planning'
  },
  {
    id: 'txp006',
    name: 'Wash Sale Prevention & Tax Compliance',
    purpose: 'Wash Sale Prevention & Tax Compliance',
    category: 'Tax Planning'
  },
  {
    id: 'txp007',
    name: 'Estate & Generation-Skipping Tax Planning',
    purpose: 'Estate & Generation-Skipping Tax Planning',
    category: 'Tax Planning'
  },
  {
    id: 'txp008',
    name: 'Alternative Minimum Tax & High-Income Strategies',
    purpose: 'Alternative Minimum Tax & High-Income Strategies',
    category: 'Tax Planning'
  },
  {
    id: 'txp009',
    name: 'Charitable Tax Planning & Donor-Advised Funds',
    purpose: 'Charitable Tax Planning & Donor-Advised Funds',
    category: 'Tax Planning'
  },
  {
    id: 'txp010',
    name: 'Business Tax Integration & Schedule K-1 Optimization',
    purpose: 'Business Tax Integration & Schedule K-1 Optimization',
    category: 'Tax Planning'
  },
  {
    id: 'txp011',
    name: 'Estate Tax Minimization - Multi-generational planning',
    purpose: 'Estate Tax Minimization - Multi-generational planning',
    category: 'Tax Planning'
  },
  {
    id: 'txp012',
    name: 'Tax-Aware Portfolio Management - Automated optimization tools',
    purpose: 'Tax-Aware Portfolio Management - Automated optimization tools',
    category: 'Tax Planning'
  },
  {
    id: 'txp013',
    name: 'Tax Lot Optimization - Intelligent lot selection systems',
    purpose: 'Tax Lot Optimization - Intelligent lot selection systems',
    category: 'Tax Planning'
  },
  {
    id: 'txp014',
    name: 'High-Income Tax Strategies - AMT and state tax optimization',
    purpose: 'High-Income Tax Strategies - AMT and state tax optimization',
    category: 'Tax Planning'
  },
  {
    id: 'txp015',
    name: 'Roth Conversion Planning - Multi-year tax optimization',
    purpose: 'Roth Conversion Planning - Multi-year tax optimization',
    category: 'Tax Planning'
  },
  {
    id: 'txp016',
    name: 'Asset Location Strategies - Tax-efficient account placement',
    purpose: 'Asset Location Strategies - Tax-efficient account placement',
    category: 'Tax Planning'
  },
  {
    id: 'txp017',
    name: 'Charitable Tax Planning - Donor-advised funds and CRTs',
    purpose: 'Charitable Tax Planning - Donor-advised funds and CRTs',
    category: 'Tax Planning'
  }
];

// Business Benefits for Tax Planning
export const TAX_PLANNING_BUSINESS_BENEFITS = [
  'Proactive tax optimization and loss harvesting opportunities',
  'Enhanced client value through strategic tax planning advisory',
  'Improved portfolio efficiency through tax-aware investment management',
  'Cross-selling opportunities for tax planning and accounting services',
  'Increased client retention through comprehensive tax advisory solutions'
];

// Client 360 Insight Category
export const CLIENT_360_CATEGORY = {
  grouping: 'Front Office',
  name: 'Client 360',
  description: 'These Insights help the Financial Advisor to get a better understanding of the Client especially when something significant has changed recently from a profile point of view',
  displayLabel: 'These Insights help the Financial Advisor to get a better understanding of the Client'
};

// Client 360 Insights
export const CLIENT_360_INSIGHTS = [
  {
    id: 'c360001',
    name: 'Client Investable Asset Market Share Change',
    purpose: 'Client Investable Asset Market Share Change',
    category: 'Client 360'
  },
  {
    id: 'c360002',
    name: 'New External Alternative Investment Account Opened',
    purpose: 'New External Alternative Investment Account Opened',
    category: 'Client 360'
  },
  {
    id: 'c360003',
    name: 'New External Banking Relationship',
    purpose: 'New External Banking Relationship',
    category: 'Client 360'
  },
  {
    id: 'c360004',
    name: 'New External Brokerage Accounts',
    purpose: 'New External Brokerage Accounts',
    category: 'Client 360'
  },
  {
    id: 'c360005',
    name: 'New External Investment Accounts',
    purpose: 'New External Investment Accounts',
    category: 'Client 360'
  }
];

// Business Benefits for Client 360
export const CLIENT_360_BUSINESS_BENEFITS = [
  'Proactive client relationship monitoring and retention strategies',
  'Enhanced competitive intelligence and market share protection',
  'Improved client engagement through timely outreach and communication',
  'Strategic opportunity identification for service expansion',
  'Deeper client insights for personalized advisory services'
];

// Cash Insight Category
export const CASH_CATEGORY = {
  grouping: 'Front Office',
  name: 'Cash',
  description: 'These Insights help Financial Advisors to identify and act on unusual and insightful cash in the account(s). These insights can provide useful information and actions related to cash balances, cash withdrawals and upcoming cash distributions',
  displayLabel: 'Cash balances, distributed and withdrawals'
};

// Cash Insights
export const CASH_INSIGHTS = [
  {
    id: 'cash001',
    name: 'Cash Balance',
    purpose: 'Cash balance',
    category: 'Cash'
  },
  {
    id: 'cash002',
    name: 'Cash Distributed',
    purpose: 'Cash Distributed',
    category: 'Cash'
  },
  {
    id: 'cash003',
    name: 'Cash Withdrawals',
    purpose: 'Cash Withdrawals',
    category: 'Cash'
  },
  {
    id: 'cash004',
    name: 'Upcoming Cash Distribution',
    purpose: 'Upcoming Cash Distribution',
    category: 'Cash'
  }
];

// Business Benefits for Cash
export const CASH_BUSINESS_BENEFITS = [
  'Proactive cash management and liquidity optimization strategies',
  'Enhanced portfolio efficiency through strategic cash allocation',
  'Improved client engagement through timely cash flow insights',
  'Strategic opportunity identification for cash deployment and investment',
  'Enhanced cash flow monitoring and optimization for client benefit'
];

// Events Insight Category
export const EVENTS_CATEGORY = {
  grouping: 'Front Office',
  name: 'Events',
  description: 'These Insights help Financial Advisors to identify clients and prospects that will be interested in joining a event that is organized by the Advisor on specific topics',
  displayLabel: 'These Insights help Financial Advisors to identify clients and prospects that will be interested in joining a event that is organized by the Advisor on specific topics'
};

// Events Insights
export const EVENTS_INSIGHTS = [
  {
    id: 'events001',
    name: 'Seminar Targeting',
    purpose: 'Historical attendance analysis with satisfaction ratings for targeted seminars invitations',
    category: 'Events'
  },
  {
    id: 'events002',
    name: 'Webinar Optimization',
    purpose: 'Engagement tracking and completion rates for improved Webinar based education',
    category: 'Events'
  },
  {
    id: 'events003',
    name: 'Conference Networking',
    purpose: 'Investment interest matching for peer learning opportunities based on similar profile clients',
    category: 'Events'
  },
  {
    id: 'events004',
    name: 'Workshop Planning',
    purpose: 'Interactive learning preferences for hands-on educational experiences in an workshop',
    category: 'Events'
  },
  {
    id: 'events005',
    name: 'Networking Events',
    purpose: 'Peer group curation for relationship building and knowledge sharing',
    category: 'Events'
  },
  {
    id: 'events006',
    name: 'Educational Series',
    purpose: 'Multi-session program development for comprehensive client education',
    category: 'Events'
  }
];

// Business Benefits for Events
export const EVENTS_BUSINESS_BENEFITS = [
  'Additional annual impact through event optimization',
  'Average annual revenue per event participant through enhanced engagement',
  'Improvement in client engagement efficiency through targeted event invitations',
  'Improvement in prospect conversion rates through educational events'
];

// Referrals Insight Category
export const REFERRALS_CATEGORY = {
  grouping: 'Front Office',
  name: 'Referrals',
  description: 'These Insights help Financial Advisors to identify clients who can provide referrals of individuals from specific demographics and also specific professional and personal relationship networks',
  displayLabel: 'These Insights help Financial Advisors to identify clients who can provide referrals of specific demographics and specifics relationship networks related to communities and in workplace'
};

// Referrals Insights
export const REFERRALS_INSIGHTS = [
  {
    id: 'ref001',
    name: 'Professional Network Analysis',
    purpose: 'Systematic identification of workplace and industry connections with referral potential',
    category: 'Referrals'
  },
  {
    id: 'ref002',
    name: 'Community Connection Mapping',
    purpose: 'Local market penetration of Client\'s network in the community events',
    category: 'Referrals'
  },
  {
    id: 'ref003',
    name: 'Alumni Network Targeting',
    purpose: 'Educational institution relationships for systematic outreach',
    category: 'Referrals'
  },
  {
    id: 'ref004',
    name: 'Industry Association Leverage',
    purpose: 'Professional organization connections and leadership roles',
    category: 'Referrals'
  },
  {
    id: 'ref005',
    name: 'Board Connection Strategy',
    purpose: 'Executive and nonprofit board relationship utilization',
    category: 'Referrals'
  },
  {
    id: 'ref006',
    name: 'Neighborhood Network Development',
    purpose: 'Residential community engagement and local relationships',
    category: 'Referrals'
  },
  {
    id: 'ref007',
    name: 'Business Partner Programs',
    purpose: 'Joint venture and partnership network expansion',
    category: 'Referrals'
  },
  {
    id: 'ref008',
    name: 'Family Network Opportunities',
    purpose: 'Multi-generational wealth planning with extended family engagement',
    category: 'Referrals'
  }
];

// Business Benefits for Referrals
export const REFERRALS_BUSINESS_BENEFITS = [
  'Professional network analysis with conversion tracking and success rate optimization',
  'Community and social connection mapping for local market penetration',
  'Alumni network targeting with educational institution relationship development',
  'Industry association member identification with professional credential analysis',
  'Board connection referral strategies with executive network access',
  'Neighborhood network development with residential community engagement',
  'Business partner referral programs with joint venture relationship leverage',
  'Family network referral opportunities with multi-generational wealth planning',
  'Average annual value per successful referral',
  'Improvement in referral conversion rates',
  'Increase in qualified prospect pipeline',
  'Clients actively participating in structured referral programs'
];

// Business Owners Insight Category
export const BUSINESS_OWNERS_CATEGORY = {
  grouping: 'Front Office',
  name: 'Business Owners',
  description: 'These Insights help Financial Advisor to know more about Clients and Prospects who are business owners. These Insights are related to Potential acceleration in revenue, Acquisition financing, Line of credit, Business Loans, Cash Management, Commercial Real estate financing, Key employee changes, Facility relocation, Hiring executives, Mergers and Acquisitions, Succession planning',
  displayLabel: 'Insight about Clients and Prospects who are Business Owners. This can be used for Prospecting and providing other services and products for Clients'
};

// Business Owners Insights
export const BUSINESS_OWNERS_INSIGHTS = [
  {
    id: 'bo001',
    name: 'Potential Acceleration in Revenue',
    purpose: 'Potential Acceleration in Revenue',
    category: 'Business Owners'
  },
  {
    id: 'bo002',
    name: 'Acquisition Financing',
    purpose: 'Acquisition Financing',
    category: 'Business Owners'
  },
  {
    id: 'bo003',
    name: 'Succession Planning & Exit Planning',
    purpose: 'Succession Planning & Exit Planning',
    category: 'Business Owners'
  },
  {
    id: 'bo004',
    name: 'Business Growth Strategy',
    purpose: 'Business Growth Strategy',
    category: 'Business Owners'
  },
  {
    id: 'bo005',
    name: 'Commercial Lending',
    purpose: 'Commercial Lending',
    category: 'Business Owners'
  },
  {
    id: 'bo006',
    name: 'M&A Advisory',
    purpose: 'M&A Advisory',
    category: 'Business Owners'
  },
  {
    id: 'bo007',
    name: 'Cash Flow Management',
    purpose: 'Cash Flow Management',
    category: 'Business Owners'
  },
  {
    id: 'bo008',
    name: 'Executive Compensation',
    purpose: 'Executive Compensation',
    category: 'Business Owners'
  },
  {
    id: 'bo009',
    name: 'Commercial Banking',
    purpose: 'Commercial Banking',
    category: 'Business Owners'
  },
  {
    id: 'bo010',
    name: 'Treasury Management',
    purpose: 'Treasury Management',
    category: 'Business Owners'
  },
  {
    id: 'bo011',
    name: 'Real Estate Finance',
    purpose: 'Real Estate Finance',
    category: 'Business Owners'
  },
  {
    id: 'bo012',
    name: 'Human Resources Finance',
    purpose: 'Human Resources Finance',
    category: 'Business Owners'
  },
  {
    id: 'bo013',
    name: 'Facilities Management',
    purpose: 'Facilities Management',
    category: 'Business Owners'
  },
  {
    id: 'bo014',
    name: 'IPO Advisory',
    purpose: 'IPO Advisory',
    category: 'Business Owners'
  }
];

// Business Benefits for Business Owners
export const BUSINESS_OWNERS_BUSINESS_BENEFITS = [
  'Business Growth Strategy, Commercial Lending, M&A Advisory',
  'Cash Flow Management, Executive Compensation, Commercial Banking',
  'Treasury Management, Real Estate Finance, Human Resources Finance',
  'Facilities Management, Executive Search, IPO Advisory',
  'M&A Strategy, Partnership Development, Succession Planning'
];