import React, { FC } from 'react';
import Toolbar from '../components/Toolbar';
import SettingsBar from '../components/SettingsBar';
import Canvas from '../components/Canvas';

const Tools: FC = () => (
  <>
    <Toolbar />
    <SettingsBar />
    <Canvas />
  </>
);

export default Tools;
