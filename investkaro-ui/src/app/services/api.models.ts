export interface AuthResponse {
  token: string;
}

export interface Industry {
  id: number;
  name: string;
}

export interface StartupSummary {
  id: number;
  companyName: string;
  businessModel: string;
  foundedYear: number;
  teamSize: number;
  problem: string;
  solution: string;
  targetMarket: string;
  usp: string;
  competitors: string;
  revenue: number;
  burnRate: number;
  cac: number;
  ltv: number;
  totalFunding: number;
  amountRequired: number;
  equityOffered: number;
  valuation: number;
  founderName: string;
  industryName: string;
}

export interface StartupDetail extends Partial<StartupSummary> {
  industry?: { name?: string };
  founder?: { user?: { fullName?: string } };
}

export interface InvestorDashboard {
  totalInvested: number;
  totalStartups: number;
  largestInvestment: number;
}

export interface FounderDashboardItem {
  startupId: number;
  companyName: string;
  totalFunding: number;
  amountRequired: number;
  totalInvestors: number;
  fundingPercentage: number;
}

export interface InvestmentHistoryItem {
  startupName: string;
  amount: number;
  date: string;
}

export interface FundingProgress {
  startupId: number;
  amountRequired: number;
  amountRaised: number;
  progressPercentage: number;
}

export interface StartupInvestor {
  investorName: string;
  amount: number;
}

export interface TopStartup {
  companyName: string;
  totalFunding: number;
  amountRequired: number;
  fundingPercentage: number;
  industryName?: string;
}

export interface UserRecord {
  id: number;
  fullName: string;
  email: string;
  phone?: string;
  location?: string;
  role: string;
}

export interface StartupRequestPayload {
  companyName: string;
  businessModel: string;
  foundedYear: number | null;
  teamSize: number | null;
  problem: string;
  solution: string;
  targetMarket: string;
  usp: string;
  competitors: string;
  revenue: number | null;
  burnRate: number | null;
  cac: number | null;
  ltv: number | null;
  totalFunding: number | null;
  amountRequired: number | null;
  equityOffered: number | null;
  valuation: number | null;
  industryId: number | null;
}

export interface UpdateStartupPayload {
  companyName: string;
  businessModel: string;
  teamSize: number | null;
  problem: string;
  solution: string;
  targetMarket: string;
  usp: string;
  competitors: string;
  revenue: number | null;
  burnRate: number | null;
  cac: number | null;
  ltv: number | null;
  totalFunding: number | null;
  amountRequired: number | null;
  equityOffered: number | null;
  valuation: number | null;
}
