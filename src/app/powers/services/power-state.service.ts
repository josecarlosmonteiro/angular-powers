import { Injectable } from '@angular/core';
import { Power } from '../interfaces/power';
import { PowersService } from './powers.service';

@Injectable({
  providedIn: 'root',
})
export class PowerStateService {
  powers: Power[] = [];
  selectedPower?: Power;

  constructor(private powersService: PowersService) {
    this.powers = this.powersService.getPowers();
  }

  getPowers() {
    return this.powers;
  }

  selectPower(power: Power) {
    this.selectedPower = power;
  }

  clearSelection() {
    this.selectedPower = undefined;
  }
}
