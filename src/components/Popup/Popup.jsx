import { useEffect, createRef } from 'react';
import './Popup.scss';
import CloseIcon from '../../images/icon/close-btn';

function Popup({ children, active, setActive }) {
  const popupRef = createRef();

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        setActive(false);
      }
    };

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [active, setActive]);

  useEffect(() => {
    const handleFocus = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.relatedTarget)) {
        popupRef.current.focus();
      }
    };

    if (active) {
      document.addEventListener('focusout', handleFocus);
    }
    return () => document.removeEventListener('focusout', handleFocus);
  }, [active, setActive, popupRef]);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [active]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      setActive(false);
    }
  };

  return (
    <div>
      <div
        className={active ? 'popup popup_active' : 'popup'}
        role="button"
        tabIndex={0}
        onMouseDown={handleOverlay}
        ref={popupRef}>
        <div
          className="popup__content">
          <button
            className="popup__close"
            type="button"
            aria-label="Кнопка закрытия окна"
            onClick={() => setActive(false)}>
              <CloseIcon width="22px" height="22px" />
            </button>
          {children}
        </div>
      </div>
    </div>
  );
}
export default Popup;
