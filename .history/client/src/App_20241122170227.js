import "./App.css";

function App() {
    return (
        <div className="container mt-5">
            <div>
                <div>
                    <h1>App</h1>
                </div>
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">№</th>
                                <th scope="col">ФИО</th>
                                <th scope="col">Телефон</th>
                                <th scope="col">Заметки</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <th>Mark</th>
                                <th>Mark</th>
                                <th>Mark</th>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <th>Mark</th>
                                <th>Mark</th>
                                <th>Mark</th>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <th>Mark</th>
                                <th>Mark</th>
                                <th>Mark</th>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <th>Mark</th>
                                <th>Mark</th>
                                <th>Mark</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App;
