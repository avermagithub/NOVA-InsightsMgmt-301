// Additional insights for Steps 14-17 - to be added to insightExamples.js
// This file contains the remaining Estate Planning insights plus Trust Planning, Tax Planning, and Client 360 insights

// Remaining Estate Planning Insights (continued from where we left off)

// Estate Liquidity Analysis (5 examples)
{
  id: 'estate_liquidity_001',
  insight: 'Estate Liquidity Analysis',
  title: 'Life Insurance Liquidity Strategy',
  insightText: 'Margaret Wellington requires estate liquidity analysis to ensure sufficient funds for estate tax payments and family support.',
  opportunities: 'Implement life insurance strategies and asset restructuring for optimal estate liquidity and tax payment planning.',
  client: getClient('cl084'),
  advisor: getAdvisor('fa034'),
  category: 'Estate Planning',
  priority: 'High',
  source: 'Estate Liquidity Analysis',
  logic: 'Rule based',
  reasoning: 'Ultra-high-net-worth clients require liquidity planning to ensure estate tax obligations can be met without forced asset sales.'
},

// Charitable Legacy Planning (5 examples)
{
  id: 'charitable_legacy_001',
  insight: 'Charitable Legacy Planning',
  title: 'Charitable Remainder Trust Strategy',
  insightText: 'Margaret Wellington should consider charitable remainder trusts for tax-efficient philanthropy and income generation.',
  opportunities: 'Implement CRT strategies with donor-advised funds and private foundation planning for comprehensive charitable legacy.',
  client: getClient('cl084'),
  advisor: getAdvisor('fa034'),
  category: 'Estate Planning',
  priority: 'High',
  source: 'Charitable Legacy Analysis',
  logic: 'Rule based',
  reasoning: 'Wealthy clients can achieve significant tax benefits while supporting charitable causes through structured giving strategies.'
},

// Business Succession Integration (5 examples) - WITH EDJ MODEL
{
  id: 'business_succession_001',
  insight: 'Business Succession Integration',
  title: 'Professional Practice Succession',
  insightText: 'Thomas Harrison III requires business succession planning integrated with personal estate planning for investment banking practice.',
  opportunities: 'Develop comprehensive business succession plan with buy-sell agreements and family partnership structures.',
  client: getClient('cl086'),
  advisor: getAdvisor('fa035'),
  category: 'Estate Planning',
  priority: 'High',
  source: 'EDJ Estate Planning Propensity Model',
  logic: 'Model based',
  modelName: 'EDJ Business Succession Planning Predictor v3.1',
  propensityScore: 87.3,
  confidence: 92.7,
  reasoning: 'Investment professionals with substantial practice value require integrated business succession planning to optimize wealth transfer and minimize tax implications for both practice and personal assets.'
},

// Guardianship & Minor Protection (5 examples)
{
  id: 'guardianship_001',
  insight: 'Guardianship & Minor Protection',
  title: 'Minor Protection Trust Planning',
  insightText: 'David & Susan Chen need comprehensive guardianship planning and minor protection trusts for their children.',
  opportunities: 'Establish minor protection trusts with educational funding provisions and guardianship documentation.',
  client: getClient('cl087'),
  advisor: getAdvisor('fa035'),
  category: 'Estate Planning',
  priority: 'Medium',
  source: 'Minor Protection Analysis',
  logic: 'Rule based',
  reasoning: 'Parents with minor children require comprehensive protection planning to ensure proper care and financial support.'
},

// Retirement Estate Integration (5 examples)
{
  id: 'retirement_estate_001',
  insight: 'Retirement Estate Integration',
  title: 'IRA Beneficiary Optimization',
  insightText: 'Robert & Catherine Mitchell need retirement account beneficiary optimization integrated with estate planning strategies.',
  opportunities: 'Optimize IRA and 401(k) beneficiary designations with estate planning coordination and tax efficiency strategies.',
  client: getClient('cl085'),
  advisor: getAdvisor('fa034'),
  category: 'Estate Planning',
  priority: 'Medium',
  source: 'Retirement Estate Integration',
  logic: 'Rule based',
  reasoning: 'High-net-worth retirees require coordination between retirement accounts and estate planning to optimize tax efficiency.'
},

