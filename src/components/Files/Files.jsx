import './Files.scss';

function Files({isOpen}) {
  return (
    <div
      className={`files${isOpen ? ' files_active' : ''}`}>
      <h2
        className="files__title">
        Проводник
      </h2>
      <div className="files__container">
        <p
          className="files__message">
            Пусто
        </p>
      </div>
    </div>
  );
}

export default Files;