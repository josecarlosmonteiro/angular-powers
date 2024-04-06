import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowersListComponent } from './components/powers-list/powers-list.component';
import { PowerDetailsComponent } from './components/power-details/power-details.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, PowersListComponent, PowerDetailsComponent],
  exports: [PowersListComponent, PowerDetailsComponent],
})
export class PowersModule {}
