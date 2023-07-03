import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  date = '';
  currency:number = 0;
  height:number = 0;
  miles:number = 0;

  lessons = {
    name: "Math",
    subject: "Naturel Numbers",
    currentPoint: "85"
  }

  onNameChange(value:string){
    this.name = value;
  }

  onDateChange(value:string){
    this.date = value;
  }

  onCurrencyChange(value:string){
    this.currency = parseFloat(value);
  }

  onHeightChange(value:string){
    this.height = parseFloat(value);
  }

  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }
}
