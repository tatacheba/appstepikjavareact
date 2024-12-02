import React from "react";

function FormNewItem() {
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                console.log("click");
            }}
            type="button"
        >
            Добавить
        </button>
    );
}

export default FormNewItem;
