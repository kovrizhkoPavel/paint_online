export default abstract class Tool {
  protected canvas: HTMLCanvasElement;
  protected ctx: CanvasRenderingContext2D | null;
  protected constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.destroyEvent();
  }

  setStrokeColor(color: string): void {
    if (this?.ctx !== null) {
      this.ctx.strokeStyle = color;
    }
  }

  setFillColor(color: string): void {
    if (this?.ctx !== null) {
      this.ctx.fillStyle = color;
    }
  }

  setLineWidth(width: number): void {
    if (this?.ctx !== null) {
      this.ctx.lineWidth = width;
    }
  }

  protected destroyEvent(): void {
    this.canvas.onmouseup = null;
    this.canvas.onmousedown = null;
    this.canvas.onmousemove = null;
  }

  protected getCords(evt: MouseEvent): { x: number; y: number } {
    const { pageX, pageY } = evt;
    const { offsetTop, offsetLeft } = evt.target as HTMLCanvasElement;

    const x = pageX - offsetLeft;
    const y = pageY - offsetTop;

    return { x, y };
  }
}
