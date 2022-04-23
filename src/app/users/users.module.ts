import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompMaterialModule } from '../shared/components-material/componentes-material.module';
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, CompMaterialModule, SharedModule],
})
export class UsersModule {}
