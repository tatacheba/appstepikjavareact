import "./App.css";
import TablewView from "./layouts/tableView/TablewView";
import { useEffect, useState } from "react";
import FormNewItem from "./layouts/formNewItem/FormNewItem";
import axios from "axios";

function App() {
    const [items, setItems] = useState([]);
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
        // const id = items.length ? items[items.length - 1].id + 1 : 1;
        const contact = {
            // id: id,
            fullName: fullName,
            phone: phone,
            notes: notes,
        };

        const url = "http://localhost:8080/api/contacts";
        axios.post(url, contact);
        setItems([...items, contact]);
    };
    const removeContact = (id) => {
        const url = `http://localhost:8080/api/contacts/${id}`;
        axios.delete(url);
        setItems(items.filter((item) => item.id !== id));
    };
    return (
        <div className="container mt-5">
            <div className=" card">
                <div className="card-header">
                    <h1>App</h1>
                </div>
                <div className="card-body">
                    <TablewView data={items} removeContact={removeContact} />
                    <FormNewItem appContact={appendContact} />
                </div>
            </div>
        </div>
    );
}

export default App;
