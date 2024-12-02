import React from "react";
import TableRowItem from "./TableRowItem";

const TablewView = (props) => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">ФИО</th>
                    <th scope="col">Телефон</th>
                    <th scope="col">Заметки</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((item) => (
                    <TableRowItem
                        contact={ }
                    />
                ))}
            </tbody>
        </table>
    );
};
export default TablewView;
