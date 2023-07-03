import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 @Input() title:string = 'default';
 @Input() imageUrl:string = '';
 @Input() username:string = 'default';
 @Input() content:string = 'default';

}
