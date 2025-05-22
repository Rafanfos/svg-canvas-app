import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shape, RectangleShape, StarShape } from '../../models/shape.models';
import { ShapeService } from '../../services/shape.service';

@Component({
  selector: 'app-config-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './config-panel.component.html',
  styleUrl: './config-panel.component.scss',
})
export class ConfigPanelComponent {
  isPanelVisible = true;

  get selectedShape(): Shape | undefined {
    return this.shapeService.getSelectedShape();
  }

  constructor(private shapeService: ShapeService) {}

  isRectangle(shape: Shape): shape is RectangleShape {
    return shape.type === 'rectangle';
  }

  isStar(shape: Shape): shape is StarShape {
    return shape.type === 'star';
  }

  updateRectangleWidth(event: Event) {
    if (!this.selectedShape || !this.isRectangle(this.selectedShape)) return;

    const value = +(event.target as HTMLInputElement).value;
    this.shapeService.updateShape(this.selectedShape.id, {
      width: value,
    });
  }

  updateRectangleHeight(event: Event) {
    if (!this.selectedShape || !this.isRectangle(this.selectedShape)) return;

    const value = +(event.target as HTMLInputElement).value;
    this.shapeService.updateShape(this.selectedShape.id, {
      height: value,
    });
  }

  updateRectangleCornerRadius(event: Event) {
    if (!this.selectedShape || !this.isRectangle(this.selectedShape)) return;

    const value = +(event.target as HTMLInputElement).value;
    this.shapeService.updateShape(this.selectedShape.id, {
      cornerRadius: value,
    });
  }

  updateStarSize(event: Event) {
    if (!this.selectedShape || !this.isStar(this.selectedShape)) return;

    const value = +(event.target as HTMLInputElement).value;

    this.shapeService.updateShape(this.selectedShape.id, {
      outerRadius: value,
    });
  }

  updateStarPoints(event: Event) {
    if (!this.selectedShape || !this.isStar(this.selectedShape)) return;

    const value = +(event.target as HTMLInputElement).value;
    this.shapeService.updateShape(this.selectedShape.id, {
      points: value,
    });
  }

  updateStarInnerRadius(event: Event) {
    if (!this.selectedShape || !this.isStar(this.selectedShape)) return;

    const value = +(event.target as HTMLInputElement).value;
    this.shapeService.updateShape(this.selectedShape.id, {
      innerRadius: value,
    });
  }

  startMoveMode() {
    this.shapeService.setMoveMode(true);

    this.isPanelVisible = false;
  }

  togglePanel() {
    this.isPanelVisible = !this.isPanelVisible;
  }
}
