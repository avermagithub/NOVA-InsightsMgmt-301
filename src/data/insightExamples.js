import { CLIENTS, FINANCIAL_ADVISORS } from './mockData.js';

// Helper function to get client by ID
const getClient = (id) => CLIENTS.find(client => client.id === id);
const getAdvisor = (id) => FINANCIAL_ADVISORS.find(advisor => advisor.id === id);

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
    priority: 'High'
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
    priority: 'Critical'
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
    priority: 'Medium'
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
    priority: 'High'
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
    priority: 'High'
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

  // ALTERNATIVE INVESTMENTS INSIGHTS (5 examples)
  {
    id: 'alt_001',
    insight: 'Alternative Investments',
    title: 'Private Equity Allocation',
    insightText: 'Client Thomas Garcia with $2,850,000 net worth qualifies for private equity allocation. Recommended allocation: 12% of portfolio. Investment minimums: $250,000. Expected returns: 18% with 7 year lockup.',
    opportunities: 'Access institutional-quality private equity investments for enhanced returns and diversification, benefit from illiquidity premium, participate in direct company ownership.',
    client: getClient('cl001'),
    advisor: getAdvisor('fa001'),
    category: 'Investment Products',
    priority: 'High'
  },
  {
    id: 'alt_002',
    insight: 'Alternative Investments',
    title: 'Infrastructure Investment Platform',
    insightText: 'Client is suitable for infrastructure investments given long investment horizon. Infrastructure allocation target: 8%. Asset types: toll roads, utilities, airports. Expected yield: 7.5% with inflation protection features.',
    opportunities: 'Add infrastructure investments for stable income generation and inflation protection, diversify into real assets, access long-term investment themes.',
    client: getClient('cl002'),
    advisor: getAdvisor('fa003'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'alt_003',
    insight: 'Alternative Investments',
    title: 'Private Debt Allocation Strategy',
    insightText: 'Private Debt Allocation Strategy. Client\'s moderate risk profile shows strong fit for private debt investments. Target allocation: 10%. Expected returns: 12% vs public bonds 5.25%. Credit focus: senior secured.',
    opportunities: 'Enhance fixed income returns through private debt allocation, access higher yields than public markets, benefit from direct lending relationships.',
    client: getClient('cl003'),
    advisor: getAdvisor('fa002'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'alt_004',
    insight: 'Alternative Investments',
    title: 'Hedge Fund Strategy Access',
    insightText: 'Hedge Fund Strategy Access - Client qualifies for hedge fund investments with $750,000 minimum. Strategy focus: long/short equity. Historical performance: 12% with 1.4 Sharpe ratio. Correlation to market: 0.6.',
    opportunities: 'Access sophisticated hedge fund strategies for absolute returns and downside protection, reduce portfolio correlation to traditional markets.',
    client: getClient('cl004'),
    advisor: getAdvisor('fa001'),
    category: 'Investment Products',
    priority: 'Medium'
  },
  {
    id: 'alt_005',
    insight: 'Alternative Investments',
    title: 'Real Estate Investment Trust Strategy',
    insightText: 'Portfolio lacks real estate exposure. Current REIT allocation: 2%. Recommended: 8-12%. Focus areas: Commercial real estate, data centers, logistics. Expected income yield: 6.2%.',
    opportunities: 'Add diversified REIT exposure for inflation hedging and income generation, access professional real estate management, enhance portfolio diversification.',
    client: getClient('cl005'),
    advisor: getAdvisor('fa004'),
    category: 'Investment Products',
    priority: 'Low'
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
  }
];