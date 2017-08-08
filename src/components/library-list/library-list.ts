import {Component} from '@angular/core';

@Component({
    selector: 'library-list',
    templateUrl: 'library-list.html'
})
export class LibraryListComponent {

    public libraryCards: any;

    constructor() {

        this.libraryCards = [
            {id: Math.random(), title: "File Name", icon: "fa-file-pdf-o", shareUrl: "#", downloadUrl: "#"},
            {id: Math.random(), title: "File Name", icon: "fa-file-video-o", shareUrl: "#", downloadUrl: "#"},
            {id: Math.random(), title: "File Name", icon: "fa-file-audio-o", shareUrl: "#", downloadUrl: "#"},
            {id: Math.random(), title: "File Name", icon: "fa-file-powerpoint-o", shareUrl: "#", downloadUrl: "#"},
            {id: Math.random(), title: "File Name", icon: "fa-file-word-o", shareUrl: "#", downloadUrl: "#"},
            {id: Math.random(), title: "File Name", icon: "fa-file-image-o", shareUrl: "#", downloadUrl: "#"}
        ]
    }


    remove(id) {

    }

    download(downloadUrl) {

    }

    share(shareUrl) {

    }
}
