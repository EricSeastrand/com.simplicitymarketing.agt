import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {LibraryPage} from "../library/library";
import {ForumPage} from "../forum/forum";
import {PathwayPage} from "../pathway/pathway";
import {ProfilePage} from "../profile/profile";


@IonicPage()
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage {

    public tabs: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.tabs = [
            {title: "Profile", root: ProfilePage, icon: "person", tabBadge: null},
            {title: "Library", root: LibraryPage, icon: "book", tabBadge: null},
            {title: "Pathway", root: PathwayPage, icon: "list", tabBadge: null},
            {title: "Forum", root: ForumPage, icon: "people", tabBadge: null},
        ];
    }


}
