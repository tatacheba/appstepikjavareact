import React from "react";
import { useState } from "react";
import InputMask from "react-input-mask";

function FormNewItem(props) {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [notes, setNotes] = useState("");

    const submit = () => {
        if (!fullName || !phone || !notes) {
            return;
        }
        props.appContact(fullName, phone, notes);
        setFullName("");
        setPhone("");
        setNotes("");
    };

    const handleInput = (e) => {
        let value = e.target.value;

        // Удаляем все символы, кроме цифр
        value = value.replace(/[^0-9]/g, "");

        // Обновляем значение в поле ввода
        e.target.value = value;
    };

    return (
        <div className="mb-3">
            <form>
                <label className="form-label">ФИО</label>
                <div className="mb-3 ">
                    <input
                        type="text"
                        className="form-control"
                        value={fullName}
                        onChange={(e) => {
                            setFullName(e.target.value);
                        }}
                    />
                </div>
                <label className="form-label">Телефон</label>
                <div className="mb-3">
                    <InputMask
                        mask="+7 (999) 999-9999"
                        placeholder="+7 (___) ___-____"
                        alwaysShowMask={true}
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                    />
                </div>
                <label className="form-label">Заметки</label>
                <div className="mb-3">
                    <textarea
                        type="textarea"
                        className="form-control"
                        value={notes}
                        rows={3}
                        onChange={(e) => {
                            setNotes(e.target.value);
                        }}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={submit}
                >
                    Добавить
                </button>
            </form>
        </div>
    );
}

export default FormNewItem;
