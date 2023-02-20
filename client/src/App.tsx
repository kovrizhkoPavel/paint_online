import React, { FC } from 'react';
import './styles/app.scss';
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom';
import Tools from './tools';
import { nanoid } from 'nanoid';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/:id" element={<Tools />} />
          <Route path="/" element={<Navigate to={`${nanoid()}`} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
