import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UsersList from './UsersList';
import AlbumsList from './AlbumsList';
import PhotosList from './PhotosList';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={UsersList} />
                <Route path="/albums" component={AlbumsList} />
                <Route path="/photos" component={PhotosList} />
            </Switch>
        </Router>
    );
};

export default App;