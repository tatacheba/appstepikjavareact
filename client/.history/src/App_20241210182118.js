import React, { useState, useEffect } from "react";
import "./App.css";
import TablewView from "./layouts/tableView/TablewView";
import FormNewItem from "./layouts/formNewItem/FormNewItem";

// import axios from "axios";
import ConfirmDeleteModal from "./layouts/components/ConfirmDeleteModal";

import {
    getContacts,
    addContact,
    deleteContact,
} from "./layouts/mocks/mockApi";

function App() {
    const [items, setItems] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentContact, setCurrentContact] = useState(null);

    // useEffect(() => {
    //     axios.get("http://localhost:8080/api/contacts").then((res) => {
    //         const data = [];
    //         res.data._embedded.contacts.forEach((item) =>
    //             data.push({
    //                 id: item.id,
    //                 fullName: item.fullName,
    //                 phone: item.phone,
    //                 notes: item.notes,
    //             })
    //         );
    //         setItems(data);
    //     });
    // }, []);
    useEffect(() => {
        console.log("Fetching contacts...");
        getContacts()
            .then((data) => {
                setItems(data);
                console.log("Contacts loaded:", data);
            })
            .catch((error) => console.error("Error fetching contacts:", error));
    }, []);

    // const appendContact = (fullName, phone, notes) => {
    //     const contact = { fullName, phone, notes };

    //     const url = "http://localhost:8080/api/contacts";
    //     axios
    //         .post(url, contact)
    //         .then((res) => {
    //             contact.id = res.data.id;
    //             setItems([...items, contact]);
    //         })
    //         .catch((error) => console.error(error));
    // };
    const appendContact = (fullName, phone, notes) => {
        const contact = { fullName, phone, notes };
        setLoading(true);
        addContact(contact)
            .then((newContact) => {
                setItems([...items, newContact]);
            })
            .catch((error) => console.error("Error adding contact:", error))
            .finally(() => setLoading(false));
    };
    const confirmRemoveContact = (id) => {
        setCurrentContact(id);
        setModalOpen(true);
    };

    // const removeContact = () => {
    //     const url = `http://localhost:8080/api/contacts/${currentContact}`;
    //     axios
    //         .delete(url)
    //         .then(() => {
    //             setItems(items.filter((item) => item.id !== currentContact));
    //         })
    //         .catch((error) => console.error(error))
    //         .finally(() => {
    //             setModalOpen(false);
    //             setCurrentContact(null);
    //         });
    // };

    const removeContact = () => {
        mockApi
            .deleteContact(currentContact)
            .then(() => {
                setItems(items.filter((item) => item.id !== currentContact));
            })
            .catch((error) => console.error("Error deleting contact:", error))
            .finally(() => {
                setModalOpen(false);
                setCurrentContact(null);
            });
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h1>App</h1>
                </div>
                <div className="card-body">
                    <TablewView
                        data={items}
                        removeContact={confirmRemoveContact}
                    />
                    <FormNewItem appContact={appendContact} />
                </div>
            </div>
            <ConfirmDeleteModal
                isOpen={modalOpen}
                onConfirm={removeContact}
                onCancel={() => setModalOpen(false)}
                message="Вы уверены, что хотите удалить этот контакт?"
            />
        </div>
    );
}

export default App;
