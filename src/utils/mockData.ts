// Enterprise High-Fidelity Mock Analytics Data for NEXUS Dashboard

export interface KPICardData {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  timeframe: string;
  color: 'purple' | 'cyan' | 'blue' | 'emerald' | 'amber' | 'rose';
  icon: string;
}

export const kpiMetrics: KPICardData[] = [
  {
    id: 'rev-01',
    title: 'Total Gross Revenue',
    value: '$14,892,450.00',
    change: '+18.4%',
    isPositive: true,
    timeframe: 'vs last quarter',
    color: 'purple',
    icon: 'DollarSign',
  },
  {
    id: 'ord-01',
    title: 'Total Core Orders',
    value: '438,291',
    change: '+12.1%',
    isPositive: true,
    timeframe: 'vs last month',
    color: 'blue',
    icon: 'ShoppingBag',
  },
  {
    id: 'usr-01',
    title: 'Active Node Users',
    value: '2,841,904',
    change: '+24.6%',
    isPositive: true,
    timeframe: 'real-time concurrent',
    color: 'cyan',
    icon: 'Users',
  },
  {
    id: 'grw-01',
    title: 'Net Profit Growth',
    value: '34.82%',
    change: '+5.3%',
    isPositive: true,
    timeframe: 'annualized rate',
    color: 'emerald',
    icon: 'TrendingUp',
  },
  {
    id: 'frd-01',
    title: 'Secured Fraud Alerts',
    value: '2 Active',
    change: '-84.2%',
    isPositive: true, // positive means fewer fraud alerts/downward trend is good, or flag warning
    timeframe: 'isolated by SecOps',
    color: 'amber',
    icon: 'ShieldAlert',
  },
  {
    id: 'sat-01',
    title: 'Customer CSAT Score',
    value: '98.4%',
    change: '+1.2%',
    isPositive: true,
    timeframe: 'from 24,500 tickets',
    color: 'purple',
    icon: 'Smile',
  },
];

export const revenueTimeline = [
  { month: 'Jan', cloudRevenue: 400000, saasRevenue: 240000, enterpriseRevenue: 320000 },
  { month: 'Feb', cloudRevenue: 450000, saasRevenue: 290000, enterpriseRevenue: 360000 },
  { month: 'Mar', cloudRevenue: 510000, saasRevenue: 320000, enterpriseRevenue: 410000 },
  { month: 'Apr', cloudRevenue: 630000, saasRevenue: 380000, enterpriseRevenue: 490000 },
  { month: 'May', cloudRevenue: 720000, saasRevenue: 430000, enterpriseRevenue: 510000 },
  { month: 'Jun', cloudRevenue: 890000, saasRevenue: 490000, enterpriseRevenue: 580000 },
  { month: 'Jul', cloudRevenue: 950000, saasRevenue: 540000, enterpriseRevenue: 620000 },
  { month: 'Aug', cloudRevenue: 1050000, saasRevenue: 610000, enterpriseRevenue: 670000 },
  { month: 'Sep', cloudRevenue: 1200000, saasRevenue: 720000, enterpriseRevenue: 780000 },
  { month: 'Oct', cloudRevenue: 1340000, saasRevenue: 810000, enterpriseRevenue: 850000 },
  { month: 'Nov', cloudRevenue: 1480000, saasRevenue: 890000, enterpriseRevenue: 920000 },
  { month: 'Dec', cloudRevenue: 1650000, saasRevenue: 980000, enterpriseRevenue: 1050000 },
];

export const salesByChannel = [
  { name: 'Direct API Integration', sales: 42300, value: '$4.2M' },
  { name: 'AWS Marketplace', sales: 38900, value: '$3.9M' },
  { name: 'GCP Enterprise Bundle', sales: 25400, value: '$2.5M' },
  { name: 'SaaS Multi-tenant Portal', sales: 19800, value: '$2.0M' },
  { name: 'CRM Automated Agent', sales: 12100, value: '$1.2M' },
];

export const customerSegments = [
  { name: 'Enterprise Premium', value: 45, color: '#8b5cf6' },
  { name: 'Mid-Market Core', value: 30, color: '#06b6d4' },
  { name: 'Hyper-Growth Startups', value: 18, color: '#3b82f6' },
  { name: 'Strategic Consultancies', value: 7, color: '#10b981' },
];

export const regionalTraffic = [
  { country: 'North America (us-east-1)', traffic: '1.2M sessions', percentage: 42, health: 'Optimal' },
  { country: 'European Union (eu-west-1)', traffic: '890K sessions', percentage: 31, health: 'Optimal' },
  { country: 'Asia Pacific (ap-southeast-1)', traffic: '450K sessions', percentage: 16, health: 'High Load' },
  { country: 'Latin America (sa-east-1)', traffic: '300K sessions', percentage: 11, health: 'Optimal' },
];

