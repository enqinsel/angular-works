import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ilk2';

  krediTutari:number = 10000
  vade:number = 36
  aylikOdeme:number = 0
  aylikFaizTutari:number = 117.83
  toplamGeriOdeme:number = 0
  hesapla(){
    this.aylikOdeme = (this.krediTutari/this.vade) + this.aylikFaizTutari
    this.toplamGeriOdeme = this.aylikOdeme * this.vade
  }
}
