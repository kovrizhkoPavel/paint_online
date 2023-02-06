import React, { ChangeEvent, FC } from 'react';
import '../styles/settingsBar.scss';
import ToolStore from '../store/toolStore';

const SettingsBar: FC = () => {
  const onInputChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    ToolStore.setWidth(+evt.target.value);
  };

  return (
    <div className="settingsBar">
      <label htmlFor="inputWeight">Толщина линии</label>
      <input
        id="inputWeight"
        type="number"
        defaultValue={1}
        min={1}
        max={50}
        onChange={onInputChange}
      />
    </div>
  );
};

export default SettingsBar;
