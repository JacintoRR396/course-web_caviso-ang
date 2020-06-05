import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppSectionHomeComponent } from './components/main/section/app-section-home/app-section-home.component';
import { AppSectionMembersComponent } from './components/main/section/app-section-members/app-section-members.component';
import { Page404Component } from './components/admin/page404/page404.component';

const routes: Routes = [
  {
    path: '', component: AppSectionHomeComponent
  },
  {
    path: 'miembros', component: AppSectionMembersComponent
  },
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
