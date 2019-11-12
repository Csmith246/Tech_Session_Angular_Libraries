import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  count: number = 0;

  constructor(){
    interval(1000).subscribe((num)=>{
      this.count = num;
    });
  }
}
