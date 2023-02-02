import { makeAutoObservable } from 'mobx';
import Brush from '../tools/Brush';
import Square from '../tools/Square';
import Circle from '../tools/Circle';
import Eraser from '../tools/Eraser';
import Line from '../tools/Line';

type TTools = Brush | Square | Circle | Eraser | Line;

class ToolStore {
  tool: TTools | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool: TTools): void {
    this.tool = tool;
  }
}

export default new ToolStore();
