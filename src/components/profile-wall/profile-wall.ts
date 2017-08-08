import { Component } from '@angular/core';

/**
 * Generated class for the ProfileWallComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'profile-wall',
  templateUrl: 'profile-wall.html'
})
export class ProfileWallComponent {
  public cards:any;

  constructor() {
      this.cards = new Array(10);
  }

}
