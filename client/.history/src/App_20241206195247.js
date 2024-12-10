import "./App.css";
import TablewView from "./layouts/tableView/TablewView";
import { useEffect, useState } from "react";
import FormNewItem from "./layouts/formNewItem/FormNewItem";
import axios from "axios";

function App() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8080/api/contacts").then((res) => {
            const data = [];
            res.data._embedded.contacts.forEach((item) =>
                data.push({
                    id: item.id,
                    fullName: item.fullName,
                    phone: item.phone,
                    notes: item.notes,
                })
            );
            setItems(data);
        });
    }, []);

    const appendContact = (fullName, phone, notes) => {
        const contact = {
            fullName,
            phone,
            notes,
        };

        const url = "http://localhost:8080/api/contacts";
        setLoading(true); // Включить индикатор загрузки
        axios
            .post(url, contact)
            .then((res) => {
                contact.id = res.data.id;
                setItems([...items, contact]);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false); // Выключить индикатор загрузки
            });
    };

    const removeContact = (id) => {
        if (window.confirm("Вы уверены, что хотите удалить этот контакт?")) {
            const url = `http://localhost:8080/api/contacts/${id}`;
            axios
                .delete(url)
                .then(() => {
                    setItems(items.filter((item) => item.id !== id));
                })
                .catch((error) => console.error(error));
        }
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h1>App</h1>
                </div>
                <div className="card-body">
                    <TablewView data={items} removeContact={removeContact} />
                    <FormNewItem
                        appContact={appendContact}
                        disabled={loading}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
