import { Component } from '@angular/core';
import { Power } from '../../interfaces/power';
import { CommonModule } from '@angular/common';
import { PowersService } from '../../services/powers.service';
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
  powersList: Power[] = [];
  powerColorsMap = powerTypeColorsMap;

  constructor(private powersService: PowersService) {
    this.powersList = this.powersService.getPowers();
  }

  getPowerColor(type: string): string {
    return `bg-[${this.powerColorsMap[type.toLowerCase()]}]`;
  }
}
