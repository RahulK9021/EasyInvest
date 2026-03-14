import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InvestorService } from '../../../services/investor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investor',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './investor.component.html',
  styleUrl: './investor.component.css'
})
export class InvestorComponent {
  investorForm: FormGroup;

    businessList: string[] = [
    "Niche Manufacturing",
    "Kolhapuri Chappals",
    "Auto Spare Parts",
    "Foundry & Casting",
    "Textile & Powerloom",
    "Furniture Manufacturing",

    "Specialty Food Processing",
    "Jaggery & Masala Production",
    "Dairy Farming",
    "Poultry Farming",
    "Organic Farming",
    "Mushroom Farming",
    "Cloud Kitchen",
    "Restaurant",

    "Grocery Store",
    "Medical Store",
    "Hardware Store",
    "Clothing Shop",
    "Mobile Shop",
    "Electronics Showroom",

    // Gold Businesses
    "Gold Jewellery Shop",
    "Gold Trading",
    "Gold Loan Service",
    "Gold Hallmarking Center",
    "Gold Refining",
    "Jewellery Manufacturing",
    "Imitation Jewellery Store",
    "Silver & Precious Metals Shop",

    "Vehicle Service Center",
    "Car Wash",
    "Tyre Shop",
    "Spare Parts Store",

    "Salon",
    "Tailoring",
    "Cleaning Services",
    "Event Management",
    "Photography",

    "Digital Marketing",
    "Web Development",
    "Computer Repair",
    "CCTV Installation",
    "Printing Services",

    "Rental Business",
    "Construction",
    "Solar Panel Service",

    "Coaching Classes",
    "Skill Training Center",
    "Daycare",

    "Cattle Feed Production",
    "Farm Equipment Rental",
    "Sugarcane Transport"
  ];

  constructor(private fb: FormBuilder, private investorService: InvestorService) {
    this.investorForm = this.fb.group({

      fullName: ['', [Validators.required, Validators.maxLength(30)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
        ],
      ],
      phone: ['', [
        Validators.required, Validators.pattern(/^[6-9]\d{9}$/)
        ]],
        location: [
          '',
          [Validators.required, Validators.pattern(/^[A-Za-z\s]{2,}$/)],
        ],
      linkedin: [
        '',
        [
          Validators.pattern(
            /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/
          ),   
        ],
      ],
      website: [
        '',
        [
          Validators.pattern(
            /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\S*)?$/
          ),
        ],
      ],

      investmentMin: ['' , Validators.required],
      investmentMax: ['', Validators.required],
      businessCategory: this.fb.control([], [Validators.required]),
      industries: ['',Validators.required],
      startupStage: ['',Validators.required],
      investmentType: ['',Validators.required],
      riskAppetite: ['',Validators.required],
      businessModel:['',Validators.required],

      // Background
      currentRole: ['',Validators.required],
      companyName: [''],
      experienceYears: ['',Validators.required],
      fundedStartups: ['',Validators.required],
      totalCapitalInvested: ['']
    });
  }

  onSubmit() {
    if (this.investorForm.valid) {
      this.investorService.addInvestor(this.investorForm.value);
      alert("Investor data submitted successfully!");
      this.investorForm.reset();
    }
  }
  onCategoryChange(event: any) {
  const selected = [...this.investorForm.value.businessCategory];

  if (event.target.checked) {
    selected.push(event.target.value);
  } else {
    const index = selected.indexOf(event.target.value);
    if (index > -1) selected.splice(index, 1);
  }

  this.investorForm.patchValue({ businessCategory: selected });
}

businessModels = [
  {
    name: "B2C (Business to Consumer)",
    description: "Business sells products/services directly to consumers.",
    example: "Amazon, Swiggy, Nykaa"
  },
  {
    name: "B2B (Business to Business)",
    description: "Business sells to other businesses.",
    example: "Zoho, Salesforce"
  },
  {
    name: "C2C (Consumer to Consumer)",
    description: "Consumers sell products/services to other consumers.",
    example: "OLX, eBay"
  },
  {
    name: "C2B (Consumer to Business)",
    description: "Consumers provide value to businesses.",
    example: "Influencers, freelancers"
  },
  {
    name: "D2C (Direct to Consumer)",
    description: "Brand sells directly to customers without retailers.",
    example: "Boat, Mamaearth"
  },
  {
    name: "B2B2C",
    description: "Business sells to another business who sells to customers.",
    example: "Supplier → Swiggy → Customer"
  },
  {
    name: "Marketplace",
    description: "Platform connects buyers and sellers.",
    example: "Amazon, Airbnb"
  },
  {
    name: "Subscription",
    description: "Recurring monthly or yearly payments.",
    example: "Netflix, Spotify"
  },
  {
    name: "SaaS (Software as a Service)",
    description: "Cloud-based software sold by subscription.",
    example: "Shopify, Google Workspace"
  },
  {
    name: "Franchise",
    description: "Brand allows others to operate under their name.",
    example: "Domino’s, McDonald's"
  },
  {
    name: "Aggregator",
    description: "Collects services under one brand.",
    example: "Uber, Oyo"
  },
  {
    name: "On-Demand",
    description: "Service delivered when requested.",
    example: "Swiggy, Dunzo"
  },
  {
    name: "E-commerce Retail",
    description: "Direct online sale from brand inventory.",
    example: "Flipkart Retail"
  },
  {
    name: "Freemium",
    description: "Basic features free, advanced paid.",
    example: "Canva, LinkedIn"
  },
  {
    name: "P2P (Peer-to-Peer)",
    description: "People share assets or services with each other.",
    example: "P2P lending apps"
  },
  {
    name: "Crowdfunding",
    description: "Raise money from many small supporters.",
    example: "Ketto, Kickstarter"
  }
];

selectedBusinessModels: string[] = [];

toggleModel(modelName: string) {
  const index = this.selectedBusinessModels.indexOf(modelName);
  if (index === -1) {
    this.selectedBusinessModels.push(modelName);
  } else {
    this.selectedBusinessModels.splice(index, 1);
  }
}
// Personal Information
get fullName() { return this.investorForm.get('fullName'); }
get email() { return this.investorForm.get('email'); }
get password() { return this.investorForm.get('password'); }
get phone() { return this.investorForm.get('phone'); }
get location() { return this.investorForm.get('location'); }
get linkedin() { return this.investorForm.get('linkedin'); }
get website() { return this.investorForm.get('website'); }

// Investment Info
get investmentMin() { return this.investorForm.get('investmentMin'); }
get investmentMax() { return this.investorForm.get('investmentMax'); }
get businessCategory() { return this.investorForm.get('businessCategory'); }
get industries() { return this.investorForm.get('industries'); }
get startupStage() { return this.investorForm.get('startupStage'); }
get investmentType() { return this.investorForm.get('investmentType'); }
get riskAppetite() { return this.investorForm.get('riskAppetite'); }
get businessModel() { return this.investorForm.get('businessModel'); }

// Background
get currentRole() { return this.investorForm.get('currentRole'); }
get companyName() { return this.investorForm.get('companyName'); }
get experienceYears() { return this.investorForm.get('experienceYears'); }
get fundedStartups() { return this.investorForm.get('fundedStartups'); }
get totalCapitalInvested() { return this.investorForm.get('totalCapitalInvested'); }

}
