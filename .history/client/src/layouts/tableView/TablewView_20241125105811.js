import React, { Component } from "react";
import TableRowItem from "./TableRowItem";

export default class TablewView extends Component {
    render() {
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
                    <TableRowItem />
                    <TableRowItem />
                    <TableRowItem />
                </tbody>
            </table>
        );
    }
}
