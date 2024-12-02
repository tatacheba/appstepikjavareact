import React from "react";

const TableRowItem = (props) => {
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <th>{props.fullName}</th>
            <th>{props.phone}</th>
            <th>{props.notes}</th>
        </tr>
    );
};

export default TableRowItem;
