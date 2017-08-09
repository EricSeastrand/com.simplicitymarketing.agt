import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LibraryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {
    public libraryCards: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.libraryCards = [
            {id: Math.random(), title: "File Name", icon: "fa-file-pdf-o", shareUrl: "#", downloadUrl: "#"},
            {id: Math.random(), title: "File Name", icon: "fa-file-video-o", shareUrl: "#", downloadUrl: "#"},
            {id: Math.random(), title: "File Name", icon: "fa-file-audio-o", shareUrl: "#", downloadUrl: "#"},
            {id: Math.random(), title: "File Name", icon: "fa-file-powerpoint-o", shareUrl: "#", downloadUrl: "#"},
            {id: Math.random(), title: "File Name", icon: "fa-file-word-o", shareUrl: "#", downloadUrl: "#"},
            {id: Math.random(), title: "File Name", icon: "fa-file-image-o", shareUrl: "#", downloadUrl: "#"}
        ]
    }

}