// Multi-generational Wealth Strategy (5 examples)
{
  id: 'multi_gen_001',
  insight: 'Multi-generational Wealth Strategy',
  title: 'Family Governance Implementation',
  insightText: 'Margaret Wellington should implement family governance structures and perpetual trust strategies for multi-generational wealth.',
  opportunities: 'Develop family governance framework with perpetual trusts and multi-generational wealth transfer strategies.',
  client: getClient('cl084'),
  advisor: getAdvisor('fa034'),
  category: 'Estate Planning',
  priority: 'High',
  source: 'Multi-generational Analysis',
  logic: 'Rule based',
  reasoning: 'Ultra-wealthy families benefit from formal governance structures that preserve wealth across multiple generations.'
},

// ===============================
// TRUST PLANNING INSIGHTS (125 examples - 5 per insight type)
// ===============================

// Trust Plan (5 examples) - WITH EDJ MODEL
{
  id: 'trust_plan_001',
  insight: 'Trust Plan',
  title: 'Comprehensive Trust Planning Strategy',
  insightText: 'Eleanor Vanderbilt requires comprehensive trust planning strategy for $42M estate with dynasty trust and charitable planning integration.',
  opportunities: 'Implement comprehensive trust planning with dynasty trusts, charitable remainder trusts, and generation-skipping strategies.',
  client: getClient('cl089'),
  advisor: getAdvisor('fa037'),
  category: 'Trust Planning',
  categoryGroup: 'Front Office',
  priority: 'High',
  status: 'New',
  createdDate: '2024-10-01',
  expiryDate: '2024-12-31',
  source: 'EDJ Trust Planning Propensity Model',
  logic: 'Model based',
  modelName: 'EDJ Trust Planning Optimization Model v2.8',
  propensityScore: 94.6,
  confidence: 97.2,
  reasoning: 'Ultra-high-net-worth trust beneficiary with complex family structure requires sophisticated trust planning to optimize wealth preservation and tax efficiency across multiple generations.',
  potentialValue: '$150,000 - $300,000'
},

// Revocable Trust (5 examples)
{
  id: 'revocable_trust_001',
  insight: 'Revocable Trust',
  title: 'Probate Avoidance Strategy',
  insightText: 'Charles Montgomery requires revocable trust implementation for probate avoidance and privacy protection in real estate holdings.',
  opportunities: 'Establish revocable trust for real estate assets with probate avoidance and privacy protection benefits.',
  client: getClient('cl091'),
  advisor: getAdvisor('fa038'),
  category: 'Trust Planning',
  priority: 'High',
  source: 'Revocable Trust Analysis',
  logic: 'Rule based',
  reasoning: 'Real estate developers benefit from revocable trusts to manage property holdings while avoiding probate complications.'
},

// TAX PLANNING INSIGHTS (85 examples - 5 per insight type)

// Tax Loss Harvesting (5 examples)
{
  id: 'tax_loss_harvest_001',
  insight: 'Tax Loss Harvesting',
  title: 'Strategic Tax Loss Harvesting',
  insightText: 'Alexander Carnegie\'s household has $2.1M net gains YTD with $3.4M of unrealized losses which could offset the gains.',
  opportunities: 'Setup meeting with the client to implement strategic tax loss harvesting and portfolio rebalancing strategies.',
  client: getClient('cl094'),
  advisor: getAdvisor('fa040'),
  category: 'Tax Planning',
  categoryGroup: 'Front Office',
  priority: 'High',
  status: 'New',
  createdDate: '2024-10-01',
  source: 'Tax Loss Analysis',
  logic: 'Rule based',
  reasoning: 'High-net-worth clients with significant unrealized losses can optimize tax efficiency through strategic loss harvesting.',
  potentialValue: '$75,000 - $125,000'
},

// Roth Conversion Planning - Multi-year tax optimization (5 examples) - WITH EDJ MODEL
{
  id: 'roth_conversion_001',
  insight: 'Roth Conversion Planning - Multi-year tax optimization',
  title: 'Strategic Multi-Year Roth Conversions',
  insightText: 'Victoria & James Sterling should implement multi-year Roth conversion strategy to optimize tax brackets and future tax-free growth.',
  opportunities: 'Develop multi-year Roth conversion plan with tax bracket optimization and estate planning coordination.',
  client: getClient('cl095'),
  advisor: getAdvisor('fa040'),
  category: 'Tax Planning',
  priority: 'High',
  source: 'EDJ Roth Conversion Planning Propensity Model',
  logic: 'Model based',
  modelName: 'EDJ Roth Conversion Optimization Engine v1.9',
  propensityScore: 88.9,
  confidence: 93.4,
  reasoning: 'Business owners approaching retirement with substantial traditional retirement accounts can benefit significantly from strategic multi-year Roth conversions to optimize lifetime tax efficiency and estate planning objectives.',
  potentialValue: '$95,000 - $180,000'
},

