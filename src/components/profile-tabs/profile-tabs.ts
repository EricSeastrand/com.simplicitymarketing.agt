import { Component } from '@angular/core';

/**
 * Generated class for the ProfileTabsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'profile-tabs',
  templateUrl: 'profile-tabs.html'
})
export class ProfileTabsComponent {

  public profileSegments:any;

  constructor() {
    this.buildTabs();
  }

  buildTabs(){

      /**
       *
       * @type {[{title: string; value: string} , {title: string; value: string}]}
       */
      this.profileSegments = [
          {title: 'Wall', value: "wall"},
          {title: 'Bio', value: "bio"},
          {title: 'Library', value: "library"},
          // {title: 'Platinum', value: "platinum"}

      ];
  }
}
