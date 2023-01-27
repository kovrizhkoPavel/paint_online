import React, { ChangeEvent, FC, useState } from 'react';
import '../styles/toolbar.scss';
import { BsPaletteFill } from 'react-icons/bs';

const DEFAULT_COLOR = '#000000';

const Palette: FC = () => {
  const [color, setColor] = useState(DEFAULT_COLOR);

  const onInputColorChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setColor(evt.target.value);
  };

  return (
    <div className="toolbar__container">
      <button className="toolbar__button palette">
        <label htmlFor="palette">
          <BsPaletteFill size={25} color={color} />
        </label>
      </button>
      <div className="toolbar__input-color">
        <input id="palette" type="color" onInput={onInputColorChange} />
      </div>
    </div>
  );
};

export default Palette;
