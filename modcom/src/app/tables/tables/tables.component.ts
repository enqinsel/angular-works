import { Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  data: any[] = [ // data herhangi bir türdeki verileri içerebilir
    {
      name: "Engin",
      age: "26",
      job: "Bilgisayar Mühendisi",
      employed: "evet"
    },
    {
      name: "Ege",
      age: "18",
      job: "Öğrenci",
      employed: "evet"
    },
    {
      name: "Süleyman",
      age: "56",
      job: "Emekli",
      employed: "hayır"
    }
];

headers: any[] = [ // headers herhangi bir türdeki verileri içerebilir
    {
      key: 'employed',
      label: 'Aldığı ücretten memnun mu?'
    },
    {
      key: 'name',
      label: 'Ad Soyad'
    },
    {
      key: 'age',
      label: 'Yaş'
    },
    {
      key: 'job',
      label: 'Meslek'
    }
];
}


