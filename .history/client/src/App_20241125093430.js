import "./App.css";
import TablewView from "./layouts/tableView/TablewView";

function App() {
    return (
        <div className="container mt-5">
            <div className=" card">
                <div className="card-header">
                    <h1>App</h1>
                </div>
                <div className="card-body">
                    <TablewView />
                </div>
            </div>
        </div>
    );
}

export default App;
