import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHeaderComponent } from './components/header/app-header/app-header.component';
import { AppHeaderSearchComponent } from './components/header/app-header-search/app-header-search.component';
import { AppHeaderLoginDataComponent } from './components/header/app-header-login-data/app-header-login-data.component';

import { AppSectionHomeComponent } from './components/main/section/app-section-home/app-section-home.component';
import { AppSectionMemberListComponent } from './components/main/section/members/app-section-member-list/app-section-member-list.component';
import { AppSectionMemberDetailsComponent } from './components/main/section/members/app-section-member-details/app-section-member-details.component';
import { AppSectionMemberAddComponent } from './components/main/section/members/app-section-member-add/app-section-member-add.component';
import { AppSectionMemberUpdateComponent } from './components/main/section/members/app-section-member-update/app-section-member-update.component';

import { AppAsideComponent } from './components/main/aside/app-aside/app-aside.component';

import { AppFooterComponent } from './components/footer/app-footer/app-footer.component';

import { Page404Component } from './components/admin/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppHeaderSearchComponent,
    AppHeaderLoginDataComponent,

    AppSectionHomeComponent,
    AppSectionMemberListComponent,
    AppSectionMemberDetailsComponent,
    AppSectionMemberAddComponent,
    AppSectionMemberUpdateComponent,

    AppAsideComponent,

    AppFooterComponent,

    Page404Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
