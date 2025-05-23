type ShapeType = 'rectangle' | 'star';

interface Shape {
  id: string;
  type: ShapeType;
  x: number;
  y: number;
  selected: boolean;
}

interface RectangleShape extends Shape {
  type: 'rectangle';
  cornerRadius: number;
  width: number;
  height: number;
}

interface StarShape extends Shape {
  type: 'star';
  points: number;
  outerRadius: number;
  innerRadius: number;
}

export { ShapeType, RectangleShape, Shape, StarShape };
