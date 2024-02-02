import './Main.scss';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import Project from "../Project/Project"
import Popup from '../Popup/Popup';
import ChipsList from '../ChipsList/ChipsList';
import File from '../Files/Files'

function Main() {
  const [isOpen, setIsOpen] = useState(Boolean());
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

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
          chips={params.get('mode') === 'project'
            ? [
              { label: 'Проект', id: 'project', disabled: true },
              { label: 'DB', id: 'files' },
            ] : [
              { label: 'Проект', id: 'project' },
              { label: 'DB', id: 'files', disabled: true },
            ]}
          value={params.get('mode')}
          onChange={(chips) =>
            navigate(`/?mode=${chips}`, { state: location.state })
          }
        />
        {params.get('mode') === 'project' ? (
          <Project />
        ) : (
          <File />
        )}
      </Popup>
    </main>
  );
}

export default Main;