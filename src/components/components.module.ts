import {NgModule} from '@angular/core';
import {ProfileTabsComponent} from './profile-tabs/profile-tabs';
import {LibraryListComponent} from './library-list/library-list';
import {ProfileWallComponent} from './profile-wall/profile-wall';
import { ProgressBarComponent } from './progress-bar/progress-bar';

@NgModule({
    declarations: [
        ProfileTabsComponent,
        LibraryListComponent,
        ProfileWallComponent,
    ProgressBarComponent
    ],
    imports: [],
    exports: [
        ProfileTabsComponent,
        LibraryListComponent,
        ProfileWallComponent,
    ProgressBarComponent
    ]
})
export class ComponentsModule {
}
