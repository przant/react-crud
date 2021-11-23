import React, { useState } from 'react';
import { Search } from "./components/Search";
import { Table } from "./components/Table";
import { Title } from "./components/Title";

function App({ data }) {

  const [items, setItems] = useState(data);

  return (
    <div className="container">
      <Title />

      <Search data={data} setItems={setItems} />
      
      <Table items={items}/>
    </div>
  );
}

export default App;
