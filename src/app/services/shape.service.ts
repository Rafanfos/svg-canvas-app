import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Shape, RectangleShape, StarShape } from '../models/shape.models';

@Injectable({ providedIn: 'root' })
export class ShapeService {
  private shapesSubject = new BehaviorSubject<Shape[]>([]);
  shapes$ = this.shapesSubject.asObservable();

  private selectedId: string | null = null;

  get shapes(): Shape[] {
    return this.shapesSubject.getValue();
  }

  addRectangle(x: number, y: number) {
    const shape: RectangleShape = {
      id: crypto.randomUUID(),
      type: 'rectangle',
      x,
      y,
      cornerRadius: 0,
      selected: false,
    };
    this.shapesSubject.next([...this.shapes, shape]);
  }

  addStar(x: number, y: number) {
    const shape: StarShape = {
      id: crypto.randomUUID(),
      type: 'star',
      x,
      y,
      points: 5,
      outerRadius: 40,
      innerRadius: 20,
      selected: false,
    };
    this.shapesSubject.next([...this.shapes, shape]);
  }

  selectShape(id: string) {
    this.selectedId = id;
    const updated = this.shapes.map((shape) => ({
      ...shape,
      selected: shape.id === id,
    }));
    this.shapesSubject.next(updated);
  }

  updateShape(id: string, update: Partial<Shape>) {
    const updated = this.shapes.map((shape) =>
      shape.id === id ? { ...shape, ...update } : shape
    );
    this.shapesSubject.next(updated);
  }

  getSelectedShape(): Shape | undefined {
    return this.shapes.find((shape) => shape.id === this.selectedId);
  }
}
