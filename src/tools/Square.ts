import Tool from './Tool';

export default class Square extends Tool {
  private isMouseDown: boolean = false;
  private readonly isFill: boolean = false;
  private startX: number = 0;
  private startY: number = 0;

  private saved: string = '';
  constructor(canvas: HTMLCanvasElement, isFill: boolean = false) {
    super(canvas);
    this.listener();
    this.isFill = isFill;
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

    this.startX = x;
    this.startY = y;
    this.saved = this.canvas.toDataURL();
  }

  onMouseMoveHandler(evt: MouseEvent): void {
    if (!this.isMouseDown) return;
    const { x, y } = this.getCords(evt);

    const currentX = x;
    const currentY = y;
    const width = currentX - this.startX;
    const height = currentY - this.startY;

    this.draw(this.startX, this.startY, width, height);
  }

  draw(x: number, y: number, w: number, h: number): void {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.beginPath();
      this.ctx?.rect(x, y, w, h);
      if (this.isFill) {
        this.ctx?.fill();
        return;
      }
      this.ctx?.stroke();
    };
  }
}
