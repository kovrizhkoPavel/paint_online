import { makeAutoObservable } from 'mobx';
import Brush from '../tools/Brush';
import Square from '../tools/Square';
import Circle from '../tools/Circle';

type TTools = Brush | Square | Circle;

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
