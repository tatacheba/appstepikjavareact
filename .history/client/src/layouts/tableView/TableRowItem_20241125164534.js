import React from "react";

const TableRowItem = () => {
    const id = 1;
    const fullName = "Mark";
    const phone = "Mark";
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
