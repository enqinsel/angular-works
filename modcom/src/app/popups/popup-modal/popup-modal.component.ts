import { Component, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.css']
})
export class PopupModalComponent {
  @Output() close = new EventEmitter()

  constructor(private el:ElementRef){}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onCloseClick(){
    this.close.emit();
  }
}
