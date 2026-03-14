import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Founder {
  // Personal Info
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;

  // Company Details
  companyName: string;
  industry: string;
  businessModel: string;
  foundedYear: number;
  teamSize: number;

  // Market Overview
  problem: string;
  solution: string;
  targetMarket: string;
  usp: string;
  competitors: string;

  // Financials
  revenue: number;
  burnRate: number;
  cac: number;
  ltv: number;
  totalFunding: number;

  // Funding Requirement
  amountRequired: number;
  equityOffered: number;
  valuation: number;
}

@Injectable({
  providedIn: 'root'
})
export class FounderService {

   private founders: Founder[] = [];

  constructor() {}

  addFounder(founder: Founder) {
    this.founders.push(founder);
    console.log("Founder Added:", founder);
  }

  getFounders() {
    return this.founders;
  }
}