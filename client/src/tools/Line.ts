import Tool from './Tool';

export default class Line extends Tool {
  private isMouseDown: boolean = false;

  currentX: number = 0;
  currentY: number = 0;

  private saved: string = '';

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.listener();
  }

  listener(): void {
    this.canvas.onmouseup = this.onMouseUpHandler.bind(this);
    this.canvas.onmousedown = this.onMouseDownHandler.bind(this);
    this.canvas.onmousemove = this.onMouseMoveHandler.bind(this);
  }

  onMouseUpHandler(): void {
    this.isMouseDown = false;
  }

  onMouseDownHandler(evt: MouseEvent): void {
    if (evt.target === null) return;

    const { x, y } = this.getCords(evt);

    this.isMouseDown = true;
    this.ctx?.beginPath();
    this.ctx?.moveTo(x, y);
    this.currentX = x;
    this.currentY = y;
    this.saved = this.canvas.toDataURL();
  }

  onMouseMoveHandler(evt: MouseEvent): void {
    if (!this.isMouseDown || evt.target === null) return;

    const { x, y } = this.getCords(evt);

    this.draw(x, y);
  }

  draw(x: number, y: number): void {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.beginPath();
      this.ctx?.moveTo(this.currentX, this.currentY);
      this.ctx?.lineTo(x, y);
      this.ctx?.stroke();
    };
  }
}
