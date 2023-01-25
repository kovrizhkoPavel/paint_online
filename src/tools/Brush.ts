import Tool from './Tool'

export default class Brush extends Tool {
  private isMouseDown: boolean = false
  constructor (canvas: HTMLCanvasElement) {
    super(canvas)
    this.listener()
  }

  listener (): void {
    this.canvas.onmouseup = this.onMouseUpHandler.bind(this)
    this.canvas.onmousedown = this.onMouseDownHandler.bind(this)
    this.canvas.onmousemove = this.onMouseMoveHandler.bind(this)
  }

  onMouseUpHandler (evt: MouseEvent): void {
    this.isMouseDown = false
  }

  onMouseDownHandler (evt: MouseEvent): void {
    if (evt.target === null) return

    const { pageX, pageY } = evt
    const { offsetTop, offsetLeft } = evt.target as HTMLCanvasElement

    const x = pageX - offsetLeft
    const y = pageY - offsetTop

    this.isMouseDown = true
    this.ctx?.beginPath()
    this.ctx?.moveTo(x, y)
  }

  onMouseMoveHandler (evt: MouseEvent): void {
    if (!this.isMouseDown || evt.target === null) return

    const { pageX, pageY } = evt
    const { offsetTop, offsetLeft } = evt.target as HTMLCanvasElement

    const x = pageX - offsetLeft
    const y = pageY - offsetTop
    this.draw(x, y)
  }

  draw (x: number, y: number): void {
    this.ctx?.lineTo(x, y)
    this.ctx?.stroke()
  }
}
