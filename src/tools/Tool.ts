export default abstract class Tool {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D | null
  constructor (canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.destroyEvent()
  }

  destroyEvent (): void {
    this.canvas.onmouseup = null
    this.canvas.onmousedown = null
    this.canvas.onmousemove = null
  }
}
