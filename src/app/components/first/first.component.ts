import { Component } from '@angular/core';
import { TitleComponent } from '../shared/typography/title/title.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
})
export class FirstComponent {
  title = 'Curso Angular! (Fundamentos)';
}