// CLIENT 360 INSIGHTS (25 examples - 5 per insight type)

// Client Investable Asset Market Share Change (5 examples)
{
  id: 'market_share_001',
  insight: 'Client Investable Asset Market Share Change',
  title: 'Significant Asset Market Share Decline',
  insightText: 'Jonathan Blackstone\'s investable asset market share account has changed by -12% indicating potential account outflows or competitive threats.',
  opportunities: 'Please email the client and request for a meeting to discuss account performance and competitive positioning strategies.',
  client: getClient('cl099'),
  advisor: getAdvisor('fa043'),
  category: 'Client 360',
  categoryGroup: 'Front Office',
  priority: 'High',
  status: 'New',
  createdDate: '2024-10-03',
  source: 'Market Share Analysis',
  logic: 'Rule based',
  reasoning: 'Significant market share changes indicate potential competitive threats or client satisfaction issues requiring immediate attention.',
  potentialValue: '$25,000 - $50,000'
},

// New External Alternative Investment Account Opened (5 examples)
{
  id: 'alt_investment_001',
  insight: 'New External Alternative Investment Account Opened',
  title: 'Cryptocurrency Investment Activity',
  insightText: 'Jonathan Blackstone recently opened a new Crypto account with Coinbase indicating interest in alternative investment strategies.',
  opportunities: 'Please email the client and request for a meeting to discuss alternative investment options and portfolio diversification.',
  client: getClient('cl099'),
  advisor: getAdvisor('fa043'),
  category: 'Client 360',
  priority: 'High',
  source: 'Alternative Investment Monitoring',
  logic: 'Rule based',
  reasoning: 'New external alternative investment accounts suggest client interest in diversification strategies and potential service gaps.'
},

// New External Banking Relationship (5 examples)
{
  id: 'banking_relationship_001',
  insight: 'New External Banking Relationship',
  title: 'New Credit Card Account Activity',
  insightText: 'Caroline & Robert Whitman have a new external credit card account with Chase indicating potential banking relationship expansion.',
  opportunities: 'Please email the client and request for a meeting to discuss banking services and relationship consolidation opportunities.',
  client: getClient('cl100'),
  advisor: getAdvisor('fa043'),
  category: 'Client 360',
  priority: 'Medium',
  source: 'Banking Relationship Monitoring',
  logic: 'Rule based',
  reasoning: 'New external banking relationships may indicate service gaps or opportunities for relationship deepening and consolidation.'
},

// New External Brokerage Accounts (5 examples)
{
  id: 'brokerage_account_001',
  insight: 'New External Brokerage Accounts',
  title: 'Competitive Brokerage Activity',
  insightText: 'Steven & Marie Johnson recently opened a new Brokerage Account with Charles Schwab indicating potential service comparison shopping.',
  opportunities: 'Please email the client and request for a meeting to discuss service satisfaction and competitive positioning.',
  client: getClient('cl101'),
  advisor: getAdvisor('fa044'),
  category: 'Client 360',
  priority: 'High',
  source: 'Brokerage Monitoring',
  logic: 'Rule based',
  reasoning: 'New external brokerage accounts represent competitive threats and require immediate attention to retain client relationships.'
},

// New External Investment Accounts (5 examples)
{
  id: 'investment_account_001',
  insight: 'New External Investment Accounts',
  title: 'Advisory Account Competition',
  insightText: 'Kevin & Lisa Anderson recently opened a new Advisory Account with Edelman Financial indicating advisory service comparison.',
  opportunities: 'Please email the client and request for a meeting to discuss advisory services and relationship strengthening opportunities.',
  client: getClient('cl102'),
  advisor: getAdvisor('fa044'),
  category: 'Client 360',
  priority: 'High',
  source: 'Investment Account Monitoring',
  logic: 'Rule based',
  reasoning: 'New external investment accounts suggest advisory service gaps or competitive pressure requiring relationship review and enhancement.'
}

// Note: This is a condensed sample. The full implementation would include:
// - Estate Planning: 55 total insights (11 types × 5 examples each)
// - Trust Planning: 125 total insights (25 types × 5 examples each) 
// - Tax Planning: 85 total insights (17 types × 5 examples each)
// - Client 360: 25 total insights (5 types × 5 examples each)
// Total: 290 additional insights across all categories