import React from "react";

function ModalDeleteContact({ isOpen, onConfirm, onCancel, message }) {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <div className="modal-header">
                    <h5>Подтверждение</h5>
                </div>
                <div className="modal-body">
                    <p>{message}</p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-danger" onClick={onConfirm}>
                        Удалить
                    </button>
                    <button className="btn btn-secondary" onClick={onCancel}>
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalDeleteContact;
