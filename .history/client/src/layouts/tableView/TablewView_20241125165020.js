import React from "react";
import TableRowItem from "./TableRowItem";

const TablewView = () => {
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
                <TableRowItem
                    id={10}
                    fullName={"JrrrKJ"}
                    phone={58543434}
                    notes={"Mark"}
                />
                <TableRowItem
                    id={10}
                    fullName={"JJrrreKJ"}
                    phone={58434354}
                    notes={"NHf"}
                />
                <TableRowItem
                    id={10}
                    fullName={"JferJ"}
                    phone={585444}
                    notes={"FFFF"}
                />
            </tbody>
        </table>
    );
};
export default TablewView;
