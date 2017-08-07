import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PathwayPage } from './pathway';

@NgModule({
  declarations: [
    PathwayPage,
  ],
  imports: [
    IonicPageModule.forChild(PathwayPage),
  ],
})
export class PathwayPageModule {}