export const weeklyGrowthHeatmap = [
  { day: 'Mon', '00-06': 34, '06-12': 78, '12-18': 92, '18-24': 45 },
  { day: 'Tue', '00-06': 41, '06-12': 82, '12-18': 95, '18-24': 49 },
  { day: 'Wed', '00-06': 39, '06-12': 89, '12-18': 98, '18-24': 52 },
  { day: 'Thu', '00-06': 45, '06-12': 91, '12-18': 104, '18-24': 58 },
  { day: 'Fri', '00-06': 52, '06-12': 94, '12-18': 112, '18-24': 64 },
  { day: 'Sat', '00-06': 22, '06-12': 45, '12-18': 61, '18-24': 40 },
  { day: 'Sun', '00-06': 18, '06-12': 38, '12-18': 54, '18-24': 33 },
];

export const aiGeneratedInsights = [
  {
    type: 'success',
    title: 'Anomalous Growth Triggered',
    description: 'AWS Marketplace traffic surged by +44% over the last 72 hours. Recommending auto-scaling group capacity increment in ap-southeast-1 node.',
    timestamp: '14 mins ago',
    impact: 'High Revenue Potential'
  },
  {
    type: 'warning',
    title: 'Fraud Alert Isolated',
    description: 'Multiple automated rate violations detected from an unverified CRM connector API proxy. Token has been dynamically limited and queued for review.',
    timestamp: '1 hr ago',
    impact: 'Security Remediation'
  },
  {
    type: 'info',
    title: 'Cost Optimization Suggestion',
    description: '3 underutilized m5.xlarge EC2 backend instances detected. Switching to Lambda serverless workflows can reduce monthly infrastructure overhead by $4,200.',
    timestamp: '4 hrs ago',
    impact: '31% Infrastructure Savings'
  },
  {
    type: 'prediction',
    title: 'Q3 Business Forecast Prediction',
    description: 'Based on seasonal ingestion rates and CRM retention coefficients, gross revenue is mathematically modeled to cross $17.4M by October.',
    timestamp: '1 day ago',
    impact: '98.2% Predictive Confidence'
  }
];

export const recentReports = [
  { id: 'REP-2026-004', name: 'Global Infrastructure & Financial Health Summary', scope: 'Monthly Enterprise', author: 'AI Core Agent', date: 'May 01, 2026', size: '4.8 MB', format: 'PDF Document' },
  { id: 'REP-2026-003', name: 'SecOps Node Ingestion & Threat Mitigation Log', scope: 'Weekly Audit', author: 'CloudWatch Agent', date: 'Apr 25, 2026', size: '2.1 MB', format: 'PDF Document' },
  { id: 'REP-2026-002', name: 'Machine Learning Engine Predictive Accuracy Audit', scope: 'Quarterly Deep', author: 'Dr. Sarah Lin (Chief Scientist)', date: 'Apr 18, 2026', size: '12.4 MB', format: 'PDF Document' },
  { id: 'REP-2026-001', name: 'Multi-Tenant Microservice Latency & Budget Matrix', scope: 'Monthly Enterprise', author: 'SysOps Automated', date: 'Apr 01, 2026', size: '3.9 MB', format: 'PDF Document' },
];

export const databaseUsers = [
  { id: 'usr-901', name: 'Christopher Vance', email: 'c.vance@nexus-enterprise.io', role: 'Global Cloud Administrator', status: 'Active', region: 'us-east-1', lastActive: 'Just now' },
  { id: 'usr-412', name: 'Elena Rostova', email: 'e.rostova@nexus-enterprise.io', role: 'Lead Data Architect', status: 'Active', region: 'eu-west-1', lastActive: '5 mins ago' },
  { id: 'usr-881', name: 'Marcus Sterling', email: 'm.sterling@nexus-enterprise.io', role: 'Principal Security Engineer', status: 'Active', region: 'us-east-1', lastActive: '12 mins ago' },
  { id: 'usr-304', name: 'Amara Okafor', email: 'a.okafor@nexus-enterprise.io', role: 'Senior Business Intelligence Analyst', status: 'Idle', region: 'ap-southeast-1', lastActive: '2 hrs ago' },
  { id: 'usr-567', name: 'Takashi Tanaka', email: 't.tanaka@nexus-enterprise.io', role: 'DevOps Cloud Operator', status: 'Active', region: 'ap-southeast-1', lastActive: '18 mins ago' },
  { id: 'usr-112', name: 'David Miller', email: 'd.miller@vendor.nexus.com', role: 'External Audit Contractor', status: 'Suspended', region: 'sa-east-1', lastActive: '3 days ago' },
];

export const liveServerLogs = [
  { id: 'log-1', time: '14:24:55', facility: 'API-GATEWAY', severity: 'INFO', message: 'JWT token authorized for cross-region tenant context client_id=c_77391' },
  { id: 'log-2', time: '14:24:58', facility: 'LAMBDA-ENGINE', severity: 'SUCCESS', message: 'Dynamic CRM data syncing microservice terminated successfully in 41ms' },
  { id: 'log-3', time: '14:25:01', facility: 'ML-PREDICTION', severity: 'INFO', message: 'Recalculating customer retention weights vector matrix dim=[12, 405]' },
  { id: 'log-4', time: '14:25:04', facility: 'CLOUDWATCH', severity: 'WARNING', message: 'Inbound requests threshold to EC2 cluster pool 2 high: CPU utilization at 79.4%' },
  { id: 'log-5', time: '14:25:10', facility: 'RDS-MYSQL', severity: 'SUCCESS', message: 'Optimized index check on transaction_ledger committed successfully' },
];
