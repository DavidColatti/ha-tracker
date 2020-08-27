import React from "react";

import Table from "./components/Table";

const data = [
  {
    spid: "103916594",
    dateLastSeen: new Date(2020, 8, 26).toLocaleDateString(),
  },
  {
    spid: "105459844",
    dateLastSeen: new Date(2020, 8, 25).toLocaleDateString(),
  },
  {
    spid: "105460417",
    dateLastSeen: new Date(2020, 8, 25).toLocaleDateString(),
  },
];

const App = () => {
  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default App;
