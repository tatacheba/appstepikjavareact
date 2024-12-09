import React from "react";
import TableRowItem from "./components/TableRowItem";
import { v4 as uuidv4 } from "uuid";

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
                {props.data.map((item, index) => (
                    <TableRowItem
                        key={uuidv4()}
                        contact={item}
                        index={index + 1}
                        removeContact={props.removeContact}
                    />
                ))}
            </tbody>
        </table>
    );
};
export default TablewView;
