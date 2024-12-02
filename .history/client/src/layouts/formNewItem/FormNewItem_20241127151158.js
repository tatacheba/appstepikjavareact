import React from "react";

function FormNewItem(props) {
    return (
        <div className="mb-3">
            <form>
                <label className="form-label">ФИО</label>
                <div className="mb-3 ">
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => {
                            e.target.value;
                        }}
                    />
                </div>
                <label className="form-label">Телефон</label>
                <div className="mb-3">
                    <input type="phone" className="form-control" />
                </div>
                <label className="form-label">Заметки</label>
                <div className="mb-3">
                    <textarea
                        type="textarea"
                        className="form-control"
                        rows={3}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    onClick={props.appendContact}
                    type="button"
                >
                    Добавить
                </button>
            </form>
        </div>
    );
}

export default FormNewItem;
