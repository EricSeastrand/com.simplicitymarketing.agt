import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";

import {LibraryPage} from "../pages/library/library";
import {ForumPage} from "../pages/forum/forum";
import {LiveStreamingPage} from "../pages/live-streaming/live-streaming";
import {PathwayPage} from "../pages/pathway/pathway";
import {HotAdvisorsPage} from "../pages/hot-advisors/hot-advisors";
import {ProfilePage} from "../pages/profile/profile";
import {ProfileTabsComponent} from "../components/profile-tabs/profile-tabs";

@NgModule({
    declarations: [
        MyApp,
        TabsPage,
        ProfilePage,
        LibraryPage,
        ForumPage,
        LiveStreamingPage,
        PathwayPage,
        HotAdvisorsPage,
        ProfileTabsComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TabsPage,
        ProfilePage,
        LibraryPage,
        ForumPage,
        LiveStreamingPage,
        PathwayPage,
        HotAdvisorsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
