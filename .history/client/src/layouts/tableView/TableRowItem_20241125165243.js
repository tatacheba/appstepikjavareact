import React from "react";

const TableRowItem = (props) => {
    const data = [
        { id: 12, fullName: "JrrrKJ", phone: 58543434, notes: "Mark" },
        { id: 13, fullName: "JJrrreKJ", phone: 58434354, notes: "NHf" },
        { id: 14, fullName: "JferJ", phone: 585444, notes: "FFFF" },
    ];
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
