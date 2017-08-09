import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PathwayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pathway',
  templateUrl: 'pathway.html',
})
export class PathwayPage {

  public loadProgress: any = 55;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
