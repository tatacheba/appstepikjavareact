import React from "react";

const TableRowItem = (props) => {
    const removeRow = () => props.removeContact(props.contact.id);
    return (
        <tr onClick={removeRow}>
            <th scope="row">{props.index}</th>
            <th>{props.contact.fullName}</th>
            <th>{props.contact.phone}</th>
            <th>{props.contact.notes}</th>
            <th className="delete">
                <button type="button" class="btn btn-danger">
                    <i className="bi bi-trash3"></i>
                </button>
            </th>
        </tr>
    );
};

export default TableRowItem;
