import React from "react";

function FormNewItem() {
    return (
        <button
            className="btn btn-primary"
            onClick={appendContact}
            type="button"
        >
            Добавить
        </button>
    );
}

export default FormNewItem;
