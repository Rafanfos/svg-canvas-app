import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Shape, RectangleShape, StarShape } from '../models/shape.models';

const STORAGE_KEY = 'canvas_shapes';

@Injectable({ providedIn: 'root' })
export class ShapeService {
  private shapesSubject = new BehaviorSubject<Shape[]>([]);
  shapes$ = this.shapesSubject.asObservable();

  private insertModeSubject = new BehaviorSubject<string | null>(null);
  insertMode$ = this.insertModeSubject.asObservable();

  private moveModeSubject = new BehaviorSubject<boolean>(false);
  moveMode$ = this.moveModeSubject.asObservable();

  private selectedId: string | null = null;

  constructor() {
    this.loadShapesFromStorage();
  }

  private loadShapesFromStorage(): void {
    try {
      const storedShapes = localStorage.getItem(STORAGE_KEY);
      if (storedShapes) {
        const shapes = JSON.parse(storedShapes) as Shape[];
        this.shapesSubject.next(shapes);
      }
    } catch (error) {
      console.error('Erro ao carregar formas do localStorage:', error);
    }
  }

  private saveShapesToStorage(shapes: Shape[]): void {
    try {
      const shapesToSave = shapes.map((shape) => ({
        ...shape,
        selected: false,
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(shapesToSave));
    } catch (error) {
      console.error('Erro ao salvar formas no localStorage:', error);
    }
  }

  get shapes(): Shape[] {
    return this.shapesSubject.getValue();
  }

  getInsertMode(): string | null {
    return this.insertModeSubject.getValue();
  }

  getMoveMode(): boolean {
    return this.moveModeSubject.getValue();
  }

  setInsertMode(mode: 'rectangle' | 'star') {
    this.insertModeSubject.next(mode);
  }

  cancelInsertMode() {
    this.insertModeSubject.next(null);
  }

  setMoveMode(active: boolean) {
    this.moveModeSubject.next(active);
  }

  cancelMoveMode() {
    this.moveModeSubject.next(false);
  }

  moveSelectedShape(x: number, y: number) {
    if (!this.selectedId) return;

    this.updateShape(this.selectedId, { x, y });
    this.cancelMoveMode();
  }

  addRectangle(x: number, y: number) {
    const shape: RectangleShape = {
      id: crypto.randomUUID(),
      type: 'rectangle',
      x,
      y,
      width: 100,
      height: 60,
      cornerRadius: 0,
      selected: false,
    };
    const updatedShapes = [...this.shapes, shape];
    this.shapesSubject.next(updatedShapes);
    this.saveShapesToStorage(updatedShapes);
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
    const updatedShapes = [...this.shapes, shape];
    this.shapesSubject.next(updatedShapes);
    this.saveShapesToStorage(updatedShapes);
  }

  selectShape(id: string) {
    this.selectedId = id;
    const updated = this.shapes.map((shape) => ({
      ...shape,
      selected: shape.id === id,
    }));
    this.shapesSubject.next(updated);
  }

  updateShape(id: string, update: Partial<RectangleShape | StarShape>) {
    const updated = this.shapes.map((shape) =>
      shape.id === id ? { ...shape, ...update } : shape
    );
    this.shapesSubject.next(updated);
    this.saveShapesToStorage(updated);
  }

  getSelectedShape(): Shape | undefined {
    return this.shapes.find((shape) => shape.id === this.selectedId);
  }

  clearAllShapes(): void {
    this.shapesSubject.next([]);
    localStorage.removeItem(STORAGE_KEY);
  }
}
