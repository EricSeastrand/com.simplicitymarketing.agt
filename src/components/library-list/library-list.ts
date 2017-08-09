import {Component} from '@angular/core';

@Component({
    selector: 'library-list',
    templateUrl: 'library-list.html'
})
export class LibraryListComponent {

    public libraryCards: any;

    constructor() {

        this.libraryCards = [
            {id: Math.random(), title: "Glutens ridetis! ", icon: "fa-file-pdf-o", shareUrl: "#", downloadUrl: "#"},
            {id: Math.random(), title: "Admirals go with ellipse! ", icon: "fa-file-video-o", shareUrl: "#", downloadUrl: "#"},
            {id: Math.random(), title: "Nosily observe a ship. ", icon: "fa-file-audio-o", shareUrl: "#", downloadUrl: "#"},
            {id: Math.random(), title: "Shield, modification, and stigma. United assimilations lead to the turbulence.", icon: "fa-file-powerpoint-o", shareUrl: "#", downloadUrl: "#"},
            {id: Math.random(), title: "Oddly command a sonic shower. ", icon: "fa-file-word-o", shareUrl: "#", downloadUrl: "#"},
            {id: Math.random(), title: "Technically feed a vogon. ", icon: "fa-file-image-o", shareUrl: "#", downloadUrl: "#"}
        ]
    }


    remove(id) {

    }

    download(downloadUrl) {

    }

    share(shareUrl) {

    }
}
