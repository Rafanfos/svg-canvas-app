import { Component } from '@angular/core';
import { ShapeService } from '../../services/shape.service';
import { CommonModule } from '@angular/common';
import { Shape, RectangleShape, StarShape } from '../../models/shape.models';
import { generateStarPoints } from '../../utils/star-utils';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss',
})
export class CanvasComponent {
  shapes$ = this.shapeService.shapes$;
  generateStarPoints = generateStarPoints;

  constructor(private shapeService: ShapeService) {}

  onSelectShape(id: string) {
    this.shapeService.selectShape(id);
  }

  isRectangle(shape: Shape): shape is RectangleShape {
    return shape.type === 'rectangle';
  }

  isStar(shape: Shape): shape is StarShape {
    return shape.type === 'star';
  }
}
