# Edward Jones - Insights and Opportunities Management v1

A sophisticated React application providing insights and opportunities to Financial Advisors, Field Leaders, Recruiters, Client Success Managers, and Business Services divisions supporting Registered Investment Advisors (RIAs).

## 🏢 **About Edward Jones**

Edward Jones is the largest firm supporting 20+ thousand Financial Services professionals across various business models including:
- Independent RIAs
- Banks
- Insurance Companies  
- Federal Credit Unions

## 🚀 **Live Application**

**Access the application:** https://5000-int96ssk733oij52uju5q-6532622b.e2b.dev

> **Note:** The application is served using a custom Node.js server for optimal performance and React Router compatibility.

## ✨ **Key Features**

### **Navigation & User Experience**
- **Left Sidebar Navigation:**
  - 📊 Insights
  - 👥 Clients  
  - 💼 Financial Advisors
  - 👑 Field Leaders
  - 📈 Insight Analytics

- **Role-Based Access:** Top-right dropdown with user roles:
  - National Leader
  - Regional Leader
  - Field Manager
  - **Financial Advisor** (default)
  - Client Success Manager
  - Business Services
  - Legal/Compliance

### **Investment Products Insights**

Comprehensive insights across **6 investment product categories:**

#### 📈 **Stocks**
- Technology sector exposure opportunities
- Concentrated position risk management
- Dividend growth strategies
- International equity diversification
- Small-cap growth allocation

#### 🏦 **Bonds**
- Duration risk management
- Corporate bond income enhancement
- Municipal bond tax advantages
- Inflation-protected securities
- High-yield bond opportunities

#### 🎯 **Mutual Funds**
- Underperforming fund replacement
- Target date fund optimization
- Active vs passive strategy analysis
- Sector fund concentration management
- International fund diversification

#### 📊 **ETFs**
- Cost optimization strategies
- Sector rotation opportunities
- International ETF diversification
- Smart beta implementation
- Fixed income ETF ladders

#### 💎 **Alternative Investments**
- Private equity allocation
- Infrastructure investment platforms
- Private debt strategies
- Hedge fund access
- Real estate investment trusts

#### ⚡ **Specialized Strategies**
- ESG investment integration
- Options strategy implementation
- Tax-loss harvesting
- Currency hedging strategies
- Behavioral finance coaching

## 👥 **Client Wealth Segments**

- **🏆 UHNW** - Ultra High Net Worth ($10M+ AUM)
- **💰 HNW** - High Net Worth ($1-$10M AUM)  
- **💵 Affluent** - ($500k-$1M AUM)
- **📊 Mass Affluent** - ($100k-$500k AUM)
- **🌱 Emerging Wealth** - ($25k-$100k AUM)

## 🏛️ **RIA Firm Profile**

**Sterling Wealth Partners**
- **Type:** Independent RIA
- **AUM:** $2.8B
- **Advisors:** 45 professionals
- **Clients:** 1,250 households
- **Founded:** 2008
- **Headquarters:** Chicago, IL
- **Specialties:** Wealth Management, Retirement Planning, Estate Planning, Investment Management

## 💼 **Financial Advisor Profiles**

### **Michael Chen, CFP®**
- **Experience:** 12 years
- **AUM:** $285M
- **Clients:** 78
- **Specialties:** High Net Worth Planning, Alternative Investments

### **Sarah Rodriguez, CFA**
- **Experience:** 8 years  
- **AUM:** $156M
- **Clients:** 62
- **Specialties:** Portfolio Management, ESG Investing

### **David Thompson, ChFC®**
- **Experience:** 15 years
- **AUM:** $312M
- **Clients:** 89
- **Specialties:** Retirement Planning, Tax Strategy

### **Jennifer Liu, CFP®**
- **Experience:** 6 years
- **AUM:** $98M
- **Clients:** 145
- **Specialties:** Young Professionals, Technology Sector

### **Robert Miller, CPA/PFS**
- **Experience:** 20 years
- **AUM:** $425M
- **Clients:** 72
- **Specialties:** Tax Planning, Business Owners

