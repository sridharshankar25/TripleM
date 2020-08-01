import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {APP_BASE_HREF} from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { TraditionalComponent } from './traditional/traditional.component';
import { FormalsComponent } from './formals/formals.component';
import { CasualsComponent } from './casuals/casuals.component';
import { JeansComponent } from './jeans/jeans.component';
import { PantsComponent } from './pants/pants.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TraditionalComponent,
    FormalsComponent,
    CasualsComponent,
    JeansComponent,
    PantsComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'traditional', component: TraditionalComponent },
      { path: 'about', component: AboutComponent},
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
