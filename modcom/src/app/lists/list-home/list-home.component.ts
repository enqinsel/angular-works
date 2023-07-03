import { Component } from '@angular/core';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css']
})
export class ListHomeComponent {
  numbers = [
    {
      value: '50',
      label: "Müşteri"
    },
    {
      value: '3500 TL',
      label: "Ciro"
    },
    {
      value: '65',
      label: "Yorumlar"
    }
  ]

  images = [
    {
      image: "../../../assets/dresser.jpeg",
      title: "Şifonyer",
      description: "Her türlü eşyanızı koyabileceğiniz şifonyer"
    },
    {
      image: "../../../assets/couch.jpeg",
      title: "Kanepe",
      description: "Oturması muhteşem rahat koltuk"
    }
  ]

}
