import { makeAutoObservable } from 'mobx';
import Brush from '../tools/Brush';
import Square from '../tools/Square';
import Circle from '../tools/Circle';
import Eraser from '../tools/Eraser';
import Line from '../tools/Line';
import { DEFAULT_TOOL_COLOR } from '../constant';

type TTools = Brush | Square | Circle | Eraser | Line;

class ToolStore {
  private tool: TTools | null = null;
  public color: string = DEFAULT_TOOL_COLOR;
  public width: number = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool: TTools): void {
    this.tool = tool;
  }

  setColor(color: string): void {
    this.color = color;
    this.tool?.setFillColor(color);
    this.tool?.setStrokeColor(color);
  }

  setWidth(width: number): void {
    this.tool?.setLineWidth(width);
  }
}

export default new ToolStore();
