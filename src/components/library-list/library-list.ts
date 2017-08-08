import { Component } from '@angular/core';

@Component({
  selector: 'library-list',
  templateUrl: 'library-list.html'
})
export class LibraryListComponent {

  public libraryCards: any;

  constructor() {

    this.libraryCards = [
        {id: Math.random(), title: "File Name", icon: "", shareUrl: "#", downloadUrl: "#"},
        {id: Math.random(), title: "File Name", icon: "", shareUrl: "#", downloadUrl: "#"},
        {id: Math.random(), title: "File Name", icon: "", shareUrl: "#", downloadUrl: "#"},
        {id: Math.random(), title: "File Name", icon: "", shareUrl: "#", downloadUrl: "#"},
        {id: Math.random(), title: "File Name", icon: "", shareUrl: "#", downloadUrl: "#"},
        {id: Math.random(), title: "File Name", icon: "", shareUrl: "#", downloadUrl: "#"}
    ]
  }



}
