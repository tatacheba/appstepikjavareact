import "./App.css";
import TablewView from "./layouts/tableView/TablewView";
import { useState } from "react";
import FormNewItem from "./layouts/formNewItem/FormNewItem";

function App() {
    const [items, setItem] = useState([
        { id: 12, fullName: "JrrrKJ", phone: 585434374, notes: "Mark" },
        { id: 13, fullName: "JJrrreKJ", phone: 58434354, notes: "NHf" },
    ]);

    return (
        <div className="container mt-5">
            <div className=" card">
                <div className="card-header">
                    <h1>App</h1>
                </div>
                <div className="card-body">
                    <TablewView data={items} />
                    <div>
                        <FormNewItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;