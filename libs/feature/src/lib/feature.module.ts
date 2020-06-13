import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Load01Component } from './component/loading/load01/load01.component';

import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'load01',
    pathMatch: 'full',
    component: Load01Component
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [Load01Component],
  exports: [Load01Component]
})
export class FeatureModule {
  constructor() {
    console.log('FeatureModule');
  }
}
