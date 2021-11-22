import { Search } from "./components/Search";
import { Table } from "./components/Table";
import { Title } from "./components/Title";

function App() {
  return (
    <div className="container">
      <Title />

      <Search />
      
      <Table />
    </div>
  );
}

export default App;
