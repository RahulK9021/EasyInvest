import { Injectable } from '@angular/core';

interface Investor {
  // Personal Info
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;

  // Investment Preferences
  investmentMin: number;
  investmentMax: number;
  industries: string;
  startupStage: string;
  investmentType: string;
  riskAppetite: string;

  // Background
  currentRole: string;
  companyName: string;
  experienceYears: number;
  fundedStartups: string;
  totalCapitalInvested: number;
}

@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  constructor() { }
  private investors: Investor[] = [];

  addInvestor(investor: Investor) {
    this.investors.push(investor);
    console.log("Investor Added:", investor);
  }

  getInvestors() {
    return this.investors;
  }
}
