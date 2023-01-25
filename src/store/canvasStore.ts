import { makeAutoObservable } from 'mobx'

class CanvasStore {
  private canvas: HTMLCanvasElement | null = null

  constructor () {
    makeAutoObservable(this)
  }

  setCanvas (canvas: HTMLCanvasElement | null): void {
    this.canvas = canvas
  }
}

export default new CanvasStore()
