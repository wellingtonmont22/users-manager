import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompMaterialModule } from '../shared/comp-material/componentes-material.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, CompMaterialModule],
})
export class UsersModule {}
