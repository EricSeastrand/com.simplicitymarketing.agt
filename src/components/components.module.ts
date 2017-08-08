import {NgModule} from '@angular/core';
import {ProfileTabsComponent} from './profile-tabs/profile-tabs';
import {LibraryListComponent} from './library-list/library-list';
import {ProfileWallComponent} from './profile-wall/profile-wall';

@NgModule({
    declarations: [
        ProfileTabsComponent,
        LibraryListComponent,
        ProfileWallComponent
    ],
    imports: [],
    exports: [
        ProfileTabsComponent,
        LibraryListComponent,
        ProfileWallComponent
    ]
})
export class ComponentsModule {
}
