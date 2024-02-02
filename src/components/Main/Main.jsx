import './Main.scss';
import { useState } from 'react';
import Menu from "../Menu/Menu"
import Content from "../Content/Content"
import Popup from '../Popup/Popup';

function Main() {
  const [isOpen, setIsOpen] = useState(Boolean());

  const handleOpenInterface = () => {
    setIsOpen(!isOpen);
  }

  return (
    <main
      className="main">
      <button
        onClick={handleOpenInterface}
        className='main__button'>
          Открыть интерфейс
      </button>
      <Popup
        active={isOpen}
        setActive={() => setIsOpen(!isOpen)}>
        <Menu />
        <Content />
      </Popup>
    </main>
  );
}

export default Main;