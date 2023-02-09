import Brush from './Brush';

const WHITE_COLOR = '#FFFFFF';

export default class Eraser extends Brush {
  draw(x: number, y: number): void {
    if (this.ctx !== null) {
      this.ctx.strokeStyle = WHITE_COLOR;
    }
    this.ctx?.lineTo(x, y);
    this.ctx?.stroke();
  }
}
