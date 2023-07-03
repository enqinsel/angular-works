import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupsRoutingModule } from './popups-routing.module';
import { PopupsHomeComponent } from './popups-home/popups-home.component';
import { PopupModalComponent } from './popup-modal/popup-modal.component';


@NgModule({
  declarations: [
    PopupsHomeComponent,
    PopupModalComponent
  ],
  imports: [
    CommonModule,
    PopupsRoutingModule,
    SharedModule
  ]
})
export class PopupsModule { }
