import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bentobox } from './bentobox/bentobox';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bentobox],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('project-NOVA-app');
}
