import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService , Category } from '../../../services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],  // needed for *ngFor
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  categories$: Observable<Category[]>;

  constructor(private categoryService: CategoryService) {
    this.categories$ = this.categoryService.getCategories();
  }
}
