import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';


@IonicPage()
@Component({
  selector: 'page-live-streaming',
  templateUrl: 'live-streaming.html',
})
export class LiveStreamingPage {
    videoUrl: SafeResourceUrl;

    constructor(private domSanitizer: DomSanitizer, public navCtrl: NavController) {
        this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/221976398?autoplay=1&title=0&byline=0&portrait=0')
    }
}
