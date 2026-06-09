import { Component , AfterViewInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { routes } from '../../app.routes';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet , RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements AfterViewInit {

  // Dynamic data placeholders
  investLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  investValues: number[] = [10, 20, 28, 35, 44, 52];

  chart: any;

  constructor() {}

  ngAfterViewInit(): void {
    this.loadGraph();
  }

  loadGraph() {
    const ctx = document.getElementById('investmentChart') as HTMLCanvasElement;

    if (!ctx) {
      console.error('Canvas element not found!');
      return;
    }

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.investLabels,
        datasets: [{
          label: 'Total Investments (Cr)',
          data: this.investValues,
          borderWidth: 3,
          borderColor: '#996515',
          backgroundColor: 'rgba(153,101,21,0.3)',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  // For dynamic updates later
  updateGraphData(apiData: { months: string[], values: number[] }) {
    this.investLabels = apiData.months;
    this.investValues = apiData.values;

    this.chart.data.labels = this.investLabels;
    this.chart.data.datasets[0].data = this.investValues;
    this.chart.update();
  }
}

