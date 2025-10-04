import { CLIENTS, FINANCIAL_ADVISORS } from './mockData.js';

// Helper function to get client by ID
const getClient = (id) => CLIENTS.find(client => client.id === id);
const getAdvisor = (id) => FINANCIAL_ADVISORS.find(advisor => advisor.id === id);

// Enhanced Insight Categories and Groupings
export const INSIGHT_CATEGORY_GROUPINGS = [
  { id: 'front_office', name: 'Front Office', description: 'Client-facing insights and opportunities' },
  { id: 'middle_office', name: 'Middle Office', description: 'Operations and risk management insights' },
  { id: 'back_office', name: 'Back Office', description: 'Administrative and compliance insights' }
];

export const INSIGHT_CATEGORIES_BY_GROUP = {
  'front_office': [
    {
      id: 'investment_products',
      name: 'Investment Products',
      icon: 'TrendingUp',
      description: 'Investment product recommendations and portfolio optimization',
      totalInsights: 30
    },
    {
      id: 'client_engagement',
      name: 'Client Engagement', 
      icon: 'Users',
      description: 'Client relationship and engagement opportunities',
      totalInsights: 15
    },
    {
      id: 'portfolio_analysis',
      name: 'Portfolio Analysis',
      icon: 'PieChart',
      description: 'Portfolio performance and rebalancing insights',
      totalInsights: 12
    }
  ],
  'middle_office': [
    {
      id: 'risk_management',
      name: 'Risk Management',
      icon: 'Shield',
      description: 'Risk assessment and mitigation strategies',
      totalInsights: 8
    }
  ],
  'back_office': [
    {
      id: 'compliance',
      name: 'Compliance',
      icon: 'FileCheck',
      description: 'Regulatory compliance and documentation',
      totalInsights: 5
    }
  ]
};

