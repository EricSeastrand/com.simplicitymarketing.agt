import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotAdvisorsPage } from './hot-advisors';

@NgModule({
  declarations: [
    HotAdvisorsPage,
  ],
  imports: [
    IonicPageModule.forChild(HotAdvisorsPage),
  ],
})
export class HotAdvisorsPageModule {}
