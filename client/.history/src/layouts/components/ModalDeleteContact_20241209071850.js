import React from "react";

const ModalDeleteContact = ({ isOpen, onModal, onCancel }) => {
    console.log("Modal state:", isOpen);
    if (!isOpen) return null;

    return (
        <div className="modal-backd">
            <div className="modal">
                <div className="modalheader">
                    <h5>Подтверждение</h5>
                </div>
                <div className="modalbody">
                    <p>Вы уверены, что хотите удалить контакт?</p>
                </div>
                <div className="modalfooter">
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

export default ModalDeleteContact;
