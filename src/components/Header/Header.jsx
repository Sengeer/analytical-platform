import './Header.scss';

function Header() {
  return (
    <header
      className="header" >
      <h1
        className="header__text">
        Имя проекта
      </h1>
      <h2
        className="header__text">
        Ввод данных
      </h2>
      <h2
        className="header__text">
        Графики
      </h2>
    </header>
  );
}

export default Header;
