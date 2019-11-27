import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'material-demo';
  pieChart = [];

  ngOnInit() {
    this.initializePieChart();
  }

  initializePieChart() {
    this.pieChart = new Chart('pieChart', {
      type: 'doughnut',
      data: {
        labels: ["Red", "pink", "Orange"],
        datasets: [{
          datalabels: {
            color: function(context) {
              return context.dataset.backgroundColor;
            },
            backgroundColor: '#ffffff',
            borderRadius: 50,
            padding: 20,
            font: {
              size: '20'
            },
            // anchor: 'center',
            align: 'end',
            offset: -10
          },
          data: [400, 300 , 100,],
          backgroundColor: [
            'rgba(75, 192, 192)',
            'rgba(255, 99, 132)',
            'rgba(255, 159, 64)',
            
          ],
          borderWidth: 1,
          weight: 10
        }]
      }, 
      options: {
        cutoutPercentage: 80,
        legend: {
          position: 'right',
          labels: {
            boxWidth: 10
          }
        }
      }
    });
  }
}
