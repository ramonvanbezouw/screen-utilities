export interface Point {
  x: number;
  y: number;
}

export interface TouchData {
  type: 'touch' | 'mouse';
  position: Point;
  timestamp: Date;
}
