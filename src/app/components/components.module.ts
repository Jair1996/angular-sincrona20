import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardUserComponent } from './card-user/card-user.component';
import { CardUserListComponent } from './card-user-list/card-user-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardUserComponent,
    CardUserListComponent
  ],
  exports: [
    CardUserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
