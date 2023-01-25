import { makeAutoObservable } from 'mobx'
import Brush from '../tools/Brush'

class ToolStore {
  tool: Brush | null = null

  constructor () {
    makeAutoObservable(this)
  }

  setTool (tool: Brush): void {
    this.tool = tool
  }
}

export default new ToolStore()
