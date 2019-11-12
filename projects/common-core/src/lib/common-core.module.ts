import { NgModule } from '@angular/core';
import { CommonCoreComponent } from './common-core.component';
import { BadgeModule } from './badge/badge.module';

@NgModule({
  declarations: [CommonCoreComponent],
  imports: [
  ],
  exports: [ CommonCoreComponent, BadgeModule ]
})
export class CommonCoreModule { }
