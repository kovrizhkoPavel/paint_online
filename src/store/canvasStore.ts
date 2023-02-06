import { makeAutoObservable } from 'mobx';

class CanvasStore {
  canvas: HTMLCanvasElement | null = null;
  undoList: string[] = [];
  redoList: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCanvas(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;
  }

  pushUndo(data: string): void {
    this.undoList.push(data);
  }

  pushRedo(data: string): void {
    this.redoList.push(data);
  }

  undo(): void {
    const ctx = this.canvas?.getContext('2d');

    if (this.undoList.length > 0) {
      const dataUrl = this.undoList.pop();
      this.redoList.push(this.canvas?.toDataURL() as string);
      const img = new Image();

      img.src = dataUrl as string;
      img.onload = () => {
        ctx?.clearRect(0, 0, this.canvas?.width as number, this.canvas?.height as number);
        ctx?.drawImage(img, 0, 0, this.canvas?.width as number, this.canvas?.height as number);
      };
      return;
    }
    ctx?.clearRect(0, 0, this.canvas?.width as number, this.canvas?.height as number);
  }

  redo(): void {
    const ctx = this.canvas?.getContext('2d');

    if (this.redoList.length > 0) {
      const dataUrl = this.redoList.pop();
      this.undoList.push(this.canvas?.toDataURL() as string);
      const img = new Image();

      img.src = dataUrl as string;
      img.onload = () => {
        ctx?.clearRect(0, 0, this.canvas?.width as number, this.canvas?.height as number);
        ctx?.drawImage(img, 0, 0, this.canvas?.width as number, this.canvas?.height as number);
      };
    }
  }
}

export default new CanvasStore();
