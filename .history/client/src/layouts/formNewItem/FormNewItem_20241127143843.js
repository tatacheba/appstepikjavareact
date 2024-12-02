import React from "react";

function FormNewItem(props) {
    return (
        <form action="">
            <label className="form-label">ФИО</label>
            <div className="mt-1">
                <input type="text" />
            </div>
            <label className="form-label">Телефон</label>
            <div className="mt-3">
                <input type="textarea" />
            </div>
            <label className="form-label">Заметки</label>
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
