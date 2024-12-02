import React from "react";

const TableRowItem = (props) => {
    const id = 1;
    const fullName = "Mark";
    const phone = 5854;
    const notes = "Mark";
    return (
        <tr>
            <th scope="row">{id}</th>
            <th>{fullName}</th>
            <th>{phone}</th>
            <th>{notes}</th>
        </tr>
    );
};

export default TableRowItem;
