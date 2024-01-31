import './Main.scss';
import Menu from "../Menu/Menu"
import CsvTables from "../CsvTable/CsvTable"
import Graphs from "../Graphs/Graphs"

function Main() {
  return (
    <main
      className="main">
      <Menu />
      <CsvTables />
      <Graphs />
    </main>
  );
}

export default Main;