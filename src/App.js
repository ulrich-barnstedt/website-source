import React from "react";
import routingTable from "./routingTable"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const table = Object.entries(routingTable).map(([key, V]) => {
    return <Route key={key} path={key}>
        <V/>
    </Route>;
});

class App extends React.Component {
    render () {
        return <Router>
            <Switch>
                {table}
            </Switch>
        </Router>
    }
}

export default App;