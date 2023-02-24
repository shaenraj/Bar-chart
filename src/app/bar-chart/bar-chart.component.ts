import { Component } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {


  public chart: any;
  
  public  horizontalDottedLine = {

    id: 'horizontalDottedLine',
    beforeDatasetsDraw(chart :any, args: any, options: any){
    
      const {ctx, chartArea : {top, right, bottom, left , width, height},
         scales: { x, y}} = chart;
      ctx.save();
      
      ctx.strokeStyle= 'red';
      ctx.setLineDash([10,10])
      ctx.strokeRect(left,y.getPixelForValue(85),width,0)
          ctx.restore();

          ctx.strokeStyle= 'red';
          ctx.setLineDash([10,10])
          ctx.strokeRect(left,y.getPixelForValue(35),width,0)
              ctx.restore();

    
      }
    }
    
  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', 
      plugins : [this.horizontalDottedLine],
      data: {
        labels: ['Maths', 'Science', 'Reading','Writing',
								 'Listening', 'Physics', 'Economics'], 
	       datasets: [

          {
            label: "CLASS",
            data: ['20','100', '57', '79', '92',
								 '57', '53', '57'],
            backgroundColor: '#2596be'
          },

          {
            label: "PUPIL",
            data: ['67','57', '52', '79', '92',
								 '54', '53', '56'],
            backgroundColor: '#44210e'
          },
          {
            label: "NATIONAL",
            data: ['42', '52', '56', '37', '17',
									 '100', '58', '51'],
            backgroundColor: '#d5c3b5'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

  ngOnInit(): void {
    this.createChart();
  }

}
