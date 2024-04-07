import { Component, Input } from '@angular/core';
import { Power } from '../../interfaces/power';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'power-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './power-details.component.html',
  styleUrl: './power-details.component.scss',
})
export class PowerDetailsComponent {
  @Input() selectedPower?: Power;
}
