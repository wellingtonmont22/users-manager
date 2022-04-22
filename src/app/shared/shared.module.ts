import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompMaterialModule } from './comp-material/componentes-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [CommonModule, CompMaterialModule],
  exports: [ErrorDialogComponent],
})
export class SharedModule {}
