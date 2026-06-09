import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-founders',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './founders.component.html',
  styleUrls: ['./founders.component.css'],
})
export class FoundersComponent {
  founderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.founderForm = this.fb.group({
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
      phone: ['',
        [
        Validators.required, Validators.pattern(/^[6-9]\d{9}$/)
        ]
      ],
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

      companyName: ['', Validators.required],
      businessCategory: this.fb.control([], [Validators.required]),
      businessModel: ['' ,Validators.required],
      foundedYear: ['', Validators.required],
      teamSize: ['' , Validators.required],

      problem: ['' , Validators.required],
      solution: ['', Validators.required],
      targetMarket: ['' , Validators.required],
      usp: ['', Validators.required],
      competitors: ['', Validators.required],

      revenue: ['', Validators.required],
      burnRate: ['', Validators.required],
      cac: ['', Validators.required],
      ltv: ['', Validators.required],
      totalFunding: ['', Validators.required],

      amountRequired: ['', Validators.required],
      equityOffered: ['', Validators.required],
      valuation: ['', Validators.required],
    });
  }

  businessList: string[] = [
    'Niche Manufacturing',
    'Kolhapuri Chappals',
    'Auto Spare Parts',
    'Foundry & Casting',
    'Textile & Powerloom',
    'Furniture Manufacturing',

    'Specialty Food Processing',
    'Jaggery & Masala Production',
    'Dairy Farming',
    'Poultry Farming',
    'Organic Farming',
    'Mushroom Farming',
    'Cloud Kitchen',
    'Restaurant',

    'Grocery Store',
    'Medical Store',
    'Hardware Store',
    'Clothing Shop',
    'Mobile Shop',
    'Electronics Showroom',

    // Gold Businesses
    'Gold Jewellery Shop',
    'Gold Trading',
    'Gold Loan Service',
    'Gold Hallmarking Center',
    'Gold Refining',
    'Jewellery Manufacturing',
    'Imitation Jewellery Store',
    'Silver & Precious Metals Shop',

    'Vehicle Service Center',
    'Car Wash',
    'Tyre Shop',
    'Spare Parts Store',

    'Salon',
    'Tailoring',
    'Cleaning Services',
    'Event Management',
    'Photography',

    'Digital Marketing',
    'Web Development',
    'Computer Repair',
    'CCTV Installation',
    'Printing Services',

    'Rental Business',
    'Construction',
    'Solar Panel Service',

    'Coaching Classes',
    'Skill Training Center',
    'Daycare',

    'Cattle Feed Production',
    'Farm Equipment Rental',
    'Sugarcane Transport',
  ];

  onCategoryChange(event: any) {
    const selected = [...this.founderForm.value.businessCategory];

    if (event.target.checked) {
      selected.push(event.target.value);
    } else {
      const index = selected.indexOf(event.target.value);
      if (index > -1) selected.splice(index, 1);
    }

    this.founderForm.patchValue({ businessCategory: selected });
  }

  isSubmitted = false;

  onSubmit() {
    this.isSubmitted = true;
  
    if (this.founderForm.valid) {
      console.log(" Founder Form submitted!", this.founderForm.value);
      this.founderForm.reset();
    }
  }
  
  businessModels = [
    {
      name: 'B2C (Business to Consumer)',
      description: 'Business sells products/services directly to consumers.',
      example: 'Amazon, Swiggy, Nykaa',
    },
    {
      name: 'B2B (Business to Business)',
      description: 'Business sells to other businesses.',
      example: 'Zoho, Salesforce',
    },
    {
      name: 'C2C (Consumer to Consumer)',
      description: 'Consumers sell products/services to other consumers.',
      example: 'OLX, eBay',
    },
    {
      name: 'C2B (Consumer to Business)',
      description: 'Consumers provide value to businesses.',
      example: 'Influencers, freelancers',
    },
    {
      name: 'D2C (Direct to Consumer)',
      description: 'Brand sells directly to customers without retailers.',
      example: 'Boat, Mamaearth',
    },
    {
      name: 'B2B2C',
      description: 'Business sells to another business who sells to customers.',
      example: 'Supplier → Swiggy → Customer',
    },
    {
      name: 'Marketplace',
      description: 'Platform connects buyers and sellers.',
      example: 'Amazon, Airbnb',
    },
    {
      name: 'Subscription',
      description: 'Recurring monthly or yearly payments.',
      example: 'Netflix, Spotify',
    },
    {
      name: 'SaaS (Software as a Service)',
      description: 'Cloud-based software sold by subscription.',
      example: 'Shopify, Google Workspace',
    },
    {
      name: 'Franchise',
      description: 'Brand allows others to operate under their name.',
      example: "Domino’s, McDonald's",
    },
    {
      name: 'Aggregator',
      description: 'Collects services under one brand.',
      example: 'Uber, Oyo',
    },
    {
      name: 'On-Demand',
      description: 'Service delivered when requested.',
      example: 'Swiggy, Dunzo',
    },
    {
      name: 'E-commerce Retail',
      description: 'Direct online sale from brand inventory.',
      example: 'Flipkart Retail',
    },
    {
      name: 'Freemium',
      description: 'Basic features free, advanced paid.',
      example: 'Canva, LinkedIn',
    },
    {
      name: 'P2P (Peer-to-Peer)',
      description: 'People share assets or services with each other.',
      example: 'P2P lending apps',
    },
    {
      name: 'Crowdfunding',
      description: 'Raise money from many small supporters.',
      example: 'Ketto, Kickstarter',
    },
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

  get fullName() {
    return this.founderForm.get('fullName');
  }
  get email() {
    return this.founderForm.get('email');
  }
  get password() {
    return this.founderForm.get('password');
  }
  get phone() {
    return this.founderForm.get('phone');
  }
  get location() {
    return this.founderForm.get('location');
  }
  get linkedin() {
    return this.founderForm.get('linkedin');
  }
  get website() {
    return this.founderForm.get('website');
  }

  get companyName() {
    return this.founderForm.get('companyName');
  }
  get businessCategory() {
    return this.founderForm.get('businessCategory');
  }
  get businessModel() {
    return this.founderForm.get('businessModel');
  }
  get foundedYear() {
    return this.founderForm.get('foundedYear');
  }
  get teamSize() {
    return this.founderForm.get('teamSize');
  }

  get problem() {
    return this.founderForm.get('problem');
  }
  get solution() {
    return this.founderForm.get('solution');
  }
  get targetMarket() {
    return this.founderForm.get('targetMarket');
  }
  get usp() {
    return this.founderForm.get('usp');
  }
  get competitors() {
    return this.founderForm.get('competitors');
  }

  get revenue() {
    return this.founderForm.get('revenue');
  }
  get burnRate() {
    return this.founderForm.get('burnRate');
  }
  get cac() {
    return this.founderForm.get('cac');
  }
  get ltv() {
    return this.founderForm.get('ltv');
  }
  get totalFunding() {
    return this.founderForm.get('totalFunding');
  }

  get amountRequired() {
    return this.founderForm.get('amountRequired');
  }
  get equityOffered() {
    return this.founderForm.get('equityOffered');
  }
  get valuation() {
    return this.founderForm.get('valuation');
  }
}
