import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [CreateComponent, IndexComponent],
  imports: [
    CommonModule
  ],
  exports: [CreateComponent, IndexComponent]
})
export class UiPageModule { }
