import { Component, Input } from '@angular/core';
import { Power } from '../../interfaces/power';

@Component({
  selector: 'power-card',
  standalone: true,
  imports: [],
  templateUrl: './power-card.component.html',
  styleUrl: './power-card.component.scss',
})
export class PowerCardComponent {
  @Input() power!: Power;
  @Input() powerTypeColor: string = '';
}
