import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Power } from '../../interfaces/power';
import { CommonModule } from '@angular/common';
import { powerTypeColorsMap } from '../../constants/powerTypes';
import { PowerCardComponent } from '../power-card/power-card.component';

@Component({
  selector: 'powers-list',
  standalone: true,
  imports: [CommonModule, PowerCardComponent],
  templateUrl: './powers-list.component.html',
  styleUrl: './powers-list.component.scss',
})
export class PowersListComponent {
  @Input() powersList: Power[] = [];
  @Input() selectedPower?: Power;
  @Output() onClickPower: EventEmitter<Power> = new EventEmitter();

  powerColorsMap = powerTypeColorsMap;

  getPowerColor(type: string): string {
    return this.powerColorsMap[type.toLowerCase()];
  }

  selectPower(power: Power) {
    this.onClickPower.emit(power);
  }
}
