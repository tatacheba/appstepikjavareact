import React from "react";

function FormNewItem(props) {
    return (
        <form action="">
            <label className="form-label">ФИО</label>
            <div className="mb-3">
                <input type="text" />
            </div>

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
