import './Main.scss';
import Menu from "../Menu/Menu"
import Content from "../Content/Content"

function Main() {
  return (
    <main
      className="main">
      <Menu />
      <Content />
    </main>
  );
}

export default Main;