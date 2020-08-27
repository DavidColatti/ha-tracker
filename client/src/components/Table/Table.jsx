import React from "react";
import { MDBDataTable } from "mdbreact";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
moment().format();

const Table = ({ data }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const sevenDaysOut = (date) => {
      if (date) {
        return moment(date).add(7, "days").calendar();
      } else return "";
    };

    if (data) {
      const newData = data.map((each) => ({
        spid: each.spid,
        notesLink: (
          <a
            className="table-link"
            href={`https://csrtools.servicemagic.com/crm/notes/notesLoad.crm?entityID=${each.spid}&firstLoad=true&offset=undefined`}
          >
            Notes
          </a>
        ),
        bettiLink: (
          <a
            className="table-link"
            href={`https://csrtools.servicemagic.com/crm/user/callTracker.crm?destinationPage=/summary/summary.crm&entityID=${each.spid}&checkMarketingQuestion=true`}
          >
            Link
          </a>
        ),
        dateLastSeen: <input value={each.dateLastSeen} />,
        prospectDate: sevenDaysOut(each.dateLastSeen),
        deleteBtn: (
          <i onClick={() => console.log(`deleting spid ${each.spid}`)}>X</i>
        ),
      }));

      setRows(newData);
    }
  }, [data]);

  const tableData = {
    columns: [
      {
        label: "SPID",
        field: "spid",
        width: 150,
      },
      {
        label: "Notes",
        field: "notesLink",
        width: 270,
      },
      {
        label: "Betti Link",
        field: "bettiLink",
        width: 200,
      },
      {
        label: "Date Last Seen",
        field: "dateLastSeen",
        width: 100,
      },
      {
        label: "Prospect Date",
        field: "prospectDate",
        width: 150,
      },
      {
        label: "Delete",
        field: "deleteBtn",
        width: 150,
      },
    ],
    rows: rows,
  };

  return (
    <MDBDataTable
      small
      hover
      striped
      data={tableData}
      paging={false}
      order={["prospectDate", "desc"]}
    />
  );
};

export default Table;
