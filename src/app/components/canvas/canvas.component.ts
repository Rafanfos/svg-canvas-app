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

  // Variáveis para controlar a posição do tooltip
  mouseX = 0;
  mouseY = 0;

  constructor(private shapeService: ShapeService) {}

  onSelectShape(id: string) {
    // Se estiver em modo de inserção, não seleciona formas
    if (this.shapeService.getInsertMode()) return;

    this.shapeService.selectShape(id);
  }

  isRectangle(shape: Shape): shape is RectangleShape {
    return shape.type === 'rectangle';
  }

  isStar(shape: Shape): shape is StarShape {
    return shape.type === 'star';
  }

  @HostListener('document:keydown.escape')
  cancelInsertMode() {
    this.shapeService.cancelInsertMode();
  }

  onMouseMove(event: MouseEvent) {
    if (!this.shapeService.getInsertMode()) return;

    const svgElement = event.currentTarget as SVGElement;
    const rect = svgElement.getBoundingClientRect();
    this.mouseX = event.clientX - rect.left;
    this.mouseY = event.clientY - rect.top;
  }

  onCanvasClick(event: MouseEvent) {
    const insertMode = this.shapeService.getInsertMode();

    if (!insertMode) return;

    const svgElement = event.currentTarget as SVGElement;
    const rect = svgElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (insertMode === 'rectangle') {
      this.shapeService.addRectangle(x, y);
    } else if (insertMode === 'star') {
      this.shapeService.addStar(x, y);
    }

    this.shapeService.cancelInsertMode();
  }
}
