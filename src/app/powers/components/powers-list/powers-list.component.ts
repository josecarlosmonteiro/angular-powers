import { Component } from '@angular/core';
import { Power } from '../../interfaces/power';
import { CommonModule } from '@angular/common';
import { PowersService } from '../../services/powers.service';

@Component({
  selector: 'app-powers-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './powers-list.component.html',
  styleUrl: './powers-list.component.scss',
})
export class PowersListComponent {
  powersList: Power[] = [];

  constructor(private powersService: PowersService) {
    this.powersList = this.powersService.getPowers();
  }
}
