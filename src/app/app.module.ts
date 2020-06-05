import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/header/app-header/app-header.component';
import { AppHeaderSearchComponent } from './components/header/app-header-search/app-header-search.component';
import { AppSectionHomeComponent } from './components/main/section/app-section-home/app-section-home.component';
import { AppSectionMembersComponent } from './components/main/section/app-section-members/app-section-members.component';
import { AppFooterComponent } from './components/footer/app-footer/app-footer.component';
import { Page404Component } from './components/admin/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppHeaderSearchComponent,
    AppSectionHomeComponent,
    AppSectionMembersComponent,
    AppFooterComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
