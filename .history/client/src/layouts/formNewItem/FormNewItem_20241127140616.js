import React from "react";

function FormNewItem() {
    function appendContact() {
        const contact = {
            id: 15,
            fullName: "ннннн",
            phone: 585444,
            notes: "FFFF",
        };
        items[0].fullName = "Bpvtyt";
        setItem([...items, contact]);
        console.log(items);
    }
    return (
        <button
            className="btn btn-primary"
            onClick={appendContact}
            type="button"
        >
            Добавить
        </button>
    );
}

export default FormNewItem;
