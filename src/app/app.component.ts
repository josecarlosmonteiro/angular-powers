import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { PowersModule } from './powers/powers.module';
import { PowerStateService } from './powers/services/power-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, PowersModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'curso-angular';

  constructor(public powerState: PowerStateService) {}
}
