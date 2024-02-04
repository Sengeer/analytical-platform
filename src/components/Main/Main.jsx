import './Main.scss';
import { useState } from 'react';
import Project from "../Project/Project"
import Popup from '../Popup/Popup';
import ChipsList from '../ChipsList/ChipsList';
import Files from '../Files/Files'

function Main() {
  const [isOpen, setIsOpen] = useState(Boolean());
  const [window, setWindow] = useState('project')

  const handleOpenInterface = () => {
    setIsOpen(!isOpen);
  }

  return (
    <main
      className="main">
      <button
        onClick={handleOpenInterface}
        className="main__button">
          Открыть интерфейс
      </button>
      <Popup
        active={isOpen}
        setActive={() => setIsOpen(!isOpen)}>
        <ChipsList
          chips={window === 'project'
            ? [
              { label: 'Проект', id: 'project', disabled: true },
              { label: 'DB', id: 'files' },
            ] : [
              { label: 'Проект', id: 'project' },
              { label: 'DB', id: 'files', disabled: true },
            ]}
          value={window}
          onChange={(chips) => setWindow(chips)}
        />
        <Project
          isOpen={isOpen && window === 'project' ? true : false} />
        <Files
          isOpen={isOpen && window === 'files' ? true : false} />
      </Popup>
    </main>
  );
}

export default Main;