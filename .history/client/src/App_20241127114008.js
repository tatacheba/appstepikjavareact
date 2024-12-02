import "./App.css";
import TablewView from "./layouts/tableView/TablewView";

function App() {
    const items = [
        { id: 12, fullName: "JrrrKJ", phone: 585434374, notes: "Mark" },
        { id: 13, fullName: "JJrrreKJ", phone: 58434354, notes: "NHf" },
        { id: 14, fullName: "JferJ", phone: 585444, notes: "FFFF" },
        { id: 14, fullName: "JferJ", phone: 585444, notes: "FFFF" },
        { id: 14, fullName: "JferJ", phone: 585444, notes: "FFFF" },
        { id: 14, fullName: "JferJ", phone: 585444, notes: "FFFF" },
        { id: 14, fullName: "JferJ", phone: 585444, notes: "FFFF" },
        { id: 14, fullName: "JferJ", phone: 585444, notes: "FFFF" },
        { id: 14, fullName: "JferJ", phone: 585444, notes: "FFFF" },
        { id: 14, fullName: "JferJ", phone: 585444, notes: "FFFF" },
        { id: 14, fullName: "JferJ", phone: 585444, notes: "FFFF" },
        { id: 14, fullName: "JferJ", phone: 585444, notes: "FFFF" },
    ];
    function appendContact() {}

    return (
        <div className="container mt-5">
            <div className=" card">
                <div className="card-header">
                    <h1>App</h1>
                </div>
                <div className="card-body">
                    <TablewView data={items} />
                    <div>
                        <button
                            className="btn btn-primary"
                            onClick={appendContact}
                            type="button"
                        >
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;