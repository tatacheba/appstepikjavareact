import React, { Component } from "react";

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
                    <tr>
                        <th scope="row">1</th>
                        <th>Mark</th>
                        <th>Mark</th>
                        <th>Mark</th>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <th>Mark</th>
                        <th>Mark</th>
                        <th>Mark</th>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <th>Mark</th>
                        <th>Mark</th>
                        <th>Mark</th>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <th>Mark</th>
                        <th>Mark</th>
                        <th>Mark</th>
                    </tr>
                </tbody>
            </table>
        );
    }
}
