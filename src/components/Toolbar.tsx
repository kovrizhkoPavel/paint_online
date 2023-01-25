import React, { FC } from 'react'
import '../styles/toolbar.scss'
import { BsBrush, BsCircle, BsEraser, BsSlashLg, BsSquare } from 'react-icons/bs'
import { AiOutlineSave } from 'react-icons/ai'
import { BiRedo, BiUndo } from 'react-icons/bi'
import Palette from './Palette'
import CanvasStore from '../store/canvasStore'
import ToolStore from '../store/toolStore'
import Brush from '../tools/Brush'

const Toolbar: FC = () => {
  return (
    <div className="toolbar">
      <button className="toolbar__button brush" onClick={() => { ToolStore.setTool(new Brush(CanvasStore.canvas as HTMLCanvasElement)) }}>
        <BsBrush size={25}/>
      </button>
      <button className="toolbar__button square" >
        <BsSquare size={25}/>
      </button>
      <button className="toolbar__button circle" >
        <BsCircle size={25}/>
      </button>
      <button className="toolbar__button eraser" >
        <BsEraser size={25}/>
      </button>
      <button className="toolbar__button line" >
        <BsSlashLg size={25}/>
      </button>
      <Palette/>
       <button className="toolbar__button undo" >
        <BiUndo size={25}/>
       </button>
       <button className="toolbar__button redo" >
        <BiRedo size={25}/>
       </button>
      <button className="toolbar__button save" >
        <AiOutlineSave size={25}/>
      </button>
    </div>
  )
}

export default Toolbar
