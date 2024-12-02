import React from "react";

function FormNewItem(props) {
    return (
        <form action="">
            <button
                className="btn btn-primary"
                onClick={props.appendContact}
                type="button"
            >
                Добавить
            </button>
        </form>
    );
}

export default FormNewItem;
