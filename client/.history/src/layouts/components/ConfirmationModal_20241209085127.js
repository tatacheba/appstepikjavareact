import React from "react";

const ConfirmationModal = ({ isOpen, onModal, onCancel }) => {
    console.log("Modal state:", isOpen);
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <div className="modal-header">
                    <h5>Подтверждение</h5>
                </div>
                <div className="modal-body">
                    <p>Вы уверены, что хотите удалить контакт?</p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-danger" onClick={onModal}>
                        Удалить
                    </button>
                    <button className="btn btn-secondary" onClick={onCancel}>
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
