import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Category {
  id: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Category[] = [
    {
      id: 'Niche Manufacturing (e.g., Kolhapuri Chappals, Auto Parts)',
      description:
        'Kolhapur has established clusters for auto spare parts, foundry works, and the iconic Kolhapuri Chappals. These products have a strong reputation and existing export markets.',
    },
    {
      id: 'Digital Marketing Agency for Local Businesses',
      description:
        'While Kolhapur has a strong traditional industrial base, many local businesses (foundries, textile mills, tour operators) need help establishing a strong online presence and e-commerce capabilities.',
    },
    {
      id: 'Speciality Food Processing',
      description:
        'Kolhapur is the Sugar Bowl of India and famous for its unique jaggery and spices (like chili powder). There is a high demand for authentic Kolhapuri flavors both domestically and internationally.',
    },
    {
      id: 'Grocery Stores / Retail Shops',
      description:
        'Providing daily essentials, food items, and household goods is an evergreen business with constant demand in any community.',
    },
    {
      id: 'Healthcare (Pharmacies/Clinics)',
      description:
        ' Local drugstores and small clinics serve a vital role, especially in small towns and rural areas where travel to larger cities for medical needs may be difficult.',
    },
    {
      id: 'Automotive Repair and Services',
      description:
        'As vehicle ownership increases, reliable local mechanics and service centers are always in demand for maintenance and repairs.',
    },
    {
      id: 'Hardware Stores',
      description:
        'These cater to home improvement and construction needs, stocking tools, materials, and seasonal products essential for homeowners and contractors.',
    },
    {
      id: 'Restaurants & Cafes',
      description:
        ' A well-managed restaurant or coffee shop offering local dishes or a unique atmosphere can become a community hub and generate steady clientele.',
    },
    {
      id: 'Tiffin Services / Cloud Kitchens',
      description:
        ' Providing homemade meals to busy professionals and students is a low-overhead business model that can start from home.',
    },
    {
      id: 'Specialty Food Production',
      description:
        'Businesses like pickle-making, spice powder packaging, or organic honey production leverage local resources and can sell products to both local and urban markets. ',
    },
    {
      id: 'Tailoring & Embroidery Shops',
      description:
        'A basic necessity that allows for customization and repair, this service has a consistent market and can often operate from a home setting.',
    },
    {
      id: 'Salons & Barber Shops',
      description:
        'Personal grooming services are always in demand across all demographics and are a reliable business option.',
    },
    {
      id: 'Tutoring & Coaching Classes',
      description:
        'Educational support for students of all ages is a valuable service that can be provided in-person or online with minimal initial investment.',
    },
    {
      id: 'Home Cleaning & Landscaping',
      description:
        'These services cater to busy homeowners and require low startup costs, relying on reputation and consistent service for success. ',
    },
    {
      id: 'Organic Farming',
      description:
        'Cultivating and selling organic fruits and vegetables to health-conscious consumers in nearby towns or online can be a profitable venture.',
    },
    {
      id: 'Dairy & Poultry Farming',
      description:
        'These are established and reliable sources of income, providing essential food products to the local community.',
    },
    {
      id: 'Agro-Tourism',
      description:
        'For picturesque locations, developing homestays and offering authentic rural experiences can attract tourists and create a new revenue stream.',
    },
    {
      id: 'IT & Computer Services',
      description:
        ' Providing tech support, computer repair, and digital literacy training meets the growing technological needs of small communities.',
    },
    {
      id: 'Digital Marketing Services',
      description:
        ' Local businesses often need help establishing an online presence (social media, websites), creating an opportunity for those with digital skills. ',
    },
  ];

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }
}
