import React, { FC, useEffect, useRef } from 'react'
import '../styles/canvas.scss'
import { observer } from 'mobx-react-lite'
import CanvasStore from '../store/canvasStore'
import ToolStore from '../store/toolStore'
import Brush from '../tools/Brush'

const Canvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current !== null) {
      CanvasStore.setCanvas(canvasRef.current)
      ToolStore.setTool(new Brush(canvasRef.current))
    }
  }, [])

  const width = document.documentElement.clientWidth * 0.8
  const height = document.documentElement.clientHeight * 0.7

  return (
    <div className="canvas">
      <canvas ref={canvasRef} width={width} height={height}></canvas>
    </div>
  )
}

export default observer(Canvas)
