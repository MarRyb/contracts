import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateComponent, IndexComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CreateComponent, IndexComponent]
})
export class UiPageModule { }
