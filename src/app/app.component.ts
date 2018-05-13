import { Component } from '@angular/core';

import { ApiService } from './api-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private chartData: Array<any>;
 
  constructor(private _ApiService: ApiService) { }

  ngOnInit() {
  
  //setInterval(()=>this.generateData(),3000);
  
    this._ApiService.getData().subscribe(result => { this.chartData = result })

  }

   generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }
 
}
  

