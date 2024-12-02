import React, { Component } from "react";
import PropTypes from "prop-types";

class TableRowItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <tr>
                    <th scope="row">1</th>
                    <th>Mark</th>
                    <th>Mark</th>
                    <th>Mark</th>
                </tr>
            </div>
        );
    }
}

TableRowItem.propTypes = {};

export default TableRowItem;
