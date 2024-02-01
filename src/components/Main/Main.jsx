import './Main.scss';
import Menu from "../Menu/Menu"
import CsvTables from "../CsvTable/CsvTable"
import Charts from "../Charts/Charts"

function Main() {
  return (
    <main
      className="main">
      <Menu />
      <CsvTables />
      <Charts />
    </main>
  );
}

export default Main;