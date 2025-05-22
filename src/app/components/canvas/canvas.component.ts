import { Component, HostListener } from '@angular/core';
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
  insertMode$ = this.shapeService.insertMode$;
  moveMode$ = this.shapeService.moveMode$;

  mouseX = 0;
  mouseY = 0;

  constructor(private shapeService: ShapeService) {}

  onSelectShape(id: string) {
    if (this.shapeService.getInsertMode() || this.shapeService.getMoveMode())
      return;

    this.shapeService.selectShape(id);
  }

  isRectangle(shape: Shape): shape is RectangleShape {
    return shape.type === 'rectangle';
  }

  isStar(shape: Shape): shape is StarShape {
    return shape.type === 'star';
  }

  @HostListener('document:keydown.escape')
  cancelModes() {
    this.shapeService.cancelInsertMode();
    this.shapeService.cancelMoveMode();
  }

  onMouseMove(event: MouseEvent) {
    if (!this.shapeService.getInsertMode() && !this.shapeService.getMoveMode())
      return;

    const svgElement = event.currentTarget as SVGElement;
    const rect = svgElement.getBoundingClientRect();
    this.mouseX = event.clientX - rect.left;
    this.mouseY = event.clientY - rect.top;
  }

  onCanvasClick(event: MouseEvent) {
    const insertMode = this.shapeService.getInsertMode();
    const moveMode = this.shapeService.getMoveMode();

    const svgElement = event.currentTarget as SVGElement;
    const rect = svgElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (insertMode) {
      if (insertMode === 'rectangle') {
        this.shapeService.addRectangle(x, y);
      } else if (insertMode === 'star') {
        this.shapeService.addStar(x, y);
      }

      this.shapeService.cancelInsertMode();
    } else if (moveMode) {
      this.shapeService.moveSelectedShape(x, y);

      this.shapeService.cancelMoveMode();
    }
  }
}
