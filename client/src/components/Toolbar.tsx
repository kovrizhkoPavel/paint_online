import React, { FC } from 'react';
import '../styles/toolbar.scss';
import {
  BsBrush,
  BsCircle,
  BsCircleFill,
  BsEraser,
  BsSlashLg,
  BsSquare,
  BsSquareFill,
} from 'react-icons/bs';
import { AiOutlineSave } from 'react-icons/ai';
import { BiRedo, BiUndo } from 'react-icons/bi';
import Palette from './Palette';
import CanvasStore from '../store/canvasStore';
import ToolStore from '../store/toolStore';
import Brush from '../tools/Brush';
import Square from '../tools/Square';
import Circle from '../tools/Circle';
import Eraser from '../tools/Eraser';
import Line from '../tools/Line';

const Toolbar: FC = () => {
  return (
    <div className="toolbar">
      <button
        className="toolbar__button brush"
        onClick={() => {
          ToolStore.setTool(new Brush(CanvasStore.canvas as HTMLCanvasElement));
        }}
      >
        <BsBrush size={25} />
      </button>
      <button
        className="toolbar__button square"
        onClick={() => {
          ToolStore.setTool(new Square(CanvasStore.canvas as HTMLCanvasElement));
        }}
      >
        <BsSquare size={25} />
      </button>
      <button
        className="toolbar__button square"
        onClick={() => {
          ToolStore.setTool(new Square(CanvasStore.canvas as HTMLCanvasElement, true));
        }}
      >
        <BsSquareFill size={25} />
      </button>
      <button
        className="toolbar__button circle"
        onClick={() => {
          ToolStore.setTool(new Circle(CanvasStore.canvas as HTMLCanvasElement));
        }}
      >
        <BsCircle size={25} />
      </button>
      <button
        className="toolbar__button circle"
        onClick={() => {
          ToolStore.setTool(new Circle(CanvasStore.canvas as HTMLCanvasElement, true));
        }}
      >
        <BsCircleFill size={25} />
      </button>
      <button
        className="toolbar__button eraser"
        onClick={() => {
          ToolStore.setTool(new Eraser(CanvasStore.canvas as HTMLCanvasElement));
        }}
      >
        <BsEraser size={25} />
      </button>
      <button
        className="toolbar__button line"
        onClick={() => {
          ToolStore.setTool(new Line(CanvasStore.canvas as HTMLCanvasElement));
        }}
      >
        <BsSlashLg size={25} />
      </button>
      <Palette />
      <button
        className="toolbar__button undo"
        onClick={() => {
          CanvasStore.undo();
        }}
      >
        <BiUndo size={25} />
      </button>
      <button
        className="toolbar__button redo"
        onClick={() => {
          CanvasStore.redo();
        }}
      >
        <BiRedo size={25} />
      </button>
      <button className="toolbar__button save">
        <AiOutlineSave size={25} />
      </button>
    </div>
  );
};

export default Toolbar;
