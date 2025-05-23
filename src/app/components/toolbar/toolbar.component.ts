import { Component } from '@angular/core';
import { ShapeService } from '../../services/shape.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  constructor(private shapeService: ShapeService) {}

  addRectangle() {
    this.shapeService.setInsertMode('rectangle');
  }

  addStar() {
    this.shapeService.setInsertMode('star');
  }

  clearAllShapes(): void {
    this.shapeService.clearAllShapes();
  }
}
