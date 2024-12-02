import React from "react";

const TableRowItem = (props) => {
    const id = props.id;
    const fullName = props.fullName;
    const phone = props.phone;
    const notes = props.notes;
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
