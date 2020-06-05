import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppSectionHomeComponent } from './components/main/section/app-section-home/app-section-home.component';
import { AppSectionMemberListComponent } from './components/main/section/members/app-section-member-list/app-section-member-list.component';
import { AppSectionMemberDetailsComponent } from './components/main/section/members/app-section-member-details/app-section-member-details.component';
import { AppSectionMemberAddComponent } from './components/main/section/members/app-section-member-add/app-section-member-add.component';
import { AppSectionMemberUpdateComponent } from './components/main/section/members/app-section-member-update/app-section-member-update.component';
import { Page404Component } from './components/admin/page404/page404.component';

const routes: Routes = [
  {
    path: '', component: AppSectionHomeComponent
  },
  {
    path: 'miembros', component: AppSectionMemberListComponent, children: [
      {
        path: 'detalle/:id', component: AppSectionMemberDetailsComponent
      },
      {
        path: 'registrar', component: AppSectionMemberAddComponent
      },
      {
        path: 'actualizar/:id', component: AppSectionMemberUpdateComponent
      }
    ]
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
