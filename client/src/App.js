import React from "react";

import Table from "./components/Table";

const data = [
  {
    spid: "2201920",
    dateLastSeen: new Date("2020", 1, 10).toLocaleDateString(),
  },
  {
    spid: "8219207",
    dateLastSeen: "",
  },
  {
    spid: "2201123",
    dateLastSeen: new Date("2020", 3, 1).toLocaleDateString(),
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
