import { NgModule } from '@angular/core';
import { ProfileTabsComponent } from './profile-tabs/profile-tabs';
import { LibraryListComponent } from './library-list/library-list';
@NgModule({
	declarations: [ProfileTabsComponent,
    LibraryListComponent],
	imports: [],
	exports: [ProfileTabsComponent,
    LibraryListComponent]
})
export class ComponentsModule {}
