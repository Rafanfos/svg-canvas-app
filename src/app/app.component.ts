import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasComponent } from './components/canvas/canvas.component';
import { ConfigPanelComponent } from './components/config-panel/config-panel.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToolbarComponent, CanvasComponent, ConfigPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'svg-canvas-app';
}
