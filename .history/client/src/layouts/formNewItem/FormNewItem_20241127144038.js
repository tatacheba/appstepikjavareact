import React from "react";

function FormNewItem(props) {
    return (
        <form action="" className="container-">
            <label className="form-label">ФИО</label>
            <div className="mb-12">
                <input type="text" />
            </div>
            <label className="form-label">Телефон</label>
            <div className="mb-3">
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
