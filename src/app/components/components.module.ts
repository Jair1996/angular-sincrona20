import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardUserComponent } from './card-user/card-user.component';
import { CardUserListComponent } from './card-user-list/card-user-list.component';



@NgModule({
  declarations: [
    CardUserComponent,
    CardUserListComponent
  ],
  exports: [
    CardUserListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
