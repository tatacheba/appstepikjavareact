import React from "react";

function FormNewItem(props) {
    return (
        <form action="">
            <div className="mb-12">
                <label className="form-label">ФИО</label>
                <input type="text" />
            </div>

            <div className="mb-3">
                <label className="form-label">Телефон</label>
                <input type="textarea" />
            </div>

            <div className="mb-3">
                <label className="form-label">Заметки</label>
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
