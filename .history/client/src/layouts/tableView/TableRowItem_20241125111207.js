import React, { Component } from "react";

class TableRowItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    const id =1;
    const fullName = "Mark";
    const telephone = "123456789";
    const notes = "Mark";

    render() {
        return (
            <tr>
                <th scope="row">1</th>
                <th>Mark</th>
                <th>Mark</th>
                <th>Mark</th>
            </tr>
        );
    }
}

TableRowItem.propTypes = {};

export default TableRowItem;