## 📈 **Business Benefits**

1. **Market Timing Intelligence** - Real-time market analysis
2. **Client Suitability Matching** - Algorithmic product matching
3. **Alternative Investment Access** - Private markets coverage
4. **Cost Optimization** - Fee reduction opportunities
5. **Tax Efficiency** - Advanced tax strategies
6. **Performance Attribution** - Fund manager analysis
7. **Risk Management** - Portfolio optimization

## 🛠️ **Technology Stack**

- **Frontend:** React 18 with Hooks
- **Build Tool:** Vite 4.x
- **Routing:** React Router Dom 6.x
- **Icons:** Lucide React
- **Styling:** CSS Custom Properties
- **Package Manager:** npm

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 16+ 
- npm 8+

### **Installation**

```bash
# Clone the repository
git clone https://github.com/avermagithub/NOVA-InsightsMgmt-301.git

# Navigate to project directory  
cd NOVA-InsightsMgmt-301

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### **Development Server**
```bash
npm run dev
```
Application will be available at `http://localhost:3000`

### **Production Build**
```bash
npm run build
npm run preview
```

### **Custom Server Options**
The application includes custom server configurations for enhanced deployment:

#### **Simple HTTP Server** (Recommended)
```bash
# Build the application first
npm run build

# Start simple Node.js server
node simple-server.js
```

#### **Express Server** (Advanced)
```bash
# Build the application first
npm run build

# Start Express server
node server.js
```

Both servers provide:
- ✅ **React Router Support** - Proper SPA routing
- ✅ **Static Asset Serving** - Optimized file delivery
- ✅ **CORS Headers** - Cross-origin compatibility
- ✅ **Production Ready** - Suitable for deployment

## 📊 **Application Analytics**

- **📋 Total Insights:** 30 detailed examples
- **🎯 Insight Categories:** 6 investment product types
- **👥 Client Profiles:** 11 across all wealth segments  
- **💼 Advisor Network:** 5 professional profiles
- **📈 Implementation Rate:** 87%
- **⭐ Advisor Satisfaction:** 94%

## 🏗️ **Project Structure**

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Top navigation with role selector
│   ├── Sidebar.jsx     # Left navigation menu
│   ├── InsightCategory.jsx  # Insight category display
│   └── InsightItem.jsx # Individual insight cards
├── pages/              # Application pages
│   ├── InsightsPage.jsx    # Main insights dashboard
│   ├── ClientsPage.jsx     # Client portfolio view
│   ├── AdvisorsPage.jsx    # Advisor directory
│   ├── FieldLeadersPage.jsx # Leadership profiles
│   └── AnalyticsPage.jsx   # Performance analytics
├── data/               # Mock data and configurations
│   ├── mockData.js     # Base data structures
│   └── insightExamples.js # Insight examples
├── styles/             # Global styles
│   └── index.css       # Main stylesheet
└── main.jsx           # Application entry point
```

## 🎨 **Design System**

### **Edward Jones Brand Colors**
- **Primary:** #003366 (Deep Blue)
- **Secondary:** #0066cc (Blue) 
- **Accent:** #ff6b35 (Orange)
- **Success:** #10b981 (Green)
- **Warning:** #f59e0b (Amber)
- **Error:** #ef4444 (Red)

### **Typography**
- **Font Family:** Inter, system fonts
- **Weights:** 300, 400, 500, 600, 700

## 🔐 **Security & Compliance**

- Role-based access control
- Financial data privacy standards
- Secure client information handling
- Compliance with financial regulations

## 📝 **License**

MIT License - see LICENSE file for details

## 🤝 **Contributing**

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📞 **Support**

For support and questions:
- **Email:** support@edwardjones.com
- **Documentation:** [Internal Wiki]
- **Issue Tracking:** GitHub Issues

---

**© 2024 Edward Jones - Insights and Opportunities Management Platform**

*Empowering Financial Advisors with Data-Driven Insights*