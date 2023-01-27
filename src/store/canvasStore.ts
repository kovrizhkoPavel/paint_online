import { makeAutoObservable } from 'mobx';

class CanvasStore {
  canvas: HTMLCanvasElement | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCanvas(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;
  }
}

export default new CanvasStore();