// Detailed Insight Examples for Investment Products Category
export const INSIGHT_EXAMPLES = [
  // STOCKS INSIGHTS (5 examples)
  {
    id: 'stocks_001',
    insight: 'Stocks',
    title: 'Technology Sector Growth Opportunity',
    insightText: 'Client shows strong potential for Technology sector exposure. Current portfolio allocation: 65% stocks. Recommended target: 75%. Market conditions favor growth-oriented approach with focus on large-cap quality.',
    opportunities: 'Implement systematic stock investment strategy focusing on high-quality dividend-paying stocks, utilize dollar-cost averaging for market volatility management.',
    client: getClient('cl003'),
    advisor: getAdvisor('fa002'),
    category: 'Investment Products',
    categoryGroup: 'Front Office',
    priority: 'High',
    status: 'New',
    createdDate: '2024-09-15',
    expiryDate: '2024-12-15',
    source: 'EDJ Inhouse',
    logic: 'Model based',
    modelRuleName: 'TechSector_Growth_Predictor_v2.1',
    nextBestAction: 'Yes',
    reasoning: 'The machine learning model analyzed the client\'s current portfolio composition, age (45), high risk tolerance, and technology sector performance trends. The model identified that the client\'s current 65% stock allocation is below the recommended 75% for their risk profile and investment timeline. Market analysis shows technology sector outperformance with 18.5% YTD gains vs S&P 500\'s 12.3%. The client\'s substantial AUM ($3.2M) and professional background as a surgeon indicates capacity for growth-oriented investments with higher volatility tolerance.'
  },
  {
    id: 'stocks_002', 
    insight: 'Stocks',
    title: 'Concentrated Position Risk Alert',
    insightText: 'Individual Stock Selection Alert - Client has concentrated position in AAPL representing 18% of portfolio.',
    opportunities: 'Rebalance concentrated positions to reduce single-name risk, harvest tax losses if applicable, consider covered call strategies for income generation.',
    client: getClient('cl004'),
    advisor: getAdvisor('fa001'),
    category: 'Investment Products',
    categoryGroup: 'Front Office',
    priority: 'Critical',
    status: 'Existing',
    createdDate: '2024-09-10',
    expiryDate: '2024-10-10',
    source: 'Salesforce Einstein',
    logic: 'Rule based',
    modelRuleName: 'Concentration_Risk_Rule_v1.5',
    nextBestAction: 'Yes',
    reasoning: 'Portfolio concentration rule triggered an alert when AAPL position exceeded 15% threshold (currently at 18%). The rule evaluates single-stock concentration risk based on modern portfolio theory principles and Edward Jones risk management guidelines. With the client\'s aggressive risk profile and substantial portfolio value ($5.7M), diversification is critical to mitigate company-specific risk. The rule considers the client\'s investment banker background and recommends immediate action due to potential impact on overall portfolio performance.'
  },
  {
    id: 'stocks_003',
    insight: 'Stocks',
    title: 'Dividend Growth Strategy',
    insightText: 'Client profile indicates strong fit for dividend growth stocks. Current dividend yield: 2.1%. Target yield: 3.5%. Focus on companies with 10+ year dividend growth history.',
    opportunities: 'Build diversified dividend growth portfolio targeting utilities, consumer staples, and healthcare sectors for stable income generation.',
    client: getClient('cl002'),
    advisor: getAdvisor('fa003'),
    category: 'Investment Products',
    categoryGroup: 'Front Office',
    priority: 'Medium',
    status: 'New',
    createdDate: '2024-09-20',
    expiryDate: '2024-11-20',
    source: 'Wealthbox',
    logic: 'Rule and Model based',
    modelRuleName: 'Dividend_Growth_Model_v3.2 & Income_Generation_Rule_v2.1',
    nextBestAction: 'Yes',
    reasoning: 'Combined approach using dividend prediction model and income generation rules. The model analyzed the client\'s retirement timeline (age 65), conservative risk profile, and need for stable income generation. Historical dividend analysis model identified companies with consistent 10+ year dividend growth patterns. Income generation rule validates current 2.1% yield is below target 3.5% for their wealth segment (UHNW $22.8M). The rule considers their retired status and need for predictable cash flow while the model forecasts optimal sector allocation for sustainable dividend growth.'
  },
  {
    id: 'stocks_004',
    insight: 'Stocks',
    title: 'International Equity Diversification',
    insightText: 'Portfolio shows 92% domestic equity concentration. Recommended international allocation: 25%. Focus regions: Europe (10%), Asia-Pacific (10%), Emerging Markets (5%).',
    opportunities: 'Enhance global diversification through quality international stocks in developed and emerging markets, reduce correlation with US market cycles.',
    client: getClient('cl005'),
    advisor: getAdvisor('fa004'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'stocks_005',
    insight: 'Stocks',
    title: 'Small-Cap Growth Allocation',
    insightText: 'Young professional client suitable for small-cap growth exposure. Current allocation: 5%. Recommended: 15%. Investment horizon: 20+ years allows for volatility tolerance.',
    opportunities: 'Add small-cap growth stocks for enhanced long-term returns, focus on innovative companies in technology, healthcare, and clean energy sectors.',
    client: getClient('cl010'),
    advisor: getAdvisor('fa004'),
    category: 'Investment Products',
    priority: 'Medium'
  },

  // BONDS INSIGHTS (5 examples)
  {
    id: 'bonds_001',
    insight: 'Bonds',
    title: 'Duration Risk Management',
    insightText: 'Client has 35% bond allocation with average duration of 6.5 years. Rising rate environment suggests shortening duration. Current yield: 4.25%. Target yield: 6.75%. Credit quality: Investment Grade.',
    opportunities: 'Optimize bond portfolio duration and credit quality for current interest rate environment, implement bond ladder strategy for predictable income.',
    client: getClient('cl003'),
    advisor: getAdvisor('fa002'),
    category: 'Investment Products',
    categoryGroup: 'Front Office',
    priority: 'High',
    status: 'Existing',
    createdDate: '2024-09-12',
    expiryDate: '2024-11-12',
    source: 'JUMP',
    logic: 'Rule and Model based',
    modelRuleName: 'Duration_Risk_Model_v2.8 & Interest_Rate_Rule_v1.9',
    nextBestAction: 'Yes',
    reasoning: 'The Duration Risk Model combines interest rate forecasting algorithms with portfolio duration analysis rules. The model predicts continued Fed rate increases through Q4 2024, while duration rules flag portfolios exceeding 6-year average duration in rising rate environments. Client\'s surgeon profession and moderate risk profile (Amanda Foster, $3.2M AUM) require balance between yield enhancement and capital preservation. The rule validates that current 4.25% yield is below market opportunities, while the model forecasts duration compression will outweigh yield pickup in current environment.'
  },
  {
    id: 'bonds_002',
    insight: 'Bonds',
    title: 'Corporate Bond Income Enhancement',
    insightText: 'Corporate Bond - Client qualifies for investment-grade corporate bonds with AA rating yielding 7.25%. Current cash position: $125,000. Portfolio needs income generation exposure for retirement income.',
    opportunities: 'Add high-quality corporate bonds to enhance portfolio yield while maintaining credit quality, ladder maturities to manage interest rate risk.',
    client: getClient('cl002'),
    advisor: getAdvisor('fa003'),
    category: 'Investment Products',
    priority: 'High'
  },
  {
    id: 'bonds_003',
    insight: 'Bonds',
    title: 'Municipal Bond Tax Advantage',
    insightText: 'High-income client in 37% tax bracket. Municipal bonds yielding 4.5% provide tax-equivalent yield of 7.14%. Current taxable bond allocation: 25%.',
    opportunities: 'Replace portion of taxable bonds with high-grade municipal bonds to enhance after-tax income, focus on general obligation bonds from stable issuers.',
    client: getClient('cl001'),
    advisor: getAdvisor('fa001'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'bonds_004',
    insight: 'Bonds',
    title: 'Inflation-Protected Securities',
    insightText: 'Portfolio lacks inflation protection. Current TIPS allocation: 0%. Recommended: 10-15% of bond allocation. Recent inflation trends: 3.2% annually.',
    opportunities: 'Add Treasury Inflation-Protected Securities (TIPS) to hedge against inflation risk, consider I Bonds for additional inflation protection.',
    client: getClient('cl006'),
    advisor: getAdvisor('fa004'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'bonds_005',
    insight: 'Bonds',
    title: 'High-Yield Bond Opportunity',
    insightText: 'Conservative investor showing potential for modest high-yield exposure. Current allocation: 0%. Recommended: 5-8%. Focus on BB-rated issues with strong fundamentals.',
    opportunities: 'Carefully add high-yield bonds to enhance income generation while maintaining overall portfolio credit quality and risk parameters.',
    client: getClient('cl009'),
    advisor: getAdvisor('fa003'),
    category: 'Investment Products',
    priority: 'Low'
  },

  // MUTUAL FUNDS INSIGHTS (5 examples)
  {
    id: 'mf_001',
    insight: 'Mutual Funds',
    title: 'Underperforming Fund Replacement',
    insightText: 'Client\'s mutual fund Growth Fund A has underperformed benchmark by 3.2% over 5 years. Fund assets: $85,000, expense ratio: 1.85%. Manager tenure: 8 years. Style drift detected: significant.',
    opportunities: 'Replace underperforming mutual funds with superior alternatives, conduct comprehensive fund analysis including manager track record.',
    client: getClient('cl007'),
    advisor: getAdvisor('fa002'),
    category: 'Investment Products',
    priority: 'High'
  },
  {
    id: 'mf_002',
    insight: 'Mutual Funds', 
    title: 'Target Date Fund Optimization',
    insightText: 'Client age is 52 and is using target date fund with aggressive glide path. Fund allocation: 90% stocks/10% bonds. Customized approach could improve returns by 1.8% annually based on risk tolerance and goals.',
    opportunities: 'Evaluate target date fund suitability versus customized asset allocation, optimize glide path for individual circumstances.',
    client: getClient('cl004'),
    advisor: getAdvisor('fa001'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'mf_003',
    insight: 'Mutual Funds',
    title: 'Active vs Passive Strategy',
    insightText: 'Portfolio contains 8 active mutual funds with average expense ratio 1.45%. Comparable index funds available at 0.15%. Potential annual savings: $3,200.',
    opportunities: 'Evaluate active fund performance versus low-cost index alternatives, maintain manager selection where alpha generation is evident.',
    client: getClient('cl001'),
    advisor: getAdvisor('fa001'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'mf_004',
    insight: 'Mutual Funds',
    title: 'Sector Fund Concentration',
    insightText: 'Client holds 4 sector-specific mutual funds representing 35% of equity allocation. Technology and Healthcare sectors are overweighted. Risk concentration detected.',
    opportunities: 'Rebalance sector fund exposure to reduce concentration risk, consider broad-market funds for core holdings with tactical sector positioning.',
    client: getClient('cl005'),
    advisor: getAdvisor('fa004'),
    category: 'Investment Products',
    priority: 'High'
  },
  {
    id: 'mf_005',
    insight: 'Mutual Funds',
    title: 'International Fund Diversification',
    insightText: 'Portfolio lacks international mutual fund exposure. Current international allocation: 8%. Recommended: 20-25%. Focus on developed markets with emerging market component.',
    opportunities: 'Add international mutual funds for global diversification, consider regional funds for targeted exposure to specific geographic opportunities.',
    client: getClient('cl008'),
    advisor: getAdvisor('fa004'),
    category: 'Investment Products',
    priority: 'Medium'
  },

  // ETFs INSIGHTS (5 examples)
  {
    id: 'etf_001',
    insight: 'ETFs',
    title: 'Cost Optimization Strategy',
    insightText: 'Client holds 6 mutual funds with average expense ratio of 1.45%. Comparable ETFs available with 0.25% expense ratio. Annual fee savings: $2,800. Asset class: U.S. Equity.',
    opportunities: 'Transition from high-fee mutual funds to low-cost ETFs for significant expense reduction, maintain asset allocation while improving cost efficiency.',
    client: getClient('cl003'),
    advisor: getAdvisor('fa002'),
    category: 'Investment Products',
    categoryGroup: 'Front Office',
    priority: 'High',
    status: 'New',
    createdDate: '2024-09-18',
    expiryDate: '2024-12-18',
    source: 'Redtail',
    logic: 'Rule based',
    modelRuleName: 'Expense_Ratio_Optimization_Rule_v3.1',
    nextBestAction: 'Yes',
    reasoning: 'The Expense Ratio Optimization Rule automatically scans client portfolios for high-fee mutual funds and identifies lower-cost ETF alternatives with similar asset allocation and performance characteristics. The rule triggered when detecting Amanda Foster\'s portfolio expense ratio of 1.45% exceeds Edward Jones\' 0.75% threshold for surgeon professionals in her wealth segment. With $3.2M AUM, the annual fee differential of 1.20% (1.45% - 0.25%) results in $3,840 potential savings. The rule considers her moderate risk profile and ensures ETF alternatives maintain similar sector exposure while providing superior cost efficiency for long-term wealth accumulation.'
  },
  {
    id: 'etf_002',
    insight: 'ETFs',
    title: 'Sector Rotation Opportunity',
    insightText: 'Sector ETF - Market analysis indicates Healthcare sector ETF (XLV) presents compelling opportunity. Client has 4% exposure, recommended: 12%. Recent performance: +15% vs market +8%.',
    opportunities: 'Implement tactical sector allocation through targeted ETF investments, capture market rotation opportunities, enhance portfolio returns through strategic overweighting.',
    client: getClient('cl004'),
    advisor: getAdvisor('fa001'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'etf_003',
    insight: 'ETFs',
    title: 'International ETF Diversification',
    insightText: 'Client has 85% domestic equity exposure with limited international diversification. Recommended international allocation: 25%. Focus regions: Europe, Asia-Pacific. Currency hedging: partial hedging.',
    opportunities: 'Enhance portfolio diversification through international ETF exposure, access growth opportunities in emerging markets, reduce correlation with domestic markets.',
    client: getClient('cl006'),
    advisor: getAdvisor('fa004'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'etf_004',
    insight: 'ETFs',
    title: 'Smart Beta Strategy Implementation',
    insightText: 'Portfolio suitable for factor-based ETF strategy. Current beta: 1.0. Recommended factors: Quality, Low Volatility, Momentum. Expected risk reduction: 15%.',
    opportunities: 'Implement smart beta ETFs to capture factor premiums while reducing portfolio volatility, enhance risk-adjusted returns through systematic factor exposure.',
    client: getClient('cl007'),
    advisor: getAdvisor('fa002'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'etf_005',
    insight: 'ETFs',
    title: 'Fixed Income ETF Ladder',
    insightText: 'Bond portfolio lacks maturity diversification. Current average maturity: 8 years. Recommended: ETF ladder strategy with 2-10 year maturities for interest rate protection.',
    opportunities: 'Create bond ETF ladder to manage interest rate risk and provide predictable income stream, optimize duration exposure across yield curve.',
    client: getClient('cl009'),
    advisor: getAdvisor('fa003'),
    category: 'Investment Products',
    priority: 'Medium'
  },

  // ALTERNATIVE INVESTMENTS INSIGHTS (5 examples) - Enhanced with EDJ Propensity Model
  {
    id: 'alt_001',
    insight: 'Alternative Investments',
    title: 'Private Equity Allocation',
    insightText: 'EDJ Alternative Investments Propensity Model Score: 91.7/100 (Confidence: 89%). Client Thomas Garcia with $2,850,000 net worth qualifies for private equity allocation. Recommended allocation: 12% of portfolio. Investment minimums: $250,000. Expected returns: 18% with 7 year lockup.',
    opportunities: 'Access institutional-quality private equity investments for enhanced returns and diversification, benefit from illiquidity premium, participate in direct company ownership.',
    client: getClient('cl001'),
    advisor: getAdvisor('fa001'),
    category: 'Investment Products',
    priority: 'High',
    source: 'EDJ Alternative Investments Propensity Model',
    logic: 'Model based',
    modelRuleName: 'PE_HighNetWorth_Propensity_v2.3',
    reasoning: 'Advanced propensity modeling indicates exceptionally high suitability based on accredited investor status ($2.85M net worth exceeding $1M threshold), sophisticated investor profile, and diversified portfolio structure. Regulatory compliance verified: meets SEC Regulation D private placement requirements and FINRA Rule 2111 suitability standards. Risk tolerance assessment confirms alignment with illiquid investment horizon (7+ years) and enhanced due diligence documentation completed per institutional guidelines.'
  },
  {
    id: 'alt_002',
    insight: 'Alternative Investments',
    title: 'Infrastructure Investment Platform',
    insightText: 'EDJ Alternative Investments Propensity Model Score: 84.3/100 (Confidence: 82%). Client is suitable for infrastructure investments given long investment horizon. Infrastructure allocation target: 8%. Asset types: toll roads, utilities, airports. Expected yield: 7.5% with inflation protection features.',
    opportunities: 'Add infrastructure investments for stable income generation and inflation protection, diversify into real assets, access long-term investment themes.',
    client: getClient('cl002'),
    advisor: getAdvisor('fa003'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Alternative Investments Propensity Model',
    logic: 'Model based',
    modelRuleName: 'Infrastructure_LongHorizon_Score_v1.8',
    reasoning: 'Predictive analysis indicates strong infrastructure investment compatibility based on 15+ year investment horizon, inflation hedging objectives, and income-focused strategy. Regulatory considerations satisfied: qualified client status under Investment Advisers Act Section 3(c)(1) exemption verified. Infrastructure investments comply with ERISA prudent investor standards and meet fiduciary duty requirements for retirement account allocation through qualified opportunity zone structures.'
  },
  {
    id: 'alt_003',
    insight: 'Alternative Investments',
    title: 'Private Debt Allocation Strategy',
    insightText: 'EDJ Alternative Investments Propensity Model Score: 78.9/100 (Confidence: 85%). Private Debt Allocation Strategy. Client\'s moderate risk profile shows strong fit for private debt investments. Target allocation: 10%. Expected returns: 12% vs public bonds 5.25%. Credit focus: senior secured.',
    opportunities: 'Enhance fixed income returns through private debt allocation, access higher yields than public markets, benefit from direct lending relationships.',
    client: getClient('cl003'),
    advisor: getAdvisor('fa002'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Alternative Investments Propensity Model',
    logic: 'Model based',
    modelRuleName: 'PrivateCredit_ModerateRisk_Model_v2.1',
    reasoning: 'Quantitative modeling demonstrates optimal risk-return profile alignment for private debt strategies with senior secured positioning. Accredited investor verification completed ($750K+ annual income), meeting SEC Rule 501 requirements. Investment structure complies with Regulation D 506(b) private placement rules and satisfies FINRA concentrated position guidelines. Enhanced due diligence protocols ensure compliance with DOL fiduciary standards for retirement accounts.'
  },
  {
    id: 'alt_004',
    insight: 'Alternative Investments',
    title: 'Hedge Fund Strategy Access',
    insightText: 'EDJ Alternative Investments Propensity Model Score: 73.2/100 (Confidence: 77%). Hedge Fund Strategy Access - Client qualifies for hedge fund investments with $750,000 minimum. Strategy focus: long/short equity. Historical performance: 12% with 1.4 Sharpe ratio. Correlation to market: 0.6.',
    opportunities: 'Access sophisticated hedge fund strategies for absolute returns and downside protection, reduce portfolio correlation to traditional markets.',
    client: getClient('cl004'),
    advisor: getAdvisor('fa001'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Alternative Investments Propensity Model',
    logic: 'Model based',
    modelRuleName: 'HedgeFund_QualifiedClient_Algorithm_v1.5',
    reasoning: 'Machine learning propensity analysis identifies qualified client suitability for hedge fund strategies based on sophisticated investor classification and risk capacity assessment. Regulatory compliance framework satisfied: meets Investment Advisers Act "qualified client" standard ($2.2M+ net worth or $1.1M+ AUM), completed accredited investor verification per Regulation D requirements. Strategy selection aligned with FINRA Rule 2111 suitability obligations and enhanced supervision requirements for alternative investments.'
  },
  {
    id: 'alt_005',
    insight: 'Alternative Investments',
    title: 'Real Estate Investment Trust Strategy',
    insightText: 'EDJ Alternative Investments Propensity Model Score: 69.4/100 (Confidence: 71%). Portfolio lacks real estate exposure. Current REIT allocation: 2%. Recommended: 8-12%. Focus areas: Commercial real estate, data centers, logistics. Expected income yield: 6.2%.',
    opportunities: 'Add diversified REIT exposure for inflation hedging and income generation, access professional real estate management, enhance portfolio diversification.',
    client: getClient('cl005'),
    advisor: getAdvisor('fa004'),
    category: 'Investment Products',
    priority: 'Low',
    source: 'EDJ Alternative Investments Propensity Model',
    logic: 'Model based',
    modelRuleName: 'REIT_Diversification_Optimizer_v2.0',
    reasoning: 'Predictive diversification modeling identifies moderate propensity for REIT allocation to enhance portfolio real estate exposure and income generation. Public REIT investments maintain liquidity while providing alternative asset class benefits. Regulatory compliance streamlined through publicly-traded securities maintaining full SEC registration and reporting requirements. Investment recommendation aligns with modern portfolio theory principles and satisfies fiduciary duty standards under ERISA guidelines for qualified retirement accounts.'
  },

  // SPECIALIZED STRATEGIES INSIGHTS (5 examples)
  {
    id: 'spec_001',
    insight: 'Specialized Strategies',
    title: 'ESG Investment Integration',
    insightText: 'Client expressed interest in ESG investing. Current ESG score: 6. Recommended ESG funds: ESG Leaders ETF, Impact Bond Fund with 1.2% tracking error vs conventional funds. Values alignment: 88%.',
    opportunities: 'Integrate ESG principles into investment strategy while maintaining performance objectives, access sustainable investment themes, align portfolio with personal values.',
    client: getClient('cl005'),
    advisor: getAdvisor('fa004'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'spec_002',
    insight: 'Specialized Strategies',
    title: 'Options Strategy Implementation',
    insightText: 'Options Strategy Implementation - Client\'s $750,000 portfolio is suitable for covered call options strategy. Current volatility: 32%. Income potential: $1,850/month. Risk parameters: defined risk, limited upside.',
    opportunities: 'Implement systematic options strategies for income generation and risk management, enhance portfolio returns through covered calls and cash-secured puts.',
    client: getClient('cl006'),
    advisor: getAdvisor('fa004'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'spec_003',
    insight: 'Specialized Strategies',
    title: 'Tax-Loss Harvesting Opportunity',
    insightText: 'Tax-Loss Harvesting Opportunity. Client has $18,500 in unrealized losses available for harvesting. Tax savings potential: $6,200. Wash sale considerations: low. Optimal timing: before year-end.',
    opportunities: 'Harvest investment losses to offset capital gains and reduce tax liability, maintain market exposure through substitute investments, optimize tax efficiency.',
    client: getClient('cl004'),
    advisor: getAdvisor('fa001'),
    category: 'Investment Products',
    priority: 'High'
  },
  {
    id: 'spec_004',
    insight: 'Specialized Strategies',
    title: 'Currency Hedging Strategy',
    insightText: 'International portfolio exposure creates currency risk. Current unhedged international allocation: 18%. Recommended hedging ratio: 50%. Focus currencies: EUR, JPY, GBP.',
    opportunities: 'Implement selective currency hedging to reduce foreign exchange risk while maintaining international diversification benefits.',
    client: getClient('cl001'),
    advisor: getAdvisor('fa001'),
    category: 'Investment Products',
    priority: 'Low'
  },
  {
    id: 'spec_005',
    insight: 'Specialized Strategies',
    title: 'Behavioral Finance Coaching',
    insightText: 'Client shows tendency for emotional investment decisions. Market timing attempts detected. Performance impact: -2.1% annually. Behavioral score: needs improvement.',
    opportunities: 'Implement systematic investment approach with behavioral coaching, establish dollar-cost averaging discipline, create investment policy statement for decision framework.',
    client: getClient('cl008'),
    advisor: getAdvisor('fa004'),
    category: 'Investment Products',
    priority: 'Medium'
  },

  // ANNUITIES INSIGHTS (75 examples - 5 for each of 15 insight types) - Enhanced with EDJ Propensity Model
  
  // ANNUITIES NEARING SURRENDER DATE (5 examples)
  {
    id: 'ann_001',
    insight: 'Annuities',
    title: 'Variable Annuity Surrender Alert - 30 Days',
    insightText: 'EDJ Annuities Propensity Model Score: 88.4/100 (Confidence: 92%). Client Harold Wilson has Variable Annuity contract ABC-789 with surrender period ending in 28 days. Current surrender charge: $15,200. Account value: $380,000.',
    opportunities: 'Generate immediate client communication to discuss surrender options, schedule meeting to review contract terms, evaluate tax implications and alternative investment strategies.',
    client: getClient('cl012'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'High',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'AnnuitySurrender_TimeAlert_v3.1',
    reasoning: 'Time-sensitive propensity modeling indicates critical action window for surrender decision. Model analyzes contract performance, current market conditions, and client tax situation. Regulatory compliance ensured: FINRA Rule 2330 annuity suitability requirements met, surrender charge disclosure documented, replacement analysis protocols activated for comprehensive client protection.'
  },
  {
    id: 'ann_002',
    insight: 'Annuities',
    title: 'Fixed Annuity Surrender Window Opening',
    insightText: 'Client Patricia Davis has Fixed Annuity maturing surrender period in 15 days. Current rate: 3.2%. Market alternatives available at 5.1%. Contract value: $185,000.',
    opportunities: 'Schedule immediate consultation to review surrender options, present alternative fixed income strategies, evaluate rate environment advantages for repositioning.',
    client: getClient('cl013'),
    advisor: getAdvisor('fa005'),
    category: 'Investment Products',
    priority: 'High'
  },
  {
    id: 'ann_003',
    insight: 'Annuities',
    title: 'Indexed Annuity Penalty Expiration',
    insightText: 'Charles Brown\'s Indexed Annuity contract penalty period expires in 22 days. Contract participation rate: 75%. Current cap rate: 4.5%. Market index performance: +12.8% YTD.',
    opportunities: 'Evaluate contract performance versus market alternatives, review participation rates and caps, consider surrender for enhanced market exposure.',
    client: getClient('cl014'),
    advisor: getAdvisor('fa003'),
    category: 'Investment Products',
    priority: 'High'
  },
  {
    id: 'ann_004',
    insight: 'Annuities',
    title: 'MYGA Maturity Approaching',
    insightText: 'George Anderson\'s Multi-Year Guarantee Annuity (MYGA) matures in 25 days. Guaranteed rate: 2.8%. Current market rates: 4.6%. Principal amount: $275,000.',
    opportunities: 'Present current market rate environment advantages, evaluate rollover strategies, discuss enhanced yield opportunities with similar risk profile.',
    client: getClient('cl015'),
    advisor: getAdvisor('fa007'),
    category: 'Investment Products',
    priority: 'High'
  },
  {
    id: 'ann_005',
    insight: 'Annuities',
    title: 'Immediate Annuity Review Window',
    insightText: 'EDJ Annuities Propensity Model Score: 85.7/100 (Confidence: 88%). Dorothy Taylor\'s Immediate Annuity has annual review period opening in 18 days. Current monthly payout: $8,500. Inflation adjustment available.',
    opportunities: 'Schedule annual review meeting, evaluate payout optimization options, review beneficiary designations and inflation adjustments.',
    client: getClient('cl016'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'High',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'ImmediateAnnuity_ReviewOptimizer_v2.4',
    reasoning: 'Propensity model indicates high value opportunity for immediate annuity optimization based on client age, income needs, and market conditions. Analysis includes inflation protection evaluation, beneficiary optimization, and payout maximization strategies. Regulatory framework: meets FINRA Rule 2330 supervision requirements and state insurance regulations for annuity modifications.'
  },

  // ANNUITY PRODUCT SUITABILITY ANALYSIS (5 examples)
  {
    id: 'ann_006',
    insight: 'Annuities',
    title: 'Variable Annuity Suitability Match',
    insightText: 'EDJ Annuities Propensity Model Score: 79.3/100 (Confidence: 83%). Client analysis indicates strong suitability for Variable Annuity allocation. Age: 58, Risk tolerance: Moderate, Investment horizon: 15+ years. Tax-deferred growth potential: $145,000 over term.',
    opportunities: 'Present variable annuity options with diversified sub-account selections, emphasize tax-deferred growth benefits, structure systematic investment plan.',
    client: getClient('cl015'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'VariableAnnuity_Suitability_Engine_v3.2',
    reasoning: 'Advanced suitability modeling evaluates client demographics, risk capacity, investment timeline, and tax situation for variable annuity appropriateness. Model considers surrender charges, expense ratios, and sub-account performance history. Compliance verification: FINRA Rule 2330 suitability determination completed, principal protection needs assessed, liquidity requirements evaluated per regulatory standards.'
  },
  {
    id: 'ann_007',
    insight: 'Annuities',
    title: 'Fixed Immediate Annuity Recommendation',
    insightText: 'Harold Wilson shows optimal profile for Fixed Immediate Annuity. Current age: 68, Income gap: $2,800/month, Risk profile: Conservative. Guaranteed monthly income available: $3,200.',
    opportunities: 'Structure immediate annuity to bridge income gap, provide guaranteed lifetime payments, coordinate with Social Security optimization strategy.',
    client: getClient('cl012'),
    advisor: getAdvisor('fa007'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'ann_008',
    insight: 'Annuities',
    title: 'Deferred Income Annuity Opportunity',
    insightText: 'EDJ Annuities Propensity Model Score: 82.1/100 (Confidence: 86%). Patricia Davis profile aligns with Deferred Income Annuity (DIA) strategy. Target income start: Age 70, Premium available: $200,000. Projected monthly income: $2,400.',
    opportunities: 'Structure DIA for future income certainty, coordinate with retirement timeline, provide longevity insurance against market volatility.',
    client: getClient('cl013'),
    advisor: getAdvisor('fa005'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'DeferredIncome_LongevityProtection_v2.8',
    reasoning: 'Predictive longevity and income modeling identifies optimal deferred income annuity suitability based on life expectancy, retirement income projections, and market volatility protection needs. Model incorporates mortality credits, interest rate environment, and income timing optimization. Regulatory compliance: meets state insurance department requirements for longevity insurance products and FINRA coordination standards.'
  },
  {
    id: 'ann_009',
    insight: 'Annuities',
    title: 'Index Annuity Growth Potential',
    insightText: 'Charles Brown\'s moderate risk tolerance and growth objectives indicate Index Annuity suitability. Market participation desired with principal protection. Allocation recommendation: $150,000.',
    opportunities: 'Present index annuity options with favorable participation rates and caps, emphasize principal protection with growth potential, structure allocation strategy.',
    client: getClient('cl014'),
    advisor: getAdvisor('fa003'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'ann_010',
    insight: 'Annuities',
    title: 'QLAC Optimization Strategy',
    insightText: 'EDJ Annuities Propensity Model Score: 87.9/100 (Confidence: 91%). Dorothy Taylor\'s IRA balance of $850,000 presents QLAC opportunity. Maximum QLAC premium: $200,000. RMD reduction benefit: $8,500 annually.',
    opportunities: 'Structure Qualified Longevity Annuity Contract (QLAC) to reduce required minimum distributions, defer income to age 85, optimize tax efficiency.',
    client: getClient('cl016'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'QLAC_RMD_TaxOptimizer_v3.5',
    reasoning: 'Sophisticated tax and longevity modeling identifies optimal QLAC utilization for RMD minimization and longevity protection. Analysis includes IRS Section 401(a)(9) compliance, premium limitations ($200K or 25% of account), and optimal deferral timing. Regulatory framework ensures Treasury Regulation 1.401(a)(9)-6 compliance and coordination with existing retirement account distributions.'
  },

  // ANNUITY INCOME OPTIMIZATION ALERT (5 examples)
  {
    id: 'ann_011',
    insight: 'Annuities',
    title: 'Income Rider Activation Opportunity',
    insightText: 'EDJ Annuities Propensity Model Score: 84.6/100 (Confidence: 89%). Harold Wilson\'s Variable Annuity has unused Guaranteed Minimum Income Benefit (GMIB) rider. High-water mark: $420,000. Current income base: $380,000.',
    opportunities: 'Activate income rider to lock in higher benefit base, optimize withdrawal strategy, coordinate with other retirement income sources.',
    client: getClient('cl012'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'IncomeRider_Activation_Optimizer_v2.7',
    reasoning: 'Income optimization modeling identifies optimal timing for rider activation based on high-water mark analysis, current market conditions, and client income needs. Model evaluates benefit base growth, withdrawal rates, and long-term income maximization strategies. Compliance considerations include rider contract terms, insurance company ratings, and FINRA supervision requirements for annuity recommendations.'
  },
  {
    id: 'ann_012',
    insight: 'Annuities',
    title: 'Systematic Withdrawal Rate Optimization',
    insightText: 'Patricia Davis\'s current annuity withdrawal rate of 3.5% could be optimized to 4.2% based on actuarial analysis. Current monthly income: $2,750. Optimized potential: $3,325.',
    opportunities: 'Restructure withdrawal strategy to maximize income while preserving principal, evaluate step-up options, coordinate with Social Security timing.',
    client: getClient('cl013'),
    advisor: getAdvisor('fa005'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'ann_013',
    insight: 'Annuities',
    title: 'Annuitization vs. Withdrawal Analysis',
    insightText: 'EDJ Annuities Propensity Model Score: 78.2/100 (Confidence: 81%). Charles Brown\'s annuity contract presents optimization opportunity: Annuitization provides $2,100/month vs current withdrawals $1,850/month.',
    opportunities: 'Analyze annuitization benefits versus systematic withdrawals, evaluate lifetime income guarantees, assess liquidity trade-offs.',
    client: getClient('cl014'),
    advisor: getAdvisor('fa003'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'Annuitization_vs_Withdrawal_Calculator_v3.1',
    reasoning: 'Comprehensive income optimization analysis compares annuitization benefits versus systematic withdrawal strategies. Model incorporates mortality credits, interest rate assumptions, inflation protection, and liquidity preferences. Regulatory evaluation includes annuitization election requirements, irrevocability considerations, and client suitability assessment per insurance regulations.'
  },
  {
    id: 'ann_014',
    insight: 'Annuities',
    title: 'Income Floor Strategy Implementation',
    insightText: 'George Anderson\'s retirement income plan shows $1,200 monthly gap between expenses and guaranteed income. Annuity income floor strategy could bridge this gap with $1,350 monthly payments.',
    opportunities: 'Implement income floor strategy using immediate or deferred annuity, coordinate with investment portfolio, establish reliable income foundation.',
    client: getClient('cl015'),
    advisor: getAdvisor('fa007'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'ann_015',
    insight: 'Annuities',
    title: 'Joint Life Annuity Optimization',
    insightText: 'EDJ Annuities Propensity Model Score: 86.8/100 (Confidence: 88%). Dorothy Taylor\'s single life annuity could be optimized with joint life option for spouse protection. Current: $8,500/month. Joint life: $7,800/month with 75% survivor benefit.',
    opportunities: 'Evaluate joint life annuity benefits for spousal protection, analyze survivor income needs, optimize payout structure for both lives.',
    client: getClient('cl016'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'JointLife_SurvivorOptimization_v2.9',
    reasoning: 'Advanced actuarial modeling optimizes joint life annuity structure based on age differential, health factors, and survivor income needs. Analysis includes mortality tables, interest rate assumptions, and optimal survivor benefit percentages. Regulatory compliance ensures proper disclosure of payout reductions, survivor benefits, and election timing requirements per state insurance regulations.'
  },

  // VARIABLE ANNUITY PERFORMANCE REVIEW (5 examples)
  {
    id: 'ann_016',
    insight: 'Annuities',
    title: 'Sub-Account Underperformance Alert',
    insightText: 'EDJ Annuities Propensity Model Score: 77.4/100 (Confidence: 84%). Harold Wilson\'s Variable Annuity sub-account allocation shows underperformance: Growth Fund -2.8% vs benchmark +4.2% over 3 years. Total impact: $28,500.',
    opportunities: 'Rebalance sub-account allocation to better-performing options, conduct manager analysis, optimize asset allocation within contract.',
    client: getClient('cl012'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'SubAccount_Performance_Analyzer_v3.6',
    reasoning: 'Performance attribution modeling identifies sub-account underperformance relative to benchmarks and peer funds. Analysis includes expense ratio impact, manager tenure, style drift, and rebalancing recommendations. Regulatory oversight ensures FINRA Rule 2330 performance monitoring requirements and proper documentation of sub-account recommendations within annuity contracts.'
  },
  {
    id: 'ann_017',
    insight: 'Annuities',
    title: 'Asset Allocation Rebalancing Need',
    insightText: 'Patricia Davis\'s Variable Annuity has drifted from target allocation: Current 85% equity / 15% fixed income. Target: 60% / 40%. Market gains created $45,000 overweighting.',
    opportunities: 'Rebalance sub-account allocation to target levels, harvest gains in overweighted positions, maintain risk-appropriate allocation.',
    client: getClient('cl013'),
    advisor: getAdvisor('fa005'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'ann_018',
    insight: 'Annuities',
    title: 'Expense Ratio Optimization',
    insightText: 'EDJ Annuities Propensity Model Score: 75.9/100 (Confidence: 79%). Charles Brown\'s Variable Annuity sub-accounts show high expense ratios: Average 1.85%. Lower-cost alternatives available within contract averaging 0.95%.',
    opportunities: 'Transition to lower-cost sub-account options within existing contract, maintain similar asset allocation, reduce annual expenses by $3,400.',
    client: getClient('cl014'),
    advisor: getAdvisor('fa003'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'ExpenseRatio_CostOptimizer_v2.5',
    reasoning: 'Cost optimization modeling identifies lower-expense sub-account alternatives within existing variable annuity contracts. Analysis compares expense ratios, performance history, and manager quality to optimize net returns. Regulatory compliance includes proper disclosure of expense differences and impact on long-term performance per FINRA investor protection standards.'
  },
  {
    id: 'ann_019',
    insight: 'Annuities',
    title: 'Dollar Cost Averaging Completion',
    insightText: 'George Anderson\'s Variable Annuity dollar cost averaging program completes next month. Total invested: $180,000 over 18 months. Market timing analysis shows favorable completion.',
    opportunities: 'Evaluate dollar cost averaging program results, determine optimal completion strategy, assess market conditions for final investment.',
    client: getClient('cl015'),
    advisor: getAdvisor('fa007'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'ann_020',
    insight: 'Annuities',
    title: 'Variable Annuity vs. Mutual Fund Analysis',
    insightText: 'EDJ Annuities Propensity Model Score: 73.1/100 (Confidence: 77%). Dorothy Taylor\'s Variable Annuity performance comparison with equivalent mutual fund portfolio shows net advantage of $18,500 due to tax deferral benefits.',
    opportunities: 'Highlight tax deferral advantages of variable annuity structure, quantify long-term benefits, validate continuation strategy versus alternatives.',
    client: getClient('cl016'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'VA_vs_MutualFund_TaxAnalyzer_v3.3',
    reasoning: 'Comparative performance modeling evaluates variable annuity tax advantages versus mutual fund alternatives. Analysis includes tax deferral benefits, expense differentials, and net performance calculations. Model considers current tax rates, holding periods, and withdrawal timing to validate annuity structure benefits per IRS Section 72 tax treatment.'
  },

  // ANNUITY RIDER BENEFIT ANALYSIS (5 examples)
  {
    id: 'ann_021',
    insight: 'Annuities',
    title: 'Guaranteed Minimum Withdrawal Benefit Optimization',
    insightText: 'EDJ Annuities Propensity Model Score: 89.2/100 (Confidence: 93%). Harold Wilson\'s GMWB rider shows optimal utilization opportunity. Benefit base: $450,000. Annual withdrawal available: $22,500 (5%). Current withdrawals: $18,000.',
    opportunities: 'Optimize GMWB rider utilization to maximum benefit level, structure systematic withdrawal plan, coordinate with other income sources.',
    client: getClient('cl012'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'GMWB_OptimalUtilization_v4.1',
    reasoning: 'Advanced rider optimization modeling maximizes guaranteed minimum withdrawal benefit utilization based on client income needs, benefit base calculations, and long-term sustainability. Analysis includes step-up provisions, excess withdrawal impacts, and optimal timing strategies. Regulatory compliance ensures proper rider disclosure, benefit calculations verification, and insurance company financial strength assessment.'
  },
  {
    id: 'ann_022',
    insight: 'Annuities',
    title: 'Long-Term Care Rider Activation',
    insightText: 'Patricia Davis\'s annuity includes unused Long-Term Care rider benefit. LTC costs in area: $6,200/month. Rider benefit available: $4,800/month for 60 months. Activation age: 65.',
    opportunities: 'Evaluate LTC rider benefits versus standalone insurance, assess current health status for activation timing, coordinate with comprehensive LTC planning.',
    client: getClient('cl013'),
    advisor: getAdvisor('fa005'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'ann_023',
    insight: 'Annuities',
    title: 'Death Benefit Enhancement Review',
    insightText: 'EDJ Annuities Propensity Model Score: 81.7/100 (Confidence: 85%). Charles Brown\'s Variable Annuity death benefit is basic return of premium. Enhanced death benefit riders available: Stepped-up benefit could provide additional $75,000 protection.',
    opportunities: 'Review death benefit enhancement options, evaluate cost versus benefit of upgraded riders, assess estate planning objectives.',
    client: getClient('cl014'),
    advisor: getAdvisor('fa003'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'DeathBenefit_EnhancementAnalyzer_v2.8',
    reasoning: 'Estate planning and insurance modeling evaluates death benefit rider enhancements based on client age, health, and estate objectives. Analysis includes rider costs, benefit calculations, and estate tax implications. Model considers life insurance alternatives, estate liquidity needs, and optimal benefit structuring per IRS estate tax regulations and insurance contract provisions.'
  },
  {
    id: 'ann_024',
    insight: 'Annuities',
    title: 'Guaranteed Minimum Accumulation Benefit Status',
    insightText: 'George Anderson\'s GMAB rider provides 6% annual step-up guarantee. Current account value: $285,000. GMAB value: $312,000. Rider has outperformed by $27,000.',
    opportunities: 'Monitor GMAB rider performance advantage, evaluate long-term benefit projections, assess optimal annuitization timing to capture guarantees.',
    client: getClient('cl015'),
    advisor: getAdvisor('fa007'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'ann_025',
    insight: 'Annuities',
    title: 'Income Doubler Rider Analysis',
    insightText: 'EDJ Annuities Propensity Model Score: 84.3/100 (Confidence: 88%). Dorothy Taylor\'s annuity includes Income Doubler rider for nursing home care. Trigger: 90-day elimination period. Current income: $8,500. Doubled benefit: $17,000/month.',
    opportunities: 'Review Income Doubler rider terms and activation requirements, coordinate with LTC planning, evaluate trigger event preparation.',
    client: getClient('cl016'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'IncomeDoubler_LTC_Coordinator_v3.2',
    reasoning: 'Long-term care and income modeling analyzes Income Doubler rider benefits for nursing home cost coverage. Model evaluates trigger requirements, elimination periods, and benefit coordination with other LTC coverage. Analysis includes actuarial probability of trigger events, regional LTC costs, and optimal benefit structuring per state insurance regulations and HIPAA privacy requirements.'
  },

  // FIXED ANNUITY RATE RENEWAL ALERT (5 examples)
  {
    id: 'ann_026',
    insight: 'Annuities',
    title: 'Multi-Year Guarantee Annuity Renewal',
    insightText: 'Harold Wilson\'s 5-year MYGA renews in 45 days at 2.1% guaranteed rate. Current market rates for similar products: 4.8%. Opportunity for 2.7% rate improvement.',
    opportunities: 'Present current market rate environment for MYGA renewals, evaluate 1035 exchange opportunities, compare insurance company financial ratings.',
    client: getClient('cl012'),
    advisor: getAdvisor('fa007'),
    category: 'Investment Products',
    priority: 'Low'
  },
  {
    id: 'ann_027',
    insight: 'Annuities',
    title: 'Fixed Rate Annuity Market Comparison',
    insightText: 'EDJ Annuities Propensity Model Score: 76.8/100 (Confidence: 82%). Patricia Davis\'s Fixed Annuity renewal rate of 3.4% compares unfavorably to current market leaders offering 5.1% for similar terms and A+ rated carriers.',
    opportunities: 'Conduct comprehensive rate comparison across A-rated insurance carriers, evaluate 1035 exchange benefits, optimize rate capture timing.',
    client: getClient('cl013'),
    advisor: getAdvisor('fa005'),
    category: 'Investment Products',
    priority: 'Low',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'FixedRate_MarketComparison_v2.6',
    reasoning: 'Interest rate environment modeling identifies optimal fixed annuity rate opportunities across insurance carriers. Analysis includes financial strength ratings, renewal rate histories, and competitive market positioning. Model considers 1035 exchange implications, surrender charges, and optimal timing for rate capture per IRC Section 1035 tax-deferred exchange regulations.'
  },
  {
    id: 'ann_028',
    insight: 'Annuities',
    title: 'Certificate of Deposit Alternative',
    insightText: 'Charles Brown\'s maturing Fixed Annuity at 2.8% faces renewal decision. Bank CD alternatives: 5-year at 4.9%. Tax implications favor continued annuity deferral.',
    opportunities: 'Compare fixed annuity renewal versus CD alternatives, evaluate tax deferral benefits, assess FDIC versus insurance company protection.',
    client: getClient('cl014'),
    advisor: getAdvisor('fa003'),
    category: 'Investment Products',
    priority: 'Low'
  },
  {
    id: 'ann_029',
    insight: 'Annuities',
    title: 'Rate Lock Strategy Timing',
    insightText: 'EDJ Annuities Propensity Model Score: 78.5/100 (Confidence: 80%). George Anderson\'s Fixed Annuity rate lock window opens in 30 days. Federal Reserve rate trajectory suggests potential for 0.5% higher rates in next quarter.',
    opportunities: 'Monitor interest rate environment for optimal rate lock timing, evaluate short-term extensions versus immediate renewal, coordinate with Fed policy expectations.',
    client: getClient('cl015'),
    advisor: getAdvisor('fa007'),
    category: 'Investment Products',
    priority: 'Low',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'RateLock_TimingOptimizer_v3.4',
    reasoning: 'Interest rate forecasting and timing optimization model analyzes Federal Reserve policy trajectory and optimal rate lock timing. Model incorporates yield curve analysis, insurance company rate setting patterns, and economic indicators. Analysis ensures optimal rate capture timing while considering contract extension options and market volatility impacts on guaranteed rates.'
  },
  {
    id: 'ann_030',
    insight: 'Annuities',
    title: 'Bonus Rate Annuity Opportunity',
    insightText: 'Dorothy Taylor\'s Fixed Annuity renewal presents bonus rate opportunity. Current carrier offers 3.2% base. Competitor A+ rated carrier offers 4.7% with 8% first-year bonus on $500K+ deposits.',
    opportunities: 'Evaluate first-year bonus rate opportunities, assess long-term rate competitiveness, review insurance company financial strength and stability.',
    client: getClient('cl016'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Low'
  },

  // ANNUITY DISTRIBUTION TAX PLANNING (5 examples)
  {
    id: 'ann_031',
    insight: 'Annuities',
    title: 'Tax-Efficient Distribution Strategy',
    insightText: 'EDJ Annuities Propensity Model Score: 87.6/100 (Confidence: 91%). Harold Wilson\'s annuity distributions can be optimized for tax efficiency. Current strategy generates $12,500 annual taxes. Optimized approach: $8,900 taxes through strategic withdrawal timing.',
    opportunities: 'Implement tax-efficient distribution strategy using FIFO accounting, coordinate with other income timing, optimize tax bracket management.',
    client: getClient('cl012'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'AnnuityTax_OptimizationEngine_v4.2',
    reasoning: 'Comprehensive tax optimization modeling analyzes annuity distribution strategies to minimize tax impact. Model incorporates FIFO/LIFO accounting methods, income timing coordination, and tax bracket optimization. Analysis ensures IRS Section 72 compliance for annuity taxation, proper basis recovery calculations, and coordination with other retirement income tax planning strategies.'
  },
  {
    id: 'ann_032',
    insight: 'Annuities',
    title: 'Required Minimum Distribution Coordination',
    insightText: 'Patricia Davis\'s IRA RMDs begin next year at $28,000. Annuity distributions of $18,000 can be timed to minimize combined tax impact through bracket management.',
    opportunities: 'Coordinate annuity distributions with IRA RMD timing, optimize total tax burden through strategic income timing, evaluate Roth conversion opportunities.',
    client: getClient('cl013'),
    advisor: getAdvisor('fa005'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'ann_033',
    insight: 'Annuities',
    title: '1035 Exchange Tax Deferral',
    insightText: 'EDJ Annuities Propensity Model Score: 82.4/100 (Confidence: 87%). Charles Brown\'s annuity position shows 1035 exchange opportunity to defer $45,000 in taxable gains while upgrading to enhanced contract features.',
    opportunities: 'Execute tax-deferred 1035 exchange to superior annuity contract, maintain tax deferral status, upgrade contract features and benefits.',
    client: getClient('cl014'),
    advisor: getAdvisor('fa003'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'Exchange1035_TaxDeferral_v3.7',
    reasoning: 'Tax-deferred exchange modeling optimizes IRC Section 1035 like-kind exchange opportunities for annuity contract upgrades. Analysis includes tax deferral preservation, contract enhancement benefits, and surrender charge mitigation. Model ensures proper 1035 exchange procedures, carrier coordination, and maintenance of tax-deferred status per IRS regulations and insurance industry standards.'
  },
  {
    id: 'ann_034',
    insight: 'Annuities',
    title: 'Estate Tax Distribution Planning',
    insightText: 'George Anderson\'s annuity beneficiary designation requires optimization for estate tax efficiency. Current structure may generate unnecessary estate taxes of $35,000.',
    opportunities: 'Restructure annuity beneficiary designations for estate tax optimization, evaluate spousal rollover benefits, coordinate with estate planning strategies.',
    client: getClient('cl015'),
    advisor: getAdvisor('fa007'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'ann_035',
    insight: 'Annuities',
    title: 'Charitable Distribution Strategy',
    insightText: 'EDJ Annuities Propensity Model Score: 79.8/100 (Confidence: 84%). Dorothy Taylor\'s annuity presents charitable giving opportunity. Charitable remainder trust structure could provide $95,000 tax deduction while maintaining income stream.',
    opportunities: 'Structure charitable remainder trust using annuity assets, capture significant tax deductions, maintain lifetime income while supporting charitable objectives.',
    client: getClient('cl016'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'CharitableTrust_AnnuityOptimizer_v2.9',
    reasoning: 'Charitable planning and tax optimization modeling structures annuity assets for charitable remainder trust benefits. Analysis includes charitable deduction calculations, income tax benefits, and estate tax reduction strategies. Model ensures proper charitable trust structuring per IRS Section 664 regulations, actuarial calculations, and coordination with overall estate and tax planning objectives.'
  },

  // IMMEDIATE ANNUITIES OPPORTUNITIES (5 examples)
  {
    id: 'ann_036',
    insight: 'Annuities',
    title: 'Pension Replacement Strategy',
    insightText: 'EDJ Annuities Propensity Model Score: 91.5/100 (Confidence: 95%). Harold Wilson\'s pension lump sum election of $650,000 versus monthly pension of $3,800 shows immediate annuity advantage: $4,200/month with A+ rated carrier.',
    opportunities: 'Structure immediate annuity to replace pension benefits, capture enhanced monthly income, provide spouse protection options.',
    client: getClient('cl012'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'PensionReplacement_ImmediateAnnuity_v4.8',
    reasoning: 'Pension optimization and immediate annuity modeling compares lump sum elections with immediate annuity income streams. Analysis includes mortality credits, interest rate environments, and spousal protection options. Model evaluates insurance company financial strength, payout rates, and optimal election timing per ERISA pension regulations and IRS qualified plan distribution requirements.'
  },
  {
    id: 'ann_037',
    insight: 'Annuities',
    title: 'Social Security Bridge Income',
    insightText: 'Patricia Davis retiring at 62 faces 4-year Social Security gap. Immediate annuity with $200,000 premium provides $1,350/month bridge income until full Social Security benefits begin.',
    opportunities: 'Create Social Security bridge strategy using immediate annuity, provide guaranteed income during gap years, optimize overall retirement income timing.',
    client: getClient('cl013'),
    advisor: getAdvisor('fa005'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'ann_038',
    insight: 'Annuities',
    title: 'Longevity Insurance Implementation',
    insightText: 'EDJ Annuities Propensity Model Score: 86.3/100 (Confidence: 89%). Charles Brown\'s retirement plan lacks longevity protection. Immediate annuity allocation of $150,000 provides $1,100/month lifetime income insurance against portfolio depletion.',
    opportunities: 'Implement longevity insurance through immediate annuity, protect against portfolio sequence risk, ensure lifetime income foundation.',
    client: getClient('cl014'),
    advisor: getAdvisor('fa003'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'LongevityInsurance_SequenceRisk_v3.6',
    reasoning: 'Longevity and sequence risk modeling identifies optimal immediate annuity allocation for portfolio protection. Analysis includes life expectancy projections, market volatility impacts, and income sustainability. Model evaluates mortality pooling benefits, interest rate environments, and optimal allocation percentages for retirement income security per academic retirement research and actuarial best practices.'
  },
  {
    id: 'ann_039',
    insight: 'Annuities',
    title: 'Joint Life Immediate Annuity',
    insightText: 'George Anderson and spouse require coordinated lifetime income. Joint and 75% survivor immediate annuity provides $2,800/month during both lives, $2,100/month for survivor.',
    opportunities: 'Structure joint life immediate annuity for coordinated spousal protection, optimize survivor benefit percentages, coordinate with Social Security strategies.',
    client: getClient('cl015'),
    advisor: getAdvisor('fa007'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'ann_040',
    insight: 'Annuities',
    title: 'Inflation-Protected Immediate Annuity',
    insightText: 'EDJ Annuities Propensity Model Score: 88.7/100 (Confidence: 92%). Dorothy Taylor\'s fixed income strategy needs inflation protection. Inflation-indexed immediate annuity starts at $7,200/month with 3% annual increases.',
    opportunities: 'Implement inflation-protected immediate annuity to maintain purchasing power, provide escalating income stream, protect against long-term inflation erosion.',
    client: getClient('cl016'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'InflationProtected_IncomeStream_v3.4',
    reasoning: 'Inflation protection and purchasing power modeling optimizes inflation-indexed immediate annuity structures. Analysis includes inflation assumptions, real return calculations, and purchasing power preservation strategies. Model evaluates CPI-adjustment mechanisms, initial payout reductions, and long-term inflation protection benefits per insurance industry inflation-adjustment protocols and economic forecasting models.'
  },

  // DEFERRED ANNUITY OPPORTUNITIES (5 examples)
  {
    id: 'ann_041',
    insight: 'Annuities',
    title: 'Tax-Deferred Accumulation Strategy',
    insightText: 'EDJ Annuities Propensity Model Score: 84.9/100 (Confidence: 88%). Harold Wilson\'s high current income and 15-year investment horizon indicate optimal deferred annuity strategy. Tax deferral advantage: $125,000 over accumulation period.',
    opportunities: 'Implement tax-deferred accumulation strategy using variable or fixed deferred annuity, maximize compound growth benefits, optimize tax efficiency.',
    client: getClient('cl012'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'TaxDeferred_AccumulationStrategy_v4.1',
    reasoning: 'Tax-deferred accumulation modeling optimizes deferred annuity strategies for high-income clients with long investment horizons. Analysis includes tax deferral benefits, compound growth advantages, and optimal contract structures. Model considers current tax rates, future tax projections, and withdrawal timing strategies per IRS Section 72 annuity taxation rules and long-term wealth accumulation principles.'
  },
  {
    id: 'ann_042',
    insight: 'Annuities',
    title: 'Retirement Income Deferral',
    insightText: 'Patricia Davis\'s early retirement at 58 requires income bridge. Deferred income annuity starting at age 67 with $180,000 premium provides $2,200/month when Social Security begins.',
    opportunities: 'Structure deferred income annuity to coordinate with Social Security timing, bridge retirement income gap, provide guaranteed future income.',
    client: getClient('cl013'),
    advisor: getAdvisor('fa005'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'ann_043',
    insight: 'Annuities',
    title: 'Legacy Wealth Transfer Enhancement',
    insightText: 'EDJ Annuities Propensity Model Score: 79.6/100 (Confidence: 83%). Charles Brown\'s estate planning objectives support deferred annuity with enhanced death benefits. Strategy provides tax-deferred growth plus $50,000 death benefit enhancement.',
    opportunities: 'Structure deferred annuity with enhanced death benefits for estate planning, provide tax-deferred growth, enhance wealth transfer efficiency.',
    client: getClient('cl014'),
    advisor: getAdvisor('fa003'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'EstateEnhanced_DeferredAnnuity_v3.2',
    reasoning: 'Estate planning and deferred annuity modeling optimizes wealth transfer strategies through enhanced death benefit riders. Analysis includes estate tax implications, generation-skipping benefits, and optimal beneficiary structuring. Model evaluates insurance company ratings, death benefit costs, and estate liquidity planning per IRS estate tax regulations and insurance contract provisions.'
  },
  {
    id: 'ann_044',
    insight: 'Annuities',
    title: 'Market Volatility Protection',
    insightText: 'George Anderson\'s pre-retirement portfolio requires volatility protection. Deferred fixed indexed annuity provides market upside participation with principal protection over 8-year accumulation period.',
    opportunities: 'Implement market volatility protection through indexed deferred annuity, capture market upside with downside protection, structure optimal allocation timing.',
    client: getClient('cl015'),
    advisor: getAdvisor('fa007'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'ann_045',
    insight: 'Annuities',
    title: 'Spousal IRA Deferred Annuity',
    insightText: 'EDJ Annuities Propensity Model Score: 87.1/100 (Confidence: 90%). Dorothy Taylor\'s spousal IRA rollover of $425,000 presents deferred annuity opportunity with guaranteed 5% benefit base growth and future income options.',
    opportunities: 'Structure spousal IRA deferred annuity with guaranteed growth benefits, optimize future income timing, coordinate with overall retirement strategy.',
    client: getClient('cl016'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'SpousalIRA_DeferredAnnuity_v3.8',
    reasoning: 'Spousal IRA and deferred annuity optimization modeling structures qualified account annuities for optimal retirement income. Analysis includes IRA rollover procedures, qualified annuity benefits, and RMD coordination. Model ensures proper IRA annuity structuring per IRS Publication 590, qualified contract requirements, and optimal income timing strategies for spousal retirement accounts.'
  },

  // INDEX ANNUITIES OPPORTUNITIES (5 examples)
  {
    id: 'ann_046',
    insight: 'Annuities',
    title: 'S&P 500 Index Participation Strategy',
    insightText: 'EDJ Annuities Propensity Model Score: 82.8/100 (Confidence: 86%). Harold Wilson\'s moderate growth objectives align with S&P 500 indexed annuity. Current offering: 85% participation rate, 7% cap, 0% floor protection.',
    opportunities: 'Structure S&P 500 indexed annuity for market participation with principal protection, optimize participation rates and caps, coordinate with equity allocation.',
    client: getClient('cl012'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'IndexParticipation_SP500Strategy_v3.9',
    reasoning: 'Index participation and principal protection modeling optimizes indexed annuity structures for market exposure with downside protection. Analysis includes participation rates, cap rates, and floor guarantees relative to direct market investment. Model evaluates insurance company hedging strategies, optimal index selection, and client risk capacity per indexed annuity regulatory guidelines and suitability standards.'
  },
  {
    id: 'ann_047',
    insight: 'Annuities',
    title: 'Multi-Index Diversification Strategy',
    insightText: 'Patricia Davis\'s diversification objectives support multi-index annuity strategy. Available options: S&P 500 (40%), NASDAQ (30%), International (20%), Bond Index (10%) allocation.',
    opportunities: 'Implement diversified multi-index annuity strategy, capture broad market exposure with protection, optimize index allocation percentages.',
    client: getClient('cl013'),
    advisor: getAdvisor('fa005'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'ann_048',
    insight: 'Annuities',
    title: 'Volatility Control Index Option',
    insightText: 'EDJ Annuities Propensity Model Score: 76.4/100 (Confidence: 81%). Charles Brown\'s risk tolerance indicates volatility-controlled index annuity suitability. 5% volatility target index provides enhanced participation with reduced fluctuation.',
    opportunities: 'Structure volatility-controlled index annuity for enhanced risk-adjusted returns, optimize volatility targets, balance participation and protection.',
    client: getClient('cl014'),
    advisor: getAdvisor('fa003'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'VolatilityControl_IndexStrategy_v2.7',
    reasoning: 'Volatility control and risk management modeling optimizes low-volatility index annuity strategies for enhanced risk-adjusted returns. Analysis includes volatility targeting mechanisms, participation enhancement benefits, and downside protection features. Model evaluates index construction methodologies, volatility control effectiveness, and optimal target volatility levels per insurance industry risk management practices.'
  },
  {
    id: 'ann_049',
    insight: 'Annuities',
    title: 'Index Annuity vs. Direct Investment',
    insightText: 'George Anderson\'s conservative growth strategy comparison: Index annuity 6.8% average with 0% floor versus direct S&P 500 investment 9.2% average with potential losses.',
    opportunities: 'Evaluate index annuity trade-offs versus direct market investment, assess principal protection value, determine optimal allocation percentages.',
    client: getClient('cl015'),
    advisor: getAdvisor('fa007'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'ann_050',
    insight: 'Annuities',
    title: 'Structured Index Crediting Strategy',
    insightText: 'EDJ Annuities Propensity Model Score: 85.2/100 (Confidence: 89%). Dorothy Taylor\'s income-focused strategy benefits from structured index crediting. Buffer protection: First 10% losses absorbed, unlimited upside to 12% cap.',
    opportunities: 'Implement structured index crediting for enhanced protection, optimize buffer and cap combinations, coordinate with income planning objectives.',
    client: getClient('cl016'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'StructuredIndex_BufferStrategy_v3.5',
    reasoning: 'Structured index and buffer protection modeling optimizes downside protection with upside participation through buffer annuity products. Analysis includes buffer levels, cap rates, and protection effectiveness across market scenarios. Model evaluates structured product mechanics, optimal buffer percentages, and client protection objectives per insurance regulatory requirements for structured index annuities.'
  },

  // QLAC EVALUATION (5 examples)
  {
    id: 'ann_051',
    insight: 'Annuities',
    title: 'QLAC RMD Reduction Strategy',
    insightText: 'EDJ Annuities Propensity Model Score: 92.1/100 (Confidence: 96%). Harold Wilson\'s $850,000 IRA balance supports maximum QLAC premium of $200,000. RMD reduction benefit: $8,500 annually starting at age 73.',
    opportunities: 'Implement QLAC strategy to reduce required minimum distributions, defer income to age 85, optimize tax efficiency and longevity protection.',
    client: getClient('cl012'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'QLAC_RMD_OptimizationEngine_v4.7',
    reasoning: 'QLAC and RMD optimization modeling maximizes qualified longevity annuity contract benefits for tax-deferred retirement accounts. Analysis includes premium limitations (25% or $200K), RMD reduction calculations, and optimal deferral timing. Model ensures Treasury Regulation 1.401(a)(9)-6 compliance, longevity protection benefits, and coordination with overall retirement income tax strategies per IRS qualified plan requirements.'
  },
  {
    id: 'ann_052',
    insight: 'Annuities',
    title: 'Longevity Risk Mitigation',
    insightText: 'Patricia Davis\'s retirement planning shows longevity risk exposure. QLAC provides insurance against living beyond age 95 when portfolio may be depleted. QLAC income: $1,800/month starting age 85.',
    opportunities: 'Structure QLAC for longevity risk protection, provide late-life income insurance, coordinate with portfolio withdrawal strategies.',
    client: getClient('cl013'),
    advisor: getAdvisor('fa005'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'ann_053',
    insight: 'Annuities',
    title: 'QLAC Tax Arbitrage Strategy',
    insightText: 'EDJ Annuities Propensity Model Score: 87.9/100 (Confidence: 91%). Charles Brown\'s current 24% tax bracket versus projected 12% bracket at age 85 creates QLAC tax arbitrage opportunity. Tax savings: $32,000 over deferral period.',
    opportunities: 'Capture tax bracket arbitrage through QLAC deferral, optimize current versus future tax rates, coordinate with Roth conversion strategies.',
    client: getClient('cl014'),
    advisor: getAdvisor('fa003'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'QLAC_TaxArbitrage_Calculator_v3.6',
    reasoning: 'Tax arbitrage and QLAC modeling optimizes current versus future tax rate differentials through deferred income strategies. Analysis includes tax bracket projections, QLAC deferral benefits, and optimal premium timing. Model evaluates tax rate assumptions, income deferral advantages, and coordination with other tax planning strategies per IRS tax code provisions and retirement account taxation rules.'
  },
  {
    id: 'ann_054',
    insight: 'Annuities',
    title: 'Spousal QLAC Coordination',
    insightText: 'George Anderson and spouse both eligible for individual QLACs. Combined strategy: $400,000 total premiums providing coordinated longevity protection and enhanced RMD reduction.',
    opportunities: 'Coordinate spousal QLAC strategies for maximum household benefits, optimize individual versus joint approaches, enhance combined longevity protection.',
    client: getClient('cl015'),
    advisor: getAdvisor('fa007'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'ann_055',
    insight: 'Annuities',
    title: 'QLAC Return of Premium Feature',
    insightText: 'EDJ Annuities Propensity Model Score: 89.4/100 (Confidence: 93%). Dorothy Taylor\'s QLAC evaluation shows return of premium rider benefits. Death benefit protection ensures $200,000 premium recovery if death occurs before age 85.',
    opportunities: 'Structure QLAC with return of premium protection, ensure beneficiary protection, balance longevity insurance with estate preservation.',
    client: getClient('cl016'),
    advisor: getAdvisor('fa006'),
    category: 'Investment Products',
    priority: 'Medium',
    source: 'EDJ Annuities Propensity Model',
    logic: 'Model based',
    modelRuleName: 'QLAC_ReturnPremium_EstateBalance_v3.3',
    reasoning: 'QLAC estate planning and return of premium modeling balances longevity protection with beneficiary interests. Analysis includes death benefit calculations, premium recovery mechanisms, and estate planning coordination. Model evaluates return of premium costs, estate liquidity impacts, and optimal benefit structuring per QLAC regulatory requirements and estate planning best practices.'
  },

  // RMD INSIGHTS (25 examples - 5 for each of 5 insight types)
  
  // RMD PLANNING OPPORTUNITY (5 examples)
  {
    id: 'rmd_001',
    insight: 'RMD',
    title: 'Pre-RMD Strategic Planning Opportunity',
    insightText: 'Frank Williams will reach age 73 in 8 months, triggering first-year RMD requirements. IRA balance: $1,850,000. Projected first RMD: $69,811. Current tax bracket: 22%. Strategic planning window closing.',
    opportunities: 'Implement pre-RMD tax strategy including Roth conversions, charitable distributions setup, coordinate with Social Security timing, establish systematic distribution plan.',
    client: getClient('cl017'),
    advisor: getAdvisor('fa008'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'rmd_002',
    insight: 'RMD',
    title: 'First-Year RMD Election Strategy',
    insightText: 'Robert Mitchell age 73 in his first RMD year can delay initial distribution until April 1st of following year. However, this creates double distribution tax impact. Current RMD: $32,547. Next year RMD: $34,289.',
    opportunities: 'Evaluate first-year RMD timing election, assess double distribution tax impact, optimize distribution timing to minimize tax bracket escalation.',
    client: getClient('cl018'),
    advisor: getAdvisor('fa008'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'rmd_003',
    insight: 'RMD',
    title: 'Roth Conversion RMD Planning',
    insightText: 'Richard Thompson age 68 has 5-year window for strategic Roth conversions before RMDs begin. Current IRA: $1,200,000. Annual conversion capacity: $85,000 to stay in 22% bracket.',
    opportunities: 'Execute systematic Roth conversion strategy to reduce future RMD amounts, optimize tax bracket utilization, coordinate with retirement timeline.',
    client: getClient('cl020'),
    advisor: getAdvisor('fa009'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'rmd_004',
    insight: 'RMD',
    title: 'Spousal RMD Coordination Strategy',
    insightText: 'Eleanor Campbell\'s spouse died last year. As beneficiary, she can stretch inherited IRA distributions over 10 years or roll to own IRA. Current age: 73. Inherited IRA: $285,000.',
    opportunities: 'Optimize spousal IRA election strategy, evaluate stretch vs rollover benefits, coordinate with own RMD requirements, maximize tax efficiency.',
    client: getClient('cl019'),
    advisor: getAdvisor('fa009'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'rmd_005',
    insight: 'RMD',
    title: 'Asset Location RMD Optimization',
    insightText: 'William Carson has multiple retirement accounts: Traditional IRA $425,000, 401k $285,000, Roth IRA $95,000. Strategic asset location can optimize RMD tax impact and withdrawal sequencing.',
    opportunities: 'Optimize asset location across account types, coordinate Traditional and Roth withdrawals, implement tax-efficient distribution sequencing strategy.',
    client: getClient('cl021'),
    advisor: getAdvisor('fa008'),
    category: 'Investment Products',
    priority: 'Medium'
  },

  // RMD TAX OPTIMIZATION ALERT (5 examples)
  {
    id: 'rmd_006',
    insight: 'RMD',
    title: 'Tax Bracket Management Strategy',
    insightText: 'Frank Williams\' RMD of $85,250 will push income into 24% tax bracket. Current taxable income: $72,000. Excess above 22% bracket threshold: $18,500. Additional tax cost: $3,145.',
    opportunities: 'Implement tax bracket management through timing of other income sources, coordinate with Social Security elections, evaluate charitable distribution options.',
    client: getClient('cl017'),
    advisor: getAdvisor('fa008'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'rmd_007',
    insight: 'RMD',
    title: 'Medicare IRMAA Impact Alert',
    insightText: 'Robert Mitchell\'s RMD will increase MAGI to $94,500, triggering Medicare IRMAA surcharge of $2,448 annually. Current Medicare Part B: $174.70/month. IRMAA adjustment: $378.70/month.',
    opportunities: 'Coordinate RMD timing with Medicare IRMAA thresholds, evaluate charitable distribution strategies to reduce MAGI, optimize distribution timing.',
    client: getClient('cl018'),
    advisor: getAdvisor('fa008'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'rmd_008',
    insight: 'RMD',
    title: 'State Tax Optimization Strategy',
    insightText: 'Eleanor Campbell considering relocation to Florida (no state income tax) before large RMDs begin. Current Wisconsin tax on RMD: $2,250 annually. Five-year savings potential: $12,847.',
    opportunities: 'Evaluate state tax optimization through strategic relocation, assess domicile change requirements, coordinate with overall retirement planning.',
    client: getClient('cl019'),
    advisor: getAdvisor('fa009'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'rmd_009',
    insight: 'RMD',
    title: 'Net Investment Income Tax Planning',
    insightText: 'Richard Thompson\'s RMD combined with investment income will exceed $250,000 threshold, triggering 3.8% Net Investment Income Tax. Projected NIIT: $4,275 annually.',
    opportunities: 'Coordinate RMD with investment income timing, evaluate municipal bond strategies, implement tax-loss harvesting to manage NIIT exposure.',
    client: getClient('cl020'),
    advisor: getAdvisor('fa009'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'rmd_010',
    insight: 'RMD',
    title: 'Multi-State Tax Coordination',
    insightText: 'William Carson has retirement accounts in Illinois and Florida. Illinois taxes all retirement income, Florida has no income tax. Strategic account selection can save $3,200 annually.',
    opportunities: 'Optimize RMD source account selection for multi-state tax efficiency, coordinate with residency planning, maximize after-tax retirement income.',
    client: getClient('cl021'),
    advisor: getAdvisor('fa008'),
    category: 'Investment Products',
    priority: 'Medium'
  },

  // LATE RMD DISTRIBUTION WARNING (5 examples)
  {
    id: 'rmd_011',
    insight: 'RMD',
    title: 'Critical: RMD Deadline Alert - 45 Days Remaining',
    insightText: 'URGENT: Frank Williams has $85,250 RMD remaining with only 45 days until December 31st deadline. Failure to distribute will trigger 25% IRS penalty of $21,313. Immediate action required.',
    opportunities: 'Execute immediate RMD distribution to avoid 25% penalty, coordinate with tax withholding strategy, establish systematic process for future compliance.',
    client: getClient('cl017'),
    advisor: getAdvisor('fa008'),
    category: 'Investment Products',
    priority: 'High'
  },
  {
    id: 'rmd_012',
    insight: 'RMD',
    title: 'First-Year RMD April Deadline Warning',
    insightText: 'CRITICAL: Robert Mitchell\'s first-year RMD of $32,547 must be completed by April 1st (78 days remaining). Missing deadline triggers 25% penalty of $8,137. Second RMD also due same year.',
    opportunities: 'Complete first-year RMD before April 1st deadline, plan for double distribution tax impact, establish ongoing RMD compliance procedures.',
    client: getClient('cl018'),
    advisor: getAdvisor('fa008'),
    category: 'Investment Products',
    priority: 'High'
  },
  {
    id: 'rmd_013',
    insight: 'RMD',
    title: 'Partial RMD Shortfall Alert',
    insightText: 'Eleanor Campbell has distributed $18,500 of required $21,300 RMD. Remaining shortfall: $2,800. Penalty on shortfall: $700. 92 days remaining to complete distribution.',
    opportunities: 'Complete remaining RMD shortfall immediately, review calculation accuracy, implement systematic distribution monitoring for future compliance.',
    client: getClient('cl019'),
    advisor: getAdvisor('fa009'),
    category: 'Investment Products',
    priority: 'High'
  },
  {
    id: 'rmd_014',
    insight: 'RMD',
    title: 'Inherited IRA RMD Deadline Warning',
    insightText: 'Richard Thompson\'s inherited IRA RMD of $28,500 due by December 31st. Inherited accounts have different penalty rules - 25% penalty applies. 67 days remaining for compliance.',
    opportunities: 'Complete inherited IRA RMD distribution, verify beneficiary RMD calculation accuracy, coordinate with own retirement account RMDs.',
    client: getClient('cl020'),
    advisor: getAdvisor('fa009'),
    category: 'Investment Products',
    priority: 'High'
  },
  {
    id: 'rmd_015',
    insight: 'RMD',
    title: '401(k) Rollover RMD Compliance Alert',
    insightText: 'William Carson\'s 401(k) rollover to IRA was completed mid-year. RMD calculation must include 401(k) balance at year-end prior year. Potential shortfall: $8,900. Penalty risk: $2,225.',
    opportunities: 'Verify RMD calculation includes all qualified accounts, complete any shortfall distributions, coordinate with former employer 401(k) records.',
    client: getClient('cl021'),
    advisor: getAdvisor('fa008'),
    category: 'Investment Products',
    priority: 'High'
  },

  // RMD CHARITABLE DISTRIBUTION OPPORTUNITY (5 examples)
  {
    id: 'rmd_016',
    insight: 'RMD',
    title: 'Qualified Charitable Distribution Strategy',
    insightText: 'Frank Williams can satisfy $50,000 of his $85,250 RMD through direct charitable distributions. Tax savings versus cash donation: $11,000 (22% bracket). Charitable intent aligns with tax strategy.',
    opportunities: 'Structure Qualified Charitable Distribution (QCD) to satisfy RMD requirements, capture tax benefits versus itemized deductions, coordinate with overall charitable planning.',
    client: getClient('cl017'),
    advisor: getAdvisor('fa008'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'rmd_017',
    insight: 'RMD',
    title: 'Donor Advised Fund QCD Strategy',
    insightText: 'Robert Mitchell can contribute $25,000 to Donor Advised Fund through QCD, reducing RMD from $32,547 to $7,547. Creates ongoing charitable flexibility while minimizing current income.',
    opportunities: 'Establish Donor Advised Fund through QCD distribution, create flexible charitable giving vehicle, coordinate with family philanthropic objectives.',
    client: getClient('cl018'),
    advisor: getAdvisor('fa008'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'rmd_018',
    insight: 'RMD',
    title: 'Charitable Remainder Trust QCD Alternative',
    insightText: 'Eleanor Campbell\'s charitable intent and RMD requirement present Charitable Remainder Trust opportunity. CRT can provide income stream while capturing charitable deduction of $95,000.',
    opportunities: 'Evaluate Charitable Remainder Trust as alternative to QCD, capture charitable deduction benefits, coordinate with estate planning objectives.',
    client: getClient('cl019'),
    advisor: getAdvisor('fa009'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'rmd_019',
    insight: 'RMD',
    title: 'Multi-Year QCD Planning Strategy',
    insightText: 'Richard Thompson can satisfy entire $45,000 annual RMD through charitable distributions over next 5 years. Cumulative tax savings: $49,500. Annual QCD limit: $105,000 per person.',
    opportunities: 'Develop multi-year QCD strategy to optimize charitable giving and RMD compliance, coordinate with spouse for enhanced limits, plan charitable legacy.',
    client: getClient('cl020'),
    advisor: getAdvisor('fa009'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'rmd_020',
    insight: 'RMD',
    title: 'Religious Organization QCD Opportunity',
    insightText: 'William Carson\'s church capital campaign provides QCD opportunity. $15,000 pledge can be satisfied through QCD, reducing RMD taxable income while supporting religious community.',
    opportunities: 'Structure church capital campaign contribution as QCD, coordinate with religious organization for direct transfer requirements, optimize tax benefits.',
    client: getClient('cl021'),
    advisor: getAdvisor('fa008'),
    category: 'Investment Products',
    priority: 'Medium'
  },

  // MULTIPLE ACCOUNT RMD COORDINATION (5 examples)
  {
    id: 'rmd_021',
    insight: 'RMD',
    title: 'Multi-Custodian RMD Coordination Alert',
    insightText: 'Frank Williams has IRAs at 3 different custodians: Fidelity ($850K), Vanguard ($650K), Edward Jones ($350K). Total RMD: $85,250. Can aggregate and distribute from any account combination.',
    opportunities: 'Coordinate RMD across multiple custodians, optimize distribution sourcing for tax efficiency, consolidate accounts for simplified management.',
    client: getClient('cl017'),
    advisor: getAdvisor('fa008'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'rmd_022',
    insight: 'RMD',
    title: '401(k) vs IRA RMD Coordination',
    insightText: 'Robert Mitchell has 401(k) at former employer ($185K) and rollover IRA ($485K). RMDs must be calculated separately but can be optimized for asset location and tax efficiency.',
    opportunities: 'Coordinate 401(k) and IRA RMD calculations, evaluate rollover benefits, optimize distribution sources based on investment options and fees.',
    client: getClient('cl018'),
    advisor: getAdvisor('fa008'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'rmd_023',
    insight: 'RMD',
    title: 'Inherited vs Own Account RMD Management',
    insightText: 'Eleanor Campbell manages her own IRA RMD ($21,300) plus inherited IRA from spouse ($12,500). Different distribution rules apply. Combined tax impact requires coordination.',
    opportunities: 'Coordinate inherited and own IRA RMD requirements, optimize distribution timing and tax impact, ensure compliance with different beneficiary rules.',
    client: getClient('cl019'),
    advisor: getAdvisor('fa009'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'rmd_024',
    insight: 'RMD',
    title: 'SEP-IRA and Traditional IRA Coordination',
    insightText: 'Richard Thompson has SEP-IRA from consulting work ($285K) and traditional IRA ($915K). RMD calculation includes both accounts: $45,238 total. Can distribute from either account.',
    opportunities: 'Coordinate SEP-IRA and traditional IRA RMDs, optimize distribution sources, evaluate consolidation benefits for simplified compliance.',
    client: getClient('cl020'),
    advisor: getAdvisor('fa009'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'rmd_025',
    insight: 'RMD',
    title: 'Roth 401(k) vs Traditional Account Strategy',
    insightText: 'William Carson has Roth 401(k) ($125K) subject to RMD and traditional IRA ($550K). Strategic coordination can optimize tax efficiency and preserve Roth benefits through rollover.',
    opportunities: 'Coordinate Roth 401(k) and traditional IRA distributions, evaluate Roth 401(k) rollover to Roth IRA, optimize tax-free growth preservation.',
    client: getClient('cl021'),
    advisor: getAdvisor('fa008'),
    category: 'Investment Products',
    priority: 'Medium'
  }
];