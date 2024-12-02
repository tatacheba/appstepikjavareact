import React from "react";

function FormNewItem(props) {
    return (
        <form action="">
            <div className="mb-3">
                <input type="text" />
            </div>
            <label className="form-label">ФИО</label>
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
