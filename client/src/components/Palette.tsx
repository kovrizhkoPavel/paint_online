import React, { ChangeEvent, FC } from 'react';
import '../styles/toolbar.scss';
import { BsPaletteFill } from 'react-icons/bs';
import ToolStore from '../store/toolStore';
import { observer } from 'mobx-react-lite';

const Palette: FC = () => {
  const onInputColorChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    ToolStore.setColor(evt.target.value);
  };

  return (
    <div className="toolbar__container">
      <button className="toolbar__button palette">
        <label htmlFor="palette">
          <BsPaletteFill size={25} color={ToolStore.color} />
        </label>
      </button>
      <div className="toolbar__input-color">
        <input id="palette" type="color" onInput={onInputColorChange} />
      </div>
    </div>
  );
};

export default observer(Palette);
