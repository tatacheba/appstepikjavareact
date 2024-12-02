import React from "react";

function FormNewItem(props) {
    return (
        <button
            className="btn btn-primary"
            onClick={props.appendContact}
            type="button"
        >
            Добавить
        </button>
    );
}

export default FormNewItem;
