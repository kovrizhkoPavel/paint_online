export default abstract class Tool {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D | null
  constructor (canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.destroyEvent()
  }

  protected destroyEvent (): void {
    this.canvas.onmouseup = null
    this.canvas.onmousedown = null
    this.canvas.onmousemove = null
  }

  protected getCods (evt: MouseEvent): { x: number, y: number } {
    const { pageX, pageY } = evt
    const { offsetTop, offsetLeft } = evt.target as HTMLCanvasElement

    const x = pageX - offsetLeft
    const y = pageY - offsetTop

    return { x, y }
  }
}
