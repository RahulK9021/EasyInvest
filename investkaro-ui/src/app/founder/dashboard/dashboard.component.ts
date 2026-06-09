import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InvestorService } from '../../services/investor.service';
import { StartupService } from '../../services/startup.service';
import {
  FounderDashboardItem,
  FundingProgress,
  Industry,
  StartupDetail,
  StartupInvestor,
  StartupRequestPayload,
  UpdateStartupPayload
} from '../../services/api.models';

@Component({
  selector: 'app-founder-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class FounderDashboardComponent implements OnInit {
  dashboardItems: FounderDashboardItem[] = [];
  industries: Industry[] = [];
  selectedStartup: StartupDetail | null = null;
  progress: FundingProgress | null = null;
  investors: StartupInvestor[] = [];
  loading = true;
  successMessage = '';
  errorMessage = '';
  activeStartupId: number | null = null;

  startupForm: StartupRequestPayload = {
    companyName: '',
    businessModel: '',
    foundedYear: null,
    teamSize: null,
    problem: '',
    solution: '',
    targetMarket: '',
    usp: '',
    competitors: '',
    revenue: null,
    burnRate: null,
    cac: null,
    ltv: null,
    totalFunding: null,
    amountRequired: null,
    equityOffered: null,
    valuation: null,
    industryId: null
  };

  updateForm: UpdateStartupPayload = {
    companyName: '',
    businessModel: '',
    teamSize: null,
    problem: '',
    solution: '',
    targetMarket: '',
    usp: '',
    competitors: '',
    revenue: null,
    burnRate: null,
    cac: null,
    ltv: null,
    totalFunding: null,
    amountRequired: null,
    equityOffered: null,
    valuation: null
  };

  constructor(
    private startupService: StartupService,
    private investorService: InvestorService
  ) {}

  ngOnInit() {
    this.loadDashboard();
    this.loadIndustries();
  }

  loadDashboard(selectFirst = true) {
    this.startupService.getFounderDashboard().subscribe({
      next: (res) => {
        this.dashboardItems = Array.isArray(res) ? res : [];
        this.loading = false;

        if (selectFirst && this.dashboardItems.length) {
          const nextId = this.activeStartupId ?? this.dashboardItems[0].startupId;
          this.selectStartup(nextId);
        } else if (!this.dashboardItems.length) {
          this.resetSelectedStartup();
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  loadIndustries() {
    this.investorService.getIndustries().subscribe({
      next: (res) => {
        this.industries = Array.isArray(res) ? res : [];
      }
    });
  }

  createStartup() {
    this.successMessage = '';
    this.errorMessage = '';

    this.startupService.createStartup(this.startupForm).subscribe({
      next: (res) => {
        this.successMessage = 'Startup created successfully.';
        this.activeStartupId = res.id ?? null;
        this.loadDashboard(false);

        if (res.id != null) {
          this.selectStartup(res.id);
        }
      },
      error: () => {
        this.errorMessage = 'We could not create the startup right now. Please verify the form and try again.';
      }
    });
  }

  selectStartup(startupId: number | null) {
    if (startupId == null) {
      this.resetSelectedStartup();
      return;
    }

    this.activeStartupId = startupId;
    this.startupService.getStartupById(startupId).subscribe({
      next: (res) => {
        this.selectedStartup = res;
        this.updateForm = {
          companyName: res.companyName ?? '',
          businessModel: res.businessModel ?? '',
          teamSize: res.teamSize ?? null,
          problem: res.problem ?? '',
          solution: res.solution ?? '',
          targetMarket: res.targetMarket ?? '',
          usp: res.usp ?? '',
          competitors: res.competitors ?? '',
          revenue: res.revenue ?? null,
          burnRate: res.burnRate ?? null,
          cac: res.cac ?? null,
          ltv: res.ltv ?? null,
          totalFunding: res.totalFunding ?? null,
          amountRequired: res.amountRequired ?? null,
          equityOffered: res.equityOffered ?? null,
          valuation: res.valuation ?? null
        };
        this.loadStartupInsights(startupId);
      }
    });
  }

  loadStartupInsights(startupId: number) {
    this.startupService.getFundingProgress(startupId).subscribe({
      next: (progress) => {
        this.progress = progress;
      }
    });

    this.startupService.getStartupInvestors(startupId).subscribe({
      next: (investors) => {
        this.investors = Array.isArray(investors) ? investors : [];
      }
    });
  }

  updateStartup() {
    if (this.activeStartupId == null) {
      return;
    }

    this.successMessage = '';
    this.errorMessage = '';

    this.startupService.updateStartup(this.activeStartupId, this.updateForm).subscribe({
      next: () => {
        this.successMessage = 'Startup updated successfully.';
        this.loadDashboard(false);
        this.selectStartup(this.activeStartupId);
      },
      error: () => {
        this.errorMessage = 'We could not update the startup right now.';
      }
    });
  }

  deleteStartup() {
    if (this.activeStartupId == null) {
      return;
    }

    this.successMessage = '';
    this.errorMessage = '';

    this.startupService.deleteStartup(this.activeStartupId).subscribe({
      next: () => {
        this.successMessage = 'Startup deleted successfully.';
        const deletedId = this.activeStartupId;
        this.dashboardItems = this.dashboardItems.filter((item) => item.startupId !== deletedId);
        this.activeStartupId = null;

        if (this.dashboardItems.length) {
          this.selectStartup(this.dashboardItems[0].startupId);
        } else {
          this.resetSelectedStartup();
        }
      },
      error: () => {
        this.errorMessage = 'We could not delete the startup right now.';
      }
    });
  }

  private resetSelectedStartup() {
    this.selectedStartup = null;
    this.progress = null;
    this.investors = [];
    this.activeStartupId = null;
  }
}
