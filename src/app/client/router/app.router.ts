import {ModuleWithProviders} from '@angular/core';

import {Routes,RouterModule} from '@angular/router';

import {WelcomeComponent} from '../components/welcomecomponent/welcome.component';
import {AboutComponent} from '../components/aboutComponent/about.component';

export const routes: Routes=[
    {path:'welcomepage',component:WelcomeComponent,pathMatch:'full'},
    {path:'aboutPage',component:AboutComponent,pathMatch:'full'}];

    export const routing:ModuleWithProviders=RouterModule.forRoot(routes);

